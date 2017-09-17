import { CASSYPage } from './Containers'
import Header from './Header'
import Footer from './Footer'

export default ({ page, children }) =>
	<div>
		<CASSYPage width="1200px">
			<Header page={page} />
			{children}
		</CASSYPage>
		<Footer />
	</div>
