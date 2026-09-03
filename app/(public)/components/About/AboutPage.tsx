import Image from 'next/image';
import PageSection from '../Section/PageSection';
import AboutImage from '@/public/images/about/Gab_dev.webp';

export default function AboutPage() {
  return (
    <PageSection backgroundClassName="bg-(--secondary)">
      <div className="w-full min-w-0 overflow-hidden rounded-[42px] pt-5 lg:mt-0 lg:w-1/2">
        <div className="flex h-72 min-h-[280px] items-center justify-center rounded-[42px] mb-5 text-center text-2xl text-(--secondary) bg-(--quartiary) lg:h-full lg:mr-10 p-10">
          <Image
            src={AboutImage}
            width={900}
            height={570}
            alt="foto de gabriel seção about"
            className="rounded-xl"
          />
        </div>
      </div>
      <div className="flex w-full flex-col lg:w-1/2">
        <div className="flex w-full justify-center">
          <p className="text-(--tertiary) text-center font-bold text-4xl lg:text-7xl">
            - Sobre Gabriel
          </p>
        </div>
        <div className="texto">
          <p className="p-2 text-justify text-sm text-(--tertiary) lg:text-lg">
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
