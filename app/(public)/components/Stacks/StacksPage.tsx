import PageSection from '../Section/PageSection';
import {
  FaBootstrap,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJsSquare,
  FaNodeJs,
  FaPhp,
  FaReact,
} from 'react-icons/fa';
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPrisma,
  SiPostgresql,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

const frontendStacks = [
  { name: 'React', icon: <FaReact /> },
  { name: 'JavaScript', icon: <FaJsSquare /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'Bootstrap', icon: <FaBootstrap /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
  { name: 'Next.js', icon: <SiNextdotjs /> },
  { name: 'Vite', icon: <SiVite /> },
];

const backendStacks = [
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Express', icon: <SiExpress /> },
  { name: 'PHP', icon: <FaPhp /> },
  { name: 'PostgreSQL', icon: <SiPostgresql /> },
  { name: 'MySQL', icon: <SiMysql /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Prisma', icon: <SiPrisma /> },
  { name: 'Git', icon: <FaGitAlt /> },
];

export default function StacksPage() {
  return (
    <PageSection backgroundClassName="bg-(--tertiary)">
      <div className="w-full text-(--secondary)">
        <header className="flex flex-col gap-5 border-b border-(--secondary)/40 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.3em] text-(--quartiary)">
              02 / toolkit
            </p>
            <h2 className="text-5xl font-bold leading-none sm:text-7xl lg:text-8xl">
              Stacks<span className="text-(--quartiary)">.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-(--secondary)/70 sm:text-right">
            Ferramentas que transformam ideias em produtos funcionais,
            acessíveis e fáceis de evoluir.
          </p>
        </header>

        <div className="mt-10 grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-20">
          <div className="flex flex-col justify-between">
            <div>
              <p className="max-w-xs text-2xl leading-tight text-(--secondary)/80 sm:text-3xl">
                Uma caixa de ferramentas para cada etapa do produto.
              </p>
              <div className="mt-8 h-px w-20 bg-(--quartiary)" />
            </div>
            <p className="mt-12 text-xs uppercase tracking-[0.2em] text-(--secondary)/50 lg:mt-0">
              Frontend / Backend / Delivery
            </p>
          </div>

          <div>
            {[
              { name: 'Frontend', stacks: frontendStacks },
              { name: 'Backend', stacks: backendStacks },
            ].map((stackGroup, groupIndex) => (
              <div
                key={stackGroup.name}
                className={groupIndex === 1 ? 'mt-12' : ''}>
                <div className="mb-4 flex items-center gap-4">
                  <span className="text-xs text-(--quartiary)">
                    0{groupIndex + 1}
                  </span>
                  <h3 className="text-2xl font-bold sm:text-3xl">
                    {stackGroup.name}
                  </h3>
                  <span className="h-px flex-1 bg-(--secondary)/30" />
                </div>
                <div className="grid grid-cols-2 border-t border-(--secondary)/30 sm:grid-cols-3">
                  {stackGroup.stacks.map((stack) => (
                    <div
                      key={stack.name}
                      className="group flex min-h-28 flex-col justify-between border-b border-r border-(--secondary)/30 p-4 transition-colors hover:bg-(--quartiary) hover:text-(--tertiary) sm:p-5">
                      <span className="text-3xl transition-transform group-hover:-rotate-6 group-hover:scale-110">
                        {stack.icon}
                      </span>
                      <span className="mt-5 text-sm">{stack.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageSection>
  );
}
