<template>
  <div>
    <i-panel title="必填部分">
      <view class="input-box">
        <view class="input-name">名称</view>
        <input class="input" placeholder="物品简称（16字以内)" auto-focus v-model.lazy="data.name" maxlength="16"/> 
      </view>
      <picker mode="date" :value="data.time" :start="startTime" end="2120-08-14" @change="bindDateChange">
        <i-input :value="data.time" title="时间" placeholder="请选择过期时间" />
      </picker>
    </i-panel>
    <i-panel title="选填部分">
      <view class="input-box">
        <view class="input-name">描述</view>
        <input class="input" placeholder="描述（选填）" v-model.lazy="data.con" maxlength="48"/> 
      </view>
      <view class="input-box">
        <view class="input-name">图片</view>
        <input class="input" placeholder="输入图片地址（选填）" v-model.lazy="data.pic"/> 
      </view>
    </i-panel>
      <text class="msg">*因成本问题后期再开发拍照、上传图片功能</text>

    <i-button class="btn" @click="handleClick" type="success">新增</i-button>
    <i-toast id="toast" />
  </div>
</template>

<script>
const { $Toast } = require('@/../static/dist/base/index')
export default {
  data () {
    return {
      startTime:'',
      data:{
        name:'',
        time:''
      },
      name:'gg'
    }
  },

  methods: {
    bindDateChange(e) {
      this.data.time=e.target.value
    },
    changeval(e,name){
      console.log('picker发送选择改变，携带值为', e)
      console.log('picker发送选择改变，携带值为', name)
      
    },
    handleClick() {
      console.log(this.data)
      console.log(this.name)
      if(!this.data.name||!this.data.time){
        $Toast({
            content: '请完成必填部分',
            type: 'warning'
        })
      }else{
        $Toast({
            content: '新增完成',
            type: 'success'
        })
        this.data={}
      }
    }
  },
  created () {
    let today=new Date().toLocaleDateString()
    this.startTime=today.replace(/\//g,"-")
    console.log(this.startTime)
  }
}
</script>

<style scoped>
.btn{
  top:60rpx;
  position:relative;
}
.input-box{
  padding:14rpx 30rpx;
  color:#495060;
  position:relative;
  display:flex;
  background:#fff;
  align-items:center;
  line-height:1.4;
  font-size:28rpx;
  overflow:hidden;


}
.input-name{
  min-width:130rpx;
  padding-right:20rpx
}
.input{
  flex:1;
  line-height:1.6;
  padding:4rpx 0;
  min-height:22rpx;
  height:60rpx;
  text-overflow:clip;
  overflow:hidden;
  white-space:nowrap;

}
.msg{
  font-size:16rpx;
  color:#999;
  padding:0 20rpx 20rpx 25rpx;
}
</style>
