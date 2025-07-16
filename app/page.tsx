import Link from 'next/link';

export default function Home() {
  return (
    <div className='bg-gray-50'>
      {/* ヒーローセクション */}
      <section className='bg-gradient-to-r from-[#5B9FED] to-[#1F2A44] text-white py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-6xl font-bold mb-6'>株式会社知恵乃屋</h1>
            <p className='text-xl md:text-2xl mb-8 text-blue-100'>
              ITシステム受託開発で企業の成長を支援
            </p>
            <p className='text-lg mb-12 text-blue-100 max-w-3xl mx-auto'>
              ソフトウェア及びAIの受託開発、コンサルティング、AIサービスの企画・開発を通じて、
              お客様のビジネスを次の段階へと導きます。
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                href='/contact'
                className='bg-white text-[#5B9FED] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors'
              >
                お問い合わせ
              </Link>
              <Link
                href='/services'
                className='border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#5B9FED] transition-colors'
              >
                サービス詳細
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* サービス概要セクション */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#1F2A44] mb-4'>サービス</h2>
            <p className='text-lg text-gray-600'>
              お客様のニーズに応じた最適なソリューションを提供します
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='bg-white p-8 rounded-lg shadow-lg'>
              <div className='w-12 h-12 bg-[#5B9FED] rounded-lg flex items-center justify-center mb-6'>
                <svg
                  className='w-6 h-6 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-4 text-[#1F2A44]'>ソフトウェア受託開発</h3>
              <p className='text-gray-600'>
                Webアプリケーション、モバイルアプリ、デスクトップアプリケーションの開発を行います。
              </p>
            </div>
            <div className='bg-white p-8 rounded-lg shadow-lg'>
              <div className='w-12 h-12 bg-[#5B9FED] rounded-lg flex items-center justify-center mb-6'>
                <svg
                  className='w-6 h-6 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-4 text-[#1F2A44]'>AI開発</h3>
              <p className='text-gray-600'>
                機械学習、深層学習を活用したAIソリューションの開発・実装を行います。
              </p>
            </div>
            <div className='bg-white p-8 rounded-lg shadow-lg'>
              <div className='w-12 h-12 bg-[#5B9FED] rounded-lg flex items-center justify-center mb-6'>
                <svg
                  className='w-6 h-6 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold mb-4 text-[#1F2A44]'>コンサルティング</h3>
              <p className='text-gray-600'>
                技術戦略の策定、システム設計、プロジェクト管理まで幅広くサポートします。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 会社概要セクション */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
            <div>
              <h2 className='text-3xl md:text-4xl font-bold text-[#1F2A44] mb-6'>会社概要</h2>
              <p className='text-gray-600 mb-8'>
                株式会社知恵乃屋は、2025年4月に設立された新しい会社です。
                ITシステム受託開発を通じて、お客様のビジネス成長をサポートします。
              </p>
              <div className='space-y-4'>
                <div className='flex'>
                  <span className='font-semibold text-[#1F2A44] w-20'>設立：</span>
                  <span className='text-gray-600'>2025年4月</span>
                </div>
                <div className='flex'>
                  <span className='font-semibold text-[#1F2A44] w-20'>代表者：</span>
                  <span className='text-gray-600'>上島 侑士</span>
                </div>
                <div className='flex'>
                  <span className='font-semibold text-[#1F2A44] w-20'>所在地：</span>
                  <span className='text-gray-600'>東京都千代田区神田多町</span>
                </div>
              </div>
              <div className='mt-8'>
                <Link
                  href='/about'
                  className='inline-flex items-center text-[#5B9FED] hover:text-[#1F2A44] transition-colors'
                >
                  詳しく見る
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
            </div>
            <div className='bg-gray-100 rounded-lg p-8 text-center'>
              <div className='text-6xl font-bold text-[#5B9FED] mb-4'>2025</div>
              <p className='text-[#1F2A44] font-semibold'>年設立</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTAセクション */}
      <section className='py-20 bg-[#5B9FED]'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-3xl md:text-4xl font-bold text-white mb-6'>
            お気軽にお問い合わせください
          </h2>
          <p className='text-xl text-blue-100 mb-12'>
            プロジェクトのご相談、お見積りなど、まずはお話をお聞かせください。
          </p>
          <Link
            href='/contact'
            className='bg-white text-[#5B9FED] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block'
          >
            お問い合わせはこちら
          </Link>
        </div>
      </section>
    </div>
  );
}
