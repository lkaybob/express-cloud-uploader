# 구글 드라이브

## Access Token 취득 방법

OAuth2 사용하여 Access 토큰을 취득해야하며,
취득하는 방법은 다음 링크를 참조하면 된다.
Google Drive API [링크](https://developers.google.com/identity/protocols/OAuth2)

## Access Token 파일 저장

취득한 JSON 파일을 oauth2.keys으로 이름 변경(확장자는 JSON), 프로젝트 루트에 파일 추가

## 코드 작동 과정

* 유저가 지정한 파일을 formidable 사용하여 파싱
* 파싱된 파일을 로컬 서버에 넘겨주면 파일 이름을 파라미터로 받아와 라인 별로 커서 옮기며 드라이브에 업로드

## Middleware 옵션

Middleware로 사용할 때는 아래와 같이 옵션을 설정해주세요

```json
{
    "provider": "googledrive",
    "path": "/"
}
```

| Key      | 설명                                       | Value                | 필수 여부 |
| -------- | ------------------------------------------ | -------------------- | --------- |
| provider | 업로드해줄 클라우스 서비스를 명시해줍니다. | "googledrive"        | 예        |
| path     | 파일을 저장할 클라우드의 절대경로          | 드라이브 내 절대경로 | 예        |
