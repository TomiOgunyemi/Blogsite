<template>
       <main class="bg-light">

           <main class="container p-3">
            <main class="row">
            <main class="col">
                <div>
                     <div class="bg-white border mt-0 mb-3 " v-for="item in blogStories" :key="item.id">
                         <main class="d-flex">
                              <div class="border-end" style="max-width: 200px; width: max-content; overflow: hidden;  height:200px">
                                     <img :src="item.image" alt="" style="width:500px;">
                                </div>

                        <div class="text-start p-3 w-75 ">
                            <h3>
                                <router-link class="nav-link ps-0 text-dark fw-bold" :to="'/eachstory/'+ item.id">{{item.title}}</router-link>
                            </h3>
                           
                            <div>
                                <strong>{{item.author}}</strong>
                                |
                                <em>{{item.created_at}}</em>
                            </div>
                            <div class="small d-flex">
                               <div class="hov"> <i class="fa text-muted fa-heart p-2 "></i> <span>reactions</span></div>
                                <div class="hov"> <i class="fa text-muted fa-comment p-2"></i> <span>comment</span></div>
                            </div>
                        </div>
                         </main>
                        
                    </div>
                </div>
            </main>

            <main class="col-5">
                <div class="border bg-white p-2">
                <div class=" p-2 text-start">
                    <div class="chip-pane m-1"><button href="#" class=" text-dark pane">Childbirth</button></div>
                    <div class="chip-pane m-1"><button href="#" class="text-dark pane">Skin Order</button></div>
                    <div class="chip-pane m-1"><button href="#" class="text-dark pane">Orthopaedics</button></div>
                    <div class="chip-pane m-1"><button href="#" class=" text-dark pane">Allergies</button></div>
                    <div class="chip-pane m-1"><button href="#" class=" text-dark pane">Cancer</button></div>
                    <div class="chip-pane m-1"><button href="#" class=" text-dark pane">Fibroid</button></div>
                    <div class="chip-pane m-1"><button href="#" class="text-dark pane">Burns</button></div>
                    <div class="chip-pane m-1"><button href="#" class="text-dark pane">Fibroid</button></div>
            
                 </div>
                </div>
                <br>

                <div class="border bg-white p-2">
                <div class=" p-2 text-start">
                    <div class="chip-pane m-1"><button href="#" class=" text-dark pane">Childbirth</button></div>
                    <div class="chip-pane m-1"><button href="#" class="text-dark pane">Skin Order</button></div>
                    <div class="chip-pane m-1"><button href="#" class="text-dark pane">Orthopaedics</button></div>
                    <div class="chip-pane m-1"><button href="#" class=" text-dark pane">Allergies</button></div>
                    <div class="chip-pane m-1"><button href="#" class=" text-dark pane">Cancer</button></div>
                    <div class="chip-pane m-1"><button href="#" class=" text-dark pane">Fibroid</button></div>
                    <div class="chip-pane m-1"><button href="#" class="text-dark pane">Burns</button></div>
                    <div class="chip-pane m-1"><button href="#" class="text-dark pane">Fibroid</button></div>
                    <div class="chip-pane m-1"><button href="#" class=" text-dark pane">Cancer</button></div>
                    <div class="chip-pane m-1"><button href="#" class=" text-dark pane">Fibroid</button></div>
                    <div class="chip-pane m-1"><button href="#" class="text-dark pane">Burns</button></div>
                    <div class="chip-pane m-1"><button href="#" class="text-dark pane">Fibroid</button></div>
            
            
                 </div>
                </div>
            </main>
        </main>

           </main>
  
    </main>
</template>

<script>
import {getPublished} from '../services/login.service'
export default {
 data(){
     return{
         blogStories:[]
     }
 },
 method:{
     
 },
 mounted(){
     getPublished()
     .then(res=>{
        console.log(res.data) 
        this.blogStories = res.data.posts
     })
     .catch(err=>{
            console.log(err)
        })
 }
}
</script>

<style>

</style>