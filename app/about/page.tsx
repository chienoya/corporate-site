import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '会社概要 | 株式会社知恵乃屋',
  description:
    '株式会社知恵乃屋の会社概要ページです。設立年、代表者、所在地、事業内容などの基本情報をご覧いただけます。',
};

export default function About() {
  return (
    <div className='bg-gray-50 min-h-screen'>
      {/* ヘッダーセクション */}
      <section className='bg-[#5B9FED] text-white py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl md:text-5xl font-bold mb-6'>会社概要</h1>
            <p className='text-xl text-blue-100'>株式会社知恵乃屋について</p>
          </div>
        </div>
      </section>

      {/* 会社情報セクション */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div>
              <h2 className='text-3xl font-bold text-[#1F2A44] mb-8'>会社情報</h2>
              <div className='bg-white rounded-lg shadow-lg p-8'>
                <table className='w-full'>
                  <tbody className='divide-y divide-gray-200'>
                    <tr className='py-4'>
                      <th className='text-left py-4 font-semibold text-[#1F2A44] w-32'>会社名</th>
                      <td className='py-4 text-gray-700'>株式会社知恵乃屋</td>
                    </tr>
                    <tr className='py-4'>
                      <th className='text-left py-4 font-semibold text-[#1F2A44] w-32'>設立年</th>
                      <td className='py-4 text-gray-700'>2025年4月</td>
                    </tr>
                    <tr className='py-4'>
                      <th className='text-left py-4 font-semibold text-[#1F2A44] w-32'>代表者</th>
                      <td className='py-4 text-gray-700'>上島 侑士</td>
                    </tr>
                    <tr className='py-4'>
                      <th className='text-left py-4 font-semibold text-[#1F2A44] w-32'>所在地</th>
                      <td className='py-4 text-gray-700'>
                        〒101-0046
                        <br />
                        東京都千代田区神田多町２丁目１－２３
                        <br />
                        神田東山ビル７Ｆ・８Ｆ
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <h2 className='text-3xl font-bold text-[#1F2A44] mb-8'>事業内容</h2>
              <div className='space-y-6'>
                <div className='bg-white rounded-lg shadow-lg p-6'>
                  <h3 className='text-xl font-semibold text-[#1F2A44] mb-4'>
                    ソフトウェア及びAIの受託開発
                  </h3>
                  <p className='text-gray-700'>
                    最新技術を活用したソフトウェアソリューションの開発から、
                    人工知能を用いた高度なシステムの構築まで、
                    幅広い技術領域でお客様のニーズにお応えします。
                  </p>
                </div>
                <div className='bg-white rounded-lg shadow-lg p-6'>
                  <h3 className='text-xl font-semibold text-[#1F2A44] mb-4'>
                    ソフトウェア開発及びAI開発に関するコンサルティング
                  </h3>
                  <p className='text-gray-700'>
                    技術戦略の策定から実装方針の検討まで、
                    お客様のビジネス課題を解決するための最適なアプローチを提案します。
                  </p>
                </div>
                <div className='bg-white rounded-lg shadow-lg p-6'>
                  <h3 className='text-xl font-semibold text-[#1F2A44] mb-4'>
                    AIを利用したソフトウェアサービスの企画及び開発、提供
                  </h3>
                  <p className='text-gray-700'>
                    人工知能技術を活用した革新的なサービスの企画から、
                    実際のサービス提供まで、トータルにサポートします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 代表者メッセージセクション */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#1F2A44] mb-6'>代表者メッセージ</h2>
          </div>
          <div className='max-w-4xl mx-auto'>
            <div className='bg-gray-50 rounded-lg p-8'>
              <div className='flex flex-col md:flex-row gap-8 items-center'>
                <div className='flex-shrink-0'>
                  <div className='w-32 h-32 bg-[#5B9FED] rounded-full flex items-center justify-center'>
                    <div className='text-white text-2xl font-bold'>上島</div>
                  </div>
                </div>
                <div className='flex-grow'>
                  <h3 className='text-2xl font-semibold text-[#1F2A44] mb-4'>
                    代表取締役 上島 侑士
                  </h3>
                  <p className='text-gray-700 leading-relaxed'>
                    この度は、株式会社知恵乃屋のウェブサイトにお越しいただき、誠にありがとうございます。
                    私たちは、ITシステム受託開発を通じて、お客様のビジネス成長をサポートすることを使命としております。
                    技術の力で社会に貢献し、お客様とともに成長していく企業を目指してまいります。
                    どうぞよろしくお願いいたします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* アクセス情報セクション */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#1F2A44] mb-6'>アクセス</h2>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div>
              <h3 className='text-2xl font-semibold text-[#1F2A44] mb-6'>所在地</h3>
              <div className='bg-white rounded-lg shadow-lg p-8'>
                <div className='space-y-4'>
                  <div>
                    <h4 className='font-semibold text-[#1F2A44] mb-2'>住所</h4>
                    <p className='text-gray-700'>
                      〒101-0046
                      <br />
                      東京都千代田区神田多町２丁目１－２３
                      <br />
                      神田東山ビル７Ｆ・８Ｆ
                    </p>
                  </div>
                  <div>
                    <h4 className='font-semibold text-[#1F2A44] mb-2'>最寄駅</h4>
                    <p className='text-gray-700'>
                      JR山手線・京浜東北線「神田駅」より徒歩5分
                      <br />
                      東京メトロ銀座線「神田駅」より徒歩3分
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className='text-2xl font-semibold text-[#1F2A44] mb-6'>地図</h3>
              <div>
                <iframe
                  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d362.33486368838004!2d139.76921303841033!3d35.693025458242865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188c03c74852d1%3A0xcae822f7dc037f42!2z44CSMTAxLTAwNDYg5p2x5Lqs6YO95Y2D5Luj55Sw5Yy656We55Sw5aSa55S677yS5LiB55uu77yR4oiS77yS77yTIOelnueUsOadseWxseODk-ODqw!5e0!3m2!1sja!2sjp!4v1752843572648!5m2!1sja!2sjp'
                  width='600'
                  height='450'
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading='lazy'
                  referrerPolicy='no-referrer-when-downgrade'
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
