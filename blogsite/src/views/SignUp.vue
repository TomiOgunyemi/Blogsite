<template>
  <main class="container-fluid mt-5">
            <div class="row">
                <div class="col-sm-4 mt-5 d-none d-sm-block" style="overflow:hidden;border-radius:70%;width:50%; height:50%">
                    <img v-bind:src="require('../assets/signup2.jpg')" alt="">
                </div>
                <div class="col-sm">
                    <div class="card card-body mt-0 bg-white  w-100 mx-auto border-0" style="max-width: 350px">
                    <h2 class="pur text-center mt-4 mb-5 fw-bolder">Sign Up</h2>
                <form action="" method="post" @submit.prevent="signup()">

                        <div class=" div_border border border-1 p-1 ms-3 me-3 rounded-pill form-group col-sm" >
                            <i class="fa fa-user text-muted ps-2"></i>
                            <input type="text" class="text-muted border-0 ms-2 w-75" v-model="state.userInfo.name" placeholder="Name" >
                        </div>

                        <div class=" div_border border border-1 p-1 ms-3 me-3 rounded-pill form-group col-sm mt-3" >
                            <i class="fa fa-envelope text-muted ps-2"></i>
                            <input type="text" placeholder="Email" class="text-muted border-0 w-75 ms-2"  v-model="state.userInfo.email" >
                        </div>
                        <h6 id="disp"></h6>
                        <div class=" div_border border border-1 p-1 ms-3 me-3 rounded-pill form-group  mt-4 col-sm" >
                            <i class="fa fa-lock text-muted ps-2"></i>
                            <input type="password" placeholder="Password" class="w-75 text-muted border-0 ms-2"  v-model="state.userInfo.password" >
                        </div>

                        <div class=" div_border border border-1 p-1 ms-3 me-3 rounded-pill form-group  mt-4 col-sm" >
                            <i class="fa fa-l ock text-muted ps-2"></i>
                            <input type="password" placeholder="Confirm password" class=" w-75 text-muted border-0 ms-2"  v-model="state.userInfo.confirm_pass" >
                        </div>

                        <div class="form-group form-check mt-3 ms-3 col-sm">
                            <label class="form-check-label">
                            <input class="form-check-input fw-bold" type="checkbox"> Remember me
                            </label>
                        </div>

                        <div class="mt-3 col-sm">
                        <button class="btn text-white rounded-pill grad_btn ms-3 fw-bold" type="submit" style="width:70%; font-size: 20px;">SIGN IN</button>
                        <span class="spinner-border spinner-border-sm" v-show="loading"></span>
                </div>
                        
                </form>
            </div>
                </div>
            </div>
    </main>
</template>

<script>
   import {register} from '../services/login.service';
import useValidate from '@vuelidate/core'
import {required, email,minLength,sameAs} from '@vuelidate/validators'
import {reactive, computed} from 'vue'
   export default {
  setup(){
      const state = reactive({
          userInfo:{
              name:'',
              email:'',
              password:'',
          }
      })

      const rules = computed(()=>{
          return{
               userInfo:{
                name: {required},
               email: {required,email},
               password:{required, minLength:minLength(6)},
               confirm_password:{required, sameAs:sameAs(state.userInfo.password)}
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


        // validate(){
        //     this.reg=/^[_]{0,1}[A-Za-z0-9]{2,15}[@]{1}[a-z]{3,7}[.]{1}[a-z]{3}$/
        //     this.valid = this.reg.test(this.userInfo.email)
        //     if (this.valid==true) {
        //         document.getElementById('disp').innerHTML='Email valid'  
        //     }
        //     if(this.valid != true){
        //         document.getElementById('disp').innerHTML='Email not valid'
        //     }
        //      setTimeout(function (){
        //         document.getElementById('disp').style.display('none')
        //     },3000)
                
        //         console.log('tomisim')
        // },

        signup(){
             this.loading = true
            this.v$.$validate()
            if(!this.v$.$error){
               console.log(this.v$.$error)
               return;
            }

             register(this.state.userInfo)
                .then(res=>{
                this.loading = false;
                console.log(res)
                this.$notify({
                    title: "signup",
                    message: res.data.message,
                    type: 'success'
                })
                this.$router.push({path: '/login'})
            })
          
            .catch(err=>{
                this.loading = false
                console.log(err.response.data)
                this.$notify({
                    title: "signup",
                    message: err.response.data.message,
                    type: 'warning'
                })
            })
    },

   }
   
}
</script>

<style>
      body{background: rgb(29, 29, 148);
        }
        .card{
            /* margin: auto; */
            border-radius: 30px;
            margin-top: 10%;
            width: 40%;
        }
        input{
            border: none;
            background-color: rgb(230, 224, 224);
        }
        input:focus{
        outline: none;
    }
    .div_border{
        background-color: rgb(230, 224, 224);;
    }
    .grad_btn{
        background-image: linear-gradient(to right,rgb(113, 2, 135) , rgb(196, 167, 113));
}
    .footer{
        margin-top: 70px;
    }
    @media( max-width:600px) {
        .card{
            width: 30%;
        }
    }
</style>