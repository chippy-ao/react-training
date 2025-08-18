# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 🚀 クイックスタート

```bash
# 初期セットアップ（mise、git hooks、依存関係を一括セットアップ）
mise bs

# 開発サーバー起動
bun dev
```

## 📚 ドキュメント参照

### 📁 アーキテクチャ
- @./docs/architecture.md を参照してください。

### 🗂️ FSD 2.1 の判断フロー
- @./docs/fsd-flow.md を参照してください。

### ⚙️ 技術選定
- @./docs/tech.md を参照してください。

## 🔧 開発環境・ツール

### パッケージ管理
- このプロジェクトでは `bun` を使用しているため、パッケージにまつわるものは `bun` もしくは `bunx` で実行します。
- プロジェクトの `bun` については `mise` でバージョン管理をしています。
- 各種パッケージのスクリプトは @./package.json の scripts を参照してください。
- ライブラリのバージョンについてはチルダやキャレットは使用せず、 `x.x.x` と固定化し、可能な限り最新バージョンを使用してください。

### 重要な注意事項
- `src/app/routes/routeTree.gen.ts` は TanStack Router による自動生成ファイルのため、編集しないでください。

## 🌿 Git運用規則

### ブランチ戦略
- `main` - プロダクション環境
- `feature/GH-*` - 機能開発をする際には `main` を元にIssue番号でブランチを切ります
- `topic/GH-*` - 機能開発が大きくなる際には `feature` を元にSub-Issue単位に細分化します
- `fix/GH-*` - バグ修正をする際には `main` を元にIssue番号でブランチを切ります

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