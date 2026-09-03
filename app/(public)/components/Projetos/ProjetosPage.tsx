import PageSection from '../Section/PageSection';
import CardsProjetos from '../CardsProjetos/CardsProjetos';

export default function ProjetosPage() {
  return (
    <PageSection backgroundClassName="bg-(--quartiary)">
      <div className="flex flex-col w-full">
        <header className="flex flex-col gap-5 border-b border-(--secondary)/40 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-(--secondary)">
              03 /
            </p>
            <h2 className="text-5xl text-(--primary) font-bold leading-none sm:text-7xl lg:text-8xl">
              Projetos<span className="text-(--tertiary)">.</span>
            </h2>
          </div>
        </header>
        <div className="projetos flex flex-col border border-red-500">
          <CardsProjetos
            title="Teste"
            text="Teste"
            repo="https://linkedin.com/in/gverdan"
          />
        </div>
      </div>
    </PageSection>
  );
}
