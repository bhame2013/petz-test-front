import { PageResume } from "@/presentation";

import { Layout } from "src/presentation/layout";
import { AboutUs } from "src/presentation/pages/about-us";

export default function AboutPage() {
  return (
    <Layout>
      <PageResume
        title="Quem Somos"
        description="A maior rede de tratamento pokémon."
      />

      <AboutUs />
    </Layout>
  );
}
