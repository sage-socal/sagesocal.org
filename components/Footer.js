import { Row, Column } from 'hedron'
import styled from 'styled-components'
import { media } from '../utils/style-utils'
import { stone } from '../utils/colors'

const Content = styled.footer`
  font-family: 'Rubik', sans-serif;
  color: ${stone};
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
