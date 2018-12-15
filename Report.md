# 클라우드 자동 업로드 미들웨어
## 순서
- [개발동기 및 프로젝트 소개](#개발-동기-및-프로젝트-소개)
- [팀원 소개](#팀원-소개)
- [유사 오픈소스 프로젝트](#유사-오픈소스-프로젝트)
- [프로젝트 설명](#프로젝트-설명)
- [사용방법](#사용방법)
- [사용되는 오픈소스 SW 목록 및 라이센스](#사용되는-오픈소스-SW-목록-및-라이센스)

## 개발 동기 및 프로젝트 소개
Node.js로 타 프로젝트를 진행하면서 서버 코드 작성 시 클라이언트로부터 업로드되는 파일을 Amazon Web Service(이하 AWS)에서 제공하는 S3 스토리지에 한번에 저장할 수 있는 모듈이 있으면 편리하겠다는 생각이 들었다. 이에 기존에 존재하는 `aws-sdk` 를 그대로 사용하려고 하였으나, 클라이언트에서 `multipart/form-data` 형식으로 파일이 업로드 되기 때문에, 이를 파싱해주는 모듈을 별도로 구현하고, S3에 업로드하는 로직을 실행해야했다.

이 과정을 위해서 몇 겹의 Callback 함수를 실행했어야하는데, 웹 서버를 처음 개발하는 사람 입장에서는 굉장히 어려울 것으로 예상되었다. 따라서 `multipart/form-data` 형태로 올라온 파일을 Parsing하고, 바로 S3 스토리지에 업로드할 수 있도록 두 가지 모듈을 하나로 합쳐 개발의 편리성을 증대하도록 하였다.

본 패키지에서는 AWS를 사용하는 유저 뿐만 아니라 Google Drive와 OneDrive를 사용하는 유저를 위하여 자신이 사용하는 Cloud 웹서비스 관리자가 쉽게 파일을 관리할 수 있도록 미들웨어를 제공한다.

## 팀원 소개

| 이름                       | 역할                        |
| -------------------------- | --------------------------- |
| 계성혁 (소프트웨어학과 13) | OneDrive 연동               |
| 조은성 (산업공학과 13)     | AWS S3 연동                 |
| 신희수 (소프트웨어학과 16) | Google Drive 연동           |
| 이태경 (소프트웨어학과 17) | 문서화 및 Google Drive 연동 |

## 유사 오픈소스 프로젝트

본 프로젝트와 비슷한 기능을 하는 프로젝트로 [express-form-post](https://www.npmjs.com/package/express-form-post)이 있으나, AWS의 S3와 Dropbox, 그리고 Local Directory를 지원한다는 점에서 차이가 있다.

## 프로젝트 설명

### 기존 오픈소스 프로젝트에 비하여 개선된 사항
기존의 오픈소스 프로젝트는 `aws-sdk`나 `googleapis`, `@microsoft/microsoft-graph-client`와 같이 해당 클라우드 서비스에 대한 각각의 API들을 Import해주고, 각각에 대한 설정을 Code내에서 명시해주고, 실제 업로드를 수행하기 위한 코드를 직접 구현해줘야하는 불편함이 있었다.

그러나, (프로젝트의 형태에 따라) 이렇게 업로드 부분을 구현하는 것이 반복적인 일이라는 것에서 착안해, 현재 프로젝트에서는 각 Cloude Service에 대해 자각적인 판단을 할 수 있도록 해당 라이브러리들에 대한 코드들을 하나의 패키지로 Wrapping해 하나로 만들어 제공하였다.

### 기대효과
웹서버와 타 스토리지를 서비스를 함께 사용하고자 하는 타 개발자들이 연동을 하는데 필요한 부담을 덜어줄 수 있다. 

## 사용방법
#### 패키지 설치

먼저 해당 미들웨어를 사용하기 위한 프로젝트에서 패키지를 설치해준다. (이를 위해선 `node.js` 와 `npm`이 사전에 설치되어있어야한다.)

```console
foo@bar:~$ npm install express-cloud-uploader
```

#### 서비스별 옵션 설정

각 서비스를 사용하기 위해선 알맞은 옵션들을 명시해줘야한다. 각 서비스에서 필요로하는 옵션들과 인증방식이 다르기 때문에 각 서비스에 대한 설명을 별도의 파일로 설명했다.

![googledrive](/images/googledrivelogo.gif)
* [Google Drive 사용방법](/docs/google-drive.md)

![onedrive](/images/onedrive.jpg)
* [OneDrive 사용방법](/docs/onedrive-ko.md)

![AWS](/images/awslogo.gif)
* [AWS S3 사용방법](/docs/s3.md)

#### 미들웨어 사용

##### 웹페이지 예시 코드

```html
<form action="/" method="post" enctype="multipart/form-data">
  <input type="Upload wanting file type" name="just name" value="some text">
</form>
```

클라이언트에서는 위와 같은 형식으로 POST Method를 활용해 서버 측으로 업로드할 수 있게 해준다. Javascript로 구현할 때도 이와 비슷하게 해준다.

##### 서버 측 코드

```js
let api = require("express").Router();
api.post("/", uploader({provider: "onedrive", path: ""}), (req, res) => {
  res.sendStatus(200);
});
module.exports=api;
```
위와 같이 Router를 정의해주는 Method에서 Middleware를 끼워넣어준다. 단, Middleware를 넣을 때는 제일 먼저 수행할 수 있도록 해주는 것을 권장한다.

##### 서버 실행시

서버를 실행하면 Google Drvie와 OneDrive를 사용하는 경우 업로드할 스토리지의 계정으로 로그인해야한다. 로그인할 주소는 아래와 같이 서버 로그에 출력되며, 정상적으로 로그인할 경우 인증정보가 서버에 저장된ㄷ.

```bash
# /usr/local/bin/node /Users/lkaybob/Desktop/Development/test/bin/www
Please log in to below URL
https://accounts.google.com/o/oauth2/v2/auth?access_type=offline&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fdrive.file&response_type=code&client_id=******.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A1111%2Foauth2callback
  test:server Listening on port 8080 +0ms
```

##### 실제 요청시

아래와 같이 (cURL 예시) 서버에 정의해둔 Endpoint로 파일을 전송을 시도할 수 있다.

```bash
curl -X POST \
  http://localhost:8080/ \
  -H 'Postman-Token: c69cdc4f-5263-490b-9253-fd54b9646cf6' \
  -H 'cache-control: no-cache' \
  -H 'content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW' \
  -F _files=@/Users/myuser/Downloads/logo.png
```

만약 성공적으로 업로드된 경우 서브는 상태코드 200을 반환할 것이며, 오류가 있을 경우 상태코드 500을 반환하게 된다.

## 사용되는 오픈소스 SW 목록 및 라이센스


* aws-sdk ([Github](https://github.com/aws/aws-sdk-js) / [NPM](https://www.npmjs.com/package/aws-sdk))
    * AWS 서비스를 사용하기 위한 Javascript 공식 SDK
    * Apache 2.0 Licence ([Link](https://github.com/aws/aws-sdk-js/blob/master/LICENSE.txt))
* google-api-nodejs ([Github](https://github.com/googleapis/google-api-nodejs-client/tree/master/samples/drive) / [NPM](https://www.npmjs.com/package/googleapis))
    * Google의 제품들을 사용할 수 있는 Javascript Library
    * Apache 2.0 Licence ([Link](https://github.com/googleapis/google-api-nodejs-client/blob/master/LICENSE))
* Msgraph-sdk-javascript ([Github](https://github.com/microsoftgraph/msgraph-sdk-javascript) / [NPM](https://www.npmjs.com/package/@microsoft/microsoft-graph-client))

    * OneDrive를 비롯한 Microsoft 제품들을 사용할 수 있는 Javascript Library
    * MIT License ([Link](https://github.com/microsoftgraph/msgraph-sdk-javascript/blob/dev/LICENSE))
* formidable ([Github](https://github.com/felixge/node-formidable) /  [NPM](https://www.npmjs.com/package/formidable)) / ([사용법]())
    * HTTP Request의 multipart Payload 파싱 도와주는 라이브러리
