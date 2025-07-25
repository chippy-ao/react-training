# 技術スタック

## コア技術
- **React 19** with TypeScript - UI開発用
- **Vite** - ビルドツールおよび開発サーバー
- **Bun** - パッケージマネージャーおよびランタイム
- **TypeScript 5.8** - 型安全性のため

## 主要ライブラリ・フレームワーク
- **TanStack Router** - 自動コード分割を伴うファイルベースルーティング
- **TanStack React Query** - サーバー状態管理
- **GraphQL** with `graphql-request` クライアント
- **GraphQL Code Generator** - 型安全なAPI操作のため

## 開発ツール
- **Biome** - リンティングとフォーマット（ESLint/Prettierの代替）
- **Lefthook** - Gitフック
- **Commitlint** - 従来のコミット形式
- **Mise** - ツールバージョン管理

## よく使用するコマンド

### 開発
```bash
bun run dev          # 開発サーバーを開始
bun run build        # 本番用ビルド
bun run preview      # 本番ビルドのプレビュー
```

### コード品質
```bash
bun run check        # Biomeリンター/フォーマッターチェックを実行
bun run check:fix    # リンティング/フォーマットの問題を自動修正
```

### GraphQL
```bash
bun run codegen      # GraphQLスキーマからTypeScript型を生成
```

### メンテナンス
```bash
bun run clean        # node_modulesとビルド成果物をクリーン
```

## GraphQLセットアップ
- スキーマ: PokéAPI GraphQLエンドポイント（`https://graphql.pokeapi.co/v1beta2`）
- 生成された型: `src/shared/api/graphql/gen/`
- クエリファイル: `src/shared/api/graphql/query/`