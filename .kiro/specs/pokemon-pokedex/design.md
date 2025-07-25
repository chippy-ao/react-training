# 設計書

## 概要

ポケモン図鑑アプリケーションは、PokéAPI GraphQLエンドポイントを使用してポケモンデータを取得し、ユーザーがポケモンを検索・閲覧できるReact学習アプリケーションです。FSD（Feature-Sliced Design）アーキテクチャに準拠し、モダンなReact開発パターンを実践します。

## アーキテクチャ

### FSD（Feature-Sliced Design）レイヤー構成

```
src/
├── app/           # アプリケーション層 - 初期化とプロバイダー
├── pages/         # ページ層 - ルートコンポーネント
├── widgets/       # ウィジェット層 - 独立したUIブロック
├── features/      # フィーチャー層 - ビジネスロジック
├── entities/      # エンティティ層 - ビジネスエンティティ
└── shared/        # 共有層 - 再利用可能なコード
```

### 技術スタック

- **React 19** with TypeScript - UI開発
- **TanStack Router** - ファイルベースルーティング
- **TanStack React Query** - サーバー状態管理
- **Jotai** - グローバル状態管理（新規追加）
- **GraphQL** with `graphql-request` - API通信
- **base-ui-components** - 基本UIコンポーネントライブラリ
- **Tailwind CSS** - ユーティリティファーストCSS
- **Vite** - ビルドツール
- **Biome** - リンティング・フォーマット

## コンポーネントとインターフェース

### ページコンポーネント

#### PokemonListPage (`pages/pokemon-list/`)
- ポケモンリスト表示のメインページ
- 検索・フィルタリング機能を統合
- レスポンシブレイアウト対応

#### PokemonDetailPage (`pages/pokemon-detail/`)
- 個別ポケモンの詳細情報表示
- URLパラメータからポケモンIDを取得
- 戻るボタンとナビゲーション

### ウィジェットコンポーネント

#### PokemonListWidget (`widgets/pokemon-list/`)
- ポケモンリスト全体の表示制御
- 検索バー、フィルター、リストを統合
- ローディング・エラー状態の管理

#### PokemonDetailWidget (`widgets/pokemon-detail/`)
- ポケモン詳細情報の表示制御
- 統計情報、能力、基本情報を統合
- ローディング・エラー状態の管理

### フィーチャーコンポーネント

#### PokemonSearch (`features/pokemon-search/`)
- 名前による検索機能
- リアルタイム検索（デバウンス付き）
- 検索状態の管理

#### PokemonTypeFilter (`features/pokemon-type-filter/`)
- タイプによるフィルタリング機能
- 複数選択対応
- フィルター状態の管理

### エンティティコンポーネント

#### PokemonCard (`entities/pokemon/ui/PokemonCard`)
- 個別ポケモンのカード表示
- 画像、名前、タイプを表示
- クリック時の詳細ページ遷移

#### PokemonInfo (`entities/pokemon/ui/PokemonInfo`)
- ポケモンの基本情報表示
- 身長、体重、経験値などの詳細

#### PokemonStats (`entities/pokemon/ui/PokemonStats`)
- ポケモンの統計情報表示
- HP、攻撃、防御などのステータス

### ウィジェット（再利用可能）コンポーネント

#### LoadingSpinner (`widgets/ui/LoadingSpinner`)
- base-ui-componentsのSpinnerを使用した汎用ローディング表示
- Tailwind CSSでスタイリング

#### ErrorMessage (`widgets/ui/ErrorMessage`)
- base-ui-componentsのAlertを使用したエラーメッセージ表示
- Tailwind CSSでスタイリング

#### SearchInput (`widgets/ui/SearchInput`)
- base-ui-componentsのInputを使用した検索入力フィールド
- Tailwind CSSでスタイリング

#### FilterSelect (`widgets/ui/FilterSelect`)
- base-ui-componentsのSelectを使用したフィルター選択
- Tailwind CSSでスタイリング

## データモデル

### Pokemon型定義

```typescript
interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  baseExperience?: number;
  types: PokemonType[];
  abilities: PokemonAbility[];
  stats: PokemonStat[];
  sprites: PokemonSprites;
}

interface PokemonType {
  id: number;
  name: string;
  slot: number;
}

interface PokemonAbility {
  id: number;
  name: string;
  isHidden: boolean;
  slot: number;
}

interface PokemonStat {
  id: number;
  name: string;
  baseStat: number;
  effort: number;
}

interface PokemonSprites {
  frontDefault?: string;
  frontShiny?: string;
}
```

### 状態管理モデル

#### ローカル状態（React useState）
- コンポーネント内の一時的な状態
- フォーム入力値
- UI状態（開閉状態など）

#### グローバル状態（Jotai）
- 検索キーワード
- 選択されたタイプフィルター
- ユーザー設定（言語など）

#### サーバー状態（TanStack Query）
- ポケモンリストデータ
- ポケモン詳細データ
- キャッシュ管理

## エラーハンドリング

### GraphQLエラー処理
- ネットワークエラーの検出と表示
- データ取得失敗時のフォールバック
- リトライ機能の実装

### ルーティングエラー処理
- 404ページの実装
- 不正なポケモンIDへの対応
- ナビゲーションエラーの処理

### バリデーションエラー処理
- 検索入力の検証
- フィルター選択の検証
- ユーザー入力のサニタイズ

## テスト戦略

### 単体テスト
- コンポーネントの描画テスト
- フック関数のロジックテスト
- ユーティリティ関数のテスト

### 統合テスト
- ページ全体の動作テスト
- API通信を含むフローテスト
- ルーティングのテスト

### E2Eテスト
- ユーザーシナリオの自動テスト
- 検索・フィルタリング機能のテスト
- レスポンシブデザインのテスト

## パフォーマンス最適化

### コード分割
- ページレベルでの動的インポート
- 重いコンポーネントの遅延読み込み

### データ最適化
- GraphQLクエリの最適化
- 画像の遅延読み込み
- キャッシュ戦略の実装

### レンダリング最適化
- React.memoの適切な使用
- useMemoとuseCallbackの活用
- 仮想化リストの検討（大量データ時）

## レスポンシブデザイン

### ブレークポイント（Tailwind CSS標準）
- モバイル: デフォルト（~640px）
- タブレット: md（768px以上）
- デスクトップ: lg（1024px以上）
- 大画面: xl（1280px以上）

### レイアウト戦略
- Tailwind CSSのレスポンシブユーティリティを活用
- モバイルファーストアプローチ
- base-ui-componentsの組み込みレスポンシブ機能を活用
- タッチフレンドリーなUI要素

### スタイリング戦略
- Tailwind CSSのユーティリティクラスを使用
- base-ui-componentsのデフォルトスタイルをベースに拡張
- カスタムCSSは最小限に抑制
- デザインシステムの一貫性を保持