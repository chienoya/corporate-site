'use client';

import { useState } from 'react';

// メタデータはクライアントコンポーネントでは使用できないため、別ファイルで管理するかlayout.tsxで設定

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  subject: string;
  message: string;
  privacy: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  company?: string;
  phone?: string;
  subject?: string;
  message?: string;
  privacy?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // 必須項目のバリデーション
    if (!formData.name.trim()) {
      newErrors.name = 'お名前を入力してください。';
    } else if (formData.name.length < 2) {
      newErrors.name = 'お名前は2文字以上で入力してください。';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'メールアドレスを入力してください。';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = '正しいメールアドレスを入力してください。';
    }

    if (!formData.company.trim()) {
      newErrors.company = '会社名を入力してください。';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'お問い合わせ内容を選択してください。';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'お問い合わせ詳細を入力してください。';
    } else if (formData.message.length < 10) {
      newErrors.message = 'お問い合わせ詳細は10文字以上で入力してください。';
    }

    // 電話番号のバリデーション（任意項目）
    if (formData.phone && !/^[0-9\-\+\(\)\s]+$/.test(formData.phone)) {
      newErrors.phone = '正しい電話番号を入力してください。';
    }

    // プライバシーポリシー同意のバリデーション
    if (!formData.privacy) {
      newErrors.privacy = 'プライバシーポリシーに同意してください。';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // エラーメッセージをクリア
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    try {
      // 実際の送信処理はここに実装
      // 現在はモックの処理
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitMessage(
        'お問い合わせありがとうございます。担当者より3営業日以内にご連絡いたします。',
      );
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        privacy: false,
      });
    } catch {
      setSubmitMessage('送信中にエラーが発生しました。しばらく経ってから再度お試しください。');
    } finally {
      setIsSubmitting(false);
    }
  };

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

      {/* お問い合わせフォームセクション */}
      <section className='py-20'>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='bg-white rounded-lg shadow-lg p-8'>
            <form onSubmit={handleSubmit} className='space-y-6'>
              {/* お名前 */}
              <div>
                <label htmlFor='name' className='block text-sm font-medium text-[#1F2A44] mb-2'>
                  お名前 <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B9FED] ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder='山田 太郎'
                />
                {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
              </div>

              {/* メールアドレス */}
              <div>
                <label htmlFor='email' className='block text-sm font-medium text-[#1F2A44] mb-2'>
                  メールアドレス <span className='text-red-500'>*</span>
                </label>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B9FED] ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder='example@company.com'
                />
                {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
              </div>

              {/* 会社名 */}
              <div>
                <label htmlFor='company' className='block text-sm font-medium text-[#1F2A44] mb-2'>
                  会社名 <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  id='company'
                  name='company'
                  value={formData.company}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B9FED] ${
                    errors.company ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder='株式会社サンプル'
                />
                {errors.company && <p className='text-red-500 text-sm mt-1'>{errors.company}</p>}
              </div>

              {/* 電話番号 */}
              <div>
                <label htmlFor='phone' className='block text-sm font-medium text-[#1F2A44] mb-2'>
                  電話番号
                </label>
                <input
                  type='tel'
                  id='phone'
                  name='phone'
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B9FED] ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder='03-1234-5678'
                />
                {errors.phone && <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>}
              </div>

              {/* お問い合わせ内容 */}
              <div>
                <label htmlFor='subject' className='block text-sm font-medium text-[#1F2A44] mb-2'>
                  お問い合わせ内容 <span className='text-red-500'>*</span>
                </label>
                <select
                  id='subject'
                  name='subject'
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B9FED] ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value=''>選択してください</option>
                  <option value='software-development'>ソフトウェア開発のご相談</option>
                  <option value='ai-development'>AI開発のご相談</option>
                  <option value='consulting'>コンサルティングのご相談</option>
                  <option value='quote'>お見積りのご依頼</option>
                  <option value='other'>その他</option>
                </select>
                {errors.subject && <p className='text-red-500 text-sm mt-1'>{errors.subject}</p>}
              </div>

              {/* お問い合わせ詳細 */}
              <div>
                <label htmlFor='message' className='block text-sm font-medium text-[#1F2A44] mb-2'>
                  お問い合わせ詳細 <span className='text-red-500'>*</span>
                </label>
                <textarea
                  id='message'
                  name='message'
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5B9FED] ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder='プロジェクトの詳細、ご要望、ご質問などをご記入ください。'
                />
                {errors.message && <p className='text-red-500 text-sm mt-1'>{errors.message}</p>}
              </div>

              {/* プライバシーポリシー同意 */}
              <div>
                <label className='flex items-start space-x-3'>
                  <input
                    type='checkbox'
                    name='privacy'
                    checked={formData.privacy}
                    onChange={handleChange}
                    className='mt-1 w-5 h-5 text-[#5B9FED] border-gray-300 rounded focus:ring-[#5B9FED]'
                  />
                  <span className='text-sm text-gray-700'>
                    <span className='text-red-500'>*</span> プライバシーポリシーに同意します。
                    お預かりした個人情報は、お問い合わせへの回答以外には使用いたしません。
                  </span>
                </label>
                {errors.privacy && <p className='text-red-500 text-sm mt-1'>{errors.privacy}</p>}
              </div>

              {/* 送信ボタン */}
              <div className='pt-6'>
                <button
                  type='submit'
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold text-white transition-colors ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-[#5B9FED] hover:bg-[#1F2A44]'
                  }`}
                >
                  {isSubmitting ? '送信中...' : 'お問い合わせを送信'}
                </button>
              </div>

              {/* 送信結果メッセージ */}
              {submitMessage && (
                <div
                  className={`p-4 rounded-lg ${
                    submitMessage.includes('エラー')
                      ? 'bg-red-100 text-red-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {submitMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* その他のお問い合わせ方法 */}
      <section className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <h2 className='text-3xl md:text-4xl font-bold text-[#1F2A44] mb-6'>
              その他のお問い合わせ方法
            </h2>
            <p className='text-lg text-gray-600'>
              お急ぎの場合は、以下の方法でもお問い合わせいただけます
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-gray-50 rounded-lg p-8 text-center'>
              <div className='w-16 h-16 bg-[#5B9FED] rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8 text-white'
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
              <h3 className='text-xl font-semibold text-[#1F2A44] mb-2'>メール</h3>
              <p className='text-gray-600 mb-4'>メールでのお問い合わせも承っております</p>
              <a
                href='mailto:info@chienoya.co.jp'
                className='text-[#5B9FED] hover:text-[#1F2A44] transition-colors'
              >
                info@chienoya.co.jp
              </a>
            </div>

            <div className='bg-gray-50 rounded-lg p-8 text-center'>
              <div className='w-16 h-16 bg-[#5B9FED] rounded-full flex items-center justify-center mx-auto mb-4'>
                <svg
                  className='w-8 h-8 text-white'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-semibold text-[#1F2A44] mb-2'>オフィス</h3>
              <p className='text-gray-600 mb-4'>直接お越しいただくことも可能です（要予約）</p>
              <p className='text-gray-700'>
                〒101-0046
                <br />
                東京都千代田区神田多町２丁目１－２３
                <br />
                神田東山ビル７Ｆ・８Ｆ
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
