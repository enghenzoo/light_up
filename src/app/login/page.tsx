"use client";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center gap-3 mt-20">
      <a
        href="/api/auth/google"
        className="border px-4 py-2 rounded bg-white shadow"
      >
        {/* <Google className="mr-2 h-4 w-4" /> */}
        Continue with Google
      </a>
    </div>
  );
}
