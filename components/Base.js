import { CASSYPage } from './Containers'
import Header from './Header'
import Footer from './Footer'

export default ({ children }) =>
	<div>
		<CASSYPage width="1200px">
			<Header />
			{children}
		</CASSYPage>
		<Footer />
	</div>
