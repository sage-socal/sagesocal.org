import Document, { Head, Main, NextScript } from 'next/document'
import { injectGlobal, ServerStyleSheet } from 'styled-components'
import styledNormalize from 'styled-normalize'
import { beige, blue } from '../utils/colors'
import { tint } from 'polished'

injectGlobal`
	${styledNormalize}

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

export default class MyDocument extends Document {
	render() {
		const sheet = new ServerStyleSheet()
		const main = sheet.collectStyles(<Main />)
		const styleTags = sheet.getStyleElement()
		return (
			<html>
				<Head>
					<title>CASSY SoCal</title>
					<script
						async
						src="https://bbox.blackbaudhosting.com/webforms/bbox-min.js"
					/>
					{styleTags}
				</Head>
				<body>
					<div className="root">
						{main}
					</div>
					<NextScript />
				</body>
			</html>
		)
	}
}
