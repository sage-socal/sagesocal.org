import { Row, Column } from 'hedron'
import Navigation from './Navigation'

export default ({ page }) => (
  <Row>
    <Column>
      <Navigation
        logo="/static/logo.png"
        active={page}
        pages={[
          { path: '/who', title: 'Who We Are', external: false },
          { path: '/what', title: 'What We Do', external: false },
          { path: '/where', title: 'Where We Do It', external: false },
          { path: '/contact', title: 'Contact Us', external: false },
          {
            path: 'https://www.paypal.com/fundraiser/charity/3392177',
            title: 'Donate Now',
            external: true
          }
        ]}
      />
    </Column>
  </Row>
)
