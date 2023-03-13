<template>
  <div class="example">
    <Cba></Cba>
    <Cpn></Cpn>
    {{ msg }}
  </div>

</template>

<script>
  import Cpn from "./Cpn";
  import Cba from "./Cba";

  export default {
    data () {
      return {
        msg: 'Hello Vue'
      }
    },
    components:{
      Cba,
      Cpn
    }
  }
</script>

<style>
  .example {
    color: red;
  }
</style>