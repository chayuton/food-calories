const video = document.getElementById('webcam');
const resultBox = document.getElementById('result-box');

// ฐานข้อมูลแคลอรีจำลอง
const calorieDatabase = {
    "banana": { name: "กล้วย", cal: 89 },
    "apple": { name: "แอปเปิล", cal: 52 },
    "pizza": { name: "พิซซ่า", cal: 266 },
    "hotdog": { name: "ฮอทดอก", cal: 290 },
    "hamburger": { name: "แฮมเบอร์เกอร์", cal: 295 },
    "orange": { name: "ส้ม", cal: 47 },
    "strawberry": { name: "สตรอว์เบอร์รี", cal: 32 }
};

let model;

// ฟังก์ชันเปิดกล้อง (ปรับปรุงใหม่ให้ทันสมัยและรองรับ Error ได้ดีขึ้น)
async function setupWebcam() {
    // 1. เช็คว่าเบราว์เซอร์รองรับ API ใหม่หรือไม่ (และรันบน HTTPS หรือไม่)
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        throw new Error("เบราว์เซอร์ของคุณไม่รองรับการเปิดกล้อง หรือไม่ได้ใช้งานผ่าน HTTPS");
    }

    try {
        // 2. ขอสิทธิ์เปิดกล้อง (เน้นกล้องหลัง)
        const stream = await navigator.mediaDevices.getUserMedia({
            video: { 
                facingMode: 'environment',
                width: { ideal: 640 }, // กำหนดขนาดภาพให้พอดี ไม่กินสเปคเครื่องเกินไป
                height: { ideal: 480 }
            },
            audio: false // ไม่ขอสิทธิ์ไมโครโฟน
        });

        // 3. ส่งภาพไปที่แท็ก <video>
        video.srcObject = stream;

        // 4. รอจนกว่าวิดีโอจะพร้อมเล่น
        return new Promise((resolve) => {
            video.onloadedmetadata = () => {
                resolve();
            };
        });

    } catch (error) {
        // 5. ดักจับและแปลความหมายของ Error เพื่อแจ้งให้ผู้ใช้ทราบ
        let errorMessage = "ไม่สามารถเปิดกล้องได้";
        
        if (error.name === 'NotAllowedError' || error.name === 'PermissionDeniedError') {
            errorMessage = "คุณไม่อนุญาตให้เว็บไซต์เข้าถึงกล้อง กรุณาตั้งค่าอนุญาตในเบราว์เซอร์แล้วรีเฟรชหน้าเว็บใหม่";
        } else if (error.name === 'NotFoundError' || error.name === 'DevicesNotFoundError') {
            errorMessage = "ไม่พบอุปกรณ์กล้องบนเครื่องของคุณ";
        } else if (error.name === 'NotReadableError' || error.name === 'TrackStartError') {
            errorMessage = "กล้องกำลังถูกใช้งานโดยแอปพลิเคชันอื่น กรุณาปิดแอปเหล่านั้นแล้วลองใหม่";
        } else {
            errorMessage = `เกิดข้อผิดพลาด: ${error.message}`;
        }
        
        throw new Error(errorMessage);
    }
}

// ฟังก์ชันคาดเดาภาพจากกล้องแบบ Real-time
async function predictFood() {
    if (video.readyState === video.HAVE_ENOUGH_DATA) {
        const predictions = await model.classify(video);
        const topResult = predictions[0].className.toLowerCase();
        
        let foundFood = null;
        for (let key in calorieDatabase) {
            if (topResult.includes(key)) {
                foundFood = calorieDatabase[key];
                break;
            }
        }

        if (foundFood) {
            resultBox.innerHTML = `
                <p>ตรวจพบ: <strong>${foundFood.name}</strong></p>
                <p class="calorie-text">ประมาณ: ${foundFood.cal} kcal (ต่อหน่วย)</p>
                <p style="font-size: 0.8rem; color: gray;">(ความแม่นยำ: ${Math.round(predictions[0].probability * 100)}%)</p>
            `;
        } else {
            resultBox.innerHTML = `
                <p>สิ่งที่เห็น: <strong>${predictions[0].className}</strong></p>
                <p style="color: gray;">(ยังไม่มีข้อมูลแคลอรีในระบบ)</p>
            `;
        }
    }
    requestAnimationFrame(predictFood);
}

// ฟังก์ชันเริ่มต้นแอป
async function startApp() {
    try {
        resultBox.innerHTML = "<p>กำลังขออนุญาตเปิดกล้อง 📸...</p>";
        await setupWebcam();
        
        resultBox.innerHTML = "<p>กล้องพร้อมแล้ว... กำลังโหลด AI 🤖</p>";
        model = await mobilenet.load();
        
        resultBox.innerHTML = "<p>✅ พร้อมใช้งาน! ส่องไปที่อาหารได้เลย</p>";
        predictFood();
    } catch (error) {
        // แสดง Error ที่เราดักจับไว้ให้ผู้ใช้เห็น
        resultBox.innerHTML = `<p style="color: red; font-weight: bold;">❌ ${error.message}</p>`;
    }
}

// เรียกใช้เมื่อโหลดหน้าเว็บเสร็จ
startApp();
