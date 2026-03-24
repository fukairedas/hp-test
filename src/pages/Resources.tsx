import React from 'react';
import { motion } from 'motion/react';
import { FileText, Download, ChevronRight, Search } from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: React.Key }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);

export default function Resources() {
  const resources = [
    {
      id: 1,
      category: 'ノウハウ',
      title: '売れるサプリメントの作り方 完全ガイド',
      description: 'コンセプト設計から原料選定、パッケージデザイン、販売戦略まで、サプリメント開発の全工程を網羅した実践的なガイドブックです。',
      image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
      pages: 45,
      downloads: 1250
    },
    {
      id: 2,
      category: '市場データ',
      title: '2026年版 サプリメント市場トレンドレポート',
      description: '最新の消費者ニーズ、急成長している成分、注目される訴求キーワードなど、市場の「今」と「未来」をデータで解説します。',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800',
      pages: 28,
      downloads: 890
    },
    {
      id: 3,
      category: '事例集',
      title: 'REDAS 開発支援 成功事例集',
      description: 'REDASのFormula Engineを活用し、短期間でヒット商品を生み出した企業様の事例を、具体的な課題と解決策とともにご紹介します。',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
      pages: 15,
      downloads: 560
    },
    {
      id: 4,
      category: 'チェックリスト',
      title: 'OEM選定・発注前 必須チェックリスト',
      description: '失敗しないOEMメーカーの選び方、見積もりの見方、発注前に確認すべき法規制（薬機法・景表法）のポイントをまとめたリストです。',
      image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=800',
      pages: 8,
      downloads: 2100
    },
    {
      id: 5,
      category: '成分ガイド',
      title: '注目成分カタログ 2026',
      description: 'NMN、エクソソーム、次世代プロバイオティクスなど、今注目を集めている最新成分のエビデンスと活用法を解説します。',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800',
      pages: 32,
      downloads: 1540
    },
    {
      id: 6,
      category: 'テンプレート',
      title: '商品企画書 テンプレート（記入例付き）',
      description: '社内稟議やOEMへの相談時にそのまま使える、実践的な商品企画書のPowerPointテンプレートです。',
      image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&q=80&w=800',
      pages: 12,
      downloads: 3200
    }
  ];

  return (
    <div className="pt-32 pb-24 px-4 bg-bg-gray min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary font-bold px-4 py-1.5 rounded-full text-sm mb-6">
              <FileText size={16} /> Whitepapers & Resources
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-primary tracking-tight">
              お役立ち資料
            </h1>
            <p className="text-gray-600 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
              サプリメント開発のノウハウ、市場トレンド、成功事例など、<br className="hidden md:block" />
              貴社のビジネスを加速させる専門資料を無料でダウンロードいただけます。
            </p>
          </FadeIn>
        </div>

        {/* Search & Filter (Placeholder UI) */}
        <FadeIn delay={0.1}>
          <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row gap-4 mb-12">
            <div className="relative flex-grow">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input 
                type="text" 
                placeholder="資料を検索する..." 
                className="w-full bg-bg-gray border-none rounded-xl py-3 pl-12 pr-4 focus:outline-none focus:ring-2 focus:ring-secondary/20 font-medium"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              {['すべて', 'ノウハウ', '市場データ', '事例集', 'テンプレート'].map((tag, i) => (
                <button 
                  key={i}
                  className={`whitespace-nowrap px-6 py-3 rounded-xl font-bold text-sm transition-colors ${
                    i === 0 ? 'bg-primary text-white' : 'bg-bg-gray text-gray-600 hover:bg-bg-ice hover:text-primary'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, i) => (
            <FadeIn key={resource.id} delay={0.2 + (i * 0.1)}>
              <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm text-primary font-bold px-3 py-1 rounded-full text-xs shadow-sm">
                    {resource.category}
                  </div>
                  <img 
                    src={resource.image} 
                    alt={resource.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="w-full flex justify-between text-white text-sm font-bold">
                      <span>{resource.pages} ページ</span>
                      <span>{resource.downloads} DL</span>
                    </div>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-black text-primary mb-3 line-clamp-2 group-hover:text-secondary transition-colors">
                    {resource.title}
                  </h3>
                  <p className="text-gray-600 font-medium text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {resource.description}
                  </p>
                  <a 
                    href="#download" 
                    className="mt-auto flex items-center justify-between bg-bg-ice hover:bg-secondary text-secondary hover:text-white font-bold py-3 px-5 rounded-xl transition-colors group/btn"
                  >
                    <span className="flex items-center gap-2">
                      <Download size={18} />
                      ダウンロード
                    </span>
                    <ChevronRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn delay={0.6}>
          <div className="mt-20 bg-primary rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-20 rounded-full blur-3xl -mr-20 -mt-20"></div>
            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-4">
                お探しの資料が見つかりませんか？
              </h2>
              <p className="text-white/80 font-medium mb-8 max-w-2xl mx-auto">
                「こんな情報が知りたい」「自社のケースに当てはまる事例はないか」など、<br className="hidden md:block" />
                個別の疑問や課題については、無料相談にて専門スタッフがお答えします。
              </p>
              <a 
                href="/#contact" 
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-primary font-bold py-4 px-10 rounded-full transition-transform hover:scale-105"
              >
                無料相談を申し込む
                <ChevronRight size={20} />
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
