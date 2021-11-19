<template>
    <main class="bg-light container-fluid" >
     <div class="row" >
        <div class="col-sm pt-5 text-dark">
            <h1 class="aud">You have your audience!</h1>
         <h6 class="mx-auto">You are able to write this because you survived the procedure. Somebody out there needs to know he/she can survive it as well. Give hope to the world by sharing your recovery journey with us.
            Express yourself in your own words, we all want to celebrate your pains and your victories with you.
         </h6>
        </div>
        <div class="col-sm pt-5">
           <img :src="require('../assets/recovery.jpg')" alt="" style="width:70%" />
        </div>
     </div>
     <main class="container-fluid">
        <section class=" card-body text-start p-5 mx-auto border-4 w-75">
            
         <form action=""  method='post' @submit.prevent='publish()'>
                <div class="mt-3">
                <h3>Title</h3>
                <input type="text" class="form-control form-control-lg" v-model="postData.title">
                </div>

                 <div class="mt-3">
                <h3>Author</h3>
                <input type="text" class="form-control form-control-lg" v-model="postData.author">
            </div>
             <div class="mt-3">
                <h3>Date published</h3>
                <input type="text" class="form-control form-control-lg" v-model="postData.data">
            </div>
            <div class="mt-3">
                
                <h3>Content</h3>
                <div class="d-flex">
                    <button class="btn bt  m-2 fw-bold text-white" @click="makeBold()">B</button>
                 <button class="btn  bt  m-2 fw-bold text-white" @click="makeItalic()"> <em> I </em> </button>
                <button class="btn bt  m-2 fw-bold text-white" @click="makeH1()">H1</button>
                  <button class="btn bt  m-2 fw-bold text-white" @click="makeUnderline()">U</button>
                 <!-- <button class="btn" @click="clickFile()"> <i class="fas fa-file-image fa-lg fa-light"></i></button> -->
                </div>
                <div contenteditable="true" style="height:90vh; width:100%" id="content" class="form-control" ></div>
                
            </div>
            <div class="mt-3">
                <h3>Image link</h3>
               <input type="text" class="form-control" v-model="postData.image">
               <input type="file" @change="displayImage()" id="Image">
               <img src="" alt="" id="imgsrc">
            </div>
            <button class="btn bt text-light w-25 mx-auto mt-3 fw-bold">Publish</button>
            <span class="spinner-border spinner-border-sm" v-show="loading"></span>
         </form>
        </section>
   </main>
    </main>
</template>

<script>
import {addpost} from '../services/login.service'
export default {
    data(){
        return{
            loading: false,
            type: image,
            postData:{
                title:'',
                author:'',
                date:'',
                content:'',
                image:'',
            }
        }
    },

    methods:{
        displayImage(){
            let file = document.getElementById('Image').files[0]
              let reader = new FileReader()
              
              reader.onload = ()=>{
                  document.getElementById('imgsrc').src  = reader.result
              }
              reader.readAsDataURL(file)
        },
         makeBold(){
            document.execCommand('bold')
       },
         makeItalic(){
            document.execCommand('italic')
       },
        makeH1(){
            document.execCommand('formatBlock', false,'<h1>')
       },
        makeUnderline(){
            document.execCommand('underline')
       },

       publish(){
           this.loading= true
           this.postData.content = document.getElementById('content').innerHTML;
           console.log(this.postData)
           addpost(this.postData)
           .then(res=>{
                
               this.loading = false
               console.log(res)
           })
        .catch(err=>{
        this.loading = false
            console.log(err.response)
        })
        }

    }
}
</script>

<style>

.bt{
  background-color: rgb(113, 2, 135)!important;
}
.aud{
    font-family:Arial, Helvetica, sans-serif;
    font-size: 60px;
    font-weight: bold;
}
.bPur{
  background-color: rgb(113, 2, 135)!important;
}


</style>