# アーキテクチャ設計

このプロジェクトでは **Feature-Sliced Design (FSD) v2.1** を採用しています。
FSDは、大規模なフロントエンドアプリケーションの保守性と拡張性を高めるためのアーキテクチャ設計手法です。

## 📁 フォルダ構成

```
src/
├── app/           # アプリケーション全体の設定とエントリーポイント
├── pages/         # ページコンポーネント（ルーティング対象）
├── widgets/       # 複雑で再利用可能なUIブロック
├── features/      # ユーザー操作とビジネスロジック
├── entities/      # ビジネスエンティティとドメインモデル
└── shared/        # 共通のユーティリティとUIコンポーネント
```

## 🔧 レイヤー構造

### 1. App レイヤー
- **役割**: アプリケーション全体の初期化と設定
- **内容**: 
  - ルーター設定
  - グローバルストア（状態管理）
  - グローバルスタイル
  - プロバイダーのラッピング
  - エントリーポイント

### 2. Pages レイヤー
- **役割**: ルーティング対象となる画面の実装
- **内容**:
  - 各ページのUIコンポーネント
  - ページ固有のデータ取得ロジック
  - レイアウト構成
- **例**: `HomePage`, `UserProfilePage`, `SettingsPage`

### 3. Widgets レイヤー
- **役割**: 複数のfeatureを組み合わせた大きなUIブロック
- **内容**:
  - 複雑で再利用可能なUIコンポーネント
  - 複数のfeatureの統合
- **例**: `Header`, `Sidebar`, `ArticleCard`

### 4. Features レイヤー
- **役割**: ユーザーが実行できる操作やインタラクション
- **内容**:
  - ユーザーアクション（クリック、送信など）
  - ビジネスロジック
  - フォーム処理
  - API呼び出し
- **例**: `auth`, `create-post`, `toggle-theme`

### 5. Entities レイヤー
- **役割**: ビジネスドメインの中核概念
- **内容**:
  - データモデル
  - ビジネスエンティティのUI表現
  - エンティティ関連のAPI
- **例**: `user`, `post`, `comment`

### 6. Shared レイヤー
- **役割**: アプリケーション全体で共有される基盤コード
- **内容**:
  - UIキット（共通コンポーネント）
  - ユーティリティ関数
  - API クライアント
  - 設定ファイル
  - カスタムフック
- **例**: `ui/Button`, `lib/axios`, `hooks/useDebounce`

## 🏗️ スライスとセグメント

### スライス
各レイヤー内で、ビジネスドメインに基づいてコードをグループ化する単位です。

```
features/
├── authentication/      # 認証機能スライス
├── create-article/      # 記事作成スライス
└── search/             # 検索機能スライス
```

### セグメント
各スライス内で、技術的な目的に基づいてコードを整理する単位です。

```
features/authentication/
├── ui/         # UIコンポーネント
├── api/        # バックエンドとの通信
├── model/      # 状態管理とビジネスロジック
├── lib/        # ヘルパー関数
└── index.ts    # Public API（外部公開インターフェース）
```

### 標準セグメント
- **ui**: React コンポーネント、スタイル
- **api**: API呼び出し、データ取得
- **model**: 状態管理、ビジネスロジック、バリデーション
- **lib**: ユーティリティ関数、ヘルパー
- **config**: 設定値、定数

## 📐 設計原則

### 1. 依存関係のルール
**上位レイヤーは下位レイヤーのみをインポートできる**

```
✅ 正しい例:
- pages → widgets, features, entities, shared
- features → entities, shared
- entities → shared

❌ 間違った例:
- shared → features（下位から上位への参照）
- entities → features（同上）
```

### 2. Public API
各スライスは `index.ts` を通じて外部に公開するインターフェースを明確に定義します。

```typescript
// features/authentication/index.ts
export { LoginForm } from './ui/LoginForm';
export { useAuth } from './model/useAuth';
export { authApi } from './api/authApi';
```

### 3. 低結合・高凝集
- スライス間の依存を最小限に保つ
- 関連する機能を同じスライスにまとめる
- 各スライスは独立して開発・テスト可能

## 🚀 開発ガイドライン

### 新機能の追加時の判断基準

1. **共通コンポーネント → `shared/ui`**
   - 複数の場所で使われる基本的なUI要素

2. **ユーザーアクション → `features`**
   - ユーザーが実行できる操作
   - フォーム、ボタンアクション等

3. **ビジネスオブジェクト → `entities`**
   - アプリケーションの中核となるデータモデル

4. **画面全体 → `pages`**
   - ルーティング対象となる画面

5. **複合UI → `widgets`**
   - 複数のfeatureを組み合わせた大きなUIブロック

### 命名規則

- **レイヤー**: 小文字（`app`, `pages`, `features`）
- **スライス**: ケバブケース（`user-profile`, `create-post`）
- **セグメント**: 小文字（`ui`, `api`, `model`）
- **ファイル**: PascalCase（コンポーネント）、camelCase（その他）

## 📚 参考資料

- [Feature-Sliced Design 公式ドキュメント](https://feature-sliced.github.io/)
- [FSD v2.1 リファレンス](https://feature-sliced.github.io/documentation/ja/docs/reference)