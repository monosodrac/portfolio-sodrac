import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={'24'}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">💻 Im a Full Stack Web Developer</Paragrafo>
    <Paragrafo tipo="principal">
      👯 Im looking to collaborate on Mobile Apps and Software Development
    </Paragrafo>
    <Paragrafo tipo="principal">☕️ Im passionate about coffee</Paragrafo>
    <Paragrafo tipo="principal">🎸 Im also a musician</Paragrafo>
    {/* <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=monosodrac&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=monosodrac&layout=compact&langs_count=7&size_weight=.2&count_weight=.8&theme=dracula" />
    </GithubSecao> */}
  </section>
)

export default Sobre
