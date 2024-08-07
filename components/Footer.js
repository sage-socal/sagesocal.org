import { Row, Column } from 'hedron'
import styled from 'styled-components'
import { media } from '../utils/style-utils'
import { stone } from '../utils/colors'
import { tint } from 'polished'

const Content = styled.footer`
  font-family: 'Rubik', sans-serif;
  color: ${tint(0.35, stone)};
  text-align: center;
  font-size: 12px;
  margin-bottom: 60px;
  margin-top: -40px;
  ${media.md`
		font-size: 16px;
	`};
`

const Footer = () => (
  <Row>
    <Column>
      <Content>
        Copyright &copy; {new Date().getFullYear()} Sage Socal, Inc. (EIN: 99-1871717)
      </Content>
    </Column>
  </Row>
)

export default Footer
