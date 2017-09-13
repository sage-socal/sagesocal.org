import { Page, Row, Column } from 'hedron'
import Header from './Header'
import Footer from './Footer'

export default ({ children }) =>
	<Page width="1200px">
		<Header />
		{children}
		<Footer />
	</Page>
