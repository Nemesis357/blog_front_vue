<template>
  <v-container>
    <!-- Header -->
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h1>{{ this.header }}</h1>
      </v-flex>
    </v-layout>
    <!-- Title -->
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h2>{{ post.title }}</h2>
      </v-flex>
    </v-layout>
    <!-- Content -->
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <p>{{ post.content }}</p>
        <p>imageUrl: {{ this.imageUrl }}</p>
      </v-flex>
    </v-layout>
    <!-- Image -->
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <img :src=post.imageUrl height="200">
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        header: 'Post',
        title: '',
        content: '',
        imageUrl: ''
      }
    },
    methods: {
      
    },
    computed: {
      uniqueId () {
        return this.$route.query.id
      },
      post () {
        console.log(this.$store.getters.retrivePost)
        return this.$store.getters.retrivePost;
      }
    },
    created () {
      this.$store.dispatch('retrivePost', this.$route.query.id)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
