# Express-Cloud-Uploader

## NPM install
```
npm express-cloud-uploader
```
## What Is This?
This package provides middleware for users who use the Cloud Web Service Manager to easily manage their files for users who use AWs, Google Drives, and OneDrive. If a user wants to upload any Content File to the user's Cloud Service, they can upload it at once by formatting it with a Json file and reducing the effort to upload it directly.
본 패키지에서는 Aws, Google Drive, OneDrive를 사용하는 유저를 위하여 자신이 사용하는 Cloud 웹서비스 관리자가 쉽게 파일을 관리할 수 있도록 미들웨어를 제공해준다. 만약 사용자가 어떠한 Content File을 사용자의 사용 Cloud Service에 업로드하고 싶을 때, Json파일로 Formidable 하여 직접 업로드하는 수고를 줄여 한 번에 올릴 수 있다.

## How To Use It
### Usage By Service
#### Google Drive
![googledrive](/images/googledrivelogo.gif)
* [Google Drive usingway](/docs/google-drive.md)
#### One Drive
![onedrive](/images/onedrive.jpg)
* [OneDrive usingway]()
#### AWS S3
![AWS](/images/awslogo.gif)
* [AWS S3 usingway](/docs/s3.md)

### How To Use Middleware
#### In The Frontend
```html
<form action="/" method="post" enctype="multipart/form-data">
  <input type="Upload wanting file type" name="just name" value="some text">
</form>
```
The pagkage's supporting upload file type is multipart/form-data. You may do the rest as you wish.
패키지에서 지원하는 업로드 파일 타입은 multipart/form-data이다. 나머지 부분에 대해서는 사용자가 원하는 대로 하여도 좋다.
#### In The Backend
For example)
```js
let api = require("express").Router();
api.post("/", uploader({provider: "onedrive", path: ""}), (req, res) => {
});
module.exports=api;
```
- uploader : middleware
- provider : "Cloud Services to update" <br>
  ex) provider: Setup with "googledrive", provider: "aws"
- path : where to upload


## Credits
* aws-sdk ([Github](https://github.com/aws/aws-sdk-js) / [NPM](https://www.npmjs.com/package/aws-sdk))
    * How to use Google-drive-api for Nodejs

* google-api-nodejs ([Github](https://github.com/googleapis/google-api-nodejs-client/tree/master/samples/drive) / [NPM](https://www.npmjs.com/package/googleapis))
    * nodeJS api using Google api
    * Client

* OneDrive-Graph-api ([Evernote](https://www.evernote.com/l/AUDufYzQX7NOVJymel7-gw49_mkbKUWdy10))
    * how to use onedrive

* formidable ([Github](https://github.com/felixge/node-formidable) /  [NPM](https://www.npmjs.com/package/formidable)) / ([howtousefor]())
    * Library to assist with multipart payload parsing of HTTP requests

* s3-sdk-nodejs ([Opentutorials](https://opentutorials.org/course/2717/11797))
    * How to use s3-sdk for Nodejs
