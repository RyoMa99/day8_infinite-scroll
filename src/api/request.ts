import http from '@/lib/http'
import { Post } from './types'

export async function fetchPosts (page:number): Promise<Post[]> {
  const res = await http.request<Post[]>({
    method: 'get',
    url: `/posts?_page=${page}`,
    responseType: 'json'
  })

  return res.data
}
