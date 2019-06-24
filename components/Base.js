import React, { PureComponent } from 'react'
import { SagePage } from './Containers'
import Header from './Header'
import Footer from './Footer'
import ReactGA from 'react-ga'

const initGA = () => {
  ReactGA.initialize('UA-109703609-1')
}

const logPageView = page => {
  ReactGA.set({ page })
  ReactGA.pageview(page)
}

export default class Base extends PureComponent {
  componentDidMount() {
    initGA()
    logPageView(this.props.page)
  }
  render() {
    return (
      <div>
        <SagePage>
          <Header page={this.props.page} />
          {this.props.children}
        </SagePage>
        <Footer />
      </div>
    )
  }
}
