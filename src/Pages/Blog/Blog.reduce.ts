import { createReducer } from '@reduxjs/toolkit'
import { Post } from '../../type/blog.type'

interface BlogState {
  postList: Post[]
}

const initalState: BlogState = {
  postList: []
}
const blogReducer = createReducer(initalState, (builder) => {})
export default blogReducer
