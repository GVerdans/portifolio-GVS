import PageSection from '../Section/PageSection';
import CardsProjetos from '../CardsProjetos/CardsProjetos';

export default function ProjetosPage() {
  return (
    <>
      <PageSection backgroundClassName="bg-(--quartiary)">
        <div className="">
          <h1>Projetos</h1>
          <CardsProjetos
            title="Teste"
            text="Teste"
            repo="https://linkedin.com/in/gverdan"
          />
        </div>
      </PageSection>
    </>
  );
}
