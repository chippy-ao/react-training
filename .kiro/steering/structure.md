# プロジェクト構造

## ルートレベル
- ビルドツール、リンティング、開発用の設定ファイル
- `src/` - メインアプリケーションのソースコード
- `public/` - Viteによって提供される静的アセット
- `tools/` - 開発およびビルドスクリプト

## ソースコード構成 (`src/`)

### メインアプリケーション
- `main.tsx` - プロバイダーを含むアプリケーションのエントリーポイント
- `App.tsx` - ルートコンポーネント
- `index.css` - グローバルスタイル
- `App.css` - コンポーネント固有のスタイル

### アプリケーション層 (`src/app/`)
- `router/` - TanStack Routerの設定とルート定義
  - `routes/` - ファイルベースのルートコンポーネント
  - `routeTree.gen.ts` - 自動生成されたルートツリー（編集禁止）

### 共有層 (`src/shared/`)
- `api/` - API関連のコードと設定
  - `graphql/` - GraphQLクライアントのセットアップと操作
    - `gen/` - 自動生成されたGraphQL型（編集禁止）
    - `query/` - GraphQLクエリ定義（.graphqlファイル）
    - `graphql-client.ts` - GraphQLクライアント設定
    - `query-client.ts` - TanStack Queryクライアントのセットアップ
  - `index.ts` - APIのエクスポート

### アセット (`src/assets/`)
- 画像、アイコンなどの静的アセット

## コード生成
- **GraphQL型**: スキーマとクエリから `src/shared/api/graphql/gen/` に生成
- **ルートツリー**: ファイル構造から `src/app/router/routeTree.gen.ts` に生成
- 両方ともBiomeによって無視され、手動で編集すべきではありません

## ファイル命名規則
- Reactコンポーネント: PascalCase（例：`App.tsx`）
- ユーティリティと設定: kebab-case（例：`graphql-client.ts`）
- GraphQLクエリ: kebab-caseで `.graphql` 拡張子
- スタイル: コンポーネントと同じ名前で `.css` 拡張子

## インポート構成
- Biomeが自動的にインポートを整理
- 可能な限り `src/` からの絶対インポートを優先
- インポートのグループ化: 外部ライブラリ → 内部モジュール → 相対インポート