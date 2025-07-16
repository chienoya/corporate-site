import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '実績・事例 | 株式会社知恵乃屋',
  description:
    '株式会社知恵乃屋のプロジェクト実績と開発事例をご紹介します。Webアプリケーション、AI開発、コンサルティングなどの実績をご覧いただけます。',
};

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'ECサイト構築プロジェクト',
      category: 'Webアプリケーション開発',
      description:
        'スタートアップ企業向けのECサイトを構築。高いパフォーマンスとUXを実現し、売上向上に貢献しました。',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'AWS'],
      duration: '3ヶ月',
      teamSize: '3名',
      achievements: [
        'ページ読み込み速度を50%向上',
        'コンバージョン率を30%改善',
        'モバイル対応によりアクセス数が2倍に増加',
      ],
      challenges: [
        '大量の商品データの効率的な表示',
        '決済システムとの安全な連携',
        'レスポンシブデザインの最適化',
      ],
    },
    {
      id: 2,
      title: 'AI画像解析システム開発',
      category: 'AI開発',
      description:
        '製造業向けの品質管理AI。画像解析により不良品の自動検出を実現し、検査工程の効率化を図りました。',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Docker'],
      duration: '4ヶ月',
      teamSize: '2名',
      achievements: ['検査精度95%を達成', '検査時間を80%短縮', '人的コストを60%削減'],
      challenges: [
        '高精度な画像認識モデルの構築',
        'リアルタイム処理の最適化',
        '既存システムとの統合',
      ],
    },
    {
      id: 3,
      title: 'データ分析ダッシュボード開発',
      category: 'データ分析・可視化',
      description:
        '中規模企業向けの売上データ分析ダッシュボード。リアルタイムでのデータ可視化により、迅速な経営判断を支援。',
      technologies: ['React', 'D3.js', 'Python', 'PostgreSQL'],
      duration: '2ヶ月',
      teamSize: '2名',
      achievements: [
        'データ処理速度を3倍向上',
        '経営判断スピードを50%改善',
        'ユーザー満足度95%を獲得',
      ],
      challenges: [
        '大量データのリアルタイム処理',
        '直感的なUI/UXの設計',
        'セキュアなデータアクセス制御',
      ],
    },
  ];

  return (
    <div className='bg-gray-50 min-h-screen'>
      {/* ヘッダーセクション */}
      <section className='bg-[#5B9FED] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>実績・事例</h1>
            <p className='text-xl text-blue-100'>
              これまでの開発実績とプロジェクト事例をご紹介します
            </p>
          </div>
        </div>
      </section>

      {/* 統計セクション */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-4 gap-8 text-center'>
            <div>
              <div className='text-4xl font-bold text-[#5B9FED] mb-2'>15+</div>
              <div className='text-gray-600'>プロジェクト実績</div>
            </div>
            <div>
              <div className='text-4xl font-bold text-[#5B9FED] mb-2'>98%</div>
              <div className='text-gray-600'>お客様満足度</div>
            </div>
            <div>
              <div className='text-4xl font-bold text-[#5B9FED] mb-2'>3ヶ月</div>
              <div className='text-gray-600'>平均納期</div>
            </div>
            <div>
              <div className='text-4xl font-bold text-[#5B9FED] mb-2'>10+</div>
              <div className='text-gray-600'>技術スタック</div>
            </div>
          </div>
        </div>
      </section>

      {/* 事例一覧セクション */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#1F2A44] mb-6'>開発事例</h2>
            <p className='text-lg text-gray-600'>
              お客様のビジネス課題を解決した具体的な事例をご紹介します
            </p>
          </div>

          <div className='space-y-12'>
            {caseStudies.map((caseStudy) => (
              <div key={caseStudy.id} className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <div className='p-8'>
                  <div className='flex flex-col lg:flex-row gap-8'>
                    <div className='lg:w-2/3'>
                      <div className='flex items-center mb-4'>
                        <span className='bg-[#5B9FED] text-white px-3 py-1 rounded-full text-sm font-medium mr-3'>
                          {caseStudy.category}
                        </span>
                        <span className='text-gray-500 text-sm'>
                          {caseStudy.duration} | チーム規模: {caseStudy.teamSize}
                        </span>
                      </div>

                      <h3 className='text-2xl font-bold text-[#1F2A44] mb-4'>{caseStudy.title}</h3>

                      <p className='text-gray-700 mb-6'>{caseStudy.description}</p>

                      <div className='mb-6'>
                        <h4 className='text-lg font-semibold text-[#1F2A44] mb-3'>使用技術</h4>
                        <div className='flex flex-wrap gap-2'>
                          {caseStudy.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className='px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm'
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className='lg:w-1/3'>
                      <div className='mb-6'>
                        <h4 className='text-lg font-semibold text-[#1F2A44] mb-3'>成果・効果</h4>
                        <ul className='space-y-2'>
                          {caseStudy.achievements.map((achievement, achievementIndex) => (
                            <li
                              key={achievementIndex}
                              className='flex items-start text-sm text-gray-700'
                            >
                              <svg
                                className='w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth={2}
                                  d='M5 13l4 4L19 7'
                                />
                              </svg>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className='text-lg font-semibold text-[#1F2A44] mb-3'>技術的課題</h4>
                        <ul className='space-y-2'>
                          {caseStudy.challenges.map((challenge, challengeIndex) => (
                            <li
                              key={challengeIndex}
                              className='flex items-start text-sm text-gray-700'
                            >
                              <svg
                                className='w-4 h-4 text-[#5B9FED] mr-2 mt-0.5 flex-shrink-0'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                              >
                                <path
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                  strokeWidth={2}
                                  d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                />
                              </svg>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 技術スタックセクション */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#1F2A44] mb-6'>技術スタック</h2>
            <p className='text-lg text-gray-600'>
              最新技術を活用した高品質なソリューションを提供します
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='text-center'>
              <h3 className='text-xl font-semibold text-[#1F2A44] mb-6'>フロントエンド</h3>
              <div className='space-y-2'>
                {['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'].map((tech, index) => (
                  <div key={index} className='bg-gray-50 px-4 py-2 rounded'>
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div className='text-center'>
              <h3 className='text-xl font-semibold text-[#1F2A44] mb-6'>バックエンド・AI</h3>
              <div className='space-y-2'>
                {['Node.js', 'Python', 'TensorFlow', 'PyTorch', 'FastAPI'].map((tech, index) => (
                  <div key={index} className='bg-gray-50 px-4 py-2 rounded'>
                    {tech}
                  </div>
                ))}
              </div>
            </div>

            <div className='text-center'>
              <h3 className='text-xl font-semibold text-[#1F2A44] mb-6'>インフラ・その他</h3>
              <div className='space-y-2'>
                {['AWS', 'Docker', 'Kubernetes', 'PostgreSQL', 'MongoDB'].map((tech, index) => (
                  <div key={index} className='bg-gray-50 px-4 py-2 rounded'>
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className='py-20 bg-[#5B9FED]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            あなたのプロジェクトもお手伝いします
          </h2>
          <p className='text-xl text-blue-100 mb-12'>
            お客様のビジネス課題に合わせた最適なソリューションをご提案いたします
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='bg-white text-[#5B9FED] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
            >
              プロジェクト相談
            </Link>
            <Link
              href='/services'
              className='border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#5B9FED] transition-colors'
            >
              サービス詳細
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
