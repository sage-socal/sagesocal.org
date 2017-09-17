import React from 'react'
import Base from '../components/Base'
import { Row, Column } from 'hedron'
import { FitImage } from '../components/Media'
import { Section } from '../components/Containers'
import { LargeHeading, Paragraph, BodyHeadline } from '../components/Text'
import { blue, stone } from '../utils/colors'
import { tint } from 'polished'

const Blurb = Section.extend`justify-content: center;`

const Person = BodyHeadline.extend`
	color: ${blue};
	font-size: ${props => (props.primary ? `28px` : `24px`)};
`

const PersonTitle = BodyHeadline.extend`
	color: ${tint(0.5, stone)};
	font-size: ${props => (props.primary ? `22px` : `18px`)};
`

const Contact = Paragraph.extend`
	margin: 5px 0;
	font-size: ${props => (props.primary ? `22px` : `18px`)};
`

export default () =>
	<Base page="contact">
		<Blurb>
			<Column lg={8}>
				<LargeHeading>Contact us.</LargeHeading>
				<Paragraph>
					If you are school personnel or a parent and want to know more about
					CASSY services, are interested in either employment or volunteer
					opportunities, or want more information about how to best support
					CASSY’s work, please call or email us.
				</Paragraph>
			</Column>
		</Blurb>
		<Blurb>
			<Column lg={2}>
				<FitImage src="/static/images/liz-schoeben.jpg" />
			</Column>
			<Column lg={4}>
				<Person primary>Liz Schoeben, LMFT</Person>
				<PersonTitle primary>Founder / Regional Director</PersonTitle>
				<Contact>
					(650) 799-5266<br />lizschoeben@mac.com
				</Contact>
			</Column>
		</Blurb>
		<Blurb>
			<Column lg={4}>
				<Person>TBD, LMFT</Person>
				<PersonTitle primary>Palos Verdes High</PersonTitle>
				<Contact>
					(###) ###-####<br />email@me.com
				</Contact>
			</Column>
			<Column lg={4}>
				<Person>TBD, LMFT</Person>
				<PersonTitle primary>Palos Verdes High</PersonTitle>
				<Contact>
					(###) ###-####<br />email@me.com
				</Contact>
			</Column>
		</Blurb>
		<Blurb>
			<Column lg={4}>
				<Person>TBD, LMFT</Person>
				<PersonTitle primary>Palos Verdes High</PersonTitle>
				<Contact>
					(###) ###-####<br />email@me.com
				</Contact>
			</Column>
			<Column lg={4}>
				<Person>TBD, LMFT</Person>
				<PersonTitle primary>Palos Verdes High</PersonTitle>
				<Contact>
					(###) ###-####<br />email@me.com
				</Contact>
			</Column>
		</Blurb>
	</Base>
