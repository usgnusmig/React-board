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
    - 로그인시 이메일, 암호 형식검사
      (나중에 회원가입 기능 만들때 옮길것)
    - 모달 로그인창 로그인버튼 조건부 활성화
      - 이메일 암호 통과되면 로그인버튼 활성화됨

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
