import axios from 'axios';
require("dotenv").config();

const kakaoHeader = {
    'Authorization': process.env.KAKAO_AUTH,
    'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
};

const getKakaoToken = async (code) => {

    try {
        const data = {
            grant_type: 'authorization_code',
            client_id: process.env.KAKAO_CLIENT_ID,
            redirect_uri: 'http://localhost:9090/login_callback',
            code: code,
        };
        const queryString = Object.keys(data)
            .map(k => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
            .join('&');
        const result = await axios.post('https://kauth.kakao.com/oauth/token', queryString, { headers: kakaoHeader });
        console.log('카카오 토큰', result.data.access_token);
        return result;
    } catch (e) {
        return e;
    }
};
const getKakaoUserInfo = async () => {
    let data = '';
    await window.Kakao.API.request({
        url: "/v2/user/me",
        success: function (response) {
            data = response;
        },
        fail: function (error) {
            console.log(error);
        },
    });
    console.log('카카오 계정 정보', data);
    return data;
};

export {
    getKakaoToken,
    getKakaoUserInfo
}