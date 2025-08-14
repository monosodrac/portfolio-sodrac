import Titulo from '../Titulo'
import Paragrafo from '../Paragrafo'

const Sobre = () => (
  <section>
    <Titulo textAlign={'center'} fontSize={'24'}>Sobre mim</Titulo>
    <Paragrafo textAlign={'center'} tipo="principal">💻 Sou um Desenvolvedor Full-Stack</Paragrafo>
    <Paragrafo textAlign={'center'} tipo="principal">☕️ Apaixonado por café</Paragrafo>
    <Paragrafo textAlign={'center'} tipo="principal">🎸 E também sou músico</Paragrafo>
  </section>
)

export default Sobre
