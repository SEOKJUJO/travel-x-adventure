import { AppHeader } from "@/components/app-header";
import { BottomNav } from "@/components/bottom-nav";

const challenges = [
  { icon: "??", title: "?대쾲 ??30km 嫄룰린", progress: 68, reward: "1,200 XP" },
  { icon: "?벝", title: "濡쒖뺄 紐낆냼 5怨?湲곕줉", progress: 40, reward: "?먰뿕媛 諛곗?" },
  { icon: "?뙼", title: "?쒕줈?⑥씠?ㅽ듃 ?ы뻾", progress: 82, reward: "1,800 XP" },
];

export default function ChallengesPage() {
  return (
    <main className="app-shell content-page challenge-page">
      <AppHeader />
      <section className="challenge-hero">
        <div>
          <span className="eyebrow light">WEEKLY QUEST</span>
          <h1>?ы뻾?섎뒗 紐⑤뱺 ?쒓컙??br />?섎쭔??湲곕줉???쇱슂.</h1>
          <p>?묒? ?꾩쟾???꾨즺?섍퀬 ?ы뻾 ?덈꺼???щ젮蹂댁꽭??</p>
        </div>
        <div className="level-orb" aria-label="?꾩옱 ?덈꺼 12">
          <span>LV.</span>
          <strong>12</strong>
        </div>
      </section>
      <section className="content-section challenge-section">
        <div className="streak-card">
          <div className="streak-icon">?뵦</div>
          <div><strong>7???곗냽 ?먰뿕 以?</strong><span>?ㅻ뒛 ?섎굹留????꾨즺?섎㈃ 蹂대꼫??2諛?/span></div>
          <b>+2X</b>
        </div>
        <div className="section-heading">
          <div>
            <span className="eyebrow">MY CHALLENGES</span>
            <h2>吏꾪뻾 以묒씤 梨뚮┛吏</h2>
          </div>
          <button className="text-button" type="button">?섎윭蹂닿린</button>
        </div>
        <div className="challenge-list">
          {challenges.map((challenge) => (
            <article className="challenge-card" key={challenge.title}>
              <div className="challenge-icon">{challenge.icon}</div>
              <div className="challenge-copy">
                <div><strong>{challenge.title}</strong><span>{challenge.reward}</span></div>
                <div className="progress-track"><i style={{ width: `${challenge.progress}%` }} /></div>
                <small>{challenge.progress}% ?꾨즺</small>
              </div>
            </article>
          ))}
        </div>
      </section>
      <BottomNav active="challenges" />
    </main>
  );
}
