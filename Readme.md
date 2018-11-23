 

# 클라우드 자동 업로드 미들웨어
##팀멤버
이름 | 역할  
---|---
계성혁 (소프트웨어학과 13) | <img src="https://assets.pcmag.com/media/images/483051-microsoft-onedrive.png?width=333&height=245" style="height:20px;">   OneDrive 연동 
조은성 (산업공학과 13) | <img src="https://qumulo.com/wp-content/uploads/2018/07/prod-art-aws-600.width-1200.png" style="height:30px"> AWS S3 연동 
신희수 (소프트웨어학과 16) | <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Google_Drive_Logo.svg/555px-Google_Drive_Logo.svg.png" style="height:20px">   Google Drive 연동 
이태경 (이태경 17) | <img src="https://image.flaticon.com/icons/png/512/306/306443.png" style="height:20px">    문서화 담당 


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

## Future To-Do List
[] NPM Registry 등록
[] Documentation 작성



