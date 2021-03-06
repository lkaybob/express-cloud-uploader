# Express-Cloud-Uploader

## NPM install
```console
foo@bar:~$ npm install express-cloud-uploader
```
## What Is This?
This package provides middleware for users who use the Cloud Web Service Manager to easily manage their files for users who use AWs, Google Drives, and OneDrive. If a user wants to upload any Content File to the user's Cloud Service, they can upload it at once by formatting it with a Json file and reducing the effort to upload it directly. Our project is middleware for the Express.js module.

## How To Use It
### How to Use middleware

#### Google Drive

![googledrive](/images/googledrivelogo.gif)
* [Google Drive See Docs](/docs/google-drive.md)

#### One Drive

![onedrive](/images/onedrive.jpg)
* [OneDrive See Docs](/docs/onedrive-en.md)

#### AWS S3

![AWS](/images/awslogo.gif)
* [AWS S3 See Docs](/docs/s3.md)

### In The Frontend
```html
<form action="/" method="post" enctype="multipart/form-data">
  <input type="Upload wanting file type" name="just name" value="some text">
</form>
```
Suppose you have a webpage like this, which uploads file to the server.

### In The Backend
The pagkage's supporting upload file type is multipart/form-data. You may do the rest as you wish.<br>
```js
let api = require("express").Router();
api.post("/", uploader({provider: "onedrive", path: ""}), (req, res) => {
});
module.exports=api;
```

## Credits
* aws-sdk ([Github](https://github.com/aws/aws-sdk-js) / [NPM](https://www.npmjs.com/package/aws-sdk))
    * How to use Google-drive-api for Nodejs

* google-api-nodejs ([Github](https://github.com/googleapis/google-api-nodejs-client/tree/master/samples/drive) / [NPM](https://www.npmjs.com/package/googleapis))
    * nodeJS api using Google api2
    * Client

* OneDrive-Graph-api ([Evernote](https://www.evernote.com/l/AUDufYzQX7NOVJymel7-gw49_mkbKUWdy10))
    * how to use onedrive

* formidable ([Github](https://github.com/felixge/node-formidable) /  [NPM](https://www.npmjs.com/package/formidable))
    * Library to assist with multipart payload parsing of HTTP requests

* s3-sdk-nodejs ([Opentutorials](https://opentutorials.org/course/2717/11797))
    * How to use s3-sdk for Nodejs


## License
Expres-Cloud-Uploader is released under Apache License V2.0. See [LICENSE](/LICENSE.md) for more information