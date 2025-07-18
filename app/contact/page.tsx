export default function Contact() {
  return (
    <div className='bg-gray-50 min-h-screen'>
      {/* ヘッダーセクション */}
      <section className='bg-[#5B9FED] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>お問い合わせ</h1>
            <p className='text-xl text-blue-100'>
              プロジェクトのご相談、お見積りなど、お気軽にお問い合わせください
            </p>
          </div>
        </div>
      </section>

      {/* お問い合わせ方法セクション */}
      <section className='py-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white rounded-lg shadow-lg p-8 text-center'>
            <div className='w-20 h-20 bg-[#5B9FED] rounded-full flex items-center justify-center mx-auto mb-6'>
              <svg
                className='w-10 h-10 text-white'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                />
              </svg>
            </div>
            <h2 className='text-3xl font-bold text-[#1F2A44] mb-4'>
              お問い合わせはメールにて承っております
            </h2>
            <p className='text-lg text-gray-600 mb-8'>
              プロジェクトのご相談、お見積りなど、お気軽にメールでお問い合わせください。
              <br />
              担当者より3営業日以内にご連絡いたします。
            </p>
            <div className='mb-8'>
              <a
                href='mailto:info@chienoya.co.jp'
                className='inline-flex items-center px-8 py-4 bg-[#5B9FED] text-white text-lg font-semibold rounded-lg hover:bg-[#1F2A44] transition-colors'
              >
                <svg className='w-6 h-6 mr-3' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                  />
                </svg>
                info@chienoya.co.jp
              </a>
            </div>
            <div className='bg-gray-50 rounded-lg p-6 text-left'>
              <h3 className='text-lg font-semibold text-[#1F2A44] mb-4'>
                メールに記載いただきたい内容
              </h3>
              <ul className='space-y-3 text-gray-700'>
                <li className='flex items-start'>
                  <span className='text-[#5B9FED] mr-2'>•</span>
                  お名前・会社名
                </li>
                <li className='flex items-start'>
                  <span className='text-[#5B9FED] mr-2'>•</span>
                  お問い合わせ内容（ソフトウェア開発、AI開発、コンサルティング、お見積り等）
                </li>
                <li className='flex items-start'>
                  <span className='text-[#5B9FED] mr-2'>•</span>
                  プロジェクトの詳細やご要望
                </li>
                <li className='flex items-start'>
                  <span className='text-[#5B9FED] mr-2'>•</span>
                  ご連絡先（電話番号など、必要に応じて）
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
