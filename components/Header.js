import { Row, Column } from 'hedron'
import Navigation from './Navigation'

const Header = ({ page }) => (
  <Row>
    <Column style={{ position: 'sticky', top: 0 }}>
      <Navigation
        logo="/static/logo.png"
        active={page}
        pages={[
          { path: '/who', title: 'Who We Are', external: false },
          { path: '/what', title: 'What We Do', external: false },
          { path: '/where', title: 'Where We Do It', external: false },
          { path: '/contact', title: 'Contact Us', external: false },
          {
            path: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=DCQX2KKN3N2KY&source=url',
            title: 'Donate Now',
            external: true,
          },
        ]}
      />
    </Column>
  </Row>
)

export default Header
