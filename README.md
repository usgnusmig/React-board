# React-Board

# 무작정 리엑트로 게시판 만들기

프로젝트 시작 : 2022.01.28 ~

사용하는 기술 :

- React.js
- styled-components
- firebase

---

## 목적

- 리액트 기능들을 공부하고 게시판을 점진적으로 개선시킨다.

## 구현할 기능

- ### 로그인

  > Firebase를 통한 로그인 인증 관리
  >
  > 로그인을 한다고 특별한 기능이 추가되지는 않는다.

  - 모달창을 통해 로그인 화면 추가

    - `useState`, `useRef`를 통해 인풋 상태 관리
    - 로그인 버튼 클릭시 모달 창 팝업
    - 로그인시 이메일, 암호 형식검사
    - 모달 로그인창 로그인버튼 조건부 활성화
      - 이메일 암호 통과되면 로그인버튼 활성화됨

  - 회원가입 기능 구현
    - `useForm`을 통해 인풋 관리
    - 회원가입 버튼 클릭시 모달 창 팝업
    - 이메일 형식 검사, 암호 8자리 이상 되어야만 가입 아닐시 에러 팝업
    <!-- - 비밀번호 변경
    - 비밀번호 찾기
    - 회원 탈퇴 -->

- ### 게시판

---

## 디렉토리 구조

src

- components

  - Main
    - Main.js
  - Nav
    - Account
      - Login
        - Button.js
        - Login.js
        - LoginForm.js
        - LoginModal.js
      - Signup
        - Signup.js
      - Account.js
    - Nav.js
    - Logo.js
  - Home.js

- App.js
- index.js
