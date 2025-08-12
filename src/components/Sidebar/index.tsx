import Titulo from '../Titulo'

import { Descricao, SidebarContainer } from './styles'


const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Titulo fontSize={'24'}>Mono Cardoso</Titulo>
      <Descricao tipo="principal" fontSize={20}>
        Desenvolvedor Full-Stack Python - EBAC | Técnico em Informática para
        Internet - SENAC
      </Descricao>
    </SidebarContainer>
  </aside>
)

export default Sidebar
