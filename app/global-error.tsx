"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="th">
      <body>
        <main className="mx-auto max-w-2xl p-6" role="alert">
          <h2 className="text-xl font-semibold text-red-700">
            เกิดข้อผิดพลาด
          </h2>
          <p className="mt-2 text-gray-600">
            ขออภัย ระบบขัดข้องชั่วคราว กรุณาลองอีกครั้ง
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            ลองอีกครั้ง
          </button>
        </main>
      </body>
    </html>
  );
}