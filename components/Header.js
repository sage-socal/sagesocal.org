import { Row, Column } from 'hedron'
import Navigation from './Navigation'

export default () =>
	<Row>
		<Column>
			<Navigation
				logo="/static/logo.svg"
				pages={[
					{ path: 'who', title: 'Who We Are' },
					{ path: 'what', title: 'What We Do' },
					{ path: 'where', title: 'Where We Do It' },
					{ path: 'contact', title: 'Contact Us' },
					{ path: 'donate', title: 'Donate Now' }
				]}
			/>
		</Column>
	</Row>
