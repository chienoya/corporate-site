import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4'>
      <div className='text-center'>
        {/* 404 エラー表示 */}
        <div className='mb-8'>
          <h1 className='text-9xl font-bold text-[#5B9FED] mb-4'>404</h1>
          <h2 className='text-3xl md:text-4xl font-bold text-[#1F2A44] mb-4'>
            ページが見つかりません
          </h2>
          <p className='text-lg text-gray-600 mb-8 max-w-md'>
            お探しのページは存在しないか、移動した可能性があります。
            URLをご確認いただくか、以下のリンクからトップページにお戻りください。
          </p>
        </div>

        {/* アクションボタン */}
        <div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
          <Link
            href='/'
            className='bg-[#5B9FED] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#1F2A44] transition-colors'
          >
            トップページへ戻る
          </Link>
          <Link
            href='/contact'
            className='border border-[#5B9FED] text-[#5B9FED] px-8 py-3 rounded-lg font-semibold hover:bg-[#5B9FED] hover:text-white transition-colors'
          >
            お問い合わせ
          </Link>
        </div>

        {/* サイトマップ */}
        <div className='bg-white rounded-lg shadow-lg p-8 max-w-2xl'>
          <h3 className='text-xl font-semibold text-[#1F2A44] mb-6 text-center'>サイトマップ</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            <div>
              <h4 className='font-medium text-[#1F2A44] mb-3'>メインページ</h4>
              <ul className='space-y-2'>
                <li>
                  <Link href='/' className='text-gray-600 hover:text-[#5B9FED] transition-colors'>
                    トップページ
                  </Link>
                </li>
                <li>
                  <Link
                    href='/about'
                    className='text-gray-600 hover:text-[#5B9FED] transition-colors'
                  >
                    会社概要
                  </Link>
                </li>
                <li>
                  <Link
                    href='/services'
                    className='text-gray-600 hover:text-[#5B9FED] transition-colors'
                  >
                    サービス・事業内容
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-medium text-[#1F2A44] mb-3'>その他</h4>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='/news'
                    className='text-gray-600 hover:text-[#5B9FED] transition-colors'
                  >
                    ニュース・お知らせ
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className='text-gray-600 hover:text-[#5B9FED] transition-colors'
                  >
                    お問い合わせ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 装飾的なイラスト */}
        <div className='mt-12 text-gray-300'>
          <svg className='mx-auto w-32 h-32' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={1}
              d='M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.569-.832-6.329-2.291L3 15l1.671-2.291C6.431 11.168 8.66 10.336 11 10.336s4.569.832 6.329 2.373L19 15l-1.671 2.291z'
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
