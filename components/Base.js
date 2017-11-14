// @flow
import React from 'react'
import { CASSYPage } from './Containers'
import Header from './Header'
import Footer from './Footer'
import { lifecycle } from 'recompose'
import ReactGA from 'react-ga'

const initGA = () => {
	console.log('GA init')
	ReactGA.initialize('UA-109703609-1')
}

const logPageView = page => {
	ReactGA.set({ page })
	ReactGA.pageview(page)
}

type Props = {
	children?: any,
	page?: string
}

export default lifecycle({
	componentDidMount() {
		initGA()
		logPageView(this.props.page)
	}
})(({ page, children }: Props) => (
	<div>
		<CASSYPage width="1200px">
			<Header page={page} />
			{children}
		</CASSYPage>
		<Footer />
	</div>
))
