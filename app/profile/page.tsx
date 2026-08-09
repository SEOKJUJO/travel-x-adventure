import Image from "next/image";
import { AppHeader } from "@/components/app-header";
import { BottomNav } from "@/components/bottom-nav";
import { KakaoLoginButton } from "@/components/kakao-login-button";
import { isSupabaseConfigured } from "@/lib/supabase/config";

export default function ProfilePage() {
  return (
    <main className="app-shell content-page profile-page">
      <AppHeader />
      <section className="profile-panel">
        <div className="profile-character">
          <Image src="/bear-marker.svg" alt="Travel X 怨곕룎???먰뿕媛" width={160} height={160} priority />
        </div>
        <span className="eyebrow">YOUR NEXT ADVENTURE</span>
        <h1>?섎쭔???ы뻾 吏?꾨?<br />?꾩꽦?대낫?몄슂.</h1>
        <p>移댁뭅?ㅻ줈 ?쒖옉?섎㈃ ??ν븳 ?μ냼? 梨뚮┛吏 湲곕줉???대뒓 湲곌린?먯꽌???댁뼱蹂????덉뼱??</p>
        <KakaoLoginButton configured={isSupabaseConfigured} />
        <small>媛?낇븯硫??쒕퉬???댁슜?쎄? 諛?媛쒖씤?뺣낫 泥섎━諛⑹묠???숈쓽?섍쾶 ?⑸땲??</small>
      </section>
      <BottomNav active="profile" />
    </main>
  );
}
