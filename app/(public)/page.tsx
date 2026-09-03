import HeroPage from './components/Hero/HeroPage';
import AboutPage from './components/About/AboutPage';
import StacksPage from './components/Stacks/StacksPage';
import ProjetosPage from './components/Projetos/ProjetosPage';

export default function Home() {
  return (
    <>
      <HeroPage />
      <AboutPage />
      <StacksPage />
      <ProjetosPage />
    </>
  );
}
