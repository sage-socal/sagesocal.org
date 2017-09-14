import styled from 'styled-components'
import Link from 'next/link'
import { green, orange, blue } from '../utils/colors'
import { withRouter } from 'next/router'

const Header = styled.header`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
`
const NavBar = styled.nav``
const PageLink = withRouter(styled.a`
	text-decoration: none;
	font-weight: 500;
	font-family: 'Avenir', Helvetica, sans-serif;
	font-size: 20px;
	padding: 15px;
	color: ${green};
`)

const Logo = ({ url }) =>
	<img width="220" alt="CASSY" draggable="false" src={url} />

export default ({ logo, pages }) =>
	<Header>
		<Link href="/who" prefetch>
			<a>
				<Logo url={logo} />
			</a>
		</Link>
		<NavBar>
			{pages.map(page =>
				<Link key={page.path} href={page.path} prefetch passHref>
					<PageLink>
						{page.title}
					</PageLink>
				</Link>
			)}
		</NavBar>
	</Header>
