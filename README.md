# wegram 앱은...
Instagram 앱과 비슷하게 나의 일상을 올리고 주변 사람과 공유할 수 있는 기능을 수행하는 앱이다.

# 프로젝트 형태
- 개인 프로젝트

# 사용 기술 스택
- React Native With Expo (expo-cli)
- Firebase Authentication
- Firebase Cloud Firestore
- Firebase Storage

# 기능 및 UI 구현
- 기존 인스타그램 보다 가볍게 기능을 구현하였으며, 심플한 디자인을 추구했고 메인 페이지 상단에 간단한 광고를 보일 수 있도록 배너를 구성함
- 회원가입 및 로그인은 Firebase Authentication 을 이용하여 구현
- 글 업로드 시 텍스트는 Firebase Cloud에 저장, 이미지는 Firebase Storage에 저장

# 전체 앱 화면
<img src="https://github.com/17beans/wegram/blob/main/%EC%99%84%EC%84%B1%20%EB%AA%A8%EC%8A%B5%20gif/%EC%A0%84%EC%B2%B4%20%EC%95%B1%20%ED%99%94%EB%A9%B4.gif?raw=true" height="500">

# 완성된 모습
- 올바르지 않은 입력값 처리
- 자동 로그인
- 좋아요 클릭
- 글, 이미지 업로드
- 댓글 작성
- 로그아웃
<div>
  <img src="https://github.com/17beans/wegram/blob/main/%EC%99%84%EC%84%B1%20%EB%AA%A8%EC%8A%B5%20gif/%EC%98%AC%EB%B0%94%EB%A5%B4%EC%A7%80%20%EC%95%8A%EC%9D%80%20%EC%9E%85%EB%A0%A5%EA%B0%92%20%EC%B2%98%EB%A6%AC.gif?raw=true" height="500">
  <img src="https://github.com/17beans/wegram/blob/main/%EC%99%84%EC%84%B1%20%EB%AA%A8%EC%8A%B5%20gif/%EC%9E%90%EB%8F%99%20%EB%A1%9C%EA%B7%B8%EC%9D%B8.gif?raw=true" height="500">
  <img src="https://github.com/17beans/wegram/blob/main/%EC%99%84%EC%84%B1%20%EB%AA%A8%EC%8A%B5%20gif/%EC%A2%8B%EC%95%84%EC%9A%94%20%ED%81%B4%EB%A6%AD.gif?raw=true" height="500">
  <img src="https://github.com/17beans/wegram/blob/main/%EC%99%84%EC%84%B1%20%EB%AA%A8%EC%8A%B5%20gif/%EA%B8%80,%20%EC%9D%B4%EB%AF%B8%EC%A7%80%20%EC%97%85%EB%A1%9C%EB%93%9C.gif?raw=true" height="500">
  <img src="https://github.com/17beans/wegram/blob/main/%EC%99%84%EC%84%B1%20%EB%AA%A8%EC%8A%B5%20gif/%EB%8C%93%EA%B8%80%20%EC%9E%91%EC%84%B1.gif?raw=true" height="500">
  <img src="https://github.com/17beans/wegram/blob/main/%EC%99%84%EC%84%B1%20%EB%AA%A8%EC%8A%B5%20gif/%EB%A1%9C%EA%B7%B8%EC%95%84%EC%9B%83.gif?raw=true" height="500">
</div>

# 그 외 구현된 기능
사용자가 작성한 글, 작성한 댓글, 누른 좋아요 수, 앱을 켠 횟수를 마이페이지에서 보여줌

# 향후 계획
- 현재 자동 로그인 기능이 단순하게 사용자의 이메일이 존재하는지만 확인하여 메인 페이지로 이동시키는 상태인데, 외부 로그인(카카오톡, 구글)을 이용하여 토큰 로그인 시스템을 구축할 계획이다.
