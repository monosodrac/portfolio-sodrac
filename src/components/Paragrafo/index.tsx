import { P } from './styles'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: number
  textAlign?: string
}

const Paragrafo = ({ children, tipo = 'principal', fontSize, textAlign }: Props) => (
  <P fontSize={fontSize} tipo={tipo} textAlign={textAlign}>
    {children}
  </P>
)

export default Paragrafo
