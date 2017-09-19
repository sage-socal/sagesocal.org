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
	margin: 15px;
	margin-bottom: 0;
	padding-bottom: 10px;
	margin-bottom: 5px;
	color: ${green};
	border-bottom: ${props => props.active && `3px solid ${green};`};
`)

const Logo = ({ url }) =>
	<img
		style={{ maxWidth: '50vw', userSelect: 'none' }}
		width="220"
		alt="CASSY"
		draggable="false"
		src={url}
	/>

export default ({ logo, pages, active }) =>
	<Header>
		<Link href="/who" prefetch>
			<a>
				<Logo url={logo} />
			</a>
		</Link>
		<NavBar>
			{pages.map(page =>
				<Link key={page.path} href={page.path} prefetch passHref>
					<PageLink active={page.path === '/' + active}>
						{page.title}
					</PageLink>
				</Link>
			)}
		</NavBar>
	</Header>
