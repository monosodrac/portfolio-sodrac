import styled from 'styled-components'

import type { Props } from '.'
import variaveis from '../../styles/variaveis'

export const Titulo = styled.h3<Props>`
  margin-bottom: 16px;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '22px')};
  font-weight: bold;
  color: ${variaveis.three};
`
