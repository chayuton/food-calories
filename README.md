# 🍔 AI Food Calorie Estimator (Web-based)

โปรเจกต์เว็บแอปพลิเคชันสำหรับประเมินแคลอรีอาหารเบื้องต้น โดยใช้กล้องจากสมาร์ทโฟนหรือคอมพิวเตอร์ ทำงานผ่าน Web Browser 100% โดยไม่ต้องพึ่งพาฝั่งเซิร์ฟเวอร์ เหมาะสำหรับการนำไปโฮสต์ฟรีบน **GitHub Pages**

## 🚀 เทคโนโลยีที่ใช้
* HTML5, CSS3, Vanilla JavaScript
* [TensorFlow.js](https://www.tensorflow.org/js) - ประมวลผล AI บนเบราว์เซอร์
* [MobileNet](https://github.com/tensorflow/tfjs-models/tree/master/mobilenet) - โมเดลสำหรับแยกแยะวัตถุและประเภทอาหาร

## 📋 ความต้องการของระบบ (Requirements)
โปรเจกต์นี้ทำงานผ่าน CDN (Content Delivery Network) จึง **ไม่จำเป็นต้องติดตั้งแพ็กเกจหรือรัน `npm install` ใดๆ ทั้งสิ้น** เพียงแค่อัปโหลดไฟล์ขึ้น GitHub ก็พร้อมใช้งานทันที

## 🛠️ วิธีเปิดใช้งานบน GitHub Pages
1. อัปโหลดไฟล์ `index.html`, `app.js` และ `README.md` ไปที่ Repository ของคุณ
2. ไปที่เมนู **Settings** ของ Repository
3. เลือกเมนู **Pages** ที่แถบเมนูด้านซ้าย
4. ในส่วน **Build and deployment** ตรง **Source** ให้เลือก `Deploy from a branch`
5. ตรงตัวเลือก **Branch** ให้เลือก `main` (หรือ `master`) แล้วกดปุ่ม **Save**
6. รอประมาณ 1-2 นาที GitHub จะสร้างลิงก์เว็บไซต์ HTTPS ฟรีให้คุณ (สามารถดูลิงก์ได้ที่ด้านบนของหน้าจอ Settings > Pages)

*หมายเหตุ: การใช้งานกล้องบน Web Browser ต้องทำงานผ่านโปรโตคอล **HTTPS** เท่านั้น ซึ่ง GitHub Pages รองรับระบบนี้ให้โดยอัตโนมัติ*
