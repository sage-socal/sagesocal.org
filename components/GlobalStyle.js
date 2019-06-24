import { createGlobalStyle } from 'styled-components'
import { chalk, yellow } from '../utils/colors'
import { tint } from 'polished'

const SageGlobalStyle = createGlobalStyle`
  ::selection {
		background: ${tint(0.5, yellow)};
	}

	body {
		background-color: ${chalk};
	}
`

export default SageGlobalStyle
