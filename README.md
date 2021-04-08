# wegram 앱은...

Instagram 앱과 비슷한 기능을 수행하는 앱이다.

# 사용 기술 스택

- React Native With Expo (expo-cli)
- Firebase Authentication
- Firebase Cloud Firestore

# 기능 및 UI 구현

기존 인스타그램 보다 가볍게 기능을 구현하였으며, 심플한 디자인을 추구했고 메인 페이지 상단에 간단한 광고를 보일 수 있도록 구성함

# 전체 앱 화면
<img src="https://github.com/17beans/wegram/blob/main/%EC%99%84%EC%84%B1%20%EB%AA%A8%EC%8A%B5%20gif/%EC%A0%84%EC%B2%B4%20%EC%95%B1%20%ED%99%94%EB%A9%B4.gif?raw=true" height="500">

# 완성된 모습
올바르지 않은 입력값 처리
<img src="https://github.com/17beans/wegram/blob/main/%EC%99%84%EC%84%B1%20%EB%AA%A8%EC%8A%B5%20gif/%EC%98%AC%EB%B0%94%EB%A5%B4%EC%A7%80%20%EC%95%8A%EC%9D%80%20%EC%9E%85%EB%A0%A5%EA%B0%92%20%EC%B2%98%EB%A6%AC.gif?raw=true" height="500">

<div class="card-columns" id="cards-box">
		<div class="card">
	        <img class="card-img-top"
	             src="https://d1blyo8czty997.cloudfront.net/tour-photos/n/4708/1200x600/5791761964.jpg"
	             alt="Card image cap">
	        <div class="card-body">
	            <a href="https://naver.com" class="card-title">여기 기사 제목이 들어가죠</a>
	            <p class="card-text">기사의 요약 내용이 들어갑니다. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화 삼천리 화려강산...</p>
	            <p class="comment">여기에 코멘트가 들어갑니다.</p>
	        </div>
	    </div>
		<div class="card">
	        <img class="card-img-top"
	             src="https://d1blyo8czty997.cloudfront.net/tour-photos/n/4708/1200x600/5791761964.jpg"
	             alt="Card image cap">
	        <div class="card-body">
	            <a href="https://naver.com" class="card-title">여기 기사 제목이 들어가죠</a>
	            <p class="card-text">기사의 요약 내용이 들어갑니다. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화 삼천리 화려강산...</p>
	            <p class="comment">여기에 코멘트가 들어갑니다.</p>
	        </div>
	    </div>
		<div class="card">
	        <img class="card-img-top"
	             src="https://d1blyo8czty997.cloudfront.net/tour-photos/n/4708/1200x600/5791761964.jpg"
	             alt="Card image cap">
	        <div class="card-body">
	            <a href="https://naver.com" class="card-title">여기 기사 제목이 들어가죠</a>
	            <p class="card-text">기사의 요약 내용이 들어갑니다. 동해물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라만세 무궁화 삼천리 화려강산...</p>
	            <p class="comment">여기에 코멘트가 들어갑니다.</p>
	        </div>
	    </div>
		<!-- <div>
			글 이미지 업로드
			<img src="./글, 이미지 업로드.gif" height="500">
			글 이미지 업로드
			<img src="./글, 이미지 업로드.gif" height="500">
		</div> -->
	</div>
<style type="text/css">
		.card{
			position: relative;
			display: -webkit-box;
			display: -ms-flexbox;
			display: flex;
			-webkit-box-orient: vertical;
			-webkit-box-direction: normal;
			-ms-flex-direction: column;
			flex-direction: column;
			min-width: 0;
			word-wrap: break-word;
			background-color: #fff;
			background-clip: border-box;
			border: 1px solid rgba(0, 0, 0, 0.125);
			border-radius: 0.25rem;
		}
		.card-img{
			width: 100%;
			border-radius: calc(0.25rem - 1px);
		}
		img {
			page-break-inside: avoid;
		}
		.card-columns {
			margin-bottom: 0.75rem;
			display: inline-block;
    		width: 100%;
    		-webkit-column-count: 3;
		    -moz-column-count: 3;
		    column-count: 3;
		    -webkit-column-gap: 1.25rem;
		    -moz-column-gap: 1.25rem;
		    column-gap: 1.25rem;
		}
		.card-img-top{
			width: 100%;
		  	border-top-left-radius: calc(0.25rem - 1px);
		  	border-top-right-radius: calc(0.25rem - 1px);
		}
		.card-body{
			-webkit-box-flex: 1;
		  	-ms-flex: 1 1 auto;
		  	flex: 1 1 auto;
		  	padding: 1.25rem;
		}
	</style>
