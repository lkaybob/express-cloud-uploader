 

# 클라우드 자동 업로드 미들웨어
## 팀멤버
이름 | 역할
---|---
계성혁 (소프트웨어학과 13) | OneDrive 연동
조은성 (산업공학과 13) | AWS S3 연동
신희수 (소프트웨어학과 16) | Google Drive 연동
이태경 (이태경 17) | 문서화 담당 


## 프로젝트 내용 (설명)
### 개요
웹서비스가 올려받은 파일을 서버 인스턴스에서 관리하기에는 용량 관리 및 정합성 관리를 하기 어렵다. 이를 보완하기 위해서 AWS의 S3와 같은 스토리지 서비스에 파일 저장을 위임하기도 한다.
본 패키지에서는 S3뿐만 아니라, Google Drive와 OneDrive에도 파일 업로드를 하여, 웹서비스 관리자가 쉽게 파일을 관리할 수 있도록 미들웨어를 제공한다.

### 부족한 기능 파악후, 기능 개선 목록
웹서버와 S3를 같이 운영하다보면 이를 연동하는 것이 힘들다는 아이디어에서 착안해 Express.js 환경에서 formidable와 aws-sdk 패키지 / OneDrive REST API / Google Drive SDK를 래핑하여 업로드된 이미지를 S3/OneDrive/Google Drive에 자동으로 업로드하여 쉽게 활용할 수 있도록 함.

### 기대효과
웹서버와 타 스토리지를 서비스를 함께 사용하고자 하는 타 개발자들이 연동을 하는데 필요한 부담을 덜어줄 수 있다.

## 사용되는 Github 오픈소스 SW 목록
* aws-sdk ([Github](https://github.com/aws/aws-sdk-js) / [NPM](https://www.npmjs.com/package/aws-sdk))
    * AWS 서비스를 사용하기 위한 JS SDK
    * Installing

* formidable ([Github](https://github.com/felixge/node-formidable) /  [NPM](https://www.npmjs.com/package/formidable))
    * HTTP Request의 multipart Payload 파싱 도와주는 라이브러리

## Future To-Do List
* [ ] aws-sdk, OneDrive REST API, Google Drive SDK를 S3연동 미들웨어 구축
* [ ] NPM Registry 등록
* [ ] Documentation 작성


