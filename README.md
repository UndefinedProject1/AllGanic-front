# :earth_asia: All_Ganics (Front End) [![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
![image](https://user-images.githubusercontent.com/85853145/147472921-17a12cc4-f7df-448c-b3a5-d54e08c85852.png)


## Summary / 요약
- __프로젝트 기간__ : 2021.10.04 - 2021.12.03 (계속해서 부분 업데이트 중)
- __프론트엔드 구성__ : [권다은](https://github.com/kaydan95), [정다경](https://github.com/Jeong-Dagyeong)
- __메인 개발 환경__ : Vue.js (version 3)


## Installation / 설치
    npm install element-plus --save
    npm install @element-plus/icons
    npm install --save jquery
    npm install --save vue3-apexcharts
    npm install vee-validate@next --save
    npm install -S yup
    npm install aos --save


## Start / 구동
    npm run serve
    

### Guide / 가이드

All-Ganic 프로젝트의 많은 기능들을 더 쉽고 간편하게 아래의 가이드를 통해 즐길수있습니다.

저희 All_Ganics 는 회원가입의 과정 없이 사이트를 둘러보는 것은 가능하나 일부 기능(장바구니, 주문, 마이페이지)은 회원 한정으로 제작되어있습니다. 회원가입(일반, 카카오톡)을 이용해보시는 방법도 있으나 하단의 대표 아이디로 로그인하셔서 사이트를 이용해보실 수 있습니다.

관리자 페이지(admin_page)를 이용하시려면 관리자 아이디로 로그인 하셔야합니다. 


```
- 멤버
아이디 : guest@gmail.com
암호 : guest123!

- 관리자
아이디 : a@gmail.com 
암호 : aa

- 관리자로 로그인 후 http://18.223.251.77:3000/admin_page로 이동
```


## Features / 특징

- Vue-Router를 이용한 component 전환
- 카카오톡 로그인 기능   
  -> 회원일 시 로그인 기능이지만 회원이 아닐시 회원가입과 로그인까지 한번에 이루어지도록
- 부여한 "_role_"에 따라 접근가능한 페이지를 분리(관리자, 고객)
- sessionstorage에 URL 경로를 저장   
  -> 회원만 이용 가능한 서비스 페이지의 경우, 로그인 또는 회원가입 페이지로 이동한 뒤 완료 시 바로 직전 마지막 페이지로 이동하도록 처리.
    ```js
    if(to.path !== '/login' && to.path !== '/join'){
        sessionStorage.setItem("URL", JSON.stringify({path:to.path, query: to.query}));
    }
    ```
- 로그인 후 회원가입 대신 마이페이지가 표시되도록 상태 변경
- _반응형 UI (보완작업 진행중)_ :muscle:



## Tech / 개발환경
- ![Vue JS](https://img.shields.io/badge/-Vue.js-4FC08D?style=flat-square&logo=vue.js&logoColor=white) : 메인 개발 환경
- ![element-plus](https://img.shields.io/badge/-element--plus-409EFF?style=flat-square) : 라이브러리
- ![socket.io](https://img.shields.io/badge/-socket.io-010101?style=flat-square&logo=socket.io&logoColor=white) : 실시간 장바구니, 판매량 조회 시 이용
- ![axios](https://img.shields.io/badge/-axios-167C80?style=flat-square) : 백엔드 연동
- ![jQuery](https://img.shields.io/badge/-jQuery-0769AD?style=flat-square&logo=jQuery&logoColor=white) : 아임포트 Api 이용시


## Open API / 오픈 api
- [Daum 우편번호 API](https://postcode.map.daum.net/guide) : 회원가입, 마이페이지 회원정보 수정
- [Kakao 로그인 API](https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api, "Kakao 로그인 API") : 로그인
- [PG 결제 연동 API](https://www.iamport.kr, "PG 결제 연동 API") : 주문


## Layout / 주요 페이지 및 구조
- #### :shopping_cart: 전체적인 구성(일반회원) 

| Menu | 하위구조 |
| ------ | ------ |
| Main | 총 4개의 sections - 메인(검색기능), 추구하는 가치, 임시 프로모션 화면, preview |
| Login | 이메일, 암호로 를 이용한 로그인 / 카카오 로그인 API 추가 사용 |
| ForgotPassword (비밀번호찾기) | 가입했던 이메일로 임시비밀번호 발송 |
| Join | 필수, 선택 항목으로 구분, 유효성 검사 및 다음 우편 API 추가 사용 |
| Product_table | 아이콘을 이용한 장바구니 기능, pagination  |
| Product_detail_page | 상품정보, 상세이미지, 후기작성 및 목록(신고기능), 문의작성 및 목록, 교환 환불정보 |
| My_Page (회원) | 기본 회원정보 수정(Daum 우편 번호 API사용), 주문 및 교환환불 내역, 문의내역 |
| Product_Cart (회원) | 기본 팝업 형식에서 장바구니 페이지로 이동, 수령 변경 후 저장 |
| Order_Page (회원) | 성명, 연락처, 주소 필수 기입(유효성), PG 결제 연동 API 사용, 환불 교환 정책 모달처리 |


- #### :chart_with_upwards_trend: 관리자페이지 구성 
| Menu | 하위구조 |
| ------ | ------ |
| Main | 일일 판매량, 브랜드 점유율 차트 / Apex Chart |
| Brand | 브랜드 등록(이미지 및 이름, 설명) / 브랜드 현황 |
| Product | 카테고리 별 조회 및 추가, 상품등록 및 등록 현황조회  |
| Chart | 브랜드별 누적판매율, 카테고리별 누적 판매율 / Apex Chart |
| FAQ | 문의 목록, 답변 등록기능, 해당 문의 신고 기능 / socket.io 이용 실시간 반영|
| Memeber | 회원관리 - 누적 경고건에 의한 탈퇴 기능 및 누적 횟수별 정렬하여 목록 조회 |

## 
