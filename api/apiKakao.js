import express from 'express';
import axios from 'axios';
const request = require("request");
// const axios = require("axios");
import async from 'async';


// Create express router
const router = express.Router();

// Transform req & res to have the same API as express
// So we can use res.status() & res.json()
const app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

// /login
router.post('/login', (req, res) => {
    console.log(req.body);
    console.log(req.body.code);
  if (req.body.code) {
    async.waterfall([
        (callback) => {
            // console.log(JSON.stringify({
            //     grant_type: 'authorization_code',
            //     client_id: '621bc945a98d950515384a14a15033f5',
            //     redirect_uri: 'http://localhost:3000/loginAuthorize',
            //     code: req.body.code
            //     // client_secret: "uJvciD2gqNfTWD1YME7USAaAIcEhvDDq"
            // }));
            // axios.post("https://kauth.kakao.com/oauth/token", {
            //     grant_type: "authorization_code",
            //     client_id: "621bc945a98d950515384a14a15033f5",
            //     redirect_uri: "http://localhost:3000",
            //     code: req.body.code
            //     // "client_secret": "uJvciD2gqNfTWD1YME7USAaAIcEhvDDq"
            // })

            request({
                uri: "https://kauth.kakao.com/oauth/token",
                method: "POST",
                encoding: "UTF-8",
                formData: {
                    grant_type: "authorization_code",
                    client_id: "621bc945a98d950515384a14a15033f5",
                    redirect_uri: "http://localhost:3000",
                    code: req.body.code
                },
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                }
            }, (err, respond, body) => {
                console.log(respond.request);
                console.log(err);
                console.log(body);
            })

            // axios({
            //     url: "https://kauth.kakao.com/oauth/token",
            //     method: "POST",
            //     data: {
            //         grant_type: "authorization_code",
            //         client_id: "621bc945a98d950515384a14a15033f5",
            //         redirect_uri: "http://localhost:3000",
            //         code: req.body.code
            //     }
            //     // headers: {
            //     //     "Content-Type": "charset=utf-8"
            //     // }
            // })
            // .then((data) => {
            //     return res.json(data);
            //     console.log(data);
            //     // const access_token = data.access_token,
            //     // token_type = data.access_token,
            //     // refresh_token = data.access_token

            //     // if (access_token && token_type && refresh_token) {
            //     //     callback(null, {access_token, token_type, refresh_token});
            //     //     // req.session.userKakao = 
            //     // } else {
            //     //     callback({code: 401, cont: "KAPI ERROR"});
            //     // }
            // })
            // .catch((e) => {
            //     console.error(e);
            //     return res.status(401).json({ message: 'KAPI ERROR' })
            //     callback({code: 401, cont: "KAPI ERROR"});
            // })
        },
        // ({access_token, token_type, refresh_token}, callback) => {
        //     axios.get('https://kapi.kakao.com/v2/user/me', null, {
        //         headers: {
        //             Authorization: "Bearer " + access_token
        //         }
        //     })
        //     .then(({data}) => {
        //         console.log(data);
        //     })
        // }
    ])
    // req.session.authUser = { username: 'demo' }
    // return res.json({ username: 'demo' })
  }
//   res.status(401).json({ message: 'Bad credentials' })
})

// /logout
router.post('/logout', (req, res) => {
  delete req.session.authUser
  res.json({ ok: true })
})



export default {
  path: '/apiKakao',
  handler: router
}