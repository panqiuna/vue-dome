<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
      <img :src="slide" alt="" width="100%">
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    props:['swiperSlides'],
    data() {
      return {
        swiperOption: {
          setWrapperSize: true,
          pagination:'.swiper-pagination',
          observeParents: true,
          loop:true,
        }
      }
    },

  }
</script>
