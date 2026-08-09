type ExpeditionCardProps = {
  eyebrow: string;
  title: string;
  detail: string;
  tone: string;
  emoji: string;
};

export function ExpeditionCard({ eyebrow, title, detail, tone, emoji }: ExpeditionCardProps) {
  return (
    <article className={`expedition-card ${tone}`}>
      <div className="card-art"><span>{emoji}</span><button type="button" aria-label="원정대 저장">♡</button></div>
      <div className="card-copy">
        <small>{eyebrow}</small>
        <h3>{title}</h3>
        <p>{detail}</p>
        <div className="avatar-stack" aria-label="참여 중인 여행자">
          <i>A</i><i>J</i><i>S</i><b>+2</b>
        </div>
      </div>
    </article>
  );
}
