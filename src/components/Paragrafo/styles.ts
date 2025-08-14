import styled from 'styled-components'

import type { Props } from '.'
import variaveis from '../../styles/variaveis'

export const P = styled.p<Props>`
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'start')};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '20px')};
  color: ${variaveis.three};
  line-height: 24px;
  margin-bottom: 8px;
  white-space: pre-line;
`
