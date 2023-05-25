## Django REST Framework & Vue를 활용한 영화 커뮤니티 웹사이트

### 🤝 팀원

| 이름 | 담당 영역 | Github |
| --- | --- | --- |
| 고서영 | -프론트엔드(60%) / 백엔드(40%)
-백엔드 데이터 로직 작성, 프론트 엔드 기능 구현, 프론트엔드 디자인, ERD 작성 |  |
| 연제정 | -프론트엔드(40%) / 백엔드(60%)
-백엔드 데이터 로직 작성 및 디버깅, 프론트 엔드 기능 구현 및 디버깅 |  |

### 📝 Description

- 상세화면
    
    
    > 메인 페이지
    > 
    - 최신 영화, TOP 20, 인기 영화, 개봉 예정 영화 목록 제공
    - 검색 창을 통해 영화 검색 가능
    
    ![MainPage](https://github.com/seoyoung81/Final-PJT/assets/122508505/731916d7-e15b-4ed8-897e-ea73854a7de0)  
    
    > 검색 결과 페이지
    > 
    - 검색 결과와 함께 해당 영화를 제공하는 플랫폼 목록 출력
    - 플랫폼 로고 클릭 시 해당 플랫폼의 공식 홈페이지로 이동
    
    ![Untitled 1](https://github.com/seoyoung81/Final-PJT/assets/122508505/49ffc7c4-3475-4b93-add2-031dae503e33)
    
    > 상세 페이지
    > 
    - 해당 영화의 트레일러, 평점, 개봉일 등 영화의 상세 정보 확인 페이지
    - 유저별 좋아요/좋아요 취소 기능 제공
    
    ![Untitled 2](https://github.com/seoyoung81/Final-PJT/assets/122508505/1a146b40-4f08-478b-8ab2-f61767c0a756)
    
    ![Untitled 3](https://github.com/seoyoung81/Final-PJT/assets/122508505/54ad0b83-9f0d-4bc9-a862-56f75187b91f)
    
    > 프로필 페이지
    > 
    - 유저가 좋아요한 영화 목록, 작성한 게시글 목록 확인 페이지
    - 포스터 클릭 시 해당 영화의 상세 페이지로 이동
    - 게시글 제목 클릭 시 해당 게시글 상세 페이지로 이동
    
    ![Untitled 4](https://github.com/seoyoung81/Final-PJT/assets/122508505/5099c3a5-a8e4-44f2-a6a3-fa1f6db3ccba)
    
    > 커뮤니티
    > 
    - 다양한 유저들이 작성한 게시글 목록 및 상세 조회
    
    ![Untitled 5](https://github.com/seoyoung81/Final-PJT/assets/122508505/6525f40f-79ce-48e5-a7e6-82669b602a86)
    
    - 게시글 상세 조회 페이지
    - 본인이 작성한 게시글이 아니라면 수정/삭제 버튼 숨김
    - 댓글 또한 본인이 작성한 댓글이 아니라면 삭제 버튼 숨김
    
    ![Untitled 6](https://github.com/seoyoung81/Final-PJT/assets/122508505/5bfbf5e4-60cd-4e60-9333-113ba83271bd)
    
    ![Untitled 7](https://github.com/seoyoung81/Final-PJT/assets/122508505/91e0e60e-5ae3-4199-a890-126eb47e4df1)
    
    > OTT Changer
    > 
    - 첫 진입 시 유저가 현재 구독 중인 OTT 서비스 하나를 선택
    
   ![Untitled 8](https://github.com/seoyoung81/Final-PJT/assets/122508505/d8077f70-4fef-4aec-b634-919e889b7014)
    
    - 구독 중인 OTT 서비스에서 제공하는 다른 영화들을 추천
    - 구독 유지 버튼 클릭 시 메인 페이지로 이동
    - OTT CHANGER 버튼 클릭 시 다음 페이지로 이동
    
    ![Untitled 9](https://github.com/seoyoung81/Final-PJT/assets/122508505/e1ecce98-4498-417a-89f7-3ed63f55f7ef)
    
    > 영화 선택 페이지
    > 
    - 영화 목록은 총 40개가 주어지며, 유저는 최소 10개부터 15개까지의 영화를 선택할 수 있고 선택된 영화의 포스터는 흑백으로 변경
    - 페이지 하단에 결과 보기 버튼 클릭 시 다음 페이지로 이동
    
    ![Untitled 10](https://github.com/seoyoung81/Final-PJT/assets/122508505/f1dd15b4-dc1a-405a-8b78-7dca7898d13a)
    
    > 결과 페이지
    > 
    - 선택된 영화들을 바탕으로 가장 많은 영화를 보유한 플랫폼을 계산하여 로고를 출력
    
    ![Untitled 11](https://github.com/seoyoung81/Final-PJT/assets/122508505/3e5a7414-d8d0-46d5-a07c-1e129199a23e)
    
- 영화 정보 및 추천 / OTT 추천 서비스 제공 프로젝트
- 기획의도:  사용중인 기존 OTT 서비스에서 콘텐츠 부족을 느낀 사용자에게 사용자 중심의 새로운 OTT 서비스를 추천하고, 새로운 시청 경험을 제공한다.

### ⭐ GOAL

- 영화 데이터 및 사용자 데이터 기반 추천 서비스 구성
- Providers 데이터 및 사용자 데이터 기반 OTT 추천 서비스 구성
- HTML. CSS JavaScript, Bootstrap, Vue.js, REST API, Database 을 활용하여 실제 서비스 설계

### 

### 📚 데이터 베이스 모델링 (ERD)

![ERDF](https://github.com/seoyoung81/Final-PJT/assets/122508505/a8b0c537-c0e3-448b-9fa2-92076d89320b)

### 📚 컴포넌트 구조

![ComponentF](https://github.com/seoyoung81/Final-PJT/assets/122508505/ceac05fc-a3fc-40ef-b391-c37cc0ab7641)

### 🗝 서비스 구현

| No | 기능 | 기능 설명 | 구현 정도 |
| --- | --- | --- | --- |
| 1 | 로그인 | all auth를 통한 로그인 기능 구현 | ⭐⭐⭐⭐⭐ |
| 2 | 로그아웃 | all auth를 통한 로그아웃 기능 구현 | ⭐⭐⭐⭐⭐ |
| 3 | 회원가입 | all auth를 통한 회원가입 기능 구현, 필드 조정을 통해 이메일 정보 추가 | ⭐⭐⭐⭐⭐ |
| 4 | 마이페이지 | 사용자가 좋아요한 영화 정보 제공(영화 포스터 → 영화 디테일 정보 제공), 사용자가 작성한 게시글 정보 제공 | ⭐⭐⭐⭐⭐ |
| 5 | 영화 검색 기능 | 영화 제목을 통한 영화 검색(영화 포스터 제공 → 영화 디테일 정보 제공), 영화를 제공하고 있는 OTT 정보 제공 | ⭐⭐⭐⭐⭐ |
| 6 | 키워드 검색 기능 | 키워드(ex. 여행)검색을 통한 영화 추천 | 미구현 |
| 7 | 영화별 좋아요 | 영화 좋아요 | ⭐⭐⭐⭐⭐ |
| 8 | 영화 추천 | 인기영화, 최신영화, 개봉예정작, Top10 | ⭐⭐⭐⭐⭐ |
| 9 | 영화 마우스 커서를 올렸을 때 기능: 확대, 영화 제목 제공 | 메인 페이지의 영화 포스터 반응 | ⭐⭐⭐⭐⭐ |
| 10 | 개별 영화의 정보 | 영화 디테일 페이지(영화의 trailer를 자동재생, 제목, 내용, 누적관객수, 개봉일, 좋아요 개수) | ⭐⭐⭐⭐⭐ |
| 11 | 게시글 CRUD | 로그인한 사용자만 커뮤니티 접근 가능, 게시글 생성/조회/수정/삭제 가능, 자신의 게시글만 수정/삭제 가능 | ⭐⭐⭐⭐⭐ |
| 12 | 게시글 댓글 | 게시글에 댓글 생성, 삭제 | ⭐⭐⭐⭐ |
| 13 | 게시글 개별 조회 | 게시글 작성자 정보 조회, 작성자 마이 페이지로 이동 |  |
| 14 | OTT가 제공하는 영화 추천 | 사용자가 이용중인 OTT가 제공하는 영화 추천 | ⭐⭐⭐⭐⭐ |
| 15 | OTT 추천 | 사용자가 보고싶은 영화를 선택하고, 선택한 영화들을 바탕으로 가장 많은 영화를 보유한 플랫폼을 추천 | ⭐⭐⭐⭐⭐ |

### 🗝서비스 대표 기능 설명

🎬 **영화 추천 알고리즘**

> OTT 별 제공하는 영화 추천
> 
> 
> 영화별 제공하는 OTT 서비스를 조사하여 영화 데이터 가공 후 DB에 저장
> 

🎬 **OTT 추천 알고리즘**

> OTT를 추천 받고 싶은 유저에게 랜덤으로 40개의 영화 목록을 제공하고, 유저는 최소 10개부터 15개의 영화를 선택한다
(영화 목록의 첫 10개는 다양한 결과 도출을 위해 다양한 OTT에서 제공하는 영화를 선별함)
> 

> 유저가 선택한 영화 중 가장 많은 비율을 차지하고 있는 OTT 서비스를 추천한다
> 

### ✏ 개발일지

| 날짜 | Done |
| --- | --- |
| 2023-05-17 | 아이디어 회의, 컴포넌트 구조 작성, ERD 작성 |
| 2023-05-18 | 회원가입, 로그인, 로그아웃 구현 |
| 2023-05-19 | 커뮤니티 CRUD, 댓글, OTT 정보 데이터 가공 |
| 2023-05-20 | 영화 정보/추천 서비스 구현, 영화 별 OTT 정보 제공 |
| 2023-05-21 | OTT 추천 알고리즘 구현 |
| 2023-05-22 | 영화 좋아요 기능 및  |
| 2023-05-23 | CSS, 백엔드/프론트 엔드 디버깅
(커뮤니티 글 작성자와 마이페이지 연동, 존재하지 않는 로그인 정보인 경우 에러를 활용한 알림창 띄우기, 로그인 하지 않은 사용자의 영화 좋아요 기능 막기) |
| 2023-05-24 | CSS, 백엔드/프론트 엔드 디버깅, 로고 제작 |
| 2023-05-25 | 리드미 작성, 발표 준비 |

### 🎈 느낀점

👩‍💻 **고서영**

첫 프로젝트를 진행하면서 백엔드와 프론트엔드로 나눠서 작업할 수 있다는 것에 설렘을 느꼈다. 다른 팀들과 달리 페어 프로그래밍으로 개발을 진행해서 프로젝트의 전반적인 과정을 모두 함께 하며 전반적인 흐름을 모두 이해할 수 있었다.  프로젝트의 알고리즘을 구현하며 실습에서는 느낄 수 없었던 성취감을 느꼈고, 개발에 대한 흥미도가 증가하였다. 사용자에게 웹 서비스를 제공할 때 신경써야하는 부분이 정말 많다는 것을 알게되었다. 마지막으로 개발을 진행하면서 앞으로 공부해야하는 분야가 아주 많다는 것을 느꼈다.

👨‍💻 **연제정**

최종 프로젝트 전에 진행했던 관통 프로젝트들을 하나로 합치고 응용하여 새로운 기능들을 구현한다는 느낌을 받았고 페어와 함께 상의하며 구현하고 싶은 서비스를 직접 하나씩 구현하는 점에서 흥미와 재미를 많이 느꼈다. 중간중간 에러와 싸우느라 힘들 때도 있었지만 해결한 뒤의 성취감도 그만큼 높았다. CSS(디자인) 부분은 정말 감이 잡히지 않아 빠르게 포기하였는데 이 부분은 페어에게 정말 미안하고 고생했다고 말해주고 싶다.

마지막으로 이런 경험들이 좋은 밑거름이 되어 2학기 프로젝트에도 좋은 영향을 미쳤으면 좋겠다. 또한 합이 잘 맞는 페어와 함께 별 탈 없이 프로젝트를 마무리 할 수 있음에 감사하다.
