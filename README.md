# React-issue-wep

- React Repository 이슈 목록과 상세 내용을 확인하는 웹 사이트

## 배포 주소

- 배포 후 기입

## 주요기능

1. 이슈 목록 화면

   - [ x ] 이슈 목록 가져오기 API 활용
   - [ x ] open 상태의 이슈 중 코멘트가 많은 순으로 정렬
   - [ x ] 각 행에는 ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트수’를 표시
   - [ x ] 다섯번째 셀마다 광고 이미지 출력
     - 이미지
       https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100
       https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100
     - 광고 이미지 클릭 시 https://www.wanted.co.kr/ 로 이동
   - [ ] 화면을 아래로 스크롤 할 시 이슈 목록 추가 로딩(인피니티 스크롤)

2. 이슈 상세 화면
   - [ x ] 이슈의 상세 내용 표시
   - [ x ] ‘이슈번호, 이슈제목, 작성자, 작성일, 코멘트 수, 작성자 프로필 이미지, 본문' 표시
3. 공통 헤더
   - [ x ] 두 페이지는 공통 헤더를 공유합니다.
   - [ x ] 헤더에는 Organization Name / Repository Name이 표시됩니다.

### 필수 요구 사항

- [ x ] 이슈 목록 및 상세 화면 기능 구현
- [ x ] 데이터 요청 중 로딩 표시
- [ ] 에러 화면 구현
- [ x ] 지정된 조건(open 상태, 코멘트 많은 순)에 맞게 데이터 요청 및 표시
