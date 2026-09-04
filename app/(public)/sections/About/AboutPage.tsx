import Image from 'next/image';
import PageSection from '../../components/Section/PageSection';
import AboutImage from '@/public/images/about/Gab_dev.webp';

export default function AboutPage() {
  return (
    <PageSection id="sobre" backgroundClassName="bg-(--secondary)">
      <div className="w-full min-w-0 overflow-hidden rounded-[42px] pt-5 lg:w-1/2">
        <div className="mb-5 flex min-h-[280px] items-center justify-center rounded-[42px] bg-(--quartiary) p-4 text-center text-2xl text-(--secondary) sm:p-6 lg:mr-10 lg:h-full lg:p-10">
          <Image
            src={AboutImage}
            alt="Foto de Gabriel na seção sobre"
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="h-auto w-full max-w-full rounded-xl object-cover"
          />
        </div>
      </div>

      <div className="flex w-full min-w-0 flex-col lg:w-1/2">
        <div className="flex w-full justify-center">
          <h2 className="text-center text-4xl font-bold text-(--tertiary) sm:text-5xl lg:text-7xl">
            - Sobre Gabriel
          </h2>
        </div>

        <div className="texto">
          <p className="p-2 text-justify text-sm leading-relaxed text-(--tertiary) sm:text-base lg:text-lg">
            Desde pequeno, sempre fui curioso sobre tecnologia. Gostava de
            desmontar coisas para entender como funcionavam e passava madrugadas
            esperando o melhor horário para usar a internet discada da iG. Essa
            curiosidade em entender como as coisas funcionam acabou se tornando
            parte da minha forma de pensar. <br />
            Antes de atuar profissionalmente com desenvolvimento de software,
            construí minha experiência em outra área. Passei 9 anos na Marinha
            do Brasil, atuando principalmente em Recursos Humanos e em
            atividades administrativas. Foi nesse ambiente que comecei a
            perceber o potencial da tecnologia para resolver problemas reais. Ao
            identificar processos repetitivos e deficiências no dia a dia,
            buscava formas de simplificá-los utilizando tecnologia, criando
            soluções que reduziam trabalho manual e permitiam que as pessoas
            concentrassem sua atenção em tarefas que realmente exigiam mais
            cuidado.
            <br />
            Hoje, atuo como <b>Desenvolvedor de Software</b>, criando aplicações
            e soluções utilizando tecnologias como{' '}
            <b>JavaScript, TypeScript, React e Node.js</b>.
            <br />
            Minha experiência profissional anterior também faz parte do que levo
            para o desenvolvimento: organização, responsabilidade, visão de
            processos e, principalmente, a capacidade de entender um problema
            antes de pensar na solução. Para mim, desenvolver software não é
            apenas escrever código. É{' '}
            <b>
              entender problemas, construir soluções e transformar processos em
              algo mais simples, eficiente e confiável
            </b>
            .
          </p>
        </div>
      </div>
    </PageSection>
  );
}
