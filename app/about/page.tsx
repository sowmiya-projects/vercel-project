import Link from 'next/link'

export default function About() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24 bg-gradient-to-br from-purple-50 to-pink-100">
      <div className="max-w-2xl w-full space-y-8">
        <h1 className="text-5xl font-bold text-gray-900 text-center">
          About This App
        </h1>

        <div className="bg-white p-8 rounded-lg shadow-md space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">Features</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600">
            <li>Next.js 14 with App Router</li>
            <li>TypeScript for type safety</li>
            <li>Tailwind CSS for styling</li>
            <li>API Routes for backend logic</li>
            <li>PM2 for process management</li>
            <li>GitHub Actions for CI/CD</li>
            <li>Vercel deployment ready</li>
          </ul>
        </div>

        <div className="text-center">
          <Link
            href="/"
            className="inline-block px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  )
}
