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
            title="Bicalho Despachante"
            text="Landing page profissional e responsiva para captação de clientes e agendamento de serviços."
            img=""
            url="https://bicalhodespachante.com.br/"
          />
          <CardsProjetos
            title="de Andrade Advogados"
            text="Website institucional responsivo com foco em apresentação e conversão."
            img=""
            url="https://deandradeadvassociados.com.br/"
          />
          <CardsProjetos
            title="Projeto Agenda Telefônica"
            text="Aplicação CRUD para gerenciamento de contatos com persistência em MongoDB."
            img=""
            url="https://projeto-agenda-dbn2.onrender.com/"
            repo="https://github.com/GVerdans/projeto-agenda"
          />
          <CardsProjetos
            title="Sistema de Controle Acadêmico"
            text="Aplicação full stack para cadastro de alunos, cursos e registros acadêmicos."
            img=""
            url="https://controle-academico-front.vercel.app/"
            repo="https://github.com/GVerdans/controle-academico-front"
          />
          <CardsProjetos
            title="Sistema de Estoque"
            text="Sistema full stack para gestão de produtos, entradas, saídas e movimentações."
            img=""
            url="https://estoque-full-roan.vercel.app/"
            repo="https://github.com/GVerdans/estoque-full"
          />
        </div>
      </div>
    </PageSection>
  );
}
