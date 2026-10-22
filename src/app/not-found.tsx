import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-white text-[#102D46]">
      <span className="text-xs font-bold uppercase tracking-widest text-[#075A9C] mb-2">
        404 — Page Not Found
      </span>
      <h1 className="text-4xl sm:text-5xl font-bold mb-4">
        Looking for Something Else?
      </h1>
      <p className="text-slate-600 max-w-md mb-8">
        The page you are looking for might have been moved or doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-[#102D46] hover:bg-[#075A9C] text-white font-semibold transition-all duration-200"
      >
        Return to Home
      </Link>
    </div>
  );
}
