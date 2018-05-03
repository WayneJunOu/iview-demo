<template>
  <div class="carousel">
    <Carousel
      v-model="value"
        :autoplay="setting.autoplay"
        :autoplay-speed="setting.autoplaySpeed"
        :dots="setting.dots"
        :radius-dot="setting.radiusDot"
        :trigger="setting.trigger"
        :arrow="setting.arrow">
      <CarouselItem>
        <img src="../../assets/banner1.jpg" alt="">
      </CarouselItem>
      <CarouselItem>
        <img src="../../assets/banner2.jpg" alt="">
      </CarouselItem>
    </Carousel>
  </div>
</template>

<script>
export default {
  name: 'Slideshow',
  data: function () {
    return {
      value: 0,
      setting: {
        autoplay: true,
        autoplaySpeed: 5000,
        dots: 'inside',
        radiusDot: false,
        trigger: 'click',
        arrow: 'never'
      },
      imageList: [
        '../../assets/banner1.jpg',
        '../../assets/banner2.jpg'
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.demo-carousel {
  width: 100%;
  height: 300px;
}
</style>
