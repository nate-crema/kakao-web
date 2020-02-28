<template>
  <div class="home">
      <div class="friends home-data">
          <span class="head">
              <p class="section-title">친구</p>
              <img src="~/assets/img/searchIcn.svg" class="searchBtn"/>
          </span>
          <div class="profile">
              <div class="profile-indiv-cover personalProfile">
                  <div class="profileImg"
                  :style="{ backgroundImage: 'url(' + userProfile.profileImageURL + ')'}"></div>
              </div>
              <div class="profile-indiv-cover friends">
                <div class="profile-indiv friends"
                :v-for="friendProfile in friendProfiles">
                    <!-- <div class="profileImg"
                    :style="{backgroungImage: friendProfile.photo}"></div> -->
                </div>
              </div>
          </div>
      </div>    
      <div class="chat-area home-data">

      </div>
  </div>
</template>

<script>

import "~/assets/img/searchIcn.svg";

export default {
    data() {
        return {
            userProfile: {
                "nickName": "김화균",
                "profileImageURL": "http://th-p.talk.kakao.co.kr/th/talkp/wk8AfzaEM8/dMXNHF6XVYinc5AyWVJ7Ak/vefpih_640x640_s.jpg",
                "thumbnailURL": "http://th-p.talk.kakao.co.kr/th/talkp/wk8AfzaEM8/dMXNHF6XVYinc5AyWVJ7Ak/vefpih_110x110_c.jpg",
                "countryISO": "KR"
            },
            friendProfiles: [
                {
                    "nickName": "김화균",
                    "profileImageURL": "http://th-p.talk.kakao.co.kr/th/talkp/wk8AfzaEM8/dMXNHF6XVYinc5AyWVJ7Ak/vefpih_640x640_s.jpg",
                    "thumbnailURL": "http://th-p.talk.kakao.co.kr/th/talkp/wk8AfzaEM8/dMXNHF6XVYinc5AyWVJ7Ak/vefpih_110x110_c.jpg",
                    "countryISO": "KR"
                },
                {
                    "nickName": "김화균",
                    "profileImageURL": "http://th-p.talk.kakao.co.kr/th/talkp/wk8AfzaEM8/dMXNHF6XVYinc5AyWVJ7Ak/vefpih_640x640_s.jpg",
                    "thumbnailURL": "http://th-p.talk.kakao.co.kr/th/talkp/wk8AfzaEM8/dMXNHF6XVYinc5AyWVJ7Ak/vefpih_110x110_c.jpg",
                    "countryISO": "KR"
                },
            ]
        }
    },
    mounted() {
        $(document).ready(() => {
            $("body").height($(window).height());
            $(".home").height($(window).height());
            setTimeout(() => {
                $("div.login").css("opacity", "1");
                setTimeout(() => {
                    $("div.btnKakaoRedirect").css("opacity", "1");
                }, 300);
            }, 250);
        })
    }
}
</script>

<style>
.home {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 450px auto;
}

.home-data {
    border: 1px solid black;
}

.home .friends {
    width: auto;
}

.home .friends .head {
    position: fixed;
    top: 30px;
    left: 30px;
}

.home .friends .head p.section-title {
    width: fit-content;
    font-size: 32px;
    font-family: "Noto Sans KR";
    font-weight: 500;
    float: left;
}

.home .friends .head img.searchBtn {
    position: absolute;
    top: 10px;
    left: 350px;
    float: right;
    width: 25px;
    height: auto;
}



.home .friends .profile {
    /* position: fixed; */
    margin-top: 100px;
}


.home .friends .profile-indiv-cover {
    border: 1px solid black;
    height: 100px;
}
.home .friends .profile-indiv-cover .profileImg {
    width: 70px;
    height: 70px;
    background-size: cover;
    border-radius: 30px;
    position: relative;
    top: 50%;
    left: 30px;
    transform: translateY(-50%);
}
</style>