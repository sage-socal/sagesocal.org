import React from 'react'
import Base from '../components/Base'
import { Column } from 'hedron'
import { Section } from '../components/Containers'
import Donate from '../components/Donate'
import { LargeHeading, Paragraph } from '../components/Text'

export default () =>
	<Base page="donate">
		<Section>
			<Column lg={5}>
				<LargeHeading>Donate to CASSY.</LargeHeading>
				<Paragraph>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut
					aliquam justo. In condimentum elit pulvinar rhoncus cursus. Etiam ut
					ullamcorper dolor, sit amet iaculis augue. Nunc velit arcu, placerat
					nec ligula at, aliquam fermentum neque. Aenean in malesuada massa,
					quis ultricies nulla. Donec suscipit diam sodales, vulputate nunc eu,
					malesuada lectus. Donec bibendum gravida justo eget rutrum.
				</Paragraph>
			</Column>
			<Column lg={7}>
				<Donate />
			</Column>
		</Section>
	</Base>
