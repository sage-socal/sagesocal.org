import React from 'react'
import styled from 'styled-components'
import { orange } from '../utils/colors'
import Base from '../components/Base'
import { Row, Column } from 'hedron'

const Title = styled.h1`
	color: ${orange};
	font-size: 42px;
	font-family: 'Marydale', serif;
	margin: 0;
`

const Paragraph = styled.p`
	font-size: 18px;
	font-family: 'Avenir', Helvetica, sans-serif;
	line-height: 1.4;
`

export default () =>
	<Base>
		<Row>
			<Column lg={4} lgShift={8}>
				<Title>Here to help youth.</Title>
				<Paragraph>
					Our mission is to de-stigmatize mental health services and make
					supporting students’ social and emotional well-being the norm in our
					local schools. We want to provide all students with the continuity of
					support they need, from the first day of kindergarten until they
					graduate from high school, to be successful in school and in life.
				</Paragraph>
			</Column>
		</Row>
		<Row>
			<Column lg={6}>
				<Title>Young People Need Our Support</Title>
				<Paragraph>
					In a given year, 20% of young people experience mental health issues
					such as depression, anxiety, eating disorders, academic stress, low
					self-esteem, and substance abuse. Unfortunately, the vast majority of
					these kids do not receive the treatment they need. Left untreated,
					many teens contemplate suicide, the third leading cause of death for
					young people today.
				</Paragraph>
				<Paragraph>
					The good news is that quality treatment can help. The challenge,
					however, is connecting these kids with the treatment they need.
					Families often find it difficult to find and pay for qualified
					professionals, let alone getting these kids to the therapist’s office.
					Studies show that students are far more likely to seek counseling when
					it is available at their school, especially if it is free.
				</Paragraph>
			</Column>
		</Row>
	</Base>
