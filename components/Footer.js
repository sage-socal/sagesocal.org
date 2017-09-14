import { Row, Column } from 'hedron'
import styled from 'styled-components'
import { beige } from '../utils/colors'
import { shade } from 'polished'

const Content = styled.footer`
	font-family: 'Avenir', sans-serif;
	color: ${shade(0.5, beige)};
	padding: 40px 0;
	text-align: center;
`

export default () =>
	<Row>
		<Column>
			<Content>Copyright &copy; 2017, CASSY Southern California</Content>
		</Column>
	</Row>
