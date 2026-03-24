import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, ChevronRight, Clock, User, ArrowRight } from 'lucide-react';

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

export default function Columns() {
  const featuredPost = {
    id: 1,
    category: 'トレンド解説',
    title: '2026年のサプリメント市場を牽引する「フェムテック×パーソナライズ」の可能性',
    description: '女性特有の健康課題をテクノロジーで解決するフェムテック市場が拡大する中、サプリメント業界でも個人の体質や悩みに合わせたパーソナライズ化が加速しています。本記事では、最新の市場動向と成功する商品企画のポイントを解説します。',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
    date: '2026.03.15',
    author: 'REDAS 企画開発チーム'
  };

  const columns = [
    {
      id: 2,
      category: '成分辞典',
      title: '次世代エイジングケア成分「NMN」の最新エビデンスと配合時の注意点',
      description: '話題のNMN（ニコチンアミドモノヌクレオチド）について、最新の研究データや、商品化する際の安定性・コストの課題と対策をまとめました。',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800',
      date: '2026.03.10',
      author: 'REDAS 研究開発部'
    },
    {
      id: 3,
      category: 'マーケティング',
      title: '薬機法・景表法をクリアする！魅力的なLPライティングのコツ',
      description: 'サプリメントの販売において避けて通れない法規制。NG表現を避けつつ、消費者の購買意欲を高める「言い換えテクニック」をご紹介します。',
      image: 'https://images.unsplash.com/photo-1432828615881-718f1408326d?auto=format&fit=crop&q=80&w=800',
      date: '2026.03.05',
      author: 'REDAS マーケティング部'
    },
    {
      id: 4,
      category: '開発ノウハウ',
      title: '失敗しないOEMメーカーの選び方。5つのチェックポイント',
      description: '初めてのサプリメント開発でつまずきやすいOEM選定。見積もりの安さだけで選ばず、品質や対応力を見極めるための具体的なポイントを解説します。',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
      date: '2026.02.28',
      author: 'REDAS 企画開発チーム'
    },
    {
      id: 5,
      category: 'トレンド解説',
      title: '「睡眠サポート」サプリの市場動向と、差別化のための新成分',
      description: 'ストレス社会を背景に成長を続ける睡眠サポート市場。GABAやテアニンといった定番成分に加え、これから注目される新素材について考察します。',
      image: 'https://images.unsplash.com/photo-1511295742362-92c96b124e52?auto=format&fit=crop&q=80&w=800',
      date: '2026.02.20',
      author: 'REDAS 研究開発部'
    },
    {
      id: 6,
      category: 'デザイン',
      title: 'パケ買いされるサプリメントデザイン。ターゲット別トーン＆マナー',
      description: 'ECでも店頭でも、第一印象を決めるのはパッケージです。20代女性向け、シニア向け、スポーツ層向けなど、ターゲットに刺さるデザインの法則を解説します。',
      image: 'https://images.unsplash.com/photo-1628771065518-0d82f1938462?auto=format&fit=crop&q=80&w=800',
      date: '2026.02.15',
      author: 'REDAS クリエイティブチーム'
    },
    {
      id: 7,
      category: '開発ノウハウ',
      title: 'サプリメントの剤形（カプセル・錠剤・粉末）の選び方とコスト比較',
      description: '配合する成分の量や性質、ターゲットの飲みやすさによって最適な剤形は異なります。それぞれのメリット・デメリットと製造コストの目安をまとめました。',
      image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
      date: '2026.02.08',
      author: 'REDAS 企画開発チーム'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-4 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <FadeIn>
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary font-bold px-4 py-1.5 rounded-full text-sm mb-6">
              <BookOpen size={16} /> REDAS Insights
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-6 text-primary tracking-tight">
              コラム
            </h1>
            <p className="text-gray-600 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
              サプリメント開発のプロフェッショナルが、<br className="hidden md:block" />
              最新トレンド、成分知識、マーケティングノウハウを発信します。
            </p>
          </FadeIn>
        </div>

        {/* Featured Post */}
        <FadeIn delay={0.1}>
          <div className="mb-16 group cursor-pointer">
            <div className="bg-bg-gray rounded-[2.5rem] overflow-hidden flex flex-col md:flex-row border border-gray-100 hover:shadow-xl transition-all duration-500">
              <div className="md:w-3/5 relative overflow-hidden h-64 md:h-auto">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="md:w-2/5 p-8 md:p-12 flex flex-col justify-center bg-white">
                <div className="flex items-center gap-4 mb-4">
                  <span className="bg-primary text-white font-bold px-3 py-1 rounded-full text-xs">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-1 text-gray-400 text-sm font-medium">
                    <Clock size={14} />
                    {featuredPost.date}
                  </div>
                </div>
                <h2 className="text-2xl md:text-3xl font-black text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-gray-600 font-medium leading-relaxed mb-6 line-clamp-3">
                  {featuredPost.description}
                </p>
                <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm font-bold text-gray-500">
                    <User size={16} />
                    {featuredPost.author}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-bg-ice flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={0.2}>
          <div className="flex gap-3 overflow-x-auto pb-6 mb-8 hide-scrollbar border-b border-gray-100">
            {['最新記事', 'トレンド解説', '成分辞典', '開発ノウハウ', 'マーケティング', 'デザイン'].map((tag, i) => (
              <button 
                key={i}
                className={`whitespace-nowrap px-5 py-2 rounded-full font-bold text-sm transition-colors border ${
                  i === 0 
                    ? 'bg-primary text-white border-primary' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-secondary hover:text-secondary'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {columns.map((column, i) => (
            <FadeIn key={column.id} delay={0.3 + (i * 0.1)}>
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group h-full flex flex-col cursor-pointer">
                <div className="relative h-52 overflow-hidden">
                  <img 
                    src={column.image} 
                    alt={column.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-primary font-bold px-3 py-1 rounded-full text-xs shadow-sm">
                    {column.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-1 text-gray-400 text-xs font-medium mb-3">
                    <Clock size={12} />
                    {column.date}
                  </div>
                  <h3 className="text-xl font-black text-primary mb-3 line-clamp-2 group-hover:text-secondary transition-colors leading-snug">
                    {column.title}
                  </h3>
                  <p className="text-gray-600 font-medium text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {column.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                    <div className="text-xs font-bold text-gray-400">
                      {column.author}
                    </div>
                    <div className="text-secondary font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      読む <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Pagination */}
        <FadeIn delay={0.6}>
          <div className="flex justify-center items-center gap-2 mt-16">
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:border-secondary hover:text-secondary transition-colors disabled:opacity-50">
              <ChevronRight size={20} className="rotate-180" />
            </button>
            <button className="w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center">1</button>
            <button className="w-10 h-10 rounded-full border border-gray-200 text-gray-600 font-bold flex items-center justify-center hover:border-secondary hover:text-secondary transition-colors">2</button>
            <button className="w-10 h-10 rounded-full border border-gray-200 text-gray-600 font-bold flex items-center justify-center hover:border-secondary hover:text-secondary transition-colors">3</button>
            <span className="text-gray-400 mx-1">...</span>
            <button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:border-secondary hover:text-secondary transition-colors">
              <ChevronRight size={20} />
            </button>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
