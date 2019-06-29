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

export default () => (
  <Row>
    <Column>
      <Content>
        Copyright &copy; {new Date().getFullYear()} Sage, A Project of Impact
        Philanthropy Group.
      </Content>
    </Column>
  </Row>
)
