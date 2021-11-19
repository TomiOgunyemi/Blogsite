<template>
    <main class="bg-light">

           <main class="container p-3">
            <main class="row">
            <main class="col">
                <div>
                     <div class="bg-white border mt-0 mb-3 " v-for="item in newsList" :key="item.source.id">
                         <main class="d-flex">
                              <div class="border-end" style="max-width: 200px; width: max-content; overflow: hidden;  height:200px">
                                     <img :src="item.urlToImage" alt="" style="width:500px;">
                                </div>

                        <div class="text-start p-3 w-75 ">
                            <h4>
                                <a class="nav-link ps-0 text-dark fw-bold" :href="item.url" target="_blank">{{item.title}}</a>
                            </h4>
                           
                            <div>
                                <strong>{{item.author}}</strong>
                                |
                                <em>{{item.publishedAt}}</em>
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

            <main class="col-5 ">
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
import {getHealthNews, getNews} from '../services/post'
export default {
    data(){
        return{
          newsList:[],
          healthList:[],
        }
    },

    methods:{
       
    },

    mounted(){
        getNews()
        .then(res=>{
            console.log(res)
             this.newsList = res.data.articles
          })
         .catch(err=>{
             console.log(err)
        });

        getHealthNews()
        .then(res=>{
            console.log(res)
            this.healthList= res.data.articles
        })
        .catch(err=>{
            console.log(err)
        })


    }
   

}
</script>

<style>
    .hov:hover{
        background-color: rgb(231, 227, 227);
    }

    .pane {
     background-color:  rgb(236, 236, 236);
     /* height: 50px; */
    border-radius: 30px;
    text-decoration: none;
    padding: 5px 30px;
    font-weight: 400;
    opacity: 0.9;
    min-width: fit-content;
    border: none;
}

.pane:hover {
    text-decoration: none;
    opacity: 1;
    background-color: rgb(252, 222, 252);
    color: purple !important;
}

.pane:focus{
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
}

.chip-pane {
    display: inline-block;
} 

</style>