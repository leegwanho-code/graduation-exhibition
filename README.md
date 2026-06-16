# 건축학과 졸업 작품 전시 페이지

동영상 하나를 크게 보여주는 개인 작품 전시 페이지입니다.
**이창록 / 이서영** 두 사람의 페이지가 서로 독립적으로 있으며, 각자 따로 QR코드로 공유합니다.
(두 페이지는 연결되어 있지 않은 별개의 페이지입니다.)

## 📁 폴더 구조

```
qr_webpage/
 ├─ css/style.css       ← 디자인 (색/폰트는 맨 위 :root 수정)
 ├─ js/exhibit.js       ← 동작 (수정 불필요)
 ├─ changrok/index.html ← ★ 이창록 페이지 ★
 ├─ seoyeong/index.html ← ★ 이서영 페이지 ★
 └─ assets/
     ├─ changrok/       ← 이창록 영상·이미지 넣는 곳
     └─ seoyeong/       ← 이서영 영상·이미지 넣는 곳
```

## ✏️ 내용 수정하는 법

각자의 `index.html`(`changrok/index.html` 또는 `seoyeong/index.html`)을 열면
위쪽에 `CONFIG = { ... }` 부분이 있습니다. **거기만 수정**하면 됩니다.
- 작품 제목, 부제, 작품 설명
- 영상 (아래 참고)

## ▶️ 동영상 넣는 2가지 방법

**(1) 유튜브 영상 (용량 큰 영상 추천)**
```js
video: { type: "youtube", id: "유튜브영상ID" }
```
> 유튜브에 영상을 올린 뒤(공개 또는 '미등록'), 주소 `watch?v=` 뒤의 글자가 영상ID입니다.

**(2) 내 동영상 파일 직접**
- `assets/changrok/`(또는 `seoyeong/`) 폴더에 `movie.mp4` 를 넣고:
```js
video: { type: "file", src: "../assets/changrok/movie.mp4" }
```

## 👀 로컬에서 미리보기

각 폴더의 `index.html` 을 더블클릭하면 그 사람의 페이지가 열립니다.
유튜브 영상은 바로 보이고, **내 파일(mp4)을 쓸 때 영상이 안 보이면** 아래처럼 로컬 서버로 여세요 (Python 설치 시):
```bash
# qr_webpage 폴더에서 실행
python -m http.server 8000
# 브라우저에서 http://localhost:8000/changrok/  또는  /seoyeong/  접속
```

## 🌐 온라인 배포 + QR코드 (GitHub Pages)

1. github.com 가입 → 새 저장소(repository) 생성 → 이 폴더 파일 전체 업로드
2. 저장소 **Settings → Pages → Branch: main / root** 저장
3. 잠시 뒤 각자의 주소가 생성됩니다:
   - 이창록: `https://아이디.github.io/저장소이름/changrok/`
   - 이서영: `https://아이디.github.io/저장소이름/seoyeong/`
4. **각 주소를 따로** QR코드 생성 사이트(qr.io, naver QR 등)에 넣어 QR을 2개 만들고,
   각자 자기 작품 옆에 붙이면 됩니다.

> 동영상 파일을 직접 올릴 경우 GitHub 파일 1개 100MB 제한이 있으니, 큰 영상은 유튜브 방식을 권장합니다.
