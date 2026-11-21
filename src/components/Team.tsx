import { founderBio } from "@/data/leadership";
export default function Team() {
  return (
    <section className="ed-section">
      <div className="container-content ed-founder">
        <p className="ed-kicker">Founder</p>
        <a
          href="https://www.linkedin.com/in/ehsidawi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Ehsan Nidawi <span aria-hidden="true">↗</span>
          </h2>
        </a>
        {founderBio.trim() && <p className="ed-lead">{founderBio}</p>}
      </div>
    </section>
  );
}
