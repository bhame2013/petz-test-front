import { PageResume, Layout, AboutUs } from "@/presentation";

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
