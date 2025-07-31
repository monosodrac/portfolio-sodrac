import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, SidebarContainer } from './styles'


const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Titulo fontSize={'20'}>Mono Cardoso</Titulo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Full-Stack Python - EBAC | Técnico em Informática para
        Internet - SENAC
      </Descricao>
    </SidebarContainer>
  </aside>
)

export default Sidebar
