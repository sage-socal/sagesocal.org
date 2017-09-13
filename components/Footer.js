import { Row, Column } from 'hedron'
import styled from 'styled-components'
import { blue } from '../utils/colors'

const Content = styled.footer`
	font-family: 'Avenir', sans-serif;
	color: ${blue};
	padding: 60px 0;
	text-align: center;
`

export default () =>
	<Row>
		<Column>
			<Content>Copyright &copy; 2017, CASSY Southern California</Content>
		</Column>
	</Row>
