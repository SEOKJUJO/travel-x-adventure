# Travel X Adventure

Bubble에서 운영하던 Travel X Adventure를 코드 기반 웹앱으로 이전하기 위한 Next.js 프로젝트입니다. 기존 Bubble 복제본은 별도로 보존됩니다.

## 실행

```bash
pnpm install
pnpm dev
```

`.env.example`을 참고해 `.env.local`을 만드세요.

## 카카오 로그인 설정

1. Kakao Developers에서 REST API 키와 Kakao Login Client Secret을 발급하고 카카오 로그인을 활성화합니다.
2. Kakao Redirect URI에 `https://<project-ref>.supabase.co/auth/v1/callback`을 등록합니다.
3. Supabase Authentication > Providers > Kakao에 두 값을 입력합니다.
4. Supabase URL Configuration의 Site URL을 운영 도메인으로, Redirect URLs에 `https://<운영도메인>/auth/callback`을 추가합니다.
5. Vercel에 `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`, `NEXT_PUBLIC_SITE_URL`을 설정합니다.

## 지도

Google Maps JavaScript API 키를 `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`로 설정하면 지도 ID `cb84b791b5f1952893200338`의 스타일이 적용됩니다. 키가 없으면 디자인 미리보기가 표시됩니다.
