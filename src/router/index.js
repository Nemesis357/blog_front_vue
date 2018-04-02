import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CreateNew from '@/components/CreateNew'
import Post from '@/components/Post'
import Posts from '@/components/Posts'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/create',
      name: 'CreateNew',
      component: CreateNew
    },
    {
      path: '/posts/post',
      name: 'Post',
      component: Post
    },
    {
      path: '/posts',
      name: 'Posts',
      component: Posts
    }
  ]
})
