import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'サービス・事業内容 | 株式会社知恵乃屋',
  description:
    'ソフトウェア及びAIの受託開発、コンサルティング、AIサービスの企画・開発など、株式会社知恵乃屋のサービス内容をご紹介します。',
};

export default function Services() {
  const services = [
    {
      title: 'ソフトウェア受託開発',
      description:
        'Webアプリケーション、モバイルアプリ、デスクトップアプリケーションの開発を行います。',
      features: [
        'Webアプリケーション開発',
        'モバイルアプリ開発（iOS/Android）',
        'デスクトップアプリケーション開発',
        'API設計・開発',
        'データベース設計・構築',
        'クラウドインフラ構築',
      ],
      technologies: [
        'React',
        'Next.js',
        'Node.js',
        'Python',
        'Ruby',
        'AWS',
        'Google Cloud',
        'Docker',
      ],
      icon: (
        <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
          />
        </svg>
      ),
    },
    {
      title: 'AI開発',
      description: '機械学習、深層学習を活用したAIソリューションの開発・実装を行います。',
      features: [
        '機械学習モデル開発',
        '自然言語処理（NLP）',
        'コンピュータビジョン',
        'データ分析・可視化',
        'AIモデルの最適化・運用',
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'OpenAI', 'Hugging Face'],
      icon: (
        <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
          />
        </svg>
      ),
    },
    {
      title: 'コンサルティング',
      description: '技術戦略の策定、システム設計、プロジェクト管理まで幅広くサポートします。',
      features: [
        '技術戦略策定',
        'システム設計・アーキテクチャ',
        'プロジェクト管理',
        '技術選定支援',
        'コードレビュー',
        '開発プロセス改善',
      ],
      technologies: ['アジャイル開発', 'スクラム', 'DevOps', 'CI/CD', 'クラウド設計'],
      icon: (
        <svg className='w-8 h-8 text-white' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth={2}
            d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
          />
        </svg>
      ),
    },
  ];

  return (
    <div className='bg-gray-50 min-h-screen'>
      {/* ヘッダーセクション */}
      <section className='bg-[#5B9FED] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>サービス・事業内容</h1>
            <p className='text-xl text-blue-100'>
              お客様のニーズに応じた最適なソリューションを提供します
            </p>
          </div>
        </div>
      </section>

      {/* サービス一覧セクション */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='space-y-16'>
            {services.map((service, index) => (
              <div key={index} className='bg-white rounded-lg shadow-lg overflow-hidden'>
                <div className='p-8'>
                  <div className='flex items-center mb-6'>
                    <div className='w-16 h-16 bg-[#5B9FED] rounded-lg flex items-center justify-center mr-4'>
                      {service.icon}
                    </div>
                    <div>
                      <h2 className='text-3xl font-bold text-[#1F2A44]'>{service.title}</h2>
                      <p className='text-gray-600 mt-2'>{service.description}</p>
                    </div>
                  </div>

                  <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
                    <div>
                      <h3 className='text-xl font-semibold text-[#1F2A44] mb-4'>
                        主なサービス内容
                      </h3>
                      <ul className='space-y-2'>
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className='flex items-center text-gray-700'>
                            <svg
                              className='w-5 h-5 text-[#5B9FED] mr-3'
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
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className='text-xl font-semibold text-[#1F2A44] mb-4'>使用技術・手法</h3>
                      <div className='flex flex-wrap gap-2'>
                        {service.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className='px-3 py-1 bg-[#5B9FED] text-white rounded-full text-sm'
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 開発フローセクション */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#1F2A44] mb-6'>開発フロー</h2>
            <p className='text-lg text-gray-600'>
              お客様のプロジェクトを成功に導くための開発プロセス
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
            {[
              {
                step: '01',
                title: 'ヒアリング',
                description: 'お客様の要件やビジネス課題を詳しくお聞きします',
              },
              {
                step: '02',
                title: '企画・設計',
                description: '最適なソリューションの企画・設計を行います',
              },
              {
                step: '03',
                title: '開発・実装',
                description: '最新技術を活用した高品質な開発を行います',
              },
              {
                step: '04',
                title: '納品・サポート',
                description: 'システムの納品とアフターサポートを提供します',
              },
            ].map((flow, index) => (
              <div key={index} className='text-center'>
                <div className='w-16 h-16 bg-[#5B9FED] rounded-full flex items-center justify-center mx-auto mb-4'>
                  <span className='text-white font-bold text-lg'>{flow.step}</span>
                </div>
                <h3 className='text-xl font-semibold text-[#1F2A44] mb-2'>{flow.title}</h3>
                <p className='text-gray-600'>{flow.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className='py-20 bg-[#5B9FED]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            プロジェクトのご相談はこちら
          </h2>
          <p className='text-xl text-blue-100 mb-12'>
            お客様のビジネス課題を解決するお手伝いをいたします
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              href='/contact'
              className='bg-white text-[#5B9FED] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
            >
              お問い合わせ
            </Link>
            <Link
              href='/case-studies'
              className='border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#5B9FED] transition-colors'
            >
              実績・事例を見る
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
