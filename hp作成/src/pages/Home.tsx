import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  CheckCircle2, ArrowRight, ChevronDown, FileText, 
  TrendingUp, Target, Package, MessageSquare, Send, 
  Lightbulb, Clock, Check, ChevronRight,
  Search, PenTool, Calculator, Download
} from 'lucide-react';
import { useLocation } from 'react-router-dom';

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

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-bg-ice rounded-xl shadow-sm overflow-hidden border border-secondary/10">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left font-bold text-primary hover:bg-secondary/5 transition-colors"
      >
        {question}
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }}>
          <ChevronDown className="text-secondary" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-5 pt-0 text-gray-600 font-medium border-t border-secondary/10 mt-2">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default function Home() {
  const [activeTab, setActiveTab] = useState('concept');
  const [contactType, setContactType] = useState<'consultation' | 'proposal'>('consultation');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    genre: '',
    message: '',
    privacy: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [downloadData, setDownloadData] = useState({
    company: '',
    name: '',
    email: '',
    privacy: false
  });
  const [isDownloadSubmitting, setIsDownloadSubmitting] = useState(false);
  const [isDownloadSuccess, setIsDownloadSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        company: '', name: '', email: '', genre: '', message: '', privacy: false
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleDownloadChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setDownloadData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleDownloadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDownloadSubmitting(true);
    setTimeout(() => {
      setIsDownloadSubmitting(false);
      setIsDownloadSuccess(true);
      setDownloadData({ company: '', name: '', email: '', privacy: false });
    }, 1500);
  };

  const deliverables = [
    { id: 'concept', icon: <Lightbulb />, title: '商品コンセプト案', desc: 'ターゲット層に刺さる独自性のあるコンセプトを策定します。市場の隙間を狙い、競合と差別化できるストーリーを構築します。' },
    { id: 'formula', icon: <FileText />, title: '配合設計の方向性', desc: '効果とコストのバランスを考慮した最適な成分配合をご提案します。剤形（錠剤、カプセル、粉末等）の適性も考慮します。' },
    { id: 'ingredients', icon: <Package />, title: '原料構成のご提案', desc: 'トレンド原料やエビデンスに基づいた原料を選定します。安定供給や原価率も視野に入れた現実的な構成です。' },
    { id: 'estimate', icon: <Calculator />, title: '概算見積り', desc: '商品化に向けた現実的なコスト感（製造ロット別）を算出します。事業計画の立案に直結する重要な指標となります。' },
    { id: 'target', icon: <Target />, title: '想定ターゲット設計', desc: 'ペルソナを設定し、誰に売るべきかを明確にします。年齢、性別、ライフスタイル、抱える悩みを具体化します。' },
    { id: 'appeal', icon: <MessageSquare />, title: '訴求ポイント整理', desc: '薬機法等の関連法規を考慮しつつ、魅力的に伝わる表現の方向性を整理します。LPや広告の骨子となります。' },
    { id: 'design', icon: <PenTool />, title: 'パッケージデザイン方向性', desc: 'ターゲットに響くデザインのトーン＆マナーをご提案します。店頭やECでの視認性、ブランドの世界観を定義します。' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 hero-bg text-white overflow-hidden relative min-h-[90vh] flex items-center">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary opacity-20 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent opacity-10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/2 space-y-6"
          >
            <span className="inline-block bg-white/20 text-white font-bold px-4 py-1.5 rounded-full text-sm backdrop-blur-sm border border-white/30">
              REDAS独自の処方設計・市場分析ノウハウ
            </span>
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight">
              売れる可能性の高い<br />
              サプリメント企画を、<br />
              <span className="text-accent">最短3営業日</span>で。
            </h1>
            <p className="text-white/90 text-base md:text-lg leading-relaxed font-medium max-w-lg">
              商品コンセプト、配合設計、概算見積り、想定ターゲット、訴求ポイント、パッケージ方向性まで。新商品開発の初期検討に必要な要素を、提案レポートとしてご提供します。
            </p>
            
            <div className="flex flex-wrap gap-3 text-sm font-bold pt-2">
              <span className="bg-secondary/90 text-white px-4 py-1.5 rounded-md shadow-sm flex items-center gap-1">
                <CheckCircle2 size={16} /> 通常30万円 → 今なら無料
              </span>
              <span className="bg-white/10 text-white border border-white/30 px-4 py-1.5 rounded-md shadow-sm flex items-center gap-1">
                <Clock size={16} /> 最短3営業日
              </span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-8">
              <div className="relative group">
                <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-accent text-primary text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap shadow-md z-10">
                  使いやすさを実感！
                </span>
                <a href="#contact" className="block w-full sm:w-auto bg-accent hover:bg-accent-hover text-primary text-center font-bold py-4 px-8 rounded-full text-lg shadow-lg transition-all transform group-hover:scale-105">
                  無料相談 / 企画提案を申し込む
                </a>
              </div>
              <a href="#features" className="block w-full sm:w-auto bg-transparent border-2 border-white/50 hover:bg-white hover:text-primary text-white text-center font-bold py-4 px-8 rounded-full text-lg transition-all backdrop-blur-sm">
                サービス詳細を見る
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2 w-full mt-8 md:mt-0 relative"
          >
            <div className="bg-white text-text-main p-8 rounded-2xl shadow-2xl relative z-10 border border-secondary/20">
              <div className="absolute -top-4 -left-4 bg-secondary text-white font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2">
                <FileText size={16} /> 提案レポート
              </div>
              <h3 className="text-xl font-bold border-b-2 border-secondary/20 pb-3 mb-6 text-center text-primary">成果物一覧</h3>
              <ul className="space-y-4 text-base font-medium">
                {[
                  '市場分析・ターゲット設定',
                  '商品コンセプト案',
                  '原料構成・配合設計',
                  '訴求ポイント整理',
                  'パッケージデザイン方向性',
                  '概算見積り'
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + (i * 0.1) }}
                    className="flex items-center gap-3 p-2 hover:bg-bg-ice rounded-lg transition-colors"
                  >
                    <span className="w-6 h-6 bg-secondary/10 text-secondary flex items-center justify-center rounded-full text-sm font-black shrink-0">
                      <Check size={14} />
                    </span>
                    {item}
                  </motion.li>
                ))}
              </ul>
            </div>
            {/* Decorative elements behind the card */}
            <div className="absolute top-10 -right-6 w-full h-full border-2 border-white/20 rounded-2xl -z-10"></div>
            <div className="absolute -bottom-6 right-10 w-full h-full border-2 border-accent/30 rounded-2xl -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-24 px-4 bg-bg-gray">
        <div className="max-w-4xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-16 text-primary">こんなお悩みはありませんか？</h2>
          </FadeIn>
          <div className="grid md:grid-cols-2 gap-5 mb-12">
            {[
              'サプリメントを作りたいが、何から始めればいいかわからない',
              'どんな成分を、どう組み合わせるべきか判断が難しい',
              '今の市場で売れやすい切り口を知りたい',
              '商品化した場合のおおよその価格感を早く把握したい',
              'ターゲットや訴求まで含めて企画を整理したい',
              'OEM相談の前に方向性を固めたい'
            ].map((text, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className="bg-white p-6 rounded-xl flex items-start gap-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                  <div className="bg-secondary/10 p-2 rounded-lg group-hover:bg-secondary group-hover:text-white transition-colors text-secondary shrink-0">
                    <Search size={20} />
                  </div>
                  <p className="font-bold text-gray-700 leading-relaxed">{text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4}>
            <div className="bg-white border-l-4 border-secondary p-6 rounded-r-xl text-base leading-relaxed text-center font-medium text-gray-600 shadow-sm">
              サプリメント開発では、原料選定・配合設計・価格設計・訴求整理など、商品化前に決めるべきことが多くあります。<br className="hidden md:block" />
              初期段階で判断材料が不足すると、企画が止まり、販売機会を逃すことにもつながります。
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Solution Section */}
      <section id="features" className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-bg-ice text-secondary font-bold px-4 py-1.5 rounded-full text-sm mb-6 border border-secondary/20">
                <Lightbulb size={16} /> 課題を解決するなら
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-6 leading-snug text-primary">
                その“企画の迷い”を、<br />
                短期間で整理・可視化します
              </h2>
              <p className="leading-relaxed font-medium text-gray-600 text-lg">
                REDAS Supplement Formula Engine は、REDASが蓄積してきた処方設計ノウハウ、原料知見、市場トレンド分析をもとに、“売れる可能性のある商品企画”の方向性を具体化する開発支援サービスです。
              </p>
            </FadeIn>
          </div>
          <div className="md:w-1/2 w-full">
            <FadeIn delay={0.2}>
              <div className="bg-bg-gray p-8 rounded-3xl flex flex-col gap-4 font-bold relative border border-gray-100 shadow-inner">
                <div className="w-full bg-white border border-gray-200 p-5 rounded-2xl text-gray-400 shadow-sm flex items-center justify-center gap-3">
                  曖昧なアイデア
                </div>
                <div className="flex justify-center text-secondary">
                  <ArrowRight className="rotate-90" size={24} />
                </div>
                <div className="w-full bg-bg-ice border border-secondary/20 text-secondary p-5 rounded-2xl shadow-sm flex items-center justify-center gap-3">
                  <Search size={20} /> 市場・成分・訴求を整理
                </div>
                <div className="flex justify-center text-secondary">
                  <ArrowRight className="rotate-90" size={24} />
                </div>
                <div className="w-full bg-primary text-white p-5 rounded-2xl shadow-sm flex items-center justify-center gap-3">
                  <FileText size={20} /> 提案レポート化
                </div>
                <div className="flex justify-center text-secondary">
                  <ArrowRight className="rotate-90" size={24} />
                </div>
                <div className="w-full bg-accent text-primary p-5 rounded-2xl shadow-md text-lg flex items-center justify-center gap-3 transform scale-105">
                  <TrendingUp size={24} /> 次の開発判断へ
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-bg-gray">
        <div className="max-w-5xl mx-auto text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-primary">REDAS Supplement Formula Engineとは</h2>
            <p className="mb-16 leading-relaxed text-left md:text-center text-gray-600 font-medium max-w-3xl mx-auto text-lg">
              単なる原料提案ではなく、商品コンセプト、成分構成、コスト感、ターゲット、訴求軸、デザイン方向性までを総合的に整理し、事業性・市場性・商品性を踏まえた提案レポートとしてご提供します。
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Target size={40} />, title: '企画整理', desc: '市場のトレンドと貴社の強みを掛け合わせ、勝てるコンセプトを立案します。' },
              { icon: <Package size={40} />, title: '配合設計', desc: 'エビデンスに基づいた成分選定と、コストに見合う最適な配合量を設計します。' },
              { icon: <TrendingUp size={40} />, title: '売り方設計', desc: '誰にどう伝えるか。ターゲット設定から訴求ポイントまで一貫して整理します。' }
            ].map((feature, i) => (
              <FadeIn key={i} delay={i * 0.2}>
                <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 group h-full">
                  <div className="w-24 h-24 bg-bg-ice rounded-full flex items-center justify-center mx-auto mb-6 transition-colors group-hover:bg-secondary group-hover:text-white text-secondary">
                    {feature.icon}
                  </div>
                  <h3 className="font-black text-2xl mb-4 text-primary">{feature.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">{feature.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables Section (Interactive Tabs) */}
      <section id="deliverables" className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-primary">ご提案レポートに含まれる内容</h2>
          </FadeIn>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Tab List */}
            <div className="lg:w-1/3 flex flex-col gap-2">
              {deliverables.map((item, i) => (
                <FadeIn key={item.id} delay={i * 0.05}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 p-4 rounded-xl font-bold text-left transition-all ${
                      activeTab === item.id 
                        ? 'bg-primary text-white shadow-md' 
                        : 'bg-bg-gray text-gray-600 hover:bg-bg-ice hover:text-primary'
                    }`}
                  >
                    <span className={`${activeTab === item.id ? 'text-accent' : 'text-secondary'}`}>
                      {item.icon}
                    </span>
                    {item.title}
                    {activeTab === item.id && <ChevronRight className="ml-auto" size={20} />}
                  </button>
                </FadeIn>
              ))}
            </div>

            {/* Tab Content */}
            <div className="lg:w-2/3">
              <div className="bg-bg-ice border border-secondary/20 rounded-3xl p-8 md:p-12 h-full flex flex-col justify-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-secondary opacity-5 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10"
                  >
                    {deliverables.map((item) => item.id === activeTab && (
                      <div key={item.id}>
                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-sm">
                          {React.cloneElement(item.icon as React.ReactElement, { size: 32 })}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-black text-primary mb-6">{item.title}</h3>
                        <p className="text-gray-700 text-lg leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center mt-16">
              <a href="#contact" className="inline-flex items-center justify-center gap-3 border-2 border-secondary text-secondary hover:bg-secondary hover:text-white font-bold py-4 px-10 rounded-full transition-all duration-300 text-lg group">
                無料相談・企画提案を申し込む
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-4 bg-bg-gray">
        <div className="max-w-5xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-16 text-primary">ご提案までの流れ</h2>
          </FadeIn>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-stretch gap-6 mb-12">
            {[
              { step: 'STEP 1', title: 'お申し込み', desc: 'フォームより必要事項をご入力ください。' },
              { step: 'STEP 2', title: '内容確認', desc: '担当よりヒアリングのご連絡をいたします。' },
              { step: 'STEP 3', title: '企画レポート作成', desc: '社内専門チームが企画を立案します。' },
              { step: 'STEP 4', title: 'ご提案', desc: 'オンライン等でレポートをご提示します。', isLast: true }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.1} className="w-full md:w-1/4 flex">
                <div className={`w-full p-8 rounded-2xl text-center relative shadow-sm flex flex-col justify-center ${
                  item.isLast 
                    ? 'bg-accent text-primary border-none shadow-md transform md:scale-105 z-10' 
                    : 'bg-white border-t-4 border-primary border-x border-b border-gray-100'
                }`}>
                  <div className={`font-black mb-3 text-sm tracking-widest ${item.isLast ? 'text-primary' : 'text-secondary'}`}>
                    {item.step}
                  </div>
                  <div className="font-black text-xl mb-3">{item.title}</div>
                  <div className={`text-sm font-medium ${item.isLast ? 'text-primary/80' : 'text-gray-500'}`}>
                    {item.desc}
                  </div>
                  {!item.isLast && (
                    <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-gray-300 z-10">
                      <ChevronRight size={32} />
                    </div>
                  )}
                  {!item.isLast && (
                    <div className="md:hidden absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-gray-300 z-10 rotate-90">
                      <ChevronRight size={32} />
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4}>
            <p className="text-center font-bold text-xl text-primary bg-white py-6 rounded-2xl shadow-sm border border-gray-100 max-w-2xl mx-auto">
              お申し込みから最短<span className="text-secondary text-5xl mx-2 font-black">3</span>営業日でご提案します。
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Campaign Section */}
      <section className="py-32 px-4 bg-gradient-to-b from-bg-ice to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiMwMGI0ZDgiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-50"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-black mb-12 leading-tight text-primary">
              今なら通常30万円の企画提案を<br />
              <span className="text-secondary relative inline-block mt-2">
                無料で。
                <svg className="absolute w-full h-4 -bottom-2 left-0 text-accent" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" />
                </svg>
              </span>
            </h2>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <div className="bg-white p-10 md:p-14 rounded-[2.5rem] shadow-2xl border border-secondary/10 mb-10 relative max-w-2xl mx-auto transform hover:-translate-y-2 transition-transform duration-500">
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-accent text-primary font-black px-8 py-2.5 rounded-full shadow-lg text-sm md:text-base tracking-wider">
                期間限定キャンペーン
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 mt-4">
                <div className="text-gray-400 text-center md:text-right">
                  <span className="text-sm font-bold tracking-widest">通常価格</span><br />
                  <span className="line-through text-2xl md:text-3xl font-medium">300,000円</span>
                  <span className="text-sm">（税込）</span>
                </div>
                <div className="text-4xl font-black text-secondary/30 hidden md:block">
                  <ArrowRight size={40} />
                </div>
                <div className="text-primary font-black text-6xl md:text-8xl tracking-tighter">
                  無料
                </div>
              </div>
            </div>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <p className="text-base md:text-lg text-gray-600 mb-12 leading-relaxed font-medium max-w-2xl mx-auto">
              サービス立ち上げ期間につき、REDASの企画提案力をより多くの企業様にご体感いただくため、期間限定で無料提供しています。
            </p>
            <a href="#contact" className="inline-flex items-center justify-center gap-3 w-full md:w-auto bg-accent hover:bg-accent-hover text-primary font-black py-5 px-16 rounded-full text-xl shadow-xl transition-all duration-300 transform hover:scale-105">
              無料相談 / 企画提案を申し込む
              <ArrowRight />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="py-24 px-4 bg-primary text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary opacity-10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <FadeIn>
                <div className="inline-flex items-center gap-2 bg-white/10 text-secondary font-bold px-4 py-1.5 rounded-full text-sm mb-6 border border-white/20">
                  <Download size={16} /> 無料ダウンロード
                </div>
                <h2 className="text-3xl md:text-4xl font-black mb-6 leading-snug">
                  サービス紹介資料 /<br />
                  サンプルレポート
                </h2>
                <p className="leading-relaxed font-medium text-white/80 text-lg mb-8">
                  具体的な提案内容のイメージが湧くサンプルレポートや、本サービスの詳細、過去の支援事例などをまとめた資料を無料でダウンロードいただけます。社内検討用にご活用ください。
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-3">
                    <CheckCircle2 className="text-secondary shrink-0" size={20} />
                    <span className="text-sm font-bold">サービス詳細・特徴</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-3">
                    <CheckCircle2 className="text-secondary shrink-0" size={20} />
                    <span className="text-sm font-bold">提案レポートのサンプル</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-3">
                    <CheckCircle2 className="text-secondary shrink-0" size={20} />
                    <span className="text-sm font-bold">開発支援の事例紹介</span>
                  </div>
                  <div className="bg-white/5 border border-white/10 p-4 rounded-xl flex items-start gap-3">
                    <CheckCircle2 className="text-secondary shrink-0" size={20} />
                    <span className="text-sm font-bold">ご利用の流れ・料金</span>
                  </div>
                </div>
              </FadeIn>
            </div>
            
            <div className="md:w-1/2 w-full">
              <FadeIn delay={0.2}>
                <div className="bg-white text-text-main p-8 rounded-3xl shadow-2xl">
                  <h3 className="text-2xl font-black mb-6 text-primary text-center">資料ダウンロードフォーム</h3>
                  
                  {isDownloadSuccess ? (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-bg-ice border border-secondary/20 p-8 rounded-2xl text-center"
                    >
                      <div className="w-16 h-16 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 size={32} />
                      </div>
                      <h4 className="text-xl font-black text-primary mb-2">送信が完了しました</h4>
                      <p className="text-gray-600 font-medium text-sm mb-6">
                        ご入力いただいたメールアドレス宛に、資料のダウンロードURLをお送りいたしました。
                      </p>
                      <button 
                        onClick={() => setIsDownloadSuccess(false)}
                        className="text-secondary font-bold text-sm hover:underline"
                      >
                        続けて別の資料をダウンロードする
                      </button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleDownloadSubmit} className="space-y-4">
                      <div>
                        <label className="block text-sm font-bold text-primary mb-1">会社名 <span className="text-red-500">*</span></label>
                        <input 
                          type="text" name="company" required value={downloadData.company} onChange={handleDownloadChange}
                          className="w-full bg-bg-gray border border-gray-200 rounded-lg p-3 focus:outline-none focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-primary mb-1">お名前 <span className="text-red-500">*</span></label>
                        <input 
                          type="text" name="name" required value={downloadData.name} onChange={handleDownloadChange}
                          className="w-full bg-bg-gray border border-gray-200 rounded-lg p-3 focus:outline-none focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all" 
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-primary mb-1">メールアドレス <span className="text-red-500">*</span></label>
                        <input 
                          type="email" name="email" required value={downloadData.email} onChange={handleDownloadChange}
                          className="w-full bg-bg-gray border border-gray-200 rounded-lg p-3 focus:outline-none focus:bg-white focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all" 
                        />
                      </div>
                      <div className="flex items-start bg-bg-ice p-3 rounded-lg border border-secondary/10 mt-2">
                        <input 
                          id="download-privacy" name="privacy" type="checkbox" required checked={downloadData.privacy} onChange={handleDownloadChange}
                          className="mt-1 mr-2 w-4 h-4 text-secondary rounded border-gray-300 focus:ring-secondary" 
                        />
                        <label htmlFor="download-privacy" className="text-xs text-gray-700 font-medium leading-relaxed">
                          個人情報の取り扱いに同意する <span className="text-red-500">*</span>
                        </label>
                      </div>
                      <div className="pt-2">
                        <button 
                          type="submit" 
                          disabled={isDownloadSubmitting}
                          className="w-full bg-accent hover:bg-accent-hover text-primary font-bold py-4 px-6 rounded-xl text-lg shadow-md transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                          {isDownloadSubmitting ? (
                            <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                              <Clock size={20} />
                            </motion.div>
                          ) : (
                            <>
                              資料をダウンロードする
                              <Download size={18} />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black text-center mb-16 text-primary">よくあるご質問</h2>
          </FadeIn>
          <div className="space-y-4">
            {[
              { q: 'まだ作りたい商品が明確でなくても申し込めますか？', a: 'はい、もちろんです。ターゲットや解決したい課題など、断片的な情報からでも市場動向を踏まえた企画をご提案可能です。' },
              { q: '提案後に必ず発注しなければいけませんか？', a: 'いいえ、提案レポートを確認いただいた後、ご納得いただけた場合のみ次のステップ（OEM製造など）へ進めていただければ問題ありません。' },
              { q: '提案内容にはどこまで含まれますか？', a: '商品コンセプト、配合設計の方向性、原料構成、概算見積り、想定ターゲット、訴求ポイント、パッケージデザインの方向性が基本パッケージとして含まれます。' },
              { q: '新規参入でも相談できますか？', a: '大歓迎です。新規事業として立ち上げる際に不足しがちな「知見」をレポートで補完し、スムーズな立ち上げを支援します。' }
            ].map((faq, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <FAQItem question={faq.q} answer={faq.a} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 bg-bg-gray relative">
        <div className="absolute top-0 left-0 w-full h-64 bg-primary"></div>
        <div className="max-w-3xl mx-auto bg-white p-8 md:p-14 rounded-[2.5rem] shadow-2xl border border-gray-100 relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-black mb-4 text-primary">お問い合わせ・お申し込み</h2>
            <p className="text-gray-500 font-medium">現在の状況に合わせて、最適なサポートをご提供します。</p>
          </div>

          {!isSuccess && (
            <div className="grid md:grid-cols-2 gap-4 mb-10">
              <button 
                type="button"
                onClick={() => setContactType('consultation')}
                className={`p-6 rounded-2xl border-2 text-left transition-all ${contactType === 'consultation' ? 'border-secondary bg-bg-ice shadow-md' : 'border-gray-200 bg-white hover:border-secondary/50'}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${contactType === 'consultation' ? 'border-secondary' : 'border-gray-300'}`}>
                    {contactType === 'consultation' && <div className="w-2.5 h-2.5 bg-secondary rounded-full"></div>}
                  </div>
                  <span className="font-bold text-primary">方向性が固まっていない方</span>
                </div>
                <div className="text-xl font-black text-primary ml-8 mb-2">まずは無料相談</div>
                <p className="text-sm text-gray-600 ml-8 font-medium">「サプリを作りたいが何から始めれば…」という段階でもOK。開発に前向きな方に向けた相談窓口です。</p>
              </button>

              <button 
                type="button"
                onClick={() => setContactType('proposal')}
                className={`p-6 rounded-2xl border-2 text-left transition-all ${contactType === 'proposal' ? 'border-secondary bg-bg-ice shadow-md' : 'border-gray-200 bg-white hover:border-secondary/50'}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${contactType === 'proposal' ? 'border-secondary' : 'border-gray-300'}`}>
                    {contactType === 'proposal' && <div className="w-2.5 h-2.5 bg-secondary rounded-full"></div>}
                  </div>
                  <span className="font-bold text-primary">ターゲットや利用シーンがある方</span>
                </div>
                <div className="text-xl font-black text-primary ml-8 mb-2">無料で企画提案を申し込む</div>
                <p className="text-sm text-gray-600 ml-8 font-medium">ある程度具体的なアイデアがある方へ。市場分析から配合設計まで、最短3営業日でレポートをご提案します。</p>
              </button>
            </div>
          )}

          {isSuccess ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-bg-ice border border-secondary/20 p-10 rounded-2xl text-center"
            >
              <div className="w-20 h-20 bg-secondary text-white rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-2xl font-black text-primary mb-4">送信が完了しました</h3>
              <p className="text-gray-600 font-medium">
                お問い合わせありがとうございます。<br />
                担当者より通常1〜2営業日以内にご連絡いたします。
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-primary mb-2 flex items-center gap-2">
                    会社名 <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded">必須</span>
                  </label>
                  <input 
                    type="text" name="company" required value={formData.company} onChange={handleInputChange}
                    className="w-full bg-bg-gray border border-gray-200 rounded-xl p-4 focus:outline-none focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all" 
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-primary mb-2 flex items-center gap-2">
                    ご担当者名 <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded">必須</span>
                  </label>
                  <input 
                    type="text" name="name" required value={formData.name} onChange={handleInputChange}
                    className="w-full bg-bg-gray border border-gray-200 rounded-xl p-4 focus:outline-none focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all" 
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-primary mb-2 flex items-center gap-2">
                  メールアドレス <span className="bg-red-500 text-white text-[10px] px-2 py-0.5 rounded">必須</span>
                </label>
                <input 
                  type="email" name="email" required value={formData.email} onChange={handleInputChange}
                  className="w-full bg-bg-gray border border-gray-200 rounded-xl p-4 focus:outline-none focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all" 
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-primary mb-2">
                  {contactType === 'proposal' ? '検討している商品ジャンル・ターゲット' : '興味のあるジャンル（あれば）'}
                </label>
                <input 
                  type="text" name="genre" 
                  placeholder={contactType === 'proposal' ? '例：20代女性向け美容ドリンク、ジム会員向けプロテインなど' : '例：美容系、ダイエット系など（決まっていなくても可）'} 
                  value={formData.genre} onChange={handleInputChange}
                  className="w-full bg-bg-gray border border-gray-200 rounded-xl p-4 focus:outline-none focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all" 
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-primary mb-2">
                  {contactType === 'proposal' ? 'ご要望・実現したいこと' : 'ご相談内容'}
                </label>
                <textarea 
                  name="message" rows={4} 
                  placeholder={contactType === 'proposal' ? 'ターゲット層、価格帯、配合したい成分など、決まっている範囲でご記入ください。' : '現状の課題や、サプリメント開発で気になっていることなどをご記入ください。'}
                  value={formData.message} onChange={handleInputChange}
                  className="w-full bg-bg-gray border border-gray-200 rounded-xl p-4 focus:outline-none focus:bg-white focus:border-secondary focus:ring-4 focus:ring-secondary/10 transition-all resize-none"
                ></textarea>
              </div>

              <div className="flex items-start bg-bg-ice p-5 rounded-xl border border-secondary/20">
                <input 
                  id="privacy" name="privacy" type="checkbox" required checked={formData.privacy} onChange={handleInputChange}
                  className="mt-1 mr-3 w-5 h-5 text-secondary rounded border-gray-300 focus:ring-secondary" 
                />
                <label htmlFor="privacy" className="text-sm text-gray-700 font-medium leading-relaxed">
                  個人情報の取り扱いに同意する <span className="text-red-500">*</span>
                </label>
              </div>

              <div className="text-center pt-6">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-primary hover:bg-primary-light text-white font-bold py-5 px-16 rounded-full text-lg shadow-xl transition-all duration-300 flex items-center justify-center gap-2 mx-auto disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }}>
                      <Clock size={24} />
                    </motion.div>
                  ) : (
                    <>
                      {contactType === 'proposal' ? '企画提案を申し込む' : '無料相談を申し込む'}
                      <Send size={20} />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
