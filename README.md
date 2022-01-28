# React-Board

# 무작정 리엑트로 게시판 만들기

프로젝트 시작 : 2022.01.28 ~
사용하는 기술 :

- React.js
- styled-components

---

## 목적

- 리액트 기능들을 공부하고 게시판을 점진적으로 개선시킨다.

## 구현할 기능

- ### 로그인

  - 모달창을 통해 로그인 화면 추가

    - 로그인 버튼 클릭시 모달 창 팝업
    - 모달 창 내에서 비밀번호 찾기 기능 구현

  - 회원가입 기능 구현
    - 회원가입
    - 비밀번호 변경
    - 비밀번호 찾기
    - 회원 탈퇴

- ### 게시판
  - 로그인 후 글쓰기 가능 (로그인 안하면 조회만 가능)

---

## 디렉토리 구조

src

- components
  - Main
    - Main.js
  - Nav
    - Account
      - Account.js
      - Login
        - Login.js
        - LoginModal.js
      - Signup
        - Signup.js
    - Nav.js
    - Logo.js
  - Home.js
- App.js
- index.js
