// docs/overview/page.tsx
'use client';

export default function Overview() {
  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-4xl font-black mb-4">Documentation</h1>
        <p className="text-gray-400 mb-8">
          Comprehensive guide to understanding and using this app
        </p>

        <section className="bg-gray-900 border-4 border-purple-400 p-6 mb-8">
          <h2 className="text-2xl font-black mb-4">Overview</h2>
          <p className="text-gray-300 mb-4">
            Explore real-world asset tokenization projects - bonds, real estate, and traditional financial assets on-chain.
          </p>
          <p className="text-gray-300">
            Built with TypeScript, Next.js 14, Tailwind CSS, and deployed on Vercel.
          </p>
        </section>

        <section className="bg-gray-900 border-4 border-gray-700 p-6 mb-8">
          <h2 className="text-2xl font-black mb-4">How It Works</h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-300">
            <li>Browse RWA tokenization projects</li>
            <li>Analyze underlying asset value</li>
            <li>Track token performance</li>
          </ol>
        </section>

        <section className="bg-gray-900 border-4 border-gray-700 p-6 mb-8">
          <h2 className="text-2xl font-black mb-4">Key Features</h2>
          <ul className="space-y-2 text-gray-300">
            <li>✓ Comprehensive RWA database</li>
            <li>✓ Underlying asset analysis</li>
            <li>✓ Token performance tracking</li>
            <li>✓ Investment metrics</li>
            <li>✓ Risk assessment</li>
          </ul>
        </section>

        <section className="bg-gray-900 border-4 border-green-400 p-6 mb-8">
          <h2 className="text-2xl font-black text-green-400 mb-4">Getting Started</h2>
          <p className="text-gray-300 mb-4">
            To start using this app, simply:
          </p>
          <ol className="list-decimal list-inside space-y-2 text-gray-300">
            <li>Navigate to the app home page</li>
            <li>Select asset to explore</li>
            <li>Review underlying contract</li>
            <li>Track performance</li>
          </ol>
        </section>

        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-2xl font-black mb-4">Related Resources</h2>
          <ul className="space-y-2 text-gray-300">
            <li>
              <a href="/" className="text-purple-400 hover:underline">
                ← Back to Home
              </a>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
