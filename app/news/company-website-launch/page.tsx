import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '会社ホームページ公開 | 株式会社知恵乃屋',
  description: '株式会社知恵乃屋の公式ホームページを公開いたしました。',
};

export default function CompanyWebsiteLaunch() {
  return (
    <div className='bg-gray-50 min-h-screen'>
      {/* ヘッダーセクション */}
      <section className='bg-[#5B9FED] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <div className='flex items-center justify-center mb-4'>
              <span className='px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800'>
                お知らせ
              </span>
            </div>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>会社ホームページ公開</h1>
            <p className='text-xl text-blue-100'>2025年7月18日</p>
          </div>
        </div>
      </section>

      {/* 記事本文セクション */}
      <section className='py-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <article className='bg-white rounded-lg shadow-lg overflow-hidden'>
            <div className='p-8 md:p-12'>
              <div className='prose prose-lg max-w-none'>
                <p className='text-xl text-gray-600 mb-8'>
                  株式会社知恵乃屋の公式ホームページを公開いたしました。
                </p>

                <h2 className='text-2xl font-bold text-[#1F2A44] mb-6'>
                  ホームページ公開のお知らせ
                </h2>

                <p className='text-gray-700 mb-6'>
                  この度、株式会社知恵乃屋の公式ホームページを公開いたしました。
                  当サイトでは、弊社の事業内容、サービス、最新情報などを随時発信してまいります。
                </p>

                <h3 className='text-xl font-bold text-[#1F2A44] mb-4'>主なコンテンツ</h3>

                <ul className='list-disc pl-6 mb-6 text-gray-700'>
                  <li>会社概要・事業紹介</li>
                  <li>サービス詳細</li>
                  <li>最新ニュース・お知らせ</li>
                  <li>お問い合わせフォーム</li>
                </ul>

                <p className='text-gray-700 mb-6'>
                  今後も定期的に情報を更新し、より充実したコンテンツをお届けしてまいります。
                  ご質問やご要望がございましたら、お気軽にお問い合わせください。
                </p>

                <div className='bg-gray-50 p-6 rounded-lg'>
                  <h3 className='text-lg font-bold text-[#1F2A44] mb-2'>お問い合わせ</h3>
                  <p className='text-gray-600 mb-4'>
                    ホームページに関するご質問やご意見がございましたら、お問い合わせページからお問い合わせください。
                  </p>
                  <Link
                    href='/contact'
                    className='inline-flex items-center bg-[#5B9FED] text-white px-6 py-3 rounded-lg hover:bg-[#1F2A44] transition-colors font-medium'
                  >
                    お問い合わせページへ
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
            </div>
          </article>
        </div>
      </section>

      {/* 関連記事セクション */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#1F2A44] mb-6'>関連記事</h2>
            <p className='text-lg text-gray-600'>その他のニュース・お知らせもご確認ください</p>
          </div>

          <div className='text-center'>
            <Link
              href='/news'
              className='inline-flex items-center bg-[#5B9FED] text-white px-8 py-4 rounded-lg hover:bg-[#1F2A44] transition-colors font-medium'
            >
              ニュース一覧に戻る
              <svg className='w-5 h-5 ml-2' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
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
      </section>
    </div>
  );
}
