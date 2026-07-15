const video = document.getElementById('webcam');
const resultBox = document.getElementById('result-box');

// ฐานข้อมูลแคลอรีจำลอง (ต่อ 100 กรัม หรือ 1 ชิ้นมาตรฐาน)
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

// ฟังก์ชันเปิดกล้อง (เน้นกล้องหลังมือถือ)
async function setupWebcam() {
    return new Promise((resolve, reject) => {
        const navigatorAny = navigator;
        navigator.getUserMedia = navigator.getUserMedia ||
            navigatorAny.webkitGetUserMedia || navigatorAny.mozGetUserMedia ||
            navigatorAny.msGetUserMedia;
            
        if (navigator.getUserMedia) {
            navigator.getUserMedia({ video: { facingMode: 'environment' } }, 
                stream => {
                    video.srcObject = stream;
                    video.addEventListener('loadeddata', () => resolve(), false);
                },
                error => reject(error));
        } else {
            reject("เบราว์เซอร์ของคุณไม่รองรับการเปิดกล้อง");
        }
    });
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
    // สั่งให้ทำงานวนซ้ำไปเรื่อยๆ
    requestAnimationFrame(predictFood);
}

// ฟังก์ชันเริ่มต้นแอป
async function startApp() {
    try {
        await setupWebcam();
        resultBox.innerHTML = "<p>กล้องพร้อมแล้ว... กำลังโหลด AI 🤖</p>";
        
        model = await mobilenet.load();
        resultBox.innerHTML = "<p>✅ พร้อมใช้งาน! ส่องไปที่อาหารได้เลย</p>";
        
        predictFood();
    } catch (error) {
        resultBox.innerHTML = `<p style="color: red;">เกิดข้อผิดพลาด: ${error}</p>`;
    }
}

// เรียกใช้เมื่อโหลดหน้าเว็บเสร็จ
startApp();
