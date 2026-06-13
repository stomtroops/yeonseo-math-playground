# 연서의 연산 놀이터

7살 아이가 iPad에서 바로 연산을 연습할 수 있는 정적 PWA입니다. Safari로 접속한 뒤 홈 화면에 추가하면 앱처럼 실행할 수 있습니다.

## 포함 파일
- `index.html`: 앱 화면과 연산 로직
- `manifest.webmanifest`: iPad/모바일 홈 화면 설치 설정
- `sw.js`: 오프라인 실행용 캐시
- `icon.svg`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`: 홈 화면 아이콘
- `.nojekyll`: GitHub Pages 정적 배포 보조 파일

## 실행
이 폴더에서 간단한 정적 서버를 띄우면 됩니다.

```sh
python3 -m http.server 8080
```

브라우저에서 `http://localhost:8080`을 열어 확인합니다.

## iPad에 설치
1. GitHub Pages나 다른 HTTPS 주소로 배포합니다.
2. iPad Safari에서 배포 주소를 엽니다.
3. 공유 버튼을 누릅니다.
4. `홈 화면에 추가`를 선택합니다.

서비스 워커는 HTTPS 또는 `localhost`에서 동작합니다. 파일을 직접 열면 앱은 실행되지만 오프라인 캐시는 등록되지 않을 수 있습니다.

## GitHub Pages 배포
1. GitHub 저장소에 이 폴더의 파일을 저장소 루트로 올립니다.
2. 저장소 `Settings` -> `Pages`로 이동합니다.
3. `Deploy from a branch`를 선택합니다.
4. Branch는 `main`, 폴더는 `/ (root)`로 저장합니다.
