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
import { orange, green, blue, white, stone } from '../utils/colors'
import styled from 'styled-components'
import Head from 'next/head'
import { media } from '../utils/style-utils'

const MainImageSection = Section.extend`
	background-size: cover;
	background-image: url('/static/images/friends-dog.jpg');
	height: 200px;
	${media.md`
		height: 360px;
	`};
`
const FlagSubSection = SubSection.extend`
	background-color: rgba(63, 65, 51, 0.8);
`
const WhiteLargeHeading = LargeHeading.extend`color: ${white};`
const WhiteSectionTitle = SectionTitle.extend`color: ${white};`
const WhiteParagraph = Paragraph.extend`color: ${white};`
const CenterSection = Section.extend`justify-content: center;`
const ServiceTitle = BodyHeadline.extend`color: ${blue};`
const Service = styled.div`margin: 20px 0;`
const GradientSection = Section.extend`
	background: linear-gradient(${green} 0%, ${white} 100%);
	position: relative;
	justify-content: center;
	padding-bottom: 100px;
	margin-bottom: -100px;
	z-index: 1;
`

export default () =>
	<Base page="what">
		<Head>
			<title>CASSY SoCal / What We Do</title>
		</Head>
		<MainImageSection />
		<CenterSection>
			<Column lg={10}>
				<SubHeadline>
					CASSY provides comprehensive mental health services to all of our
					partner schools. This includes counseling and proactive mental health
					education for students (including Special Education students),
					consultation and training for staff, and outreach to parents and the
					broader community. We specifically provide the following services at
					no cost to students, staff and parents:
				</SubHeadline>
			</Column>
		</CenterSection>
		<CenterSection>
			<Column style={{ paddingBottom: 0 }} lg={10}>
				<LargeHeading>For students…</LargeHeading>
			</Column>
			<Column style={{ paddingTop: 0 }} lg={5}>
				<Service>
					<ServiceTitle>Crisis Intervention and Treatment</ServiceTitle>
					<Paragraph>
						Sometimes a traumatic event, such as the death of a student, affects
						the entire student body. For such a school-wide crisis, CASSY
						identifies those in need, provides ongoing grief counseling and
						supports school staff.
					</Paragraph>
				</Service>
				<Service>
					<ServiceTitle>Peer Mediation</ServiceTitle>
					<Paragraph>
						Using a 15-week conflict resolution program, CASSY trains student
						leaders to become peer mediators to assist in student conflicts on
						campus.
					</Paragraph>
				</Service>
			</Column>
			<Column style={{ paddingTop: 0 }} lg={5}>
				<Service>
					<ServiceTitle>Ongoing Counceling</ServiceTitle>
					<Paragraph>
						CASSY provides individual, family and group counseling sessions
						on-campus during school hours. Group topics include Grief and Loss,
						Anger Management, Victims of Violence, and Social Skills Training.
					</Paragraph>
				</Service>
				<Service>
					<ServiceTitle>Proactive Mental Health Education</ServiceTitle>
					<Paragraph>
						We provide high school classroom presentations on depression
						awareness and suicide prevention using a nationally recognized
						curriculum from SAVE (Suicide Awareness Voices of Education) and run
						K-8 anti-bullying workshops to confront bullying issues directly in
						the classrooms.
					</Paragraph>
				</Service>
			</Column>
		</CenterSection>
		<CenterSection>
			<Column lg={5}>
				<LargeHeading>For staff…</LargeHeading>
				<Service>
					<ServiceTitle>Staff Consultation</ServiceTitle>
					<Paragraph>
						CASSY becomes an integral part of each school’s team. School staff
						can freely consult with the on-campus therapists regarding
						disconcerting situations that they see in their classrooms, in the
						halls or anywhere.
					</Paragraph>
				</Service>
				<Service>
					<ServiceTitle>Staff Training</ServiceTitle>
					<Paragraph>
						We provide staff training on mental health issues such as Child
						Protective Services (CPS) reporting requirements, classroom
						management of grief and loss, and how to identify red flags.
					</Paragraph>
				</Service>
			</Column>
			<Column lg={5}>
				<LargeHeading>For parents…</LargeHeading>
				<Service>
					<ServiceTitle>Parent Consultation</ServiceTitle>
					<Paragraph>
						CASSY therapists are experts in dealing with child/adolescent
						behaviors and issues. We offer parents confidential consultations at
						the schools we serve, help them distinguish between normal and risky
						behaviors, and secure additional support when needed.
					</Paragraph>
				</Service>
				<Service>
					<ServiceTitle>Community Outreach</ServiceTitle>
					<Paragraph>
						CASSY provides parent education opportunities by giving
						presentations and leading discussions about raising emotionally
						healthy adolescents. These presentations include our proven Latino
						Outreach program where the sessions are conducted in Spanish and
						address specific cultural needs of Latino Community.
					</Paragraph>
				</Service>
			</Column>
		</CenterSection>
		<GradientSection>
			<Column lg={8}>
				<SectionTitle
					style={{ color: white, marginBottom: 20, textAlign: 'center' }}
				>
					Measuring Success
				</SectionTitle>
				<Paragraph style={{ textAlign: 'center', fontSize: 22, color: white }}>
					CASSY collaborates with school partners to measure the success of our
					services. We use a mix of the following quantitative and qualitative
					tools and metrics to measure the efficacy of our programs:
				</Paragraph>
			</Column>
		</GradientSection>
		<Section style={{ zIndex: 5, marginTop: 0 }}>
			<Column>
				<LargeHeading
					style={{ marginBottom: -25, textAlign: 'center', color: blue }}
				>
					Quantitative
				</LargeHeading>
			</Column>
			<Column lg={6}>
				<Service>
					<BodyHeadline>Childrens Gloabal Assesment Scale</BodyHeadline>
					<Paragraph>
						The Children’s Global Assessment Scale (CGAS) is a tool used to
						assess the global level of functioning and severity of mental
						illness in children and adolescents. The CGAS uses various scales
						that assess a child’s psychological, social and occupational
						functioning. The scoring on the scales ranges from positive mental
						health to severe psychopathology. Using a number system from 1 to
						100, the CGAS assesses daily functioning and behaviors such as
						personal hygiene habits, sleep patterns and risk for suicide. CASSY
						therapists assess students at the beginning and end of treatment,
						with the results compiled at the end. Our goal is to help students
						maintain or increase positive functioning in their daily life.
					</Paragraph>
				</Service>
			</Column>
			<Column lg={6}>
				<Service>
					<BodyHeadline>
						Attendance/Truancy Rates and Number of Resolved Behavioral Concerns
					</BodyHeadline>
					<Paragraph>
						Studies show a link between students with mental health concerns,
						attendance rates, and ongoing disciplinary concerns. We anticipate
						that students who work directly with CASSY therapists will show an
						increase in their attendance rate and/or show a reduction in
						disciplinary referrals, if these concerns are present.
					</Paragraph>
				</Service>
			</Column>
			<Column>
				<LargeHeading
					style={{ marginBottom: -25, textAlign: 'center', color: blue }}
				>
					Qualitative
				</LargeHeading>
			</Column>
			<Column lg={4}>
				<Service>
					<BodyHeadline>Self report by students</BodyHeadline>
					<Paragraph>
						We simply ask students if they thought counseling was helpful and
						whether they would seek counseling again in the future.
					</Paragraph>
				</Service>
			</Column>
			<Column lg={4}>
				<Service>
					<BodyHeadline>Parent feedback</BodyHeadline>
					<Paragraph>
						We request a parent feedback form, which gives the parent an
						opportunity to evaluate the impact of our services on their child.
					</Paragraph>
				</Service>
			</Column>
			<Column lg={4}>
				<Service>
					<BodyHeadline>Staff feedback</BodyHeadline>
					<Paragraph>
						We invite staff to complete a feedback form for students they refer
						to CASSY.
					</Paragraph>
				</Service>
			</Column>
		</Section>
	</Base>
