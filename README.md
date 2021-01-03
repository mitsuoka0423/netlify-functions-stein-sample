# netlify-functions-stein

[Netlify Functions](https://docs.netlify.com/functions/overview/) + [Stein](https://steinhq.com/)のサンプルコードです。

## Stein API URLを取得

[Steinダッシュボード](https://dashboard.steinhq.com/dashboard/apis/)からGoogleスプレッドシートを追加し、`API URL`を発行する。

API URLは以下のようなフォーマット。

```
https://api.steinhq.com/v1/storages/xxxxxxxxxxxxxxxxxxxxxxxx
```

## Netlify Functionをデプロイ

デプロイ手順は[こちら](https://kentcdodds.com/blog/super-simple-start-to-netlify-functions)を参照してください。

## Netlify Functionの環境変数を設定

`Netlify > Site settings > Build & deploy > Environment`に以下の値を追加する。

| キー | 内容 |
| -- | -- |
| STEIN_API_URL | `Stein API URLを取得`で取得したAPI URL |

[![Image from Gyazo](https://i.gyazo.com/e48ca87d2afa4f3b5b4ec5bd7b08155d.png)](https://gyazo.com/e48ca87d2afa4f3b5b4ec5bd7b08155d)

[![Image from Gyazo](https://i.gyazo.com/a03aef0af1e96551cfbf48a67d08dcc0.png)](https://gyazo.com/a03aef0af1e96551cfbf48a67d08dcc0)
