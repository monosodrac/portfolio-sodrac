import styled from 'styled-components'

import type { Props } from '.'
import variaveis from '../../styles/variaveis'

export const P = styled.p<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  color: ${variaveis.three};
  line-height: 22px;
`
