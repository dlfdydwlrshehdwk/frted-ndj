<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <div class="menu">
    <a v-for="작명 in 메뉴들" :key="작명">{{작명}}</a>
    
  </div>
  
  <div v-for="(a,i) in products" :key="i">
    <h4>{{products[]}}</h4>
    <p>가격</p>
  </div>
  <!-- <h2>{{products[0]}}</h2>
  <div>{{price1}}만원</div>
  <h2>{{products[1]}}</h2>
  <div>가격은아무거나</div>
  <h2>{{products[2]}}</h2>
  <div>가격은아무거나</div> -->
</template>

<script>


export default {
  name: 'App',
  data(){
    return{
      메뉴들 : ['Home','Shop','About'],
      products:['역삼동원룸','천호도원룸','마포구원룸'],
      }
    }
  }
  

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.menu{
  background: darkcyan;
  padding: 15px;
  border-radius: 5px;
}
.menu a{
  color: white;
  padding :15px;
}
</style>

<!-- <template> 안에는 html
     <script> 안에는 js
     <sytle> 안에는 css
      cd 폴더명 을 통해 폴더로 접근후 
      npm run serve를 통해 현재 브라우저를 확인할 수 있다.
-->
