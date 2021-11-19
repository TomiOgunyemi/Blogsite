<template>
    <main class="container-fluid "  style="background-color:#E2E0E3">
        <div class="row">
            <div class="col-sm px-4 mt-5">
                    <div class="card card-body bg-white mx-auto border-0 w-100" >
                 <h2 class="text-muted text-center fw-bolder mt-4">Welcome</h2>
               <form action="" method="post"   @submit.prevent="signin()">
                     <div class=" div_border border-1 p-2 ms-3 me-3 rounded-pill form-group col-sm mt-3" >
                        <i class="fa fa-envelope text-muted ps-2"></i>
                        <input type="text" placeholder="Email" class="text-muted border-0 w-75 ms-2" v-model=" state.userInfo.email" >
                    </div>

                    <div class=" div_border border-1 p-1 ms-3 me-3 rounded-pill form-group  mt-3 col-sm" >
                        <i class="fa fa-lock text-muted ps-2"></i>
                        <input type="password" placeholder="Password" class="w-75 text-muted border-0 ms-2" v-model="state.userInfo.password" >
                    </div>
                    <div class="form-group form-check mt-3 ms-3 col-sm">
                        <label class="form-check-label">
                        <input class="form-check-input fw-bold" type="checkbox"> Remember me
                        </label>
                    </div>

                <div class=" col-sm ">
                    <button class="btn rounded-pil text-white grad_btn w-75 mx-auto" type="submit" style=" font-size: 20px;">LOG IN</button>
                    <span class="spinner-border spinner-border-sm" v-show="loading"></span>
              </div>
                    
               </form>
              
               <div class="text-center pt-3">
                   <a href="" class="text-muted" style="text-decoration: none;">Forget Password</a>
               </div>
               <div class="text-center pt-3">
                   <span>Not a Member? <router-link to="/signup" style="text-decoration: none;">Sign up now</router-link></span>
               </div>
            </div>  
            </div>
                 <div class="col-sm-8 " >
                    <img v-bind:src="require('../assets/ladyPurple.jpg')" alt="" style="width: 100%">
                 </div>
          
        </div>
    </main>
</template>

<script>
import {login} from '../services/login.service';
import useValidate from '@vuelidate/core'
import {required, email,minLength,sameAs} from '@vuelidate/validators'
import {reactive, computed} from 'vue'
   export default {
  setup(){
      const state = reactive({
          userInfo:{
              email:'',
              password:'',
          }
      })

      const rules = computed(()=>{
          return{
               userInfo:{
               email: {required,email},
               password:{required, minLength:minLength(6)},
            },
          }
      })
        const v$ = useValidate(rules, state)
        return{ state,
            v$ }
  },
    data(){
        return{
            v$: useValidate(),
            loading:false,
           
            reg:'',
            valid:false,
        }
    },

  methods:{

        signin(){
             this.loading = true
            this.v$.$validate()
            if(!this.v$.$error){
               console.log(this.v$.$error)
               return;
            }

             login(this.state.userInfo)
                .then(res=>{
                this.loading = false;
                 localStorage.setItem('token', res.data.token)
                console.log(res)
                this.$notify({
                    title: "login",
                    message: res.data.message,
                    type: 'success'
                })
                this.$router.push({path: '/publish/list'})
            })
          
            .catch(err=>{
                this.loading = false
                console.log(err.response.data)
                this.$notify({
                    title: "login",
                    message: err.response.data.message,
                    type: 'warning'
                })
            })
    },

   }
   
}
</script>




<style>
  .grad_btn{
        background-image: linear-gradient(to right,rgb(113, 2, 135) , rgb(196, 167, 113));
}
</style>