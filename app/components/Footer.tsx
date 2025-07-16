import Link from 'next/link';

export default function Footer() {
  const navItems = [
    { href: '/', label: 'ホーム' },
    { href: '/about', label: '会社概要' },
    { href: '/services', label: 'サービス' },
    { href: '/case-studies', label: '実績・事例' },
    { href: '/news', label: 'ニュース' },
    { href: '/contact', label: 'お問い合わせ' },
  ];

  return (
    <footer className='bg-[#1F2A44] text-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='py-12'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            {/* 会社情報 */}
            <div>
              <div className='text-xl font-bold text-[#5B9FED] mb-4'>株式会社知恵乃屋</div>
              <div className='space-y-2 text-sm text-gray-300'>
                <p>〒101-0046</p>
                <p>東京都千代田区神田多町２丁目１－２３</p>
                <p>神田東山ビル７Ｆ・８Ｆ</p>
                <p>代表者：上島 侑士</p>
                <p>設立：2025年4月</p>
              </div>
            </div>

            {/* サイトマップ */}
            <div>
              <h3 className='text-lg font-semibold mb-4'>サイトマップ</h3>
              <nav className='space-y-2'>
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className='block text-gray-300 hover:text-[#5B9FED] transition-colors duration-200'
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* 事業内容 */}
            <div>
              <h3 className='text-lg font-semibold mb-4'>事業内容</h3>
              <div className='space-y-2 text-sm text-gray-300'>
                <p>ソフトウェア及びAIの受託開発</p>
                <p>ソフトウェア開発及びAI開発に関するコンサルティング</p>
                <p>AIを利用したソフトウェアサービスの企画及び開発、提供</p>
              </div>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className='border-t border-gray-700 py-6'>
          <div className='text-center text-sm text-gray-400'>
            <p>&copy; 2025 株式会社知恵乃屋. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
