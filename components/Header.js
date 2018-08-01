import { Row, Column } from 'hedron'
import Navigation from './Navigation'

const Wrap = Row.extend`
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.2);
`

export default ({ page }) => (
  <Wrap>
    <Column>
      <Navigation
        logo="/static/logo-socal-sm.png"
        active={page}
        pages={[
          { path: '/who', title: 'Who We Are' },
          { path: '/what', title: 'What We Do' },
          { path: '/where', title: 'Where We Do It' },
          { path: '/contact', title: 'Contact Us' },
          { path: '/donate', title: 'Donate Now' }
        ]}
      />
    </Column>
  </Wrap>
)
