import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ニュース・お知らせ | 株式会社知恵乃屋',
  description:
    '株式会社知恵乃屋の最新ニュースとお知らせをご確認いただけます。新サービスやイベント情報などを随時更新しています。',
};

export default function News() {
  const news = [
    {
      id: 1,
      date: '2025-01-15',
      category: 'プレスリリース',
      title: '新サービス「AIコンサルティングプラン」を開始',
      excerpt:
        'AI導入を検討される企業様向けに、戦略立案から実装まで一貫してサポートする新サービスを開始いたします。',
      slug: 'ai-consulting-plan-launch',
    },
    {
      id: 2,
      date: '2025-01-10',
      category: 'イベント',
      title: '技術勉強会「Next.js 15の新機能」を開催予定',
      excerpt:
        '2025年2月に開催予定の技術勉強会のお知らせです。Next.js 15の新機能について詳しく解説いたします。',
      slug: 'nextjs-15-study-session',
    },
    {
      id: 3,
      date: '2025-01-05',
      category: 'お知らせ',
      title: '年末年始休業のお知らせ',
      excerpt: '2024年12月29日（金）～2025年1月3日（水）まで年末年始休業とさせていただきます。',
      slug: 'year-end-holiday-notice',
    },
    {
      id: 4,
      date: '2024-12-20',
      category: 'プレスリリース',
      title: '大型ECサイト開発プロジェクトの完了',
      excerpt: '某大手企業様のECサイト開発プロジェクトが完了し、正式にリリースされました。',
      slug: 'major-ecommerce-project-completion',
    },
    {
      id: 5,
      date: '2024-12-15',
      category: 'お知らせ',
      title: '新メンバー募集のお知らせ',
      excerpt: '事業拡大に伴い、フロントエンドエンジニアとAIエンジニアを募集しております。',
      slug: 'new-member-recruitment',
    },
    {
      id: 6,
      date: '2024-12-01',
      category: 'イベント',
      title: 'AI技術セミナー「ビジネスにおけるAI活用事例」参加報告',
      excerpt: '東京で開催されたAI技術セミナーに参加し、最新の業界動向について学びました。',
      slug: 'ai-seminar-participation-report',
    },
    {
      id: 7,
      date: '2024-11-20',
      category: 'プレスリリース',
      title: '画像認識AIシステムの開発完了',
      excerpt: '製造業向けの品質管理AIシステムの開発が完了し、お客様に納品いたしました。',
      slug: 'image-recognition-ai-system-completion',
    },
    {
      id: 8,
      date: '2024-11-10',
      category: 'お知らせ',
      title: 'オフィス移転のお知らせ',
      excerpt: '2024年11月15日より、新オフィスに移転いたします。新住所は神田多町2-1-23です。',
      slug: 'office-relocation-notice',
    },
  ];

  const categories = ['すべて', 'プレスリリース', 'お知らせ', 'イベント'];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ja-JP', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'プレスリリース':
        return 'bg-blue-100 text-blue-800';
      case 'お知らせ':
        return 'bg-green-100 text-green-800';
      case 'イベント':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className='bg-gray-50 min-h-screen'>
      {/* ヘッダーセクション */}
      <section className='bg-[#5B9FED] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>ニュース・お知らせ</h1>
            <p className='text-xl text-blue-100'>株式会社知恵乃屋の最新情報をお届けします</p>
          </div>
        </div>
      </section>

      {/* フィルターセクション */}
      <section className='py-8 bg-white border-b'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex flex-wrap gap-4 justify-center'>
            {categories.map((category) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full transition-colors ${
                  category === 'すべて'
                    ? 'bg-[#5B9FED] text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ニュース一覧セクション */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {news.map((item) => (
              <article
                key={item.id}
                className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow'
              >
                <div className='p-6'>
                  <div className='flex items-center justify-between mb-4'>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(item.category)}`}
                    >
                      {item.category}
                    </span>
                    <time className='text-gray-500 text-sm'>{formatDate(item.date)}</time>
                  </div>

                  <h2 className='text-xl font-bold text-[#1F2A44] mb-3 line-clamp-2'>
                    {item.title}
                  </h2>

                  <p className='text-gray-600 mb-4 line-clamp-3'>{item.excerpt}</p>

                  <Link
                    href={`/news/${item.slug}`}
                    className='inline-flex items-center text-[#5B9FED] hover:text-[#1F2A44] transition-colors font-medium'
                  >
                    続きを読む
                    <svg
                      className='w-4 h-4 ml-1'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ページネーション */}
      <section className='py-12 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-center items-center space-x-4'>
            <button className='px-4 py-2 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50 transition-colors'>
              前へ
            </button>
            <div className='flex space-x-2'>
              <button className='px-4 py-2 bg-[#5B9FED] text-white rounded-md'>1</button>
              <button className='px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors'>
                2
              </button>
              <button className='px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors'>
                3
              </button>
            </div>
            <button className='px-4 py-2 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50 transition-colors'>
              次へ
            </button>
          </div>
        </div>
      </section>

      {/* 注目記事セクション */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#1F2A44] mb-6'>注目記事</h2>
            <p className='text-lg text-gray-600'>
              特に注目していただきたい記事をピックアップしました
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            {news.slice(0, 2).map((item) => (
              <article
                key={item.id}
                className='bg-gray-50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow'
              >
                <div className='p-8'>
                  <div className='flex items-center justify-between mb-4'>
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(item.category)}`}
                    >
                      {item.category}
                    </span>
                    <time className='text-gray-500 text-sm'>{formatDate(item.date)}</time>
                  </div>

                  <h3 className='text-2xl font-bold text-[#1F2A44] mb-4'>{item.title}</h3>

                  <p className='text-gray-600 mb-6'>{item.excerpt}</p>

                  <Link
                    href={`/news/${item.slug}`}
                    className='inline-flex items-center bg-[#5B9FED] text-white px-6 py-3 rounded-lg hover:bg-[#1F2A44] transition-colors font-medium'
                  >
                    詳細を見る
                    <svg
                      className='w-4 h-4 ml-2'
                      fill='none'
                      stroke='currentColor'
                      viewBox='0 0 24 24'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth={2}
                        d='M9 5l7 7-7 7'
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
