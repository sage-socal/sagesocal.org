import { Row, Column } from 'hedron'
import styled from 'styled-components'
import { beige } from '../utils/colors'
import { shade } from 'polished'
import { media } from '../utils/style-utils'

const Content = styled.footer`
  font-family: 'Avenir', sans-serif;
  color: ${shade(0.5, beige)};
  padding: 10px 0;
  text-align: center;
  font-size: 12px;
  ${media.md`
		font-size: 16px;
		padding: 40px 0;
	`};
`

export default () => (
  <Row>
    <Column>
      <Content>
        &copy; 2018, CASSY SoCal, A Project of Impact Philanthropy Group.
      </Content>
    </Column>
  </Row>
)
