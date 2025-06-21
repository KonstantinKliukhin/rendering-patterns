import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 to-indigo-100">
      <h1 className="text-4xl md:text-5xl font-bold mb-2 text-slate-800">
        Frontend Rendering Patterns
      </h1>
      <p className="text-lg text-slate-500 mb-8">Explore different Next.js rendering strategies</p>
      <div className="flex flex-wrap gap-6 justify-center">
        <Link
          href="http://localhost:5173"
          className="px-8 py-6 rounded-xl bg-white shadow-lg text-blue-600 font-semibold text-lg border-2 border-indigo-100 hover:scale-105 hover:shadow-xl transition-transform duration-150 text-center"
        >
          CSR
        </Link>
        <Link
          href="/ssg"
          className="px-8 py-6 rounded-xl bg-white shadow-lg text-blue-600 font-semibold text-lg border-2 border-indigo-100 hover:scale-105 hover:shadow-xl transition-transform duration-150 text-center"
        >
          SSG
        </Link>
        <Link
          href="/isr"
          className="px-8 py-6 rounded-xl bg-white shadow-lg text-blue-600 font-semibold text-lg border-2 border-indigo-100 hover:scale-105 hover:shadow-xl transition-transform duration-150 text-center"
        >
          ISR
        </Link>
        <Link
          href="/prr"
          className="px-8 py-6 rounded-xl bg-white shadow-lg text-blue-600 font-semibold text-lg border-2 border-indigo-100 hover:scale-105 hover:shadow-xl transition-transform duration-150 text-center"
        >
          PRR
        </Link>
      </div>
    </main>
  );
}
