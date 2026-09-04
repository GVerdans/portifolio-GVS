import PageSection from '../../components/Section/PageSection';
import CardsProjetos from '../../components/CardsProjetos/CardsProjetos';

export default function ProjetosPage() {
  return (
    <PageSection backgroundClassName="bg-(--quartiary)">
      <div className="flex flex-col w-full h-full">
        <header className="flex flex-col gap-5 border-b border-(--primary)/40 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-(--secondary)">
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
