<template>
    <main class="container-fluid" style="background-color:#E2E0E3">
      <!-- pills -->
       <div class="d-flex pt-4">
            <div class="chip-pane mt-3"><button href="#" class=" text-white pane">Childbirth</button></div>
            <div class="chip-pane mt-3"><button href="#" class="text-white pane">Skin Order</button></div>
            <div class="chip-pane mt-3"><button href="#" class="text-white pane">Orthopaedics</button></div>
            <div class="chip-pane mt-3"><button href="#" class=" text-white pane">Allergies</button></div>
            <div class="chip-pane mt-3"><button href="#" class=" text-white pane">Cancer</button></div>
            <div class="chip-pane mt-3"><button href="#" class=" text-white pane">Fibroid</button></div>
             <div class="chip-pane mt-3"><button href="#" class="text-white pane">Burns</button></div>
              <div class="chip-pane mt-3"><button href="#" class="text-white pane">Fibroid</button></div>
            
        </div>

        <!-- photo and text -->
      <div class="row pt-5">
        <div class="col-sm-5 text-left">
          <h1 class="fw-bold p-3 mt-2 mr-5 hero text-dark"><span class="pur her">Share</span> your health recovery journey,
          <br> <span class="pur her">Share</span> hope to someone.</h1>
          <button class="btn text-white fw-bold mx-3 bPur btn-lg">Share your recovery journey</button>
        </div>
        <div class="col-sm ms-5 p-2">
         <div style="">
            <img :src="require('../assets/lady-writing.jpg')" alt="" style="width:100%">
         </div>
          
        </div>
      </div>

          <!-- recent stories from endpoint -->
    <section>
        <h2>Recent stories</h2>
        <hr>
        <div class="d-flex flex-wrap">
            <div class="card m-2" style="width:23%" v-for="item in blogPost" :key="item.id">
              <img :src="item.image" alt="" class="card-img-top" style="width:300px;">
                <div class="card-body">
                  <h3>
                          <router-link class="nav-link ps-0 text-dark fw-bold" :to="'/eachstory/'+ item.id">{{item.title}}</router-link>
                  </h3>
                  <!-- <div>
                      <strong>Author:{{item.author}}</strong>
                      |
                      <em>{{item.created_at}}</em>
                </div> -->
             </div>
           </div>
        </div>
    </section>
    </main>
      
         <main class="container-fluid p-5 foot">
            <div class="row">
            <router-link to="/" class="navbar-brand lil fw-bold col-sm"> 
               <span class="pur logoS">S</span>hare<span class="pur logoS">Y</span>ours 
           </router-link>
                <div class="col-sm ">
                    <ul class="navbar-nav">
                        <a href="#" class="link fw-bold"><li class="nav-link"></li> CONTACT US</a>
                        <a href="#" class="link mt-3"> <li class="nav-link"> </li>Reach out to us at<strong> Email: shareyours@gmail.com </strong></a>
                        <a href="#" class="link"> <li class="nav-link"> </li>Help center</a>
                     </ul>
                 </div>

                 <div class="col-sm">
                    <ul class="navbar-nav">
                        <a href="#" class="link"><li class="nav-link "></li>COMPANY</a>
                        <a href="#" class="link mt-3"> <li class="nav-link"></li> About Us</a>
                        <a href="#" class="link"> <li class="nav-link"></li> Meet the Team</a>
                        <a href="#" class="link"> <li class="nav-link "></li> Blog</a>
                        <a href="#" class="link"> <li class="nav-link "></li> FAQs for Customers</a>     
                    </ul>
                </div>
                <div class="col-sm ">
                    <ul class="navbar-nav">
                        <a href="#" class="link "><li class="nav-link fw-bold"></li> LEGAL</a>
                        <a href="#" class="link mt-3"> <li class="nav-link"></li> Terms & Conditions</a>
                        <a href="#" class="link "> <li class="nav-link"></li> Privacy Policy</a>
                        <a href="#" class="link "> <li class="nav-link"></li> Cancellation and Refunds</a>
                        <a href="#" class="link "> <li class="nav-link"></li>Press</a>
                    </ul>
                </div>
                
                   <div class="link text-center mt-3" style="">
                          Our website services, contents, and products are for <br> informational purpose only. 
                          ShareYours website does not provide medical advice, diagnosis, or treatment. <br>
                          <a href="#" class="">See additional information >>></a>
                        </div>
                </div>
           
        </main>
        <footer class="b-foot">
            <div class="f-foot justify-content-center ">
                <strong class="m-2">FOLLOW US</strong>
               <a href="" style="text-decoration: none; color: orange; margin: 10px;"> <i class="fa fa-facebook fa-lg"></i></a>
               <a href="" style="text-decoration: none; color: orange; margin: 10px;"> <i class="fa fa-twitter fa-lg"></i></a>
               <a href="" style="text-decoration: none; color: orange; margin: 10px;"> <i class="fa fa-instagram fa-lg"></i></a>
               <a href="" style="text-decoration: none; color:orange; margin: 10px;"> <i class="fa fa-google-plus fa-lg"></i></a>
            </div>
            <div class="text-center" style="font-size: 12px;">
                 ©2021, Powered by ShareYours. All Rights Reserved.
            </div>
            <br>
           <div style="height: 5px;">
                
           </div>
        
         </footer>
</template>

<script>
import {getPublished} from '../services/login.service'
export default {
  data(){
    return{
      blogPost: []
    }
  },
  methods:{
    
  },

  mounted(){
    getPublished()
    .then(res=>{
      console.log(res.data)
      this.blogPost= res.data.posts.slice(1,4)
    })
    .catch(err=>{
      console.log(err)
    })
  }
 
}
</script>


<style>
.home{
  background: #710287 (113,2,135);
  color: #C699CF (198,153,207);
}
.s{
  color: #C699CF;
}
.hero{
  font-size: 50px;
}
.her{
  font-size:60px;
}
.bPur{
  background-color: rgb(113, 2, 135)!important;
}
.btn:hover{
     color:black !important;
     background-color:#C699CF;
 }
 
  .pane {
     background-color:  rgb(204, 179, 40);
     /* height: 50px; */
    border-radius: 30px;
    text-decoration: none;
    padding: 10px 30px;
    font-weight: 400;
    opacity: 0.9;
    min-width: fit-content;
    border: none;
}

.pane:hover {
    text-decoration: none;
    opacity: 1;
    background-color: rgb(131, 36, 131);
}

.pane:focus{
    outline: none !important;
    box-shadow: none !important;
    border: none !important;
}

.chip-pane {
    display: inline-block;
} 
/* .pur{
    color: rgb(113, 2, 135)!important;
} */
.link{
    text-decoration: none !important;
    color:whitesmoke;
}
.link:hover{
  text-decoration: none;
}

.foot{
  background-color: rgb(27,22,66);
}

</style>
