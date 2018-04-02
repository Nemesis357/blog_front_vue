<template>
  <v-container>
    <!-- Header -->
    <v-layout>
      <v-flex xs12 sm8 offset-sm2>
        <h1>{{ this.header }}</h1>
      </v-flex>
    </v-layout>

    <v-layout row wrap>
      <v-flex xs12 sm8 offset-sm2 v-for="post in posts" :key="post.uniqueKey">
        <v-layout>
          <v-flex xs8>
            <h3>{{ post.title }}</h3>
            <p>{{ post.content | snippet }}</p>
          </v-flex>
          <v-flex xs4>
            <v-btn class="primary" round small router-link :to="'/posts/post?id=' + post.uniqueKey">See post</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>

  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        header: "Posts",
        posts: []
      }
    },
    methods: {
      
    },
    computed: {
      
    },
    filters: {
      snippet (value) {
        let x = value.length > 50 ? "..." : ""
        return value.slice(0, 100) + x
      }
    },
    created () {
      const url = 'http://localhost:8081/retrivePosts'
      this.axios.get(url).then((response) => {

        console.log(response.data)
        this.posts = response.data

      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
