# FumigApp - 農薬散布と気象管理

## 📌 概要

**FumigApp** は、農業分野における農薬散布と航空アプリケーションの管理を目的としたアプリケーションです。マイクロサービスアーキテクチャを採用しており、その中でも主要なコンポーネントの一つが **気象サービス** であり、OpenWeatherMap などの外部プロバイダーからリアルタイムの気象データを取得します。

> **他の言語をお探しですか？** スペイン語のドキュメントは `README_es.md`、英語のドキュメントは `README.md` をご覧ください。

## 🚀 主な機能

- **気象マイクロサービス:** リアルタイムの気象データを取得。
- **集中型 HTTP クライアント:** `axios` を使用し、リクエストとレスポンスのインターセプターを実装。
- **イベントログ:** `winston` を使用したログ記録。
- **エラーハンドリング:** ミドルウェアを使用し、一貫したレスポンスを保証。
- **依存性注入:** 複数の気象プロバイダーをサポートするための汎用インターフェースを利用。

## 📁 プロジェクト構成

```
src/
├── app.ts                # メインのExpressサーバーファイル
├── config/               # アプリケーション設定
│   ├── config.ts         # 環境変数の管理
│   ├── configKeys.ts     # 設定キーの定義
│   ├── logger.ts         # Winstonを使用したロガー設定
├── controllers/          # Expressのコントローラー
│   ├── WeatherController.ts
├── middleware/           # Expressのミドルウェア
│   ├── errorHandler.ts   # グローバルエラーハンドリングミドルウェア
├── persistence/          # 永続化モジュール（開発中）
│   ├── WeatherRepository.ts
├── providers/            # 気象データプロバイダー
│   ├── IWeatherProvider.ts   # プロバイダーインターフェース
│   ├── OpenWeatherMapProvider.ts  # OpenWeatherMapの実装
├── routes/               # ルートの定義
│   ├── weather.routes.ts
├── services/             # ビジネスロジック
│   ├── WeatherService.ts
├── utils/                # ユーティリティ関数
│   ├── httpClient.ts     # Axiosを使用したHTTPクライアントとロギング
└── .env                  # 環境変数（リポジトリには含まれません）
```

## 🛠 インストールとセットアップ

### 1️⃣ リポジトリをクローン

```bash
git clone https://github.com/youruser/fumigapp.git
cd fumigapp
```

### 2️⃣ 依存関係をインストール

```bash
npm install
```

### 3️⃣ 環境変数の設定

プロジェクトのルートディレクトリに `.env` ファイルを作成し、以下の内容を追加:

```ini
PORT=3000
OPENWEATHERMAP_KEY=your_openweathermap_api_key
OPENWEATHERMAP_URL=https://api.openweathermap.org/data/2.5/weather?q={location}&appid={apiKey}
```

### 4️⃣ サーバーの起動

```bash
npm start
```

## 🔥 利用可能なエンドポイント

### 🌦 現在の天気を取得

```http
GET /api/weather?location={city}
```

**レスポンス例:**

```json
{
  "temperature": "22°C",
  "humidity": "78%",
  "description": "小雨"
}
```

### 🧪 ダミーエンドポイント

```http
GET /api/weather/dummy
```

**レスポンス例:**

```json
{
  "message": "Hello World"
}
```

## 🏗 使用技術

- **Node.js** - JavaScript 実行環境
- **Express.js** - REST API を構築するためのフレームワーク
- **TypeScript** - JavaScript の静的型付け
- **Axios** - 気象データを取得する HTTP クライアント
- **Winston** - ロギングライブラリ
- **dotenv** - 環境変数の管理

## 🤝 コントリビューション

このプロジェクトに貢献したい場合は、以下の手順に従ってください:

1. リポジトリをフォーク。
2. **新しいブランチ** を作成 (`git checkout -b feature/new-feature`)。
3. 変更を加えてコミット (`git commit -m "新機能を追加"`)。
4. 変更をプッシュ (`git push origin feature/new-feature`)。
5. **プルリクエスト** を作成 🚀。

## 📜 ライセンス

このプロジェクトは MIT ライセンスのもとで提供されています。詳細は `LICENSE` ファイルを参照してください。

## 📞 お問い合わせ

お問い合わせは **[your email or contact link]** までご連絡ください。
