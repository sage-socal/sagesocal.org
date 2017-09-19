import React from 'react'
import Base from '../components/Base'
import { Row, Column } from 'hedron'
import { FitImage } from '../components/Media'
import { Section } from '../components/Containers'
import { LargeHeading, Paragraph, BodyHeadline } from '../components/Text'
import { blue, stone } from '../utils/colors'
import { tint } from 'polished'
import Head from 'next/head'

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
	font-size: ${props => (props.primary ? `20px` : `18px`)};
`

const CircleImage = FitImage.extend`
	width: 150px;
	height: 150px;
	border-radius: 75px;
`

export default () =>
	<Base page="contact">
		<Head>
			<title>CASSY SoCal / Contact</title>
		</Head>
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
				<CircleImage src="/static/images/liz-schoeben.jpg" />
			</Column>
			<Column lg={4}>
				<Person primary>Liz Schoeben, MFT</Person>
				<PersonTitle primary>Executive Director</PersonTitle>
				<Contact primary>
					(650) 799-5266<br />lizschoeben@cassysocal.org
				</Contact>
			</Column>
		</Blurb>
		<Blurb>
			<Column lg={2}>
				<CircleImage src="/static/person-placeholder.jpg" />
			</Column>
			<Column lg={4}>
				<Person primary>Kathi Colli, MFT</Person>
				<PersonTitle primary>Clinical Supervisor</PersonTitle>
				<Contact primary>
					(424) 262-0896<br />collik@pvpusd.net
				</Contact>
			</Column>
		</Blurb>

		<Blurb>
			<Column lg={2}>
				<CircleImage src="/static/person-placeholder.jpg" />
			</Column>
			<Column lg={3}>
				<Person>Barbara Gani, LCSW</Person>
				<PersonTitle>Student Support Specialist at Peninsula High</PersonTitle>
				<Contact>ganib@pvpusd.net</Contact>
			</Column>
			<Column lg={2}>
				<CircleImage src="/static/person-placeholder.jpg" />
			</Column>
			<Column lg={3}>
				<Person>Nancy De La Rosa, MFTi</Person>
				<PersonTitle>
					Student Support Specialist at Palos Verdes High School
				</PersonTitle>
				<Contact>delarosan@pvpusd.net</Contact>
			</Column>
		</Blurb>
		<Blurb>
			<Column lg={2}>
				<CircleImage src="/static/person-placeholder.jpg" />
			</Column>
			<Column lg={3}>
				<Person>Cynthia Lopez Herrera, MSW</Person>
				<PersonTitle>Elementary Student Support Specialist</PersonTitle>
				<Contact>lopezcy@pvpusd.net</Contact>
			</Column>
			<Column lg={2}>
				<CircleImage src="/static/person-placeholder.jpg" />
			</Column>
			<Column lg={3}>
				<Person>Sarit Fassazadeh, LCSW</Person>
				<PersonTitle>Elementary Student Support Specialist</PersonTitle>
				<Contact>
					(818) 724-9431<br />fassazadehs@pvpusd.net
				</Contact>
			</Column>
		</Blurb>
	</Base>
