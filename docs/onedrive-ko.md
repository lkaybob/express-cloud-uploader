# OneDrive

## 새로운 App 등록

OneDrive로 파일을 올릴 수 있게 하려면, Middleware가 대상 OneDrive 스토리지에 접근할 수 있도록 해줘야하며, 이를 위해선 Micfosoft Application을 등록해줘야합니다. 등록 과정은 아래의 링크를 확인하셔야합니다.

- Microsoft OneDrive Dev Center의 [공식문서](https://docs.microsoft.com/en-us/onedrive/developer/rest-api/getting-started/app-registration)
- 등록해주실 때 앱 정보 페이지에서 아래의 항목들을 맞춰주셔야합니다.
  - **플랫폼(Platforms)**
    - *플랫폼 추가(Add Platform)* 에서 *Web* 을 선택해주시고
    - *리디렉션 URL(Redirection URL)* 은 아래의 주소로 설정해주세요
      - `http://localhost:1111/auth/callback`
  - **Microsoft Graph 권한** ([참고](https://docs.microsoft.com/en-us/onedrive/developer/rest-api/api/driveitem_put_content))
    - *위임된 권한(Delegated Permissions)* : `Files.ReadWrite` 를 추가해주세요
    - *응용프로그램 권한(Application Permissions)* : `Files.ReadWrite.All` 을 추가해주세요.

## sample.env 파일 

`sample.env` 파일은 OneDrive로의 업로드를 가능하게 해주는 Middleware의 설정들을 담게될 `.env` 파일에 대한 견본입니다. 이를 실제로 사용할 수 있게 변경해줘야합니다.

1. `sample.env` 파일을 Text Editor로 열어주세요
2. `sample.env`의 각 항목들을 아래와 같이 변경해줍니다.
   * `OAUTH_APP_ID` : 등록한 App의 Application Id
     * ex) 5ff757db-77fd-443d-a8d0-9618bfa5d892
   * `OAUTH_APP_PASSWORD` : 등록한 App의 암호
     * 앱 정보 페이지에서 **응용프로그램 비밀(Application Secret)** --> **새 암호 생성(Generate New Password)** 로 암호를 만들어줍니다.
     * ex) yumJSRD40;xgvfPCX412;%$ 
   * `OAUTH_REDIRECT_URI` : OneDrive 로그인 후 돌아올 URL로, 원활한 사용을 위해 아래처럼 해주세요
     * `http://localhost:1111/auth/callback`
3. `sample.env` 의 이름은 `.env` 로 변경해주세요
4. Project의 Root Directory에 저장해주세요.

## Middleware 옵션

Middleware로 사용할 때는 아래와 같이 옵션을 설정해주세요

```json
{
    "provider": "onedrive",
    "path": "/"
}
```

| Key      | 설명                                       | Value                | 필수 여부 |
| -------- | ------------------------------------------ | -------------------- | --------- |
| provider | 업로드해줄 클라우스 서비스를 명시해줍니다. | "onedrive"           | 예        |
| path     | 파일을 저장할 클라우드의 절대경로          | 드라이브 내 절대경로 | 예        |

