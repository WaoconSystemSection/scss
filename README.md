# SCSS 記述ルール,ディレクトリ構造統一

## 記述ルール
- BEM
- 階層的になるクラスに「&」を利用。
- それぞれのファイルを1箇所で読み込んでコンパイルする。 [style.scss](https://github.com/WaoconSystemSection/scss/blob/main/scss/style.scss)を参照
- 特別な理由がない限りSCSS内で画像を読み込まない。HTML側で対処する(システム対応しやすいので)。
- ディレクトリ名、ファイル名はプロジェクトに合わせて変更。特にpage内のファイル名はアクセスされるパスやHTMLなどの名前と合わせる。
- コードの可読性を意識すること。(SCSSを見るだけで、HTMLの構造がわかるくらい) 
- 何度も使うであろうスタイルは,共通化する。(@mixin,@extend,@functionなどを活用)

<br>

## ディレクトリ構造
ディレクトリ
init: 初期化  
mixin: ミックスイン( @extendや@functionもここに設置する)
common: 共通で使うデザイン。
block: ヘッダーやフッターなどのパーツ
page: ページ別
otehr: 優先させたい&個別にあてるクラス。

```
scss
├── block ###ブロック
│   ├── _footer.scss
│   ├── _header.scss
│   ├── _menu.scss
│   ├── _paginate.scss
│   ├── _sidebar.scss
│   ├── _table.scss
│   └── admin #管理ページのブロック
│       ├── _footer.scss
│       ├── _header.scss
│       ├── _menu.scss
│       ├── _paginate.scss
│       ├── _sidebar.scss
│       └── _table.scss
├── common # 共通して使うデザイン (上書きを想定)
│   ├── _btn.scss
│   ├── _form.scss
│   ├── _other.scss
│   └── _wrap.scss
├── init ###初期化
│   ├── _init.scss # 変数の定義や最初に記述すること。
│   ├── _normalize.scss
│   └── _reset.scss
├── lib ###ライブラリ
├── mixin ###ミックスイン
│   └── _media.scss
│   └── _vender_prefix.scss
├── other ###優先させたい&個別に当てるクラス
│   ├── _color.scss
│   └── _media.scss
│   └── _.scss
├── page ###ページ別
│   ├── _cart.scss
│   ├── _contact.scss
│   ├── _products_category.scss
│   ├── _products_detail.scss
│   ├── _products_list.scss
│   ├── _repass.scss
│   ├── _signin.scss
│   ├── _signup.scss
│   ├── _top.scss
│   └── admin ###管理ページ
│       ├── _dashboard.scss
│       └── _setting.scss
└── style.scss #コンパイルされる (それぞれのファイルの意味はここを参照)
```

