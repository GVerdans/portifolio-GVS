import PageSection from '../../components/Section/PageSection';
import CardsProjetos from '../../components/CardsProjetos/CardsProjetos';

export default function ProjetosPage() {
  return (
    <PageSection id="projetos" backgroundClassName="bg-(--quartiary)">
      <div className="flex flex-col w-full h-full">
        <header className="flex flex-col border-b border-(--tertiary)/40 pb-8 text-center lg:text-start">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-(--primary)">
              @/components/
            </p>
            <h2 className="text-5xl text-(--tertiary) font-bold leading-none sm:text-7xl lg:text-8xl">
              Projetos<span className="text-(--primary)">.</span>
            </h2>
          </div>
        </header>
        <div className="projetos flex flex-row flex-wrap gap-10 mt-10">
          <CardsProjetos
            title="Teste"
            text="Teste"
            img="/images/about/Gab_dev.webp"
            repo="https://linkedin.com/in/gverdan"
          />
        </div>
      </div>
    </PageSection>
  );
}
