 

# 클라우드 자동 업로드 미들웨어
##팀멤버
[조은성](/Dev_ES), [계성혁](/lkaybob), [신희수](/heesu_shin), [이태경](/tph00300)

## 프로젝트 내용 (설명)
### 개요
기 존재하는 NPM 모듈인 `aws-sdk`와 `formidable`을 하나의 모듈로 통합하여 S3로의 업로드를 간편하게 해주는 미들웨어 구축

### 부족한 기능 파악후, 기능 개선 목록
웹서버와 S3를 같이 운영하다보면 이를 연동하는 것이 힘들다는 아이디어에서 착안해 Express.js 환경에서 formidable와 aws-sdk 패키지를 래핑하여 업로드된 이미지를 S3에 자동으로 업로드하여 쉽게 활용할 수 있도록 함.

### 기대효과
웹서버와 AWS의 S3 스토리지를 함께 사용하고자 하는 타 개발자들이 연동을 하는데 필요한 부담을 덜어줄 수 있다.

## 사용되는 Github 오픈소스 SW 목록
* aws-sdk ([Github](https://github.com/aws/aws-sdk-js) / [NPM](https://www.npmjs.com/package/aws-sdk))
    * AWS 서비스를 사용하기 위한 JS SDK
* formidable ([Github](https://github.com/felixge/node-formidable) /  [NPM](https://www.npmjs.com/package/formidable))
    * HTTP Request의 multipart Payload 파싱 도와주는 라이브러리

# 구글 드라이브
## Access Token 취득 방법

OAuth2 사용하여 Access 토큰 취득
링크 참조
[Google Drive API](https://developers.google.com/identity/protocols/OAuth2)

## Access Token 파일 저장
취득한 JSON 파일을 oauth2.keys으로 이름 변경
프로젝트 루트에 파일 추가

##코드 작동 과정
유저가 지정한 파일을 formidable 사용하여
파싱, 파싱된 파일을 로컬 서버에 넘겨주면
파일 이름을 파라미터로 받아와
라인 별로 커서 옮기며 드라이브에 업로드

##진행 상황
드라이브 업로드 -> 완료
포미더블 파싱 -> 완료
포미더블 파싱 결과를 파라미터로 받아와
드라이브에 업로드 -> 진행 중


## Future To-Do List
[] NPM Registry 등록
[] Documentation 작성



