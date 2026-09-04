import PageSection from '../../components/Section/PageSection';

const ContatoPage = () => {
  return (
    <PageSection backgroundClassName="bg-(--rojo)">
      <div className="w-full">
        <header className="flex flex-col text-center gap-5 border-b border-(--quartiary)/40 pb-8 lg:flex-row lg:text-start">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-(--tertiary)">
              @/Contact/
            </p>
            <h2 className="text-5xl text-(--quartiary) font-bold leading-none sm:text-7xl lg:text-8xl">
              Contato<span className="text-(--tertiary)">.</span>
            </h2>
          </div>
        </header>
      </div>
    </PageSection>
  );
};

export default ContatoPage;
