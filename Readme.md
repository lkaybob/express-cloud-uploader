# Express-Cloud-Uploader
## What is this?
This module can be stored on the Cloud Service used by local multipart users when writing code in node. Originally, there were separate modules that parsed multi-part files and modules that store them in each cloud service. Thus, the two modules were combined to increase the convenience of development so that multi-part files could be uploaded directly to S3 storage. This package provides middleware for users who use the Cloud Web Service Manager to easily manage their files for users who use AWs, Google Drives, and OneDrive.
node에서 코드 작성 시 로컬의 multipart 사용자가 사용하는 Cloud Service에 한번에 저장할 수 있는 모듈이다. 원래 멀티파트 파일을 파싱해주는 모듈과 각 Cloud Service에 저장하는 모듈이 분리되어 있었다. 따라서 멀티파트 파일을 바로 S3 스토리지에 업로드할 수 있도록 두 가지 모듈을 하나로 합쳐 개발의 편리성을 증대하도록 하였다. 본 패키지에서는 Aws, Google Drive, OneDrive를 사용하는 유저를 위하여 자신이 사용하는 Cloud 웹서비스 관리자가 쉽게 파일을 관리할 수 있도록 미들웨어를 제공한다.

## How to use it
### Usage by service
![googledrive](/images/googledrivelogo.gif)
* [Google Drive usingway](/docs/google-drive.md)

![onedrive](/images/onedrive.jpg)
* [OneDrive usingway]()

![AWS](/images/awslogo.gif)
* [AWS S3 usingway](/docs/s3.md)

### How to use middleware
```js
let api = require("express").Router();
api.post("/", uploader({provider: "onedrive", path: ""}), (req, res) => {
  res.sendStatus(200);
});
module.exports=api;
```
For example)
`uploader({provider: "onedrive", path: ""})` 
- uploader : middleware
- provider : "Cloud Services to update"
  ex) provider: Setup with "googledrive", provider: "aws"
- path : where to upload

## Team Member
이름 | 역할
---|---
계성혁 (Ajou University Sofrtware 13) | OneDrive interlock
조은성 (Ajou University 산업공학과 13) | AWS S3 interlock
신희수 (소프트웨어학과 16) | Google Drive interlock
이태경 (소프트웨어학과 17) | Documentation and Google Drive interlock

## credits
* aws-sdk ([Github](https://github.com/aws/aws-sdk-js) / [NPM](https://www.npmjs.com/package/aws-sdk))
    * How to use Google-drive-api for Nodejs

* google-api-nodejs ([Github](https://github.com/googleapis/google-api-nodejs-client/tree/master/samples/drive) / [NPM](https://www.npmjs.com/package/googleapis))
    * nodeJS api using Google api
    * Client

* OneDrive-Graph-api ([howtomake](https://www.evernote.com/l/AUDufYzQX7NOVJymel7-gw49_mkbKUWdy10))
    * how to use onedrive

* formidable ([Github](https://github.com/felixge/node-formidable) /  [NPM](https://www.npmjs.com/package/formidable)) / ([howtousefor]())
    * Library to assist with multipart payload parsing of HTTP requests

* s3-sdk-nodejs ([생활코딩](https://opentutorials.org/course/2717/11797))
    * How to use s3-sdk for Nodejs
