import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'お問い合わせ | 株式会社知恵乃屋',
  description:
    '株式会社知恵乃屋へのお問い合わせページです。プロジェクトのご相談、お見積りなど、お気軽にお問い合わせください。',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
