import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { BookOpen, ChevronRight, Clock, User, ArrowRight } from 'lucide-react';

type ColumnItem = {
  id: number;
  category: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
  file: string;
};

type ColumnsData = {
  featuredPost: ColumnItem;
  columns: ColumnItem[];
};

const FadeIn = ({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  key?: React.Key;
}) => (
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
  const [data, setData] = useState<ColumnsData | null>(null);

  useEffect(() => {
    fetch('/columns/columns.json')
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error('columns.json 読み込み失敗:', err));
  }, []);

  if (!data) {
    return (
      <div className="pt-32 pb-24 px-4 bg-white min-h-screen">
        <div className="max-w-6xl mx-auto">読み込み中...</div>
      </div>
    );
  }

  const { featuredPost, columns } = data;

  return (
    <div className="pt-32 pb-24 px-4 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
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

        <FadeIn delay={0.1}>
          <a href={`/columns/${featuredPost.file}`} className="block mb-16 group">
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
          </a>
        </FadeIn>

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {columns.map((column, i) => (
            <FadeIn key={column.id} delay={0.3 + (i * 0.1)}>
              <a
                href={`/columns/${column.file}`}
                className="block bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 group h-full"
              >
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
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}