# CLAUDE.md

If you find @~/.claude/CLAUDE.md , you should read it.

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクトドキュメント

このプロジェクトの詳細な仕様とルールは `.kiro/` ディレクトリに定義されています：

- `.kiro/steering/` - プロジェクト全体の設定
  - `language.md` - 言語とコミュニケーションスタイル
  - `product.md` - プロダクト概要と目的
  - `structure.md` - プロジェクト構造とファイル命名規則
  - `tech.md` - 技術スタックと開発コマンド
- `.kiro/specs/pokemon-pokedex/` - ポケモン図鑑アプリケーションの仕様
  - `requirements.md` - 機能要件と受け入れ基準
  - `design.md` - アーキテクチャ設計とコンポーネント構成
  - `tasks.md` - 実装計画とタスク一覧

**重要**: 開発時は必ずこれらのドキュメントを参照し、定義されたルールと仕様に従ってください。

## プロジェクト固有の設定

以下は `.kiro` に記載されていない、このプロジェクト固有の設定です：

### Biome設定の詳細

- シングルクォート、2スペースインデント、120文字の行幅
- 重要なルール: `noUnusedImports` (エラーレベル)、`noNonNullAssertion` (無効)
- インポートの自動整理

### TypeScript設定の詳細
- プロジェクト参照を使用（`tsconfig.app.json`と`tsconfig.node.json`で分離）
- Strictモードと追加チェック: `noUnusedLocals`、`noUnusedParameters`、`noFallthroughCasesInSwitch`

### パッケージ管理ルール
- 新しい依存関係を追加する際は、常に最新の安定版を固定バージョンで使用（^や~プレフィックスなし）
- 例: `bun add package-name@1.2.3` (×: `bun add package-name` や `bun add package-name@^1.2.3`)

## 重要な注意事項

- テストフレームワークは現在設定されていません
- メインエントリーポイントは `/src/main.tsx`
- BiomeはESLintとPrettierの両方を置き換えます - `bun check`と`bun check:fix`を使用してください
