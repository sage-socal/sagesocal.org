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

					<link
						rel="apple-touch-icon"
						sizes="57x57"
						href="/static/favicon/apple-icon-57x57.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="60x60"
						href="/static/favicon/apple-icon-60x60.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="72x72"
						href="/static/favicon/apple-icon-72x72.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="76x76"
						href="/static/favicon/apple-icon-76x76.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="114x114"
						href="/static/favicon/apple-icon-114x114.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="120x120"
						href="/static/favicon/apple-icon-120x120.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="144x144"
						href="/static/favicon/apple-icon-144x144.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="152x152"
						href="/static/favicon/apple-icon-152x152.png"
					/>
					<link
						rel="apple-touch-icon"
						sizes="180x180"
						href="/static/favicon/apple-icon-180x180.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="192x192"
						href="/static/favicon/android-icon-192x192.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="32x32"
						href="/static/favicon/favicon-32x32.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="96x96"
						href="/static/favicon/favicon-96x96.png"
					/>
					<link
						rel="icon"
						type="image/png"
						sizes="16x16"
						href="/static/favicon/favicon-16x16.png"
					/>
					<link rel="manifest" href="/static/manifest.json" />
					<meta name="msapplication-TileColor" content="#ffffff" />
					<meta
						name="msapplication-TileImage"
						content="/static/favicon/ms-icon-144x144.png"
					/>
					<meta name="theme-color" content="#ffffff" />

					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
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
