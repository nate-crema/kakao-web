<template>
  <div>
    <div class="login">
      <img class="logo" src="~/assets/img/kakaoTalk.png"/>
      <div class="btnKakaoRedirect">카카오계정 로그인</div>
    </div>
    <!-- <iframe src="https://kauth.kakao.com/oauth/authorize?client_id={app_key}&redirect_uri={redirect_uri}&response_type=code" width="420px" height="500px"></iframe> -->
  </div>
</template>

<script>

import "~/assets/img/kakao-banner-yt.jpg";
import "~/assets/img/kakaoTalk.png";

export default {
  mounted() {
    $(document).ready(() => {
      $("body").height($(window).height());
      setTimeout(() => {
        $("div.login").css("opacity", "1");
        setTimeout(() => {
          $("div.btnKakaoRedirect").css("opacity", "1");
        }, 300);
      }, 250);


      $("div.btnKakaoRedirect").click(() => {
        location.href = "https://kauth.kakao.com/oauth/authorize?client_id=621bc945a98d950515384a14a15033f5&redirect_uri=http://localhost:3000&response_type=code";
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