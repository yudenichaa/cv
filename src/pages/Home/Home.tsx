import { Intro, Skills, Education, Experience, Portfolio } from 'components';

export default function Home() {
  return (
    <div>
      <header></header>
      <main>
        <Intro />
        <Skills />
        <Education />
        <Experience />
        <Portfolio />
      </main>
      <footer></footer>
    </div>
  );
}
