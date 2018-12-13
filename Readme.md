# Express-Cloud-Uploader

## What is this?
This package provides middleware for users who use the Cloud Web Service Manager to easily manage their files for users who use AWs, Google Drives, and OneDrive. If a user wants to upload any Content File to the user's Cloud Service, they can upload it at once by formatting it with a Json file and reducing the effort to upload it directly.
본 패키지에서는 Aws, Google Drive, OneDrive를 사용하는 유저를 위하여 자신이 사용하는 Cloud 웹서비스 관리자가 쉽게 파일을 관리할 수 있도록 미들웨어를 제공해준다. 만약 사용자가 어떠한 Content File을 사용자의 사용 Cloud Service에 업로드하고 싶을 때, Json파일로 Formidable 하여 직접 업로드하는 수고를 줄여 한 번에 올릴 수 있다.

## How to use it
### Usage by service
![googledrive](/images/googledrivelogo.gif)
* [Google Drive usingway](/docs/google-drive.md)

![onedrive](/images/onedrive.jpg)
* [OneDrive usingway]()

![AWS](/images/awslogo.gif)
* [AWS S3 usingway](/docs/s3.md)

### How to use middleware
#### In the Frontend
#### In the Backend



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
