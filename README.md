# 🚀SpaceStation - SNS 웹 서비스
[spacestation](http://kdt-sw-7-team03.elicecoding.com/)배포링크
<br/>

## :file_folder:프로젝트 실행 방법 및 구조
- 각 폴더의 .env.sample 파일을 참고하여 .env 파일 생성 후 값을 넣어주어야 합니다.

- client
  
      git clone https://github.com/kmj0973/spacestation.git
      cd client
      npm install
      npm run dev


- server

      cd server
      npm install
      npm run dev

- 프로젝트 구조

      client
       ┣ src
       ┃ ┣ components
       ┃ ┃ ┣ CreateFeed
       ┃ ┃ ┃ ┣ CreateFeed.api.ts
       ┃ ┃ ┃ ┣ CreateFeed.hooks.ts
       ┃ ┃ ┃ ┣ CreateFeed.styles.ts
       ┃ ┃ ┃ ┣ CreateFeed.tsx
       ┃ ┃ ┃ ┗ CreateFeed.type.ts

      server
       ┣ src
       ┃ ┣ feed
       ┃ ┃ ┣ feed.controller.ts
       ┃ ┃ ┣ feed.model.ts
       ┃ ┃ ┣ feed.router.ts
       ┃ ┃ ┗ feed.service.ts

## :clapper:프로젝트 소개
- [인스타그램](https://www.instagram.com/)과 [오늘의 집](https://ohou.se/)을 모티브로 만든 나만의 공간을 자랑하는 SNS 웹 서비스입니다.


## :clock2:개발 기간
- 2023.12.11 ~ 2023.12.29


## :family:팀원 소개
- 오강산(팀장) : 프로젝트 구조 설계, 게시물 컴포넌트 및 API 구현
- 김지훈 : 소설 로그인 구현, 게시물 태그 버튼 및 위치 설정 구현 
- 고명준 : 게시물 생성, 수정, 삭제 컴포넌트 및 API 구현
- 서슬빈 : 댓글,대댓글 컴포넌트 및 API 구현
- 정현지 : 헤더 컴포넌트 구현, 좋아요, 북마크, #태그 컴포넌트 및 API 구현
- 홍소현 : UI 디자인, 프로필 컴포넌트 및 API 구현

## :closed_book:주요 기능

| ![Animation](https://github.com/kmj0973/spacestation/assets/92308258/1b091cd5-a1f5-456a-9a2c-83707fa0e502) |![Animation](https://github.com/kmj0973/spacestation/assets/92308258/e3bff4c0-2cec-483d-9e30-28120899658f) |
|:--------------------:|:--------------------:|
| 메인, 카테고리 페이지 | 프로필 페이지 | 

| ![Animation](https://github.com/kmj0973/spacestation/assets/92308258/30f7b504-2964-4d71-8027-5d5956265909) |![Animation](https://github.com/kmj0973/spacestation/assets/92308258/a6c16c74-e2d1-4c54-8683-3d67dca2f3a6)|
|:--------------------:|:--------------------:|
| 좋아요, 북마크 기능 | 게시물 업로드 페이지 | 

| ![Animation](https://github.com/kmj0973/spacestation/assets/92308258/aa6cb5a7-ac8f-4455-a7c3-6fd4dc9e3ee3) | ![Animation](https://github.com/kmj0973/spacestation/assets/92308258/b2af3bf9-98c6-4f31-9bac-7418c1604119) |
|:--------------------:|:--------------------:|
| 게시물 수정, 삭제 기능 | 해쉬태그, 장소 페이지 | 

| ![Animation](https://github.com/kmj0973/spacestation/assets/92308258/3089a716-997a-4f63-85e2-5ae718521292) | ![Animation](https://github.com/kmj0973/spacestation/assets/92308258/8dda7af4-815b-4dd1-b4d1-d4f748ed2ed6)|
|:--------------------:|:--------------------:|
| 검색 페이지 | 팔로우, 팔로잉 기능 | 

## 🔧커밋 컨벤션

| Tag | descrtion |
| ------ | ------ |
| Feat |  새로운 기능을 추가하는 경우 |
| Fix | 버그를 고친경우| 
| Docs | 문서를 수정한 경우| 
| Style | 코드 포맷 변경, 세미콜론 누락, 코드 수정이 없는경우| 
| Refactor | 코드 리펙토링| 
| Test | 테스트 코드. 리펙토링 테스트 코드를 추가했을 때| 
| Chore | 빌드 업무 수정, 패키지 매니저 수정| 
| Design | CSS 등 사용자가 UI 디자인을 변경했을 때| 
| Rename | 파일명(or 폴더명) 을 수정한 경우| 
| Remove | 코드(파일) 의 삭제가 있을 때. "Clean", "Eliminate" 를 사용하기도 함| 
