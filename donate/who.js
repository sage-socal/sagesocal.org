import React from 'react'
import Base from '../components/Base'
import { Row, Column } from 'hedron'
import { Section, SubSection } from '../components/Containers'
import {
	SectionTitle,
	LargeHeading,
	SubHeadline,
	BodyHeadline,
	Paragraph
} from '../components/Text'
import { FitImage } from '../components/Media'
import { orange, green, blue, white, beige } from '../utils/colors'
import styled from 'styled-components'
import { tint } from 'polished'

const MainImageSection = Section.extend`
	background-size: cover;
	background-image: url('/static/images/teenagers.jpg');
`
const WhiteLargeHeading = LargeHeading.extend`color: ${white};`
const WhiteSectionTitle = SectionTitle.extend`
	margin-bottom: 20px;
	color: ${white};
`
const WhiteParagraph = Paragraph.extend`color: ${white};`
const BlueSection = Section.extend`
	background-color: ${blue};
	position: relative;
	&:after {
		content: '';
		mix-blend-mode: luminosity;
		background-size: cover;
		background-position: center;
		background-image: url('/static/images/hands-up.jpg');
		filter: blur(10px);
		opacity: 0.15;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		position: absolute;
		z-index: 1;
	}
	> * {
		z-index: 5;
	}
`
const FlagSubSection = SubSection.extend`
	background-color: rgba(63, 65, 51, 0.8);
`
const PrincipleSection = Section.extend`
	justify-content: center;
	padding: 0 20px;
`
const OrangeBox = styled.div`
	height: 120px;
	background: ${tint(0.25, orange)};
	border-radius: 20px;
	border: 3px ${orange} solid;
`

export default () =>
	<Base page="who">
		<MainImageSection>
			<Column lg={5} lgShift={7}>
				<FlagSubSection>
					<WhiteLargeHeading>Here to help youth.</WhiteLargeHeading>
					<WhiteParagraph>
						Our mission is to de-stigmatize mental health services and make
						supporting students’ social and emotional well-being the norm in our
						local schools. We want to provide all students with the continuity
						of support they need, from the first day of kindergarten until they
						graduate from high school, to be successful in school and in life.
					</WhiteParagraph>
				</FlagSubSection>
			</Column>
		</MainImageSection>
		<Section>
			<Column lg={6}>
				<LargeHeading>Young People Need Our Support</LargeHeading>
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
			<Column lg={6}>
				<FitImage src="/static/images/kid-help.jpg" />
			</Column>
		</Section>
		<Section>
			<Column lg={6}>
				<FitImage src="/static/images/students-group.jpg" />
			</Column>
			<Column lg={6}>
				<LargeHeading>
					CASSY Offers Schools a Mental Health Safety Net
				</LargeHeading>
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
		</Section>
		<BlueSection>
			<Column lg={8} lgShift={2}>
				<WhiteSectionTitle>Introducing CASSY SoCal</WhiteSectionTitle>
				<WhiteParagraph>
					CASSY (Counseling and Support Services for Youth) was founded in the
					San Francisco Bay Area in 2009.{' '}
					<a href="http://cassybayarea.org">The agency</a> continues to do
					incredible work, providing a year-round mental health safety net for
					over 33,000 students at 43 schools in San Mateo and Santa Clara
					County.
				</WhiteParagraph>
				<WhiteParagraph>
					In the Fall of 2017, Liz Schoeben, CASSY Co-Founder, decided to take
					the CASSY concept to Southern California. We have created CASSY
					Southern California, A Project of The Giving Back Fund.
				</WhiteParagraph>
				<WhiteParagraph>
					Building on CASSY’s mission and core principles, CASSY SoCal offers
					the highest commitment to supporting the social and emotional needs of
					the youth in the communities in Southern California.
				</WhiteParagraph>
				<WhiteParagraph>
					Our initial partnership is with The Palos Verdes Peninsula Unified
					School District, providing support at their 10 elementary sites and
					two comprehensive high schools in the district.
				</WhiteParagraph>
			</Column>
		</BlueSection>
		<Section style={{ paddingBottom: 0 }}>
			<Column>
				<SectionTitle style={{ textAlign: 'center' }}>
					Our Guiding Principles
				</SectionTitle>
				<SubHeadline style={{ textAlign: 'center' }}>
					Although every program is unique,<br /> we always stick to the
					following five core principles:
				</SubHeadline>
			</Column>
		</Section>
		<PrincipleSection>
			<Column lg={2}>
				<OrangeBox />
			</Column>
			<Column lg={8}>
				<BodyHeadline>
					Be available to help all students, regardless of their ability to pay.
				</BodyHeadline>
				<Paragraph>
					We serve financially disenfranchised communities where free services
					at school are the only realistic way to reach kids. We also serve
					financially stable communities where many families have the resources,
					but other barriers such as stigma, transportation and insurance limits
					get in the way.
				</Paragraph>
			</Column>
		</PrincipleSection>
		<PrincipleSection>
			<Column lg={2}>
				<OrangeBox />
			</Column>
			<Column lg={8}>
				<BodyHeadline>
					Partner with schools to make mental health a key part of the
					educational process.
				</BodyHeadline>
				<Paragraph>
					The only way to achieve our shared goals is to create a strong working
					relationship between our agency and the school. To do so, we set up
					shop right on campus and integrate the CASSY team with the school’s
					staff. Together, we create a mental health resource team that is as
					much a part of the school as the guidance department and special
					education.
				</Paragraph>
			</Column>
		</PrincipleSection>
		<PrincipleSection>
			<Column lg={2}>
				<OrangeBox />
			</Column>
			<Column lg={8}>
				<BodyHeadline>
					Tailor our programs to meet the unique needs of the population we will
					serve.
				</BodyHeadline>
				<Paragraph>
					We factor in the unique characteristics of a given school when
					creating any new program. For example, our staffing for a
					2,000-student high school with a single site will be quite different
					from that for a district with a dozen elementary school sites. We have
					also found that bilingual therapists are essential for some schools.
				</Paragraph>
			</Column>
		</PrincipleSection>
		<PrincipleSection>
			<Column lg={2}>
				<OrangeBox />
			</Column>
			<Column lg={8}>
				<BodyHeadline>
					Hire, train and mentor professional therapists who love working with
					youth.
				</BodyHeadline>
				<Paragraph>
					We use experienced therapists to tackle our clients’ issues rather
					than using our clients’ issues to train inexperienced therapists. We
					believe the right approach is to pay for high quality therapists,
					mentor them in their professional growth and give them a long-term
					career path at CASSY.
				</Paragraph>
			</Column>
		</PrincipleSection>
		<PrincipleSection>
			<Column lg={2}>
				<OrangeBox />
			</Column>
			<Column lg={8}>
				<BodyHeadline>Commit to making a difference.</BodyHeadline>
				<Paragraph>
					We take great pride in improving the lives of the students we support.
					We will always see each case through whether we handle it internally,
					refer it out, or both. When there is a mental health crisis on campus,
					we will be there leading the way. We expect our partner schools to put
					us in charge and rely on our expertise.
				</Paragraph>
			</Column>
		</PrincipleSection>
	</Base>
