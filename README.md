# นายธนกร ทิพเนตร 673450191-2
# FetchingDataCRUD

โปรเจกต์ตัวอย่างเว็บแอปพลิเคชันที่พัฒนาด้วย **Next.js, React, TypeScript, Prisma และ SQLite** มีหน้าแสดงข้อมูลนักศึกษาและหน้า **Skeleton UI** สำหรับสาธิตโครงร่างหน้าจอระหว่างรอโหลดข้อมูล

## ฟีเจอร์หลัก

- หน้า `/students` สำหรับแสดงรายการนักศึกษา
- หน้า `/skeleton` สำหรับทดสอบ Skeleton UI หรือ Placeholder ระหว่างรอข้อมูลโหลด
- ใช้ Prisma ORM เชื่อมต่อฐานข้อมูล SQLite
- ใช้ Tailwind CSS จัดรูปแบบหน้าจอ

## เทคโนโลยีที่ใช้

- Next.js 16
- React 19
- TypeScript
- Prisma ORM 7
- SQLite
- Tailwind CSS 4

## สิ่งที่ต้องเตรียม

- [Node.js](https://nodejs.org/) เวอร์ชัน 20.9 ขึ้นไป
- npm (ติดตั้งมาพร้อม Node.js)
- [Git](https://git-scm.com/) สำหรับดาวน์โหลดโปรเจกต์

ตรวจสอบว่าเครื่องติดตั้งเครื่องมือแล้ว:

```bash
node -v
npm -v
git --version
```

## วิธีติดตั้ง

### 1. Clone โปรเจกต์

เปิด Terminal หรือ Command Prompt แล้วรัน:

```bash
git clone https://github.com/tthp143/FetchingDataCRUD.git
cd FetchingDataCRUD
```

### 2. ติดตั้งแพ็กเกจ

```bash
npm install
```

### 3. ตั้งค่าตัวแปรสภาพแวดล้อม

สร้างไฟล์ `.env` ที่โฟลเดอร์หลักของโปรเจกต์ โดยกำหนด URL ของ SQLite ดังนี้:

```env
DATABASE_URL="file:./dev.db"
```

> หากมีไฟล์ `.env` อยู่แล้ว ให้ตรวจสอบว่ามี `DATABASE_URL` ถูกต้อง และอย่าเผยแพร่ค่าความลับหรือข้อมูลการเชื่อมต่อฐานข้อมูลไว้ใน GitHub

### 4. ตั้งค่า Prisma 7

หากโปรเจกต์ไม่มีไฟล์ `prisma.config.ts` ให้สร้างไฟล์นี้ที่โฟลเดอร์หลักของโปรเจกต์ โดยใส่โค้ด:

```typescript
import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
  schema: "prisma/schema.prisma",
  datasource: {
    url: env("DATABASE_URL"),
  },
});
```

จากนั้นสร้าง Prisma Client และเตรียมโครงสร้างฐานข้อมูล:

```bash
npx prisma generate
npx prisma db push
```

คำสั่ง `db push` จะทำให้โครงสร้างฐานข้อมูลตรงกับ `prisma/schema.prisma` โดยไม่จำเป็นต้องติดตั้ง MySQL หรือ XAMPP

### 5. เริ่มเซิร์ฟเวอร์

```bash
npm run dev
```

เมื่อเซิร์ฟเวอร์ทำงานแล้ว ให้เปิดเบราว์เซอร์และไปยังหน้าที่ต้องการ:

| หน้า | URL | วัตถุประสงค์ |
| --- | --- | --- |
| หน้าแรก | http://localhost:3000 | หน้าเริ่มต้นของ Next.js |
| รายชื่อนักศึกษา | http://localhost:3000/students | ดูรายการข้อมูลนักศึกษา |
| Skeleton UI | http://localhost:3000/skeleton | ทดสอบหน้าจอโครงร่างขณะโหลดข้อมูล |

หยุดเซิร์ฟเวอร์ด้วย `Ctrl + C` ใน Terminal

## วิธีทดสอบ Skeleton UI

1. เปิดโปรเจกต์และรัน `npm run dev` ตามขั้นตอนด้านบน
2. เปิดเบราว์เซอร์ไปที่ **http://localhost:3000/skeleton**
3. สังเกตกล่องสีเทาที่มีเอฟเฟกต์เคลื่อนไหว ซึ่งจำลองตำแหน่งรูปภาพ หัวข้อ และเนื้อหา
4. หน้านี้ใช้แสดงตัวอย่าง Skeleton Placeholder เพื่อสาธิตแนวทางออกแบบหน้าจอระหว่างรอข้อมูล ไม่ใช่การดึงข้อมูลจริงหรือการทดสอบประสิทธิภาพโหลดข้อมูลโดยอัตโนมัติ

## วิธีดูข้อมูลนักศึกษา

1. ไปที่ **http://localhost:3000/students**
2. ตรวจสอบรายการนักศึกษาที่แสดงในตาราง
3. หากไม่สามารถเปิดหน้าได้ ให้ตรวจสอบการตั้งค่า `.env` และฐานข้อมูล SQLite แล้วรัน `npx prisma generate` และ `npx prisma db push` อีกครั้ง

## โครงสร้างไฟล์ที่เกี่ยวข้อง

```text
FetchingDataCRUD/
├── app/
│   ├── skeleton/
│   │   └── page.tsx       # หน้า Skeleton UI
│   ├── students/          # หน้าข้อมูลนักศึกษา
│   ├── lib/
│   │   └── prisma.ts      # การเชื่อมต่อ Prisma
│   ├── page.tsx           # หน้าแรก
│   └── layout.tsx         # Layout หลัก
├── prisma/
│   └── schema.prisma      # Schema ของฐานข้อมูล
├── package.json           # Dependencies และ scripts
└── README.md
```

## คำสั่งที่ใช้บ่อย

| คำสั่ง | รายละเอียด |
| --- | --- |
| `npm install` | ติดตั้ง Dependencies |
| `npm run dev` | เริ่มเซิร์ฟเวอร์สำหรับพัฒนา |
| `npm run build` | Build โปรเจกต์ |
| `npm run start` | เปิดเซิร์ฟเวอร์จาก Build |
| `npm run lint` | ตรวจสอบโค้ดด้วย ESLint |
| `npx prisma generate` | สร้าง Prisma Client |
| `npx prisma db push` | ซิงก์ Schema กับฐานข้อมูล |

## การแก้ปัญหาเบื้องต้น

- **เปิดหน้าเว็บไม่ได้:** ตรวจสอบว่าเซิร์ฟเวอร์ยังทำงานอยู่ และเปิด URL ที่พอร์ตถูกต้อง
- **ไม่พบ `DATABASE_URL`:** ตรวจสอบว่ามีไฟล์ `.env` ในโฟลเดอร์หลักและมีค่า `DATABASE_URL="file:./dev.db"`
- **Prisma แจ้งข้อผิดพลาดเรื่อง config:** ตรวจสอบว่ามีไฟล์ `prisma.config.ts` ตามตัวอย่างในหัวข้อการตั้งค่า Prisma 7
- **Prisma Client ยังไม่พร้อมใช้งาน:** รัน `npx prisma generate` อีกครั้ง
- **ตารางฐานข้อมูลไม่ตรงกับ Schema:** รัน `npx prisma db push`

## Repository

https://github.com/tthp143/FetchingDataCRUD
