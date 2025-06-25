# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## コードベース概要

このプロジェクトは、Next.js 15.3.4とReact 19を使用したコーポレートサイトです。TypeScript、TailwindCSS v4、ESLintを採用した標準的なNext.js App Routerプロジェクト構成になっています。

## 開発コマンド

- **開発サーバー起動**: `npm run dev` (Turbopack使用)
- **本番ビルド**: `npm run build`
- **本番サーバー起動**: `npm start`
- **Lint実行**: `npm run lint`

## 技術スタック

- **フレームワーク**: Next.js 15.3.4 (App Router)
- **React**: v19.0.0
- **TypeScript**: v5
- **スタイリング**: TailwindCSS v4 (@tailwindcss/postcss)
- **リント**: ESLint v9 (next/core-web-vitals, next/typescript)
- **フォント**: Geist、Geist Mono

## プロジェクト構造

```
app/
├── layout.tsx       # ルートレイアウト
├── page.tsx         # ホームページ
├── globals.css      # グローバルスタイル
└── favicon.ico      # ファビコン
```

## 重要な設定

- **TypeScript**: strict モード有効、`@/*` パスエイリアス設定済み
- **ESLint**: Next.js推奨設定とTypeScript設定を使用
- **TailwindCSS**: v4のインライン設定とダークモード対応
- **フォント**: Geist フォントファミリーを変数として設定

## 開発時の注意点

- 開発サーバーはTurbopackを使用してパフォーマンス向上
- ダークモード対応済み（prefers-color-scheme）
- 画像最適化にNext.js Imageコンポーネントを使用
- フォント変数（--font-geist-sans、--font-geist-mono）が設定済み