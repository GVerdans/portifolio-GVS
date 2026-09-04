import Image from 'next/image';
import PageSection from '../../components/Section/PageSection';
import AboutImage from '@/public/images/about/Gab_dev.webp';

export default function AboutPage() {
  return (
    <PageSection id="sobre" backgroundClassName="bg-(--secondary)">
      <div className="grid w-full grid-cols-1 items-center gap-10 xl:grid-cols-2 xl:gap-16">
        <div className="flex justify-center">
          <div className="w-full max-w-[560px] rounded-[42px] bg-(--quartiary) p-5 sm:p-8">
            <Image
              src={AboutImage}
              alt="Foto de Gabriel"
              sizes="(max-width: 1279px) 100vw, 50vw"
              className="h-auto w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        <div className="min-w-0">
          <h2 className="mb-5 text-center text-4xl font-bold leading-tight text-(--tertiary) sm:text-5xl xl:text-6xl">
            - Sobre Gabriel
          </h2>

          <p className="text-justify text-sm leading-relaxed text-(--tertiary) sm:text-base lg:text-lg">
            Desde pequeno, sempre fui curioso sobre tecnologia. Gostava de
            desmontar coisas para entender como funcionavam e passava madrugadas
            esperando o melhor horário para usar a internet discada da iG. Essa
            curiosidade em entender como as coisas funcionam acabou se tornando
            parte da minha forma de pensar.
            <br />
            Antes de atuar profissionalmente com desenvolvimento de software,
            construí minha experiência em outra área. Passei 9 anos na Marinha
            do Brasil, atuando principalmente em Recursos Humanos e em
            atividades administrativas. Foi nesse ambiente que comecei a
            perceber o potencial da tecnologia para resolver problemas reais. Ao
            identificar processos repetitivos e deficiências no dia a dia,
            buscava formas de simplificá-los utilizando tecnologia.
            <br />
            Hoje, atuo como <b>Desenvolvedor de Software</b>, criando aplicações
            e soluções utilizando tecnologias como{' '}
            <b>JavaScript, TypeScript, React e Node.js</b>.
            <br />
            Minha experiência profissional anterior também faz parte do que levo
            para o desenvolvimento: organização, responsabilidade, visão de
            processos e a capacidade de entender um problema antes de pensar na
            solução.
          </p>
        </div>
      </div>
    </PageSection>
  );
}
