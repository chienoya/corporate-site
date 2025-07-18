export default function StructuredData() {
  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: '株式会社知恵乃屋',
    url: 'https://chienoya.co.jp',
    logo: 'https://chienoya.co.jp/logo.png',
    description: 'ソフトウェア及びAIの受託開発、コンサルティング、AIサービスの企画・開発を行う会社',
    foundingDate: '2025-04-01',
    founder: {
      '@type': 'Person',
      name: '上島 侑士',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '神田多町２丁目１－２３ 神田東山ビル７Ｆ・８Ｆ',
      addressLocality: '千代田区',
      addressRegion: '東京都',
      postalCode: '101-0046',
      addressCountry: 'JP',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+81-3-xxxx-xxxx',
      contactType: 'customer service',
      email: 'info@chienoya.co.jp',
    },
    sameAs: ['https://chienoya.co.jp'],
    services: ['ソフトウェア開発', 'AI開発', 'システム開発コンサルティング'],
  };

  const websiteData = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: '株式会社知恵乃屋',
    url: 'https://chienoya.co.jp',
    description:
      'ソフトウェア及びAIの受託開発、コンサルティング、AIサービスの企画・開発を行う株式会社知恵乃屋のコーポレートサイト',
    publisher: {
      '@type': 'Organization',
      name: '株式会社知恵乃屋',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://chienoya.co.jp/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteData),
        }}
      />
    </>
  );
}
