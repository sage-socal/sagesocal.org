import React from 'react'
import Base from '../components/Base'
import { Column } from 'hedron'
import { Section } from '../components/Containers'
import Donate from '../components/Donate'
import { LargeHeading, Paragraph } from '../components/Text'
import Head from 'next/head'

export default () =>
	<Base page="donate">
		<Head>
			<title>CASSY SoCal / Donate</title>
		</Head>
		<Section>
			<Column lg={5}>
				<LargeHeading>Thank you for supporting CASSY!</LargeHeading>
				<Paragraph>
					Please support CASSY SoCal today as we work in partnership with our
					schools, communities, and supporters like you to ensure all students
					have access to mental health support when they need it. You are our
					best partner in ensuring our children have access to the mental health
					support and services they need to cope and be successful in school and
					life!
				</Paragraph>
			</Column>
			<Column lg={7}>
				<Donate />
			</Column>
		</Section>
	</Base>
