<style scoped>

</style>

<template>
  <div>
    <Header></Header>
    <Slideshow></Slideshow>
  </div>
</template>

<script>
import Header from './Header'
import Slideshow from './Slideshow'
export default {
  name: 'index',
  data: function () {
    return {
    }
  },
  components: {
    Header,
    Slideshow
  }
}
</script>
