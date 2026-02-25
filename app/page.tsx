import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-24 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-4xl w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-gray-900">
            Welcome to <span className="text-blue-600">Next.js</span>
          </h1>
          <p className="text-xl text-gray-600">
            A complete Next.js application with CI/CD pipeline
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">📦 Features</h3>
            <p className="text-gray-600">
              TypeScript, Tailwind CSS, API Routes
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">🚀 Deploy</h3>
            <p className="text-gray-600">
              Automated deployment to Vercel
            </p>
          </div>

          <div className="p-6 border border-gray-200 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold mb-2">🔧 CI/CD</h3>
            <p className="text-gray-600">
              GitHub Actions workflow included
            </p>
          </div>
        </div>

        <div className="mt-12 space-x-4">
          <Link
            href="/about"
            className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            About Page
          </Link>
          <Link
            href="/api/hello"
            className="inline-block px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
          >
            Test API
          </Link>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          <p>Running on port 80 • Managed by PM2</p>
        </div>
      </div>
    </main>
  )
}
