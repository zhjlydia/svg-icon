<template>
  <div id="app">
    <div class="body-wrap">
      <div class="page-model-label-name">iconfont</div>
      <div class='padL20 padR20'>
        <span v-for="(item,index) in iconList" :key="index">
          <font-icon :type="item" size="60" color="#ffa896"/>
        </span>
        </div>
      <div class="page-model-label-name">svg-sprite</div>
      <!-- <svg>
        <use xlink:href="#icon-food-chips"/> 
      </svg>
      -->
      <div class='padL20 padR20'>
        <span v-for="(item,index) in iconList2" :key="index">
          <svg-icon :type="item" size="60" color="#ffa896"/>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
// require('@/icons/colorSvg/food-chips.svg')

export default {
  name: 'app',
  data:()=>{
    return {
      iconList:['alert-circled','alert-filled','align-center','align-justify','align-left','align-right','arrow-down-circled','arrow-down',
      'arrow-left-circled','arrow-left','arrow-right-circled','arrow-right','arrow-up-circled','arrow-up','bell'],
      iconList2:['alert-circled','alert-filled','align-center','align-justify','align-left','align-right','arrow-down-circled','arrow-down',
      'arrow-left-circled','arrow-left','arrow-right-circled','arrow-right','arrow-up-circled','arrow-up','bell']
      // iconList2:['alert-circled','alert-filled','align-center','align-justify','align-left','food-avocado','food-bread','food-chips',
      // 'food-cookie','food-doughnut','food-hotdog','food-pecan','food-pizza','food-popcorn','food-pudding','food-strawberry','food-taco']
    }
  }
}
</script>

<style lang="less">
@import './styles/index.less';
#app {
  padding:30px;
}
.body-wrap{
  background:#fff;
  padding:20px;
}
</style>
