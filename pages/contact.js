// @flow
import React from 'react'
import Base from '../components/Base'
import { Row, Column } from 'hedron'
import { FitImage } from '../components/Media'
import { Section } from '../components/Containers'
import { LargeHeading, Paragraph, BodyHeadline } from '../components/Text'
import { blue, stone } from '../utils/colors'
import { media } from '../utils/style-utils'
import { tint } from 'polished'
import Head from 'next/head'

const Blurb = Section.extend`
	justify-content: center;
`

const Person = BodyHeadline.extend`
	color: ${blue};
	font-size: 22px;
	text-align: center;
	${media.md`
		text-align: left;
		font-size: ${props => (props.primary ? `28px` : `24px`)};
	`};
`

const PersonTitle = BodyHeadline.extend`
	color: ${tint(0.5, stone)};
	font-size: 18px;
	text-align: center;
	${media.md`
		text-align: left;
		font-size: ${props => (props.primary ? `22px` : `18px`)};
	`};
`

const Contact = Paragraph.extend`
	font-size: 16px;
	margin: 5px 0;
	text-align: center;
	${media.md`
		text-align: left;
		font-size: ${props => (props.primary ? `20px` : `18px`)};
	`};
`

const CircleImage = FitImage.extend`
	width: 100px;
	height: 100px;
	border-radius: 50px;
	margin: auto;
	display: block;
	${media.md`
		width: 150px;
		height: 150px;
		border-radius: 75px;
		float: right;
		margin: none;
	`};
`

export default () => (
	<Base page="contact">
		<Head>
			<title>CASSY SoCal / Contact</title>
		</Head>
		<Blurb>
			<Column lg={8}>
				<Paragraph />
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
			<Column md={4} lg={2}>
				<CircleImage src="/static/images/liz-schoeben.jpg" />
			</Column>
			<Column md={6} lg={4}>
				<Person primary>Liz Schoeben, MFT</Person>
				<PersonTitle primary>Executive Director</PersonTitle>
				<Contact primary>
					(650) 799-5266<br />lizschoeben@cassysocal.org
				</Contact>
			</Column>
		</Blurb>
		<Blurb>
			<Column md={4} lg={2}>
				<CircleImage src="/static/images/kathi-colli.jpg" />
			</Column>
			<Column md={6} lg={4}>
				<Person primary>Kathi Colli, MFT</Person>
				<PersonTitle primary>Clinical Supervisor</PersonTitle>
				<Contact primary>
					(424) 262-0896<br />collik@pvpusd.net
				</Contact>
			</Column>
		</Blurb>
		<Blurb>
			<Column md={4} lg={2}>
				<CircleImage src="/static/images/barbara-gani.jpg" />
			</Column>
			<Column md={6} lg={3}>
				<Person>Barbara Gani, LCSW</Person>
				<PersonTitle>Student Support Specialist at Peninsula High</PersonTitle>
				<Contact>
					(310) 377-4888 x211<br />ganib@pvpusd.net
				</Contact>
			</Column>
			<Column md={4} lg={2}>
				<CircleImage src="/static/images/nanci-de-la-rosa.jpg" />
			</Column>
			<Column md={6} lg={3}>
				<Person>Nancy De La Rosa, MFTi</Person>
				<PersonTitle>
					Student Support Specialist at Palos Verdes High School
				</PersonTitle>
				<Contact>
					(310) 378-8471 x213<br />delarosan@pvpusd.net
				</Contact>
			</Column>
		</Blurb>
		<Blurb>
			<Column md={4} lg={2}>
				<CircleImage src="/static/images/cynthia-lopez.jpg" />
			</Column>
			<Column md={6} lg={3}>
				<Person>Cynthia Lopez Herrera, MSW</Person>
				<PersonTitle>Elementary Student Support Specialist</PersonTitle>
				<Contact>
					(424) 328-1445<br />lopezcy@pvpusd.net
				</Contact>
			</Column>
			<Column md={4} lg={2}>
				<CircleImage src="/static/images/sarit.jpg" />
			</Column>
			<Column md={6} lg={3}>
				<Person>Sarit Fassazadeh, LCSW</Person>
				<PersonTitle>Elementary Student Support Specialist</PersonTitle>
				<Contact>
					(818) 724-9431<br />fassazadehs@pvpusd.net
				</Contact>
			</Column>
		</Blurb>
	</Base>
)
