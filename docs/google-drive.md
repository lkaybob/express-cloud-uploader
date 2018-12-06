# 구글 드라이브

## Access Token 취득 방법

OAuth2 사용하여 Access 토큰 취득해야하며, Google Drive API [링크](https://developers.google.com/identity/protocols/OAuth2)

## Access Token 파일 저장

취득한 JSON 파일을 oauth2.keys으로 이름 변경, 프로젝트 루트에 파일 추가

## 코드 작동 과정

* 유저가 지정한 파일을 formidable 사용하여 파싱
* 파싱된 파일을 로컬 서버에 넘겨주면 파일 이름을 파라미터로 받아와 라인 별로 커서 옮기며 드라이브에 업로드

## 진행 상황

[x] 드라이브 업로드
[x] 포미더블 파싱
[x] 포미더블 파싱 결과를 파라미터로 받아와 드라이브에 업로드