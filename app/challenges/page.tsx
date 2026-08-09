import { AppHeader } from "@/components/app-header";
import { BottomNav } from "@/components/bottom-nav";

const challenges = [
  { icon: "🥾", title: "이번 달 30km 걷기", progress: 68, reward: "1,200 XP" },
  { icon: "📸", title: "로컬 명소 5곳 기록", progress: 40, reward: "탐험가 배지" },
  { icon: "🌿", title: "제로웨이스트 여행", progress: 82, reward: "1,800 XP" },
];

export default function ChallengesPage() {
  return (
    <main className="app-shell content-page challenge-page">
      <AppHeader />
      <section className="challenge-hero">
        <div>
          <span className="eyebrow light">WEEKLY QUEST</span>
          <h1>여행하는 모든 순간이<br />나만의 기록이 돼요.</h1>
          <p>작은 도전을 완료하고 여행 레벨을 올려보세요.</p>
        </div>
        <div className="level-orb" aria-label="현재 레벨 12">
          <span>LV.</span>
          <strong>12</strong>
        </div>
      </section>
      <section className="content-section challenge-section">
        <div className="streak-card">
          <div className="streak-icon">🔥</div>
          <div><strong>7일 연속 탐험 중!</strong><span>오늘 하나만 더 완료하면 보너스 2배</span></div>
          <b>+2X</b>
        </div>
        <div className="section-heading">
          <div>
            <span className="eyebrow">MY CHALLENGES</span>
            <h2>진행 중인 챌린지</h2>
          </div>
          <button className="text-button" type="button">둘러보기</button>
        </div>
        <div className="challenge-list">
          {challenges.map((challenge) => (
            <article className="challenge-card" key={challenge.title}>
              <div className="challenge-icon">{challenge.icon}</div>
              <div className="challenge-copy">
                <div><strong>{challenge.title}</strong><span>{challenge.reward}</span></div>
                <div className="progress-track"><i style={{ width: `${challenge.progress}%` }} /></div>
                <small>{challenge.progress}% 완료</small>
              </div>
            </article>
          ))}
        </div>
      </section>
      <BottomNav active="challenges" />
    </main>
  );
}
