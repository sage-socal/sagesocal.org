import { createGlobalStyle } from 'styled-components'
import { chalk, yellow } from '../utils/colors'
import { tint } from 'polished'

const SageGlobalStyle = createGlobalStyle`
  ::selection {
		background: ${tint(0.5, yellow)};
	}

	body {
		background-color: ${chalk};
		background-image: url('/static/cardboard-flat.png');
		background-attachment: fixed;
	}
`

export default SageGlobalStyle
