<template>
  <v-container>
    <!-- Header -->
    <v-layout>
      <v-flex xs12 sm6 offset-sm3>
        <h1 :class=readyToSend>{{ this.header }}</h1>
      </v-flex>
    </v-layout>
    <!-- Post -->
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreatePost" enctype="multipart/form-data">
          <!-- Title -->
          <v-layout>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="title" label="Title" id="title" v-model="title" required></v-text-field>
            </v-flex>
          </v-layout>
          <!-- Content -->
          <v-layout>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field name="content" label="Content" id="content" v-model="content" required multi-line></v-text-field>
            </v-flex>
          </v-layout>
          <!-- Image -->
          <v-layout>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn raised class="primary" @click="onPickFile">Upload Image</v-btn>
              <input @change="onFilePicked" type="file" style="display: none" ref="fileInput" accept="image/*">
            </v-flex>
          </v-layout>
          <!-- Image Preview -->
          <v-layout>
            <v-flex xs12 sm6 offset-sm3>
              <!-- <img :src="imageUrl" height="200"> -->
              <p>{{ this.imageUrl.name}}</p>
            </v-flex>
          </v-layout>
          <!-- Submit -->
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn :disabled="!formIsValid" type="submit">Create Meetup</v-btn>
            </v-flex>

            <!-- test -->
            <v-flex xs12 sm6 offset-sm3>
              <v-btn @click="testFunc">Test</v-btn>
            </v-flex>
          </v-layout>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        header: 'Create New Blog Post',
        title: '',
        content: '',
        imageUrl: ''
      }
    },
    methods: {
      onCreatePost () {
        const form = {
          title: this.title,
          content: this.content,
          imageUrl: this.imageUrl,
          key: this.uniqueId
        }
        let formData = new FormData()
        formData.append('title', this.title)
        formData.append('content', this.content)
        formData.append('image', this.imageUrl)
        formData.append('key', this.uniqueId)

        this.$store.dispatch('submitForm', formData)
      },
      onPickFile () {
        this.$refs.fileInput.click()
      },
      onFilePicked (e) {
        this.imageUrl = this.$refs.fileInput.files[0];
      },
      testFunc () {
        console.log(this.isSubmited)
      }
    },
    computed: {
      formIsValid () {
        return this.title !== '' && 
        this.content !== '' &&
        this.imageUrl !== ''
      },
      uniqueId () {
        const uniqueId = Date.now()
        return uniqueId
      },
      readyToSend () {
        if (this.formIsValid) 
          return "success--text"
        else
          return "secondary--text"
      },
      isSubmited () {
        return this.$store.getters.isSubmited
      }
    },
    watch: {
      isSubmited () {
        this.title = ''
        this.content = ''
        this.imageUrl = ''
        this.$store.commit('clearSubmit', false)
        this.$router.push('/')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .success {
    color: green;
  }
</style>
