<template>
  <nav class="navbar bg-light sticky-top">
    <router-link to="/" class="navbar-brand lil fw-bold"> 
        <span class="pur logoS">S</span>hare<span class="pur logoS">Y</span>ours
        
     </router-link>
    <ul class="nav">
      <li class="nav-item">
        <router-link to="/home" class="nav-link pur fw-bold mx-3 ">Home</router-link>
      </li>
      
      <li class="nav-item">
        <router-link to="/article" class="nav-link pur fw-bold mx-3">Article
        </router-link>
      </li>
      <li class="nav-item">
        <router-link to="/login" class="nav-link pur fw-bold mx-3">Login
        </router-link >
      </li>
        <!-- <li class="nav-item">
        <router-link to="/eachstory" class="nav-link pur fw-bold mx-3 ">Each Stories</router-link>
      </li>  -->
      <li class="nav-item">
        <router-link to="/stories" class="nav-link pur fw-bold mx-3">Stories</router-link>
      </li> 
       <li class="nav-item">
        <router-link to="/publish/list" class="nav-link pur fw-bold mx-3">Publish
        </router-link >
      </li>

      <li class="nav-item">
        <router-link to="/signup" class="nav-link btn text-white fw-bold mx-3 bPur">Join the Community</router-link>
      </li>

      

      <li class="nav-item">
        <router-link to="/tablepost" class="nav-link text-white">
        <button class="btn btn-warning" hidden>Log Out</button>
        </router-link
        >
      </li>
    </ul>
  </nav>

</template>

<script>
export default {};
</script>

<style>
.navbar{
  background-color: rgb(221, 184, 221);
}
 .logoS{
    font-weight: bold;
     font-stretch: normal;
     font-family:Lucida Handwriting, Cursive, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
     Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 30px;
 }
.pur{
    color: rgb(113, 2, 135)!important;
}
.lil{
    color:  rgb(201, 146, 212) !important;
}
.bPur{
  background-color: rgb(113, 2, 135)!important;
}
.nav-link:hover{
     color: rgb(201, 146, 212) !important;
 } 
 .btn  :hover{
        background-color: white!important;
        color: rgb(113, 2, 135);
 }

</style>