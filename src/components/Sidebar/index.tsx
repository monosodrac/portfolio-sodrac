import Titulo from '../Titulo'

import { Descricao, SidebarContainer } from './styles'


const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Titulo textAlign={'center'} fontSize={'24'}>Mono Cardoso</Titulo>
      <Descricao textAlign={'center'} tipo="principal" fontSize={22}>
        Desenvolvedor Full-Stack
      </Descricao>
    </SidebarContainer>
  </aside>
)

export default Sidebar
