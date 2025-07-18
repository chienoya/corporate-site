'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href: string;
}

export default function Breadcrumb() {
  const pathname = usePathname();

  // パスからパンくずリストを生成
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'ホーム', href: '/' }];

    if (pathname === '/') {
      return breadcrumbs;
    }

    // パスのマッピング
    const pathMap: { [key: string]: string } = {
      '/about': '会社概要',
      '/services': 'サービス・事業内容',
      '/news': 'ニュース・お知らせ',
      '/contact': 'お問い合わせ',
    };

    const pathSegments = pathname.split('/').filter(Boolean);
    let currentPath = '';

    pathSegments.forEach((segment) => {
      currentPath += `/${segment}`;
      const label = pathMap[currentPath] || segment;

      breadcrumbs.push({
        label,
        href: currentPath,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  // ホームページでは表示しない
  if (pathname === '/') {
    return null;
  }

  return (
    <nav className='bg-gray-100 py-4' aria-label='パンくずリスト'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <ol className='flex items-center space-x-2 text-sm'>
          {breadcrumbs.map((item, index) => (
            <li key={item.href} className='flex items-center'>
              {index > 0 && (
                <svg
                  className='w-4 h-4 text-gray-400 mr-2'
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
              )}
              {index === breadcrumbs.length - 1 ? (
                <span className='text-gray-500' aria-current='page'>
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className='text-[#5B9FED] hover:text-[#1F2A44] transition-colors'
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
