import PageShell from "@/components/layout/PageShell";
import PageHero from "@/components/PageHero";
import TechnologyPlatforms from "@/components/TechnologyPlatforms";
import CtaBand from "@/components/CtaBand";
export default function Partners() {
  return (
    <PageShell
      title="Technologies & Platforms | Silxor"
      description="How Silxor selects cloud, security, identity, AI, and infrastructure platforms per engagement instead of a single fixed vendor stack."
      path="/partners"
    >
      <PageHero
        eyebrow="Platform approach"
        title="The requirement precedes the platform."
        lead="Silxor is platform agnostic. We select mature, well supported technologies based on each client's requirements. Platform selection and implementation scope are confirmed during assessment."
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Technologies & Platforms" },
        ]}
      />
      <TechnologyPlatforms />
      <CtaBand />
    </PageShell>
  );
}
