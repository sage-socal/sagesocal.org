import { createGlobalStyle } from 'styled-components'
import { chalk, stone } from '../utils/colors'
import { darken } from 'polished'

const SageGlobalStyle = createGlobalStyle`
  ::selection {
		background: ${darken(0.2, chalk)};
	}

	body {
		background-color: ${chalk};
	}
`

export default SageGlobalStyle
