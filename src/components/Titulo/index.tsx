import { Titulo as TituloEstilo } from './styles'

export type Props = {
  children: string
  fontSize?: string
  textAlign?: string
}

const Titulo = ({ children, fontSize, textAlign }: Props) => (
  <TituloEstilo fontSize={fontSize} textAlign={textAlign}>{children}</TituloEstilo>
)

export default Titulo
