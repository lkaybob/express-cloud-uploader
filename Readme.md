 
 
 <h1>클라우드 자동 업로드 미들웨어.</h1>
 
1. 프로젝트 이름 

     클라우드 자동 업로드 미들웨어
     


2. 팀멤버:

     조은성, 계성혁, 신희수, 이태경
      

3. 프로젝트 내용 (설명)

     - 기능 설명
     현재 존재하는 두 가지 Node.js 모듈인 aws-sdk(AWS 서비스를 사용하기 위한 JS SDK)와 
     formidable(HTTP Request의 multipart Payload 파싱 도와주는 라이브러리)을 하나의 모듈로 통합하여 클라우드에 자동으로 업로드할 수 있는 미들웨어 구축.
      
     - (옵션) 부족한 기능 파악후, 기능 개선 목록 (또는 개발 프로젝트가 아닌 경우, 추진할 내용)
     웹서버와 S3를 같이 운영하다보면 이를 연동하는 것이 힘들다는 아이디어에서 착안해 
     Express.js 환경에서 formidable와 aws-sdk 패키지를 래핑하여 
     업로드된 이미지를 S3에 자동으로 업로드하여 쉽게 활용할 수 있도록 함.
     - 이 프로젝트로 무엇이 달라지고, 개선되는지, 누구에게 benefit을 주는지 명확하게 명시할 것.
     웹서버와 AWS의 S3 스토리지를 함께 사용하고자 하는 타 개발자에게 benefit


4. (옵션) 사용되는 Github 오픈소스 SW 목록


     aws-sdk(AWS 서비스를 사용하기 위한 JS SDK) https://github.com/aws/aws-sdk-js
     formidable(HTTP Request의 multipart Payload 파싱 도와주는 라이브러리) https://github.com/felixge/node-formidable
      



5. (옵션) 이 작업 이후, 추가적으로 진행되면 좋을 작업들 (학기 종료이후에도 누군가 f/u 하면 좋겠다는 의미로)

     작성한 패키지를 npm Registry에 업로드, 
     기타 클라우드 드라이브(ex. 구들드라이브)에 연동
      


