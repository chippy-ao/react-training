# React Training Project

モダンなReactアプリケーション開発のためのトレーニングプロジェクトです。
Feature-Sliced Design (FSD) v2.1を採用し、スケーラブルで保守性の高いアーキテクチャを実現しています。

## 🚀 クイックスタート

### セットアップ

```bash
# 開発環境のセットアップ（mise使用）
mise bs

# 依存関係のインストール
bun install

# 開発サーバーの起動
bun dev
```

## 📁 プロジェクト構成

Feature-Sliced Design (FSD) v2.1に基づいた階層構造を採用しています。

```
src/
├── app/           # アプリケーション設定・プロバイダー
├── pages/         # ルーティングページ
├── widgets/       # 複合UIコンポーネント
├── features/      # ビジネス機能
├── entities/      # ビジネスエンティティ
└── shared/        # 共通ユーティリティ・UI
```

詳細は [アーキテクチャドキュメント](./docs/architecture.md) を参照してください。

## 🏗️ アーキテクチャ

### Feature-Sliced Design (FSD)

本プロジェクトでは、Feature-Sliced Design v2.1を採用しています。

#### レイヤー構造
1. **App** - アプリケーション全体の設定
2. **Pages** - ルーティング対象の画面
3. **Widgets** - 複合UIブロック
4. **Features** - ユーザー機能
5. **Entities** - ビジネスドメイン
6. **Shared** - 共通コード

#### 設計原則
- **依存関係ルール**: 上位レイヤーは下位レイヤーのみ参照可能
- **Public API**: 各モジュールは明確なインターフェースを公開
- **低結合・高凝集**: モジュール間の依存を最小限に

## 🛠️ 技術スタック

### コア技術
- **TypeScript** - 型安全な開発
- **React** - UIライブラリ
- **Vite** - 高速ビルドツール
- **Bun** - JavaScriptランタイム・パッケージマネージャー

### 主要ライブラリ
- **TanStack Router** - タイプセーフなルーティング
- **TanStack Query** - サーバー状態管理
- **Jotai** - グローバル状態管理
- **GraphQL** - APIクエリ言語
- **Zod** - スキーマバリデーション
- **Tailwind CSS** - ユーティリティファーストCSS
- **shadcn/ui** - UIコンポーネント

### 開発ツール
- **Biome** - Linter/Formatter
- **Vitest** - テストフレームワーク
- **Storybook** - コンポーネントカタログ
- **mise** - ランタイムバージョン管理

詳細は [技術スタックドキュメント](./docs/tech.md) を参照してください。

## 📝 開発コマンド

TBD

## 🔧 環境変数

TBD

## 🧪 テスト

### ユニットテスト

TBD

## 📚 ドキュメント

- [アーキテクチャ設計](./docs/architecture.md) - FSDアーキテクチャの詳細
- [FSD判断フロー](./docs/fsd-flow.md) - ファイルの作成場所の判断フロー
- [技術スタック](./docs/tech.md) - 使用技術と選定理由
- [APIクライアント設計](./docs/api-client-sample.md) - API抽象化の実装例

## 🤝 コントリビューション

### ブランチ戦略

- `main` - プロダクション環境
- `feature/GH-*` - 機能開発
- `topic/GH-*` - 機能開発が大きくなる際
- `fix/GH-*` - バグ修正

### コミット規約

[Conventional Commits](https://www.conventionalcommits.org/) に従ってください。

```
feat: 新機能追加
fix: バグ修正
docs: ドキュメント更新
style: コードスタイル修正
refactor: リファクタリング
test: テスト追加・修正
chore: ビルド・補助ツール変更
```
