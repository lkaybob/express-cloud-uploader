# 클라우드 자동 업로드 미들웨어
## 팀멤버
이름 | 역할
---|---
계성혁 (소프트웨어학과 13) | OneDrive 연동
조은성 (산업공학과 13) | AWS S3 연동
신희수 (소프트웨어학과 16) | Google Drive 연동
이태경 (소프트웨어학과 17) | 문서화 및 Google Drive 연동

## 순서
- [개발동기](#개발-동기)
- [개발과정](#개발-과정)
- [개선사항](#기존-오픈소스-프로젝트에-비하여-개선된-사항)
- [기대효과](#기대효과)
- [사용방법](#사용방법)
- [사용오픈소스목록](#사용되는-오픈소스-SW-목록)
- [Future To-Do List](#Future-To-Do-List)

## 개발 동기
타 프로젝트를 진행하면서 node에서 코드 작성 시 로컬의 multipart 파일을 AWS에서 제공하는 S3 스토리지에 한번에 저장할 수 있는 모듈이 있으면 편리하겠다는 생각이 들었다.
이에 기존에 존재하는 모듈을 사용하려고 하였으나 멀피파트 파일을 파싱해주는 모듈과 AWS에서 S3 스토리지에 저장하는 모듈이 분리되어 있었다.
따라서 멀티파트 파일을 바로 S3 스토리지에 업로드할 수 있도록 두 가지 모듈을 하나로 합쳐 개발의 편리성을 증대하도록 하였다.
본 패키지에서는 Aws를 사용하는 유저 뿐만 아니라 Google Drive와 OneDrive를 사용하는 유저를 위하여 자신이 사용하는 Cloud 웹서비스 관리자가 쉽게 파일을 관리할 수 있도록 미들웨어를 제공한다.

## 개발 과정
  1. multipart 파일을 파싱해주는 formidable 모듈과, S3 스토리지에 업로드 해주는 AWS-SDK 모듈 각각의 사용법을 숙지하였다.
  2. 두 가지 모듈을 하나의 프로젝트에서 사용하여 바로 업로드할 수 있도록 하였다.
  3. 완성 이후 S3 스토리지 뿐 아니라, 접근성이 높은 드라이브인 구글드라이브와 원드라이브에도 멀티파트 파일을 쉽게 업로드 할 수 있도록 개발 모듈을 확장하기로 하였다.

## 기존 오픈소스 프로젝트에 비하여 개선된 사항
 기존의 오픈소스 프로젝트는 Aws나 GoogleDrive, Onedrive와 같이 다른 cloud Service인 경우, 옵션 객체을 새로이 걸어주어야 하는 불편한 점이 있었다면, 현재 프로젝트에서는 각 Cloude Service에 대해 자각적인 판단을 할 수 있도록 랩핑하여 하나로 만들어 제공하였다.

## 기대효과
웹서버와 타 스토리지를 서비스를 함께 사용하고자 하는 타 개발자들이 연동을 하는데 필요한 부담을 덜어줄 수 있다. 

## 사용방법
### 서비스별 사용방법
![googledrive](/images/googledrivelogo.gif)
* [Google Drive 사용방법](/docs/google-drive.md)

![onedrive](/images/onedrive.jpg)
* [OneDrive 사용방법]()

![AWS](/images/awslogo.gif)
* [AWS S3 사용법](/docs/s3.md)


### 미들웨어 사용법
```js
let api = require("express").Router();
api.post("/", uploader({provider: "onedrive", path: ""}), (req, res) => {
  res.sendStatus(200);
});
module.exports=api;
```
#### S3
`uploader({provider: "aws-s3", bucket: ""})` 
- provider : "aws-s3" 
- bucket: 사용자의 bucket 이름
#### GoogleDrive
* Get OAuth2 Key([developergoogle])(https://developers.google.com/identity/protocols/OAuth2)

#### OneDrive
* Get OAuth2 Key([docsMicrosoft](https://docs.microsoft.com/en-us/onedrive/developer/rest-api/getting-started/msa-oauth?view=odsp-graph-online))
`uploader({provider: "onedrive", path: ""})` 
- uploader : 미들웨어
- provider : "update할 Cloud 서비스" 


## 사용되는 오픈소스 SW 목록
* aws-sdk ([Github](https://github.com/aws/aws-sdk-js) / [NPM](https://www.npmjs.com/package/aws-sdk))
    * AWS 서비스를 사용하기 위한 JS SDK
    * Installing
* google-api-nodejs ([Github](https://github.com/googleapis/google-api-nodejs-client/tree/master/samples/drive) / [NPM](https://www.npmjs.com/package/googleapis))
    * Google api를 이용하여 nodeJS api
    * Client
* OneDrive-Graph-api ([사용방법](https://www.evernote.com/l/AUDufYzQX7NOVJymel7-gw49_mkbKUWdy10))
    * 사용법
* formidable ([Github](https://github.com/felixge/node-formidable) /  [NPM](https://www.npmjs.com/package/formidable)) / ([사용법]())
    * HTTP Request의 multipart Payload 파싱 도와주는 라이브러리
* s3-sdk-nodejs ([생활코딩](https://opentutorials.org/course/2717/11797))
    * Nodejs를 위한 s3-sdk 사용법

## Future To-Do List
* [ ] aws-sdk, OneDrive REST API, Google Drive SDK를 S3연동 미들웨어 구축
* [ ] NPM Registry 등록
* [ ] Documentation 작성
