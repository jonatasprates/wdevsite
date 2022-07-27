<template>
 <div class="app">

   <Header></Header>
   <Home></Home>
   <Footer></Footer>

 </div>
</template>

<script>
import './styles/global.css';
import Header from './components/Header';
import Home from './pags/Home.vue';
import Footer from './components/Footer.vue';


export default {
  name: 'App',
  components: {
    Header,
    Home,
    Footer
}
}
</script>


