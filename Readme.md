# Express-Cloud-Uploader

## NPM install
```console
foo@bar:~$ npm install express-cloud-uploader
```
## What Is This?
This package provides middleware for users who use the Cloud Web Service Manager to easily manage their files for users who use AWs, Google Drives, and OneDrive. If a user wants to upload any Content File to the user's Cloud Service, they can upload it at once by formatting it with a Json file and reducing the effort to upload it directly. Our project is middleware for the Express.js module.

## How To Use It
### Usage By Service
#### Google Drive
![googledrive](/images/googledrivelogo.gif)
* [Google Drive See Docs](/docs/google-drive.md)
#### One Drive
![onedrive](/images/onedrive.jpg)
* [OneDrive See Docs](/docs/onedrive.md)
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
Suppose you have a webpage like this, which uploads file to the server.

#### In The Backend
The pagkage's supporting upload file type is multipart/form-data. You may do the rest as you wish.<br>
```js
let api = require("express").Router();
api.post("/", uploader({provider: "onedrive", path: ""}), (req, res) => {
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


## Credits
* aws-sdk ([Github](https://github.com/aws/aws-sdk-js) / [NPM](https://www.npmjs.com/package/aws-sdk))
    * How to use Google-drive-api for Nodejs

* google-api-nodejs ([Github](https://github.com/googleapis/google-api-nodejs-client/tree/master/samples/drive) / [NPM](https://www.npmjs.com/package/googleapis))
    * nodeJS api using Google api
    * Client

* OneDrive-Graph-api ([Evernote](https://www.evernote.com/l/AUDufYzQX7NOVJymel7-gw49_mkbKUWdy10))
    * how to use onedrive

* formidable ([Github](https://github.com/felixge/node-formidable) /  [NPM](https://www.npmjs.com/package/formidable))
    * Library to assist with multipart payload parsing of HTTP requests

* s3-sdk-nodejs ([Opentutorials](https://opentutorials.org/course/2717/11797))
    * How to use s3-sdk for Nodejs
## License
어떤 내용들어가야할까여