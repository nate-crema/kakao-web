<template>
  <div>
    <div class="login">
      <img class="logo" src="~/assets/img/kakaoTalk.png"/>
      <div class="btnKakaoRedirect">로그인중...</div>
    </div>
    <!-- <iframe src="https://kauth.kakao.com/oauth/authorize?client_id={app_key}&redirect_uri={redirect_uri}&response_type=code" width="420px" height="500px"></iframe> -->
  </div>
</template>

<script>

import "~/assets/img/kakao-banner-yt.jpg";
import "~/assets/img/kakaoTalk.png";
import axios from 'axios';

export default {
  mounted() {
    $(document).ready(() => {
      $("body").height($(window).height());
      $("div.login").css("opacity", "1");
      $("div.btnKakaoRedirect").css("opacity", "1");
      const isErr = (location.search.replace("?error=","") != location.search);
      const code = location.search.replace("?code=","");
      if (isErr) {
          alert("로그인중 에러가 발생했습니다. 다시 시도해주세요");
          console.error(isErr);
          location.href="/";
      } else {
          console.log(code);
        //   this.$store.dispatch('login', {
        //       code
        //   })
        // axios({
        //     url: "https://kauth.kakao.com/oauth/token",
        //     method: "POST",
        //     data: {
        //         "grant_type": "authorization_code",
        //         "client_id": "621bc945a98d950515384a14a15033f5",
        //         "redirect_uri": "http://localhost:3000/loginAuthorize",
        //         "code": code
        //     }
        //     // "client_secret": "uJvciD2gqNfTWD1YME7USAaAIcEhvDDq"
        // })
        // .then((response) => {console.log(response)})
        // .catch((e) => {console.error(e)})
          axios.post('/apiKakao/login', {code})
          .then((res_token) => {
            //   if (res_token)
          })
      }
//       curl -v -X POST https://kauth.kakao.com/oauth/token \
//  -d 'grant_type=authorization_code' \
//  -d 'client_id=621bc945a98d950515384a14a15033f5' \
//  -d 'redirect_uri=http://localhost:3000/loginAuthorize' \
//  -d 'code=65HsFpOOKcSdYVcZlwqlr5S6_6DyjTHFcpqQooJkGjtCkYQBnbW91BNmsFtrA-A5zTRKhQo9dRkAAAFwhwgSpQ';
      $("div.btnKakaoRedirect").click(() => {
          alert("로그인 진행중입니다. 잠시만 기다려주세요");
      })
    })
  }
}
</script>

<style>

* {
  transition: all .5s ease;
}

body {
  background-image: url("../assets/img/kakao-banner-yt.jpg");
}
.login {
  width: 500px;
  height: 80%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.92);
  border-radius: 15px;
  opacity: 0;
}

.logo {
  width: 170px;
  height: auto;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
}

.btnKakaoRedirect {
  width: 270px;
  height: 60px;
  background-color: #ffe500;
  color: #252525;
  border-radius: 4px;
  text-align: center;
  padding-top: 16px;
  font-family: "Noto Sans KR";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  cursor: pointer;
}


@media (max-width: 550px) {
  .login {
    width: 100%;
  }
}
</style>