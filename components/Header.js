import { Row, Column } from 'hedron'
import Navigation from './Navigation'

export default ({ page }) =>
	<Row>
		<Column>
			<Navigation
				logo="/static/logo-socal.png"
				active={page}
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
