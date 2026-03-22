'use client';

import { useState } from 'react';

interface RWAAsset {
  id: string;
  name: stri
      <header className="border-b-4 border-purple-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-black">App</h1>
              <p className="text-gray-400 mt-2">Interactive demo</p>
            </div>
            <nav className="flex gap-2">
              <a href="/" className="px-4 py-2 bg-gray-800 border-2 border-gray-600 hover:border-purple-400 rounded font-bold transition-all">
                Home
              </a>
              <a href="/docs" className="px-4 py-2 bg-purple-500 border-2 border-purple-400 rounded font-bold transition-all">
                Documentation
              </a>
            </nav>
          </div>
        </div>
      </header>

ng;
  symbol: string;
  category: string;
  tvl: string;
  yield: number;
  maturity: string;
  issuer: string;
  chain: string;
}

const rwaAssets: RWAAsset[] = [
  { id: '1', name: 'BlackRock BUIDL', symbol: 'BUIDL', category: 'Treasury', tvl: '$1.8B', yield: 5.2, maturity: '3M', issuer: 'BlackRock', chain: 'Ethereum' },
  { id: '2', name: 'Ondo USDY', symbol: 'USDY', category: 'Treasury', tvl: '$420M', yield: 5.0, maturity: '1M', issuer: 'Ondo Finance', chain: 'Ethereum' },
  { id: '3', name: 'Franklin OnChain', symbol: 'FOBXX', category: 'Treasury', tvl: '$680M', yield: 4.8, maturity: '7D', issuer: 'Franklin Templeton', chain: 'Polygon' },
  { id: '4', name: 'Centrifuge JTRSY', symbol: 'JTRSY', category: 'Treasury', tvl: '$200M', yield: 5.1, maturity: '6M', issuer: 'Centrifuge', chain: 'Ethereum' },
  { id: '5', name: 'Maple RWA', symbol: 'MPL-RWA', category: 'Credit', tvl: '$350M', yield: 8.5, maturity: '12M', issuer: 'Maple Finance', chain: 'Ethereum' },
  { id: '6', name: 'Goldfinch', symbol: 'GFI', category: 'Credit', tvl: '$180M', yield: 12.0, maturity: '24M', issuer: 'Goldfinch', chain: 'Ethereum' },
  { id: '7', name: 'RealT Property', symbol: 'REALT', category: 'Real Estate', tvl: '$95M', yield: 9.2, maturity: 'N/A', issuer: 'RealT', chain: 'Gnosis' },
  { id: '8', name: 'Paxos Gold', symbol: 'PAXG', category: 'Commodity', tvl: '$580M', yield: 0, maturity: 'N/A', issuer: 'Paxos', chain: 'Ethereum' },
];

const categories = ['All', 'Treasury', 'Credit', 'Real Estate', 'Commodity'];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedAsset, setSelectedAsset] = useState<RWAAsset | null>(null);

  const filteredAssets = selectedCategory === 'All'
    ? rwaAssets
    : rwaAssets.filter(a => a.category === selectedCategory);

  return (
    <main className="min-h-screen bg-gray-950 text-white">
      <header className="border-b-4 border-orange-400 bg-gray-900 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black">RWA Explorer</h1>
          <p className="text-gray-400 mt-2">Real World Assets tokenized onchain</p>
        </div>
      </header>

      <div className="max-w-6xl mx-auto p-6 space-y-8">
        {/* Stats */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900 border-4 border-orange-400 p-4 text-center">
            <div className="text-3xl font-black text-orange-400">$12B+</div>
            <div className="text-sm text-gray-400">Total RWA TVL</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">$11B</div>
            <div className="text-sm text-gray-400">Tokenized Treasuries</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black text-green-400">5.2%</div>
            <div className="text-sm text-gray-400">Top Treasury Yield</div>
          </div>
          <div className="bg-gray-900 border-4 border-gray-700 p-4 text-center">
            <div className="text-3xl font-black">380%</div>
            <div className="text-sm text-gray-400">Growth Since 2022</div>
          </div>
        </section>

        {/* Categories */}
        <section className="bg-gray-900 border-4 border-gray-700 p-4">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 font-bold border-2 transition-all ${
                  selectedCategory === cat
                    ? 'bg-orange-500 border-orange-400'
                    : 'bg-gray-800 border-gray-600 hover:border-gray-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* RWA Assets Table */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">Tokenized Assets</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-gray-400 border-b border-gray-700">
                  <th className="text-left py-3">Asset</th>
                  <th className="text-right py-3">Category</th>
                  <th className="text-right py-3">TVL</th>
                  <th className="text-right py-3">Yield</th>
                  <th className="text-right py-3">Maturity</th>
                  <th className="text-right py-3">Chain</th>
                </tr>
              </thead>
              <tbody>
                {filteredAssets.map((asset) => (
                  <tr
                    key={asset.id}
                    onClick={() => setSelectedAsset(asset)}
                    className={`border-b border-gray-800 cursor-pointer hover:bg-gray-800 ${
                      selectedAsset?.id === asset.id ? 'bg-orange-900/20' : ''
                    }`}
                  >
                    <td className="py-3">
                      <span className="font-bold text-orange-400">{asset.name}</span>
                      <span className="text-gray-500 ml-2">{asset.symbol}</span>
                    </td>
                    <td className="py-3 text-right">
                      <span className="px-2 py-1 text-xs font-bold bg-gray-800 text-gray-400">
                        {asset.category}
                      </span>
                    </td>
                    <td className="py-3 text-right font-bold">{asset.tvl}</td>
                    <td className="py-3 text-right text-green-400">
                      {asset.yield > 0 ? `${asset.yield}%` : '-'}
                    </td>
                    <td className="py-3 text-right">{asset.maturity}</td>
                    <td className="py-3 text-right text-gray-400">{asset.chain}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Selected Asset Details */}
        {selectedAsset && (
          <section className="bg-gray-900 border-4 border-orange-400 p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-black text-orange-400">{selectedAsset.name}</h2>
                <p className="text-gray-400">{selectedAsset.category} • {selectedAsset.chain}</p>
              </div>
              <button
                onClick={() => setSelectedAsset(null)}
                className="px-4 py-2 bg-gray-700 text-white font-bold border-2 border-gray-600 hover:bg-gray-600"
              >
                Close
              </button>
            </div>

            <div className="grid md:grid-cols-4 gap-4 mb-6">
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">TVL</div>
                <div className="text-2xl font-bold">{selectedAsset.tvl}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Yield</div>
                <div className="text-2xl font-bold text-green-400">
                  {selectedAsset.yield > 0 ? `${selectedAsset.yield}%` : 'N/A'}
                </div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Maturity</div>
                <div className="text-2xl font-bold">{selectedAsset.maturity}</div>
              </div>
              <div className="p-4 bg-gray-800 border border-gray-700">
                <div className="text-sm text-gray-400">Issuer</div>
                <div className="text-2xl font-bold">{selectedAsset.issuer}</div>
              </div>
            </div>

            <button className="w-full py-4 bg-orange-500 text-white font-bold border-4 border-orange-400 hover:bg-orange-400">
              Invest in {selectedAsset.symbol}
            </button>
          </section>
        )}

        {/* How RWA Works */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">How RWA Tokenization Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">1️⃣</div>
              <h3 className="font-bold text-orange-400 mb-2">Off-Chain Asset</h3>
              <p className="text-xs text-gray-400">Real estate, bonds, commodities</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">2️⃣</div>
              <h3 className="font-bold text-blue-400 mb-2">Tokenization</h3>
              <p className="text-xs text-gray-400">Convert to blockchain tokens</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">3️⃣</div>
              <h3 className="font-bold text-green-400 mb-2">Onchain</h3>
              <p className="text-xs text-gray-400">Trade 24/7, DeFi composable</p>
            </div>
            <div className="p-4 bg-gray-800 border-2 border-gray-600 text-center">
              <div className="text-2xl mb-2">4️⃣</div>
              <h3 className="font-bold text-purple-400 mb-2">Yield</h3>
              <p className="text-xs text-gray-400">Earn interest, dividends</p>
            </div>
          </div>
        </section>

        {/* RWA Categories */}
        <section className="bg-gray-900 border-4 border-orange-400 p-6">
          <h2 className="text-xl font-black text-orange-400 mb-4">RWA Categories</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="text-2xl mb-2">🏛️</div>
              <h3 className="font-bold text-orange-400 mb-2">Treasuries</h3>
              <p className="text-sm text-gray-400">
                US Treasury bonds tokenized for onchain yield (5%+ APY)
              </p>
            </div>
            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="text-2xl mb-2">💳</div>
              <h3 className="font-bold text-orange-400 mb-2">Credit</h3>
              <p className="text-sm text-gray-400">
                Private credit and lending pools (8-12% APY)
              </p>
            </div>
            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="text-2xl mb-2">🏠</div>
              <h3 className="font-bold text-orange-400 mb-2">Real Estate</h3>
              <p className="text-sm text-gray-400">
                Fractional property ownership (9%+ rental yield)
              </p>
            </div>
            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="text-2xl mb-2">🥇</div>
              <h3 className="font-bold text-orange-400 mb-2">Commodities</h3>
              <p className="text-sm text-gray-400">
                Gold, silver, and other metals onchain
              </p>
            </div>
          </div>
        </section>

        {/* Key Players */}
        <section className="bg-gray-900 border-4 border-gray-700 p-6">
          <h2 className="text-xl font-black mb-4">Key Players</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="font-bold text-orange-400 mb-2">BlackRock</div>
              <p className="text-sm text-gray-400">BUIDL fund - largest tokenized treasury</p>
            </div>
            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="font-bold text-orange-400 mb-2">Centrifuge</div>
              <p className="text-sm text-gray-400">$1B+ TVL, Spark Tokenization Grand Prix winner</p>
            </div>
            <div className="p-4 bg-gray-800 border border-gray-700">
              <div className="font-bold text-orange-400 mb-2">Ondo Finance</div>
              <p className="text-sm text-gray-400">USDY - tokenized US Treasury exposure</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm py-8 border-t border-gray-800">
          <p>
            Built by <a href="https://x.com/samdevrel" className="text-orange-400 hover:underline">@samdevrel</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
