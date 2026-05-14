import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center">
      <p className="font-mono text-6xl font-medium text-[#1e5a98] mb-4">404</p>
      <h2 className="text-2xl font-heading font-bold text-[#1c2b3a] mb-3">
        Page Not Found
      </h2>
      <p className="text-[#4a6075] mb-8 max-w-md">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="px-6 py-2.5 rounded-full bg-[#1e5a98] text-white text-sm font-medium hover:bg-[#0f3d6e] transition-colors"
      >
        Back to Home
      </Link>
    </div>
  );
}
