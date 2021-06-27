# day8

[infinite scroll](https://reffect.co.jp/vue/vue-js-infinite-scroll-intersection-observer-api)

## 学んだこと
- IntersectionObserver APIを用いた遅延読み込みはこのように書く
  ```js
  mounted (): void {
    this.observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      if (entry?.isIntersecting) {
        // 監視対象がブラウザに入った時の処理
        // 例) 遅延読み込みのデータを取得する
        this.getPosts()
      }
    })
    const observeElement = this.$refs.observeElement
    // observerに監視対象のDOM要素を登録
    this.observer.observe(observeElement)
  }
  ```
- objectの型ガードには[instanceof](https://typescript-jp.gitbook.io/deep-dive/type-system/typeguard#instanceof)
- `entry && entry.isIntersecting`はOptional Chainingで`entry?.isIntersecting`と書ける
- [json取得のテスト用 jsonplaceholder](https://jsonplaceholder.typicode.com/)

- **axios + typescript**
  - [共通エラー処理。interceptors.response.useを使う](https://zenn.dev/aya_ryo/articles/d89d7be695d063)
  - `axios.request<T>`でresponseに型を付けられる。ただ、responseをそのまま返すだけなら、付けなくてもいいかも
  - axiosの戻り値を型判定できないか考えていたが、そもそも実行時はjsに変換されているから出来ないことに気付いた。

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
