import styled from 'styled-components'
import Link from 'next/link'
import { blue, stone } from '../utils/colors'
import { tint } from 'polished'
import { withRouter } from 'next/router'
import { media } from '../utils/style-utils'

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  ${media.md`
		justify-content: space-between;
	`};
`
const NavBar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`
const PageLink = withRouter(styled.a`
  display: inline-block;
  text-decoration: none;
  font-weight: 500;
  font-family: 'Rubik', sans-serif;
  font-size: 15px;
  padding: 4px 16px;
  margin: 0px;
  color: ${blue};
  border-bottom: none;
  background-image: ${(props) =>
    props.active
      ? `linear-gradient(-100deg, rgba(255, 255, 255, 0), ${tint(
          0.75,
          stone
        )} 85%, rgba(255, 255, 255, 0))`
      : `none`};
  ${media.md`
		font-size: 24px;
	`};
`)

const Logo = ({ url }) => (
  <img
    style={{ maxWidth: '50vw', userSelect: 'none' }}
    width="220"
    alt="CASSY"
    draggable="false"
    src={url}
  />
)

const Navigation = ({ logo, pages, active }) => (
  <Header>
    <Link href="/who" prefetch>
      <a>
        <Logo url={logo} />
      </a>
    </Link>
    <NavBar>
      {pages.map((page) => (
        <Link
          key={page.path}
          href={page.path}
          prefetch={!page.external}
          passHref
        >
          <PageLink
            target={page.external ? `_blank` : `_self`}
            active={page.path === '/' + active}
          >
            {page.title}
          </PageLink>
        </Link>
      ))}
    </NavBar>
  </Header>
)

export default Navigation
