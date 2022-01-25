# SCSS 記述ルール,ディレクトリ構造統一

## 説明
保守や引き継ぎを円滑にするため、スタイリングする際のルールとディレクトリ構造を統一したいと思います。<br>
アイディアがありましたら、コメントやプルリクなどしてください。<br>
プロジェクトにより、完全に統一はできないと思いますので、ベースと考えて頂けたらと思います。

## 導入方法
Node,Npm,Gulpが導入済みであることが前提。
```
# クローン (ルートディレクトリが必要な場合は 末尾の '.' をとる)
git clone git@github.com:WaoconSystemSection/scss.git .

# SCSSの環境構築
npm install gulp sass gulp-sass gulp-sourcemaps

# コンパイル
gulp sass

# コンパイル(監視)
gulp sass:watch
```


## 記述ルール
- BEM Block__Element--Modifier
- BlockのネストはOK
- 複合語はキャメルケース。複合語の先頭を、小文字で書き始める。例) .blockContent
- スマフォファースト。プロジェクトにより、スマフォ対応する必要がない場合はデスクトップファーストでOK。
- 階層的になるクラスに「&」を利用。
- それぞれのファイルを1箇所で読み込んでコンパイルする。 [style.scss](https://github.com/WaoconSystemSection/scss/blob/main/scss/style.scss)を参照。
- 特別な理由がない限りSCSS,CSS内で画像を読み込まない。システム対応しやすいという理由からHTML側で画像を読み込む。
- ディレクトリ名、ファイル名はプロジェクトに合わせて変更する。特にpage内のファイル名はアクセスされるパスやHTMLファイル名の名前と合わせる。不要なものは削除してOK。
- @mixin,@extend,@functionや変数などを活用して、繰り返し使うものを共通化する。
- javascript用に使うクラスの接頭辞は「js-」

<br>

## ディレクトリ構造
- init: リセットやノーマライズ、初期設定
- mixin: ミックスイン( @extendや@functionもここに設置する)
- common: 共通で使うデザイン。ボタンやフォームなど。ページ共通で使うレイアウト。
- block: ヘッダーやフッター、サイドバー などのブロック。
- page: ページ別。
- utility: 優先させたい & 個別にあてるクラス。
- lib: ライブラリ。
- [style.scss](https://github.com/WaoconSystemSection/scss/blob/main/scss/style.scss): コンパイルするファイル。それぞれのディレクトリとファイルの説明はここを参照。

```
scss
├── block
│   ├── _footer.scss
│   ├── _header.scss
│   ├── _menu.scss
│   ├── _paginate.scss
│   ├── _sidebar.scss
│   ├── _table.scss
│   └── admin
│       ├── _footer.scss
│       ├── _header.scss
│       ├── _menu.scss
│       ├── _paginate.scss
│       ├── _sidebar.scss
│       └── _table.scss
├── common
│   ├── _btn.scss
│   ├── _form.scss
│   ├── _other.scss
│   └── _wrap.scss
├── init
│   ├── _init.scss
│   ├── _normalize.scss
│   └── _reset.scss
├── lib
├── mixin
│   ├── _media.scss
│   └── _vender_prefix.scss
├── page
│   ├── _cart.scss
│   ├── _contact.scss
│   ├── _products_category.scss
│   ├── _products_detail.scss
│   ├── _products_list.scss
│   ├── _repass.scss
│   ├── _signin.scss
│   ├── _signup.scss
│   ├── _top.scss
│   └── admin
│       ├── _dashboard.scss
│       └── _setting.scss
├── utility
│   ├── _color.scss
│   ├── _font.scss
│   ├── _media.scss
│   └── _other.scss
└── style.scss
```

