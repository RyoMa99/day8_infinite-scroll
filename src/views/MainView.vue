<template>
  <div>
    <div
      v-for="post in posts"
      :key="post.id"
    >
      <h2>{{ post.id }}:{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>
    <div ref="observeElement">
      この要素を監視します
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { fetchPosts } from '@/api/request'
import { Post } from '@/api/types'

@Component({})
export default class extends Vue {
  observer: IntersectionObserver | null = null
  posts: Post[] = []
  page = 1
  $refs! : {
    observeElement: Element
  }

  mounted (): void {
    // 100件全て取得される
    // fetchPosts(1)
    this.observer = new IntersectionObserver((entries) => {
      const entry = entries[0]
      // console.log(entry)
      if (entry?.isIntersecting) {
        // 監視対象がブラウザに入った時の処理
        console.log('画面に入ったよ')
        this.getPosts()
      }
    })
    const observeElement = this.$refs.observeElement
    // $refsの型定義でElementだと指定して置けばいらない
    // if (!(observeElement instanceof Element)) return
    // observerに監視対象を登録
    this.observer.observe(observeElement)
  }

  async getPosts (): Promise<void> {
    const res = await fetchPosts(this.page++)
    this.posts.push(...res)
  }
}
</script>

<style lang="scss" scoped>

</style>
