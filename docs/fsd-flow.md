# Feature-Sliced Design レイヤー判断フローチャート（Pages First版）

## 1. 全体判断フロー（Pages First）

```
新しいコードを書く必要がある
├─ アプリケーション全体の設定・初期化？
│  └─ Yes → App層
├─ 特定のページで使用するコード？
│  └─ Yes → Pages層（まずはここから！）
├─ 複数の場所で再利用が必要？
│  ├─ Yes
│  │  ├─ ビジネスロジックを含まない汎用機能？
│  │  │  └─ Yes → Shared層
│  │  ├─ ビジネスエンティティの表現？
│  │  │  └─ Yes → Entities層
│  │  ├─ 単一のビジネスアクション？
│  │  │  └─ Yes → Features層
│  │  └─ 完全なユースケースを提供する複雑な機能？
│  │     └─ Yes → Widgets層
│  └─ No → Pages層に留める
└─ 最初から明らかに再利用される汎用コンポーネント？
   └─ Yes → Shared層
```

## 2. Pages First の実践的な判断フロー

```
新機能を実装する
├─ Step 1: まずPages層に実装
│  └─ 動作確認・要件を満たす
│
├─ Step 2: 他のページでも必要になった？
│  ├─ No → Pages層に保持（終了）
│  └─ Yes → どこに移動すべきか判断
│     │
│     ├─ 純粋なUIコンポーネント？
│     │  └─ Yes → Shared/ui へ
│     │
│     ├─ エンティティの表示/フォーム？
│     │  └─ Yes → Entities/ui へ
│     │
│     ├─ 特定のアクション（作成、削除等）？
│     │  └─ Yes → Features へ
│     │
│     └─ 複雑な機能セット？
│        └─ Yes → Widgets へ
```

## 3. 初期実装時の判断（例外ケース）

```
新機能を実装する（Pages First の例外）
├─ 明らかにアプリ全体の設定？
│  └─ Yes → 最初からApp層
│
├─ 明らかに汎用的なUIコンポーネント（Button等）？
│  └─ Yes → 最初からShared層
│
├─ 既存エンティティの新しい表現方法？
│  └─ Yes → 最初からEntities層
│
└─ それ以外 → Pages層から開始！
```

## 4. リファクタリング時期の判断

```
Pages層にコードがある
├─ 2箇所目で使用することになった
│  └─ すぐに下位レイヤーへ移動を検討
│
├─ コードが大きくなってきた（100行超）
│  └─ 分割して一部を下位レイヤーへ
│
├─ 明確な責務が見えてきた
│  └─ 適切なレイヤーへ移動
│
└─ 1つのページでしか使わない
   └─ Pages層に保持（問題なし！）
```

## 5. App層の判断フロー

```
このコードは...
├─ アプリケーションの初期化処理？
│  └─ Yes → App層
├─ グローバルなプロバイダー（Router、Store、Theme）？
│  └─ Yes → App層
├─ グローバルスタイル・リセットCSS？
│  └─ Yes → App層
├─ 環境設定・定数定義？
│  └─ Yes → App層
└─ No → 他のレイヤーへ
```

### App層の例
```
app/
├── providers/          # Redux、React Query プロバイダー
├── routes/            # ルーティング設定
├── styles/            # グローバルCSS
└── config/            # 環境変数、定数
```

## 6. Shared層の判断フロー

```
このコードは...
├─ どのレイヤーからも使われる可能性がある？
│  ├─ Yes
│  │  ├─ ビジネスロジックを含まない？
│  │  │  └─ Yes → Shared層
│  │  └─ No → 適切なビジネスレイヤーへ
│  └─ No
│     ├─ 汎用UIコンポーネント（Button、Modal等）？
│     │  └─ Yes → Shared層
│     └─ 汎用ユーティリティ（日付処理、バリデーション等）？
│        └─ Yes → Shared層
```

### Shared層の例
```
shared/
├── ui/               # Button、Input、Modal
├── lib/              # formatDate、validateEmail
├── api/              # APIクライアント設定
└── config/           # 共通設定
```

## 7. Entities層の判断フロー

```
このコードは...
├─ ビジネスエンティティ（User、Product等）に関連？
│  ├─ Yes
│  │  ├─ エンティティの表現（型、スキーマ、UI）？
│  │  │  └─ Yes → Entities層
│  │  ├─ エンティティ固有のビジネスロジック？
│  │  │  └─ Yes → Entities層
│  │  └─ CRUD操作の抽象化？
│  │     └─ Yes → Entities層
│  └─ No → 他のレイヤーへ
```

### Entities層の例
```
entities/
└── user/
    ├── ui/           # UserAvatar、UserCard
    ├── model/        # User型、userSchema
    └── api/          # userApi（CRUD操作）
```

## 8. Features層の判断フロー

```
このコードは...
├─ 単一のビジネスアクション？
│  ├─ Yes
│  │  ├─ ユーザーが実行できる操作？
│  │  │  └─ Yes → Features層
│  │  └─ ビジネス価値を生む機能？
│  │     └─ Yes → Features層
│  └─ No
│     ├─ 複数の機能を組み合わせた複雑な機能？
│     │  └─ Yes → Widgets層へ
│     └─ 単なる表示？
│        └─ Yes → Entities層へ
```

### Features層の例
```
features/
├── createPost/       # 投稿作成
├── likePost/         # いいね機能
├── authentication/   # ログイン・ログアウト
└── searchProducts/   # 商品検索
```

## 9. Widgets層の判断フロー（詳細版）

```
このコードは...
├─ 完全なユースケースを提供？
│  ├─ Yes
│  │  ├─ 複数のFeatureを組み合わせている？
│  │  │  └─ Yes → Widgets層
│  │  ├─ 独自の複雑な状態管理が必要？
│  │  │  └─ Yes → Widgets層
│  │  └─ 複数ページで再利用される？
│  │     └─ Yes → Widgets層
│  └─ No
│     ├─ 単一の機能？
│     │  └─ Yes → Features層
│     └─ ページ固有の複雑な機能？
│        └─ Yes → Pages層（v2.1推奨）
```

### Widgets層の例
```
widgets/
├── shoppingCart/     # カート全機能
├── commentSection/   # コメント投稿・表示・編集
├── userDashboard/    # ユーザーダッシュボード
└── searchFilters/    # 検索＋フィルター＋結果表示
```

## 10. Pages層の判断フロー

```
このコードは...
├─ 特定のページ/ルートに固有？
│  ├─ Yes
│  │  ├─ 他のページで再利用の可能性？
│  │  │  ├─ No → Pages層に保持
│  │  │  └─ Yes
│  │  │     ├─ 複雑で完全な機能？
│  │  │     │  └─ Yes → Widgets層へ移動
│  │  │     └─ 単一のアクション？
│  │  │        └─ Yes → Features層へ移動
│  │  └─ ページのレイアウト・構成？
│  │     └─ Yes → Pages層
│  └─ No → 他のレイヤーへ
```

### Pages層の例（v2.1）
```
pages/
└── products/
    └── detail/
        ├── ui/       # ページレイアウト、固有のUI
        ├── model/    # ページ固有の状態管理
        └── api/      # ページ固有のAPI呼び出し
```

## 11. 段階的な移行判断

```
Pages層にコードがある
├─ 他のページでも必要になった？
│  ├─ Yes
│  │  ├─ 完全なユースケース？
│  │  │  └─ Yes → Widgets層へ
│  │  ├─ 単一のアクション？
│  │  │  └─ Yes → Features層へ
│  │  ├─ エンティティの表現？
│  │  │  └─ Yes → Entities層へ
│  │  └─ 汎用的なユーティリティ？
│  │     └─ Yes → Shared層へ
│  └─ No → Pages層に保持
```

## 12. 実践例：お知らせ作成機能

```
初期実装（すべてPages層）
pages/
└── announcements/
    └── create/
        ├── ui/
        │   ├── CreateAnnouncementPage.tsx
        │   ├── AnnouncementForm.tsx      # 最初はここ
        │   └── PreviewDialog.tsx         # 最初はここ
        └── model/
            └── useCreateAnnouncement.ts  # 最初はここ

↓ 編集ページでも必要になった

リファクタリング後
pages/
└── announcements/
    └── create/
        └── ui/
            └── CreateAnnouncementPage.tsx

entities/
└── announcement/
    └── ui/
        └── AnnouncementForm.tsx  # 移動

features/
└── createAnnouncement/
    └── model/
        └── useCreateAnnouncement.ts  # 移動

shared/
└── ui/
    └── PreviewDialog.tsx  # 汎用的なので移動
```
