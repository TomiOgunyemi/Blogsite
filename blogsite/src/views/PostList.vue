<template>
  <main class="container">
    
      <div class="d-flex justify-content-between mt-3">
          <div>
              <input type="text" class="form-control">
          </div>
          <div>
              <router-link to="/publish/add" class="btn btn-success"> 
                  <i class="fas fa-plus"></i>
                  Add Post 
                </router-link>
          </div>
      </div>

      <br>

      <div class="table-responsive">
          <h3 >No Post</h3>
          <table class="table table-bordered">
            <tr class="bg-light">
                <th>Id</th>
                <th>Title</th>
                <th>author</th>
                <th>Image Link</th>
                <th>date</th>
                <th>View</th>
                <th>Delete</th>
            </tr>

 
            <tbody  v-if="blogList.length > 0">
                <tr v-for="item in blogList" :key="item.id">
                    <td>{{item.id}}</td>
                    <td>{{item.title}}</td>
                    <td>{{item.author}}</td>
                    <td>{{item.image}}</td>
                    <td>{{item.date}}</td>
                    <td>
                        <button class="btn btn-link">view</button>
                    </td>
                    <td>
                        <button class="btn btn-link btn-danger" @click="deletepost(item.id)">Del</button>
                    </td>
                </tr>
            </tbody>
            <tbody v-else>
                <tr>
                    <td colspan="6">
                        <h3 class="text-center alert ">No data found</h3>
                    </td>
                </tr>
            </tbody>
            
            
             <span class="spinner-border spinner-border-sm" v-show="loading"></span>
          </table>
      </div>


  </main>
</template>

<script>
import {getPublished} from '../services/login.service'
import {deletePost} from '../services/login.service'
export default {
    data(){
        return{
            loading: false,
            blogList:[],
        }
    },

    methods:{
        load(){
            this.loading = true
            getPublished()
            .then(res =>{
            console.log(res.data)
            this.blogList = res.data.posts
            this.loading = false
            })

            .catch(err =>{
            console.log(err)
        }) 
        },

         deletepost(id){
           let tok = {id:id}
            deletePost(tok).then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err.resonse)
            })
        }
    },

     mounted(){
       this.load()
    }
}
</script>

<style>

</style>