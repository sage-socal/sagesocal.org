import { createGlobalStyle } from 'styled-components'
import { chalk, white } from '../utils/colors'
import { darken } from 'polished'

const SageGlobalStyle = createGlobalStyle`
  ::selection {
		background: ${darken(0.2, chalk)};
	}

	body {
		background: linear-gradient(${white} 0px, ${white} 40px, ${chalk} 600px) fixed;
		background-color: ${white};
	}
`

export default SageGlobalStyle
