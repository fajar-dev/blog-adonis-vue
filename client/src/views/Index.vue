<template>

        <main class="my-5">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <p class="sub-title">Read All Article</p>
              <h2 class="title">Blog</h2>
            </div>
          </div>
          <div class="row justify-content-center pt-3">
            <div  class="col-lg-3 col-md-6" v-for="item in items" :key="item.id">
              <div class="card card-secondary mt-4">
                <div class="card-body">
                  <img src="assets/img/1.jpg" class="img-fluid border-5 border-dark" alt="project">
                  <h6 class="py-3">{{ item.title }}</h6>
                    <router-link :to="{name: 'post.show', params:{slug: item.slug}}" class="btn btn-primary w-100 btn-lg">
                      Read More
                    </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

</template> 


<script>
import axios from 'axios';
import config from '@/config';

export default {
  name: 'Example',
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    axios.get(config.apiUrl+'/post')
      .then((response) => {
        this.items = response.data.data.data;
        console.log(this.items);
      });
  },
};
</script>


