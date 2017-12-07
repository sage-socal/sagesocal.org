// @flow
import React, { PureComponent } from 'react'
import { CASSYPage } from './Containers'
import Header from './Header'
import Footer from './Footer'
import { lifecycle } from 'recompose'
import ReactGA from 'react-ga'

const initGA = () => {
	ReactGA.initialize('UA-109703609-1')
}

const logPageView = page => {
	ReactGA.set({ page })
	ReactGA.pageview(page)
}

type Props = {
	children?: any,
	page: string
}

export default class Base extends PureComponent<Props> {
	componentDidMount() {
		initGA()
		logPageView(this.props.page)
	}
	render() {
		return (
			<div>
				<CASSYPage width="1200px">
					<Header page={this.props.page} />
					{this.props.children}
				</CASSYPage>
				<Footer />
			</div>
		)
	}
}
