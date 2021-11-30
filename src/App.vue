<template>
  <van-config-provider :theme-vars="themeVars">
    <router-view />
  </van-config-provider>
  <van-number-keyboard safe-area-inset-bottom />
</template>
<script lang="ts">
import { defineComponent, provide } from 'vue'
import { ConfigProvider } from 'vant';
export default defineComponent({
  components:{
    [ConfigProvider.name]: ConfigProvider
  },
  setup: () => {
    return {
      themeVars: {
        dropdownMenuHeight: '46px',
        dropdownMenuTitleActiveTextColor: '#0072FF',
        dropdownMenuOptionActiveColor: '#0072FF',
        dropdownMenuBoxShadow: 'none',
        dropdownMenuBackgroundColor: 'none',
      },
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
/**app.wxss**/
body{
  height:100%;
  background:rgba(240,240,240,1);
  overflow: scroll;
  -webkit-overflow-scrolling: touch
}
.mt-10{
  margin-top: 10px;
}
.mt-20{
  margin-top: 20px;
}
.font-18{
  font-size: 18px;
}
.text-center{
  text-align: center;
}
.text-right{
  text-align: right;
}
.container {
  height: 100%;
  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box; */
  width:100%;
  display: flex;
 flex-direction: column;
} 
.primary-color {
  color: #0072ff;
}
.flex{
  display: flex;
}
.flex-middle{
  display: flex;
  align-items: center;
}
.flex-1{
  flex: 1;
}

.white-bg{
  background-color: #fff;
}
.com-title{
  padding: 40rpx 40rpx 40rpx 60rpx;
  font-size: 36rpx;
  position: relative;
}
.com-title::before{
  content: "";
  display: block;
  width: 3px;
  height: 36rpx;
  background: #0072FF;
  border-radius: 0px 3px 3px 0px;
  position: absolute;
  left: 20px;
  top: 24px;
}
.common-btn{
  background-color: #0072FF;
  border-radius: 23px;
  color: #fff;
  font-size: 15px;
}
.no-data{
  text-align: center;
  padding: 90px 0;
  font-size: 14px;
  color: #999;
}
.no-data .no-data-img{
  width: 160rpx;
  display: block;
  margin: 40rpx auto;
}

</style>
