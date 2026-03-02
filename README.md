# 마이멜로디 감성 수학 놀이터 (GitHub Pages)

이 폴더는 GitHub Pages에 바로 배포할 수 있게 구성되어 있습니다.

## 포함 파일
- `index.html`
- `sw.js` (오프라인 캐시)
- `manifest.webmanifest` (홈 화면 앱 설치)
- `icon.svg`
- `.nojekyll`

## 배포 방법 (가장 간단)
1. GitHub에서 새 저장소 생성 (예: `math-playground`)
2. 이 폴더(`02.math_cal`)의 파일을 저장소 루트에 업로드
3. 저장소 `Settings` -> `Pages`
4. `Build and deployment`에서 `Source`를 `Deploy from a branch`로 선택
5. Branch는 `main`, 폴더는 `/ (root)` 선택 후 저장

배포 주소 예시:
- `https://<github-username>.github.io/<repo-name>/`

## 설치형 앱(PWA) 안내
- iPhone/iPad: Safari에서 사이트 접속 -> 공유 -> `홈 화면에 추가`
- Android: Chrome에서 사이트 접속 -> 메뉴 -> `홈 화면에 추가`

## 참고
- GitHub Pages 반영까지 보통 1~5분 걸립니다.
- 주소는 반드시 `https://`로 접속해야 서비스 워커가 정상 동작합니다.
