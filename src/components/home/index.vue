<style scoped>

</style>

<template>
  <div>
    <Header></Header>
    <Carousel></Carousel>
  </div>
</template>

<script>
import Header from './Header'
import Carousel from './Carousel'
export default {
  name: 'index',
  data: function () {
    return {
    }
  },
  components: {
    Header,
    Carousel
  }
}
</script>
