import React, { Component } from 'react'
import redirect from 'next-redirect'

import Base from '../components/Base'
import { Row, Column } from 'hedron'
import { LargeHeading } from '../components/Text'

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
            <LargeHeading>Sage</LargeHeading>
          </Column>
        </Row>
      </Base>
    )
  }
}
