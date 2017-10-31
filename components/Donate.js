import React, { Component } from 'react'

export default class Doante extends Component {
	componentDidMount() {
		const init = document.createElement('script')
		init.type = 'text/javascript'
		init.innerHTML = `
      window.bboxInit = function () {
           bbox.showForm('0a7ca78f-2869-421a-971c-f06f6bde466c');
       };
    `
		this.instance.appendChild(init)

		const script = document.createElement('script')
		script.async = true
		script.src = 'https://bbox.blackbaudhosting.com/webforms/bbox-min.js'
		document.getElementsByTagName('head')[0].appendChild(script)
	}

	componentWillUnmount() {}

	render() {
		return (
			<div ref={el => (this.instance = el)}>
				<div id="bbox-root" />
			</div>
		)
	}
}
