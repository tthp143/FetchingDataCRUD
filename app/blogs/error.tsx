"use client";

export default function BlogError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="mx-auto max-w-2xl p-6" role="alert">
      <h2 className="text-xl font-semibold text-red-700">
        โหลดบทความไม่สำเร็จ
      </h2>
      <p className="mt-2 text-gray-600">
        เกิดปัญหาระหว่างดึงข้อมูลบทความ กรุณาลองอีกครั้ง
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-4 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        ลองอีกครั้ง
      </button>
    </main>
  );
}