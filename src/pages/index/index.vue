<template>
  <div>
    <i-card v-for="data of data" :key="data.id" class="card" :title="data.name" :extra="data.time" :thumb="data.pic">
      <view slot="content">{{data.con}}</view>
      <view slot="footer" class="right">创建于{{data.create}}</view>
    </i-card>
<!-- 
    <i-modal :visible="loginShow" @ok="loginOk" ok-text="获取数据" @cancel="loginCancel" >
        <view>一些文本</view>
        <view>一些文本</view>
    </i-modal> -->
    <cover-view class="shadow" v-show="loginShow">
      <button class="okBtn" @click="loginOk" type="primary">开启记录</button>
      <button class="cancelBtn" @click="loginCancel" type="primary">随便逛逛</button>
    </cover-view>
  </div>
</template>

<script>
import card from '@/components/card'
import store from '@/store/store'

export default {
  data () {
    return {
      loginShow:true,
      data:[
        {
          id:1,
          name:'卡片',
          time:'2019年12月30日',
          pic:'https://i.loli.net/2017/08/21/599a521472424.jpg',
          con:'内容不错',
          create:'2019年12月30日'
        },
        {
          id:2,
          name:'卡片',
          time:'2019年12月30日',
          con:'内容不错',
          create:'2019年12月30日'
        },
        {
          id:3,
          name:'卡片',
          time:'2019年12月30日',
          pic:'https://i.loli.net/2017/08/21/599a521472424.jpg',
          con:'内容不错',
          create:'2019年12月30日'
        },
        {
          id:4,
          name:'卡片',
          time:'2019年12月30日',
          pic:'https://i.loli.net/2017/08/21/599a521472424.jpg',
          con:'内容不错',
          create:'2019年12月30日'
        },
      ],
      motto: 'Hello miniprograme',
      userInfo: {
        nickName: 'mpvue',
        avatarUrl: 'http://mpvue.com/assets/logo.png'
      }
    }
  },
  computed:{
    carddata(){
      return store.state.data
    }
  },

  components: {
    card
  },

  methods: {
    loginOk(){
      this.loginShow=false
      wx.login({
        success(res) {
          console.log(res)
          if (res.code) {
            // 发起网络请求
            // wx.request({
            //   url: 'https://test.com/onLogin',
            //   data: {
            //     code: res.code
            //   }
            // })
          } else {
            console.log('登录失败！' + res.errMsg)
          }
        }
      })
    },
    loginCancel(){
      this.loginShow=false
    },
    bindViewTap () {
      const url = '../logs/main'
      if (mpvuePlatform === 'wx') {
        mpvue.switchTab({ url })
      } else {
        mpvue.navigateTo({ url })
      }
    }
  },

  created () {
    store.commit('init',['tt','qq'])
    store.commit('init',['tt1','qq'])
    console.log(this.carddata)
  }
}
</script>

<style scoped>
.shadow{
  background:white;
  position:fixed;
  top:0;
  width:100%;
  height:100%
}
.card{
  margin-bottom:20rpx
}
.right{
  text-align: right;
}
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
}
</style>
