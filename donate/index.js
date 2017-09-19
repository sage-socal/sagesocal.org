import React, { Component } from 'react'
import redirect from 'next-redirect'

import Base from '../components/Base'
import { Row, Column } from 'hedron'
import { LargeHeading, Paragraph } from '../components/Text'

export default class Index extends Component {
	static getInitialProps(ctx) {
		redirect(ctx, '/who')
		return {}
	}
	render() {
		return (
			<Base>
				<Row>
					<Column>
						<LargeHeading>CASSY Southern California</LargeHeading>
					</Column>
				</Row>
			</Base>
		)
	}
}
