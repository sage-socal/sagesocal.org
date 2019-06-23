import { createGlobalStyle } from 'styled-components'
import { beige, blue } from '../utils/colors'
import { tint } from 'polished'

const SageGlobalStyle = createGlobalStyle`
  ::selection {
		background: ${tint(0.3, blue)};
	}

	body {
		background-color: ${beige};
		background-image: url('/static/cardboard-flat.png');
		background-attachment: fixed;
	}

  @font-face {
    font-family: 'Marydale';
    font-weight: normal;
    src: url('/static/fonts/marydale.ttf');
  }
	@font-face {
    font-family: 'Avenir';
    font-weight: 200;
    src: url('/static/fonts/Avenir-Light.ttf');
  }
	@font-face {
    font-family: 'Avenir';
    font-weight: 300;
    src: url('/static/fonts/Avenir-Book.ttf');
  }
	@font-face {
    font-family: 'Avenir';
    font-weight: 400;
    src: url('/static/fonts/Avenir-Roman.ttf');
  }
	@font-face {
    font-family: 'Avenir';
    font-weight: 500;
    src: url('/static/fonts/Avenir-Medium.ttf');
  }
	@font-face {
    font-family: 'Avenir';
    font-weight: 700;
    src: url('/static/fonts/Avenir-Black.ttf');
  }
	@font-face {
    font-family: 'Avenir';
    font-weight: 900;
    src: url('/static/fonts/Avenir-Heavy.ttf');
  }  
`

export default SageGlobalStyle
