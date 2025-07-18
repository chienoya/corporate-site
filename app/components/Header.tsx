'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Image } from './Image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: '/', label: 'ホーム' },
    { href: '/about', label: '会社概要' },
    { href: '/services', label: 'サービス' },
    { href: '/news', label: 'ニュース' },
    { href: '/contact', label: 'お問い合わせ' },
  ];

  return (
    <header className='bg-white shadow-sm sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center py-4'>
          {/* ロゴ */}
          <Link href='/' className='flex items-center'>
            <Image
              src='/corporate-logo.png'
              alt='株式会社知恵乃屋ロゴ'
              className='mr-3'
              height={32}
              width={148}
            />
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className='hidden md:flex space-x-8'>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className='text-[#1F2A44] hover:text-[#5B9FED] transition-colors duration-200 font-medium'
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* モバイルメニューボタン */}
          <button
            className='md:hidden flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors'
            onClick={toggleMenu}
            aria-label='メニューを開く'
          >
            <svg
              className='w-6 h-6 text-[#1F2A44]'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルメニュー */}
        {isMenuOpen && (
          <div className='md:hidden py-4 border-t border-gray-200'>
            <nav className='flex flex-col space-y-3'>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className='text-[#1F2A44] hover:text-[#5B9FED] transition-colors duration-200 font-medium py-2'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
