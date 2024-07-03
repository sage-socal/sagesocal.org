import React from 'react'
import Base from '../components/Base'
import { Column } from 'hedron'
import { Section, SubSection, PageSegment } from '../components/Containers'
import {
  SectionTitle,
  LargeHeading,
  SubHeadline,
  BodyHeadline,
  Paragraph,
} from '../components/Text'
import { FitImage } from '../components/Media'
import { light, blue, white, stone } from '../utils/colors'
import styled from 'styled-components'
import { media } from '../utils/style-utils'
import PageTitle from '../components/PageTitle'

const TopSection = styled(PageSegment)`
  position: relative;
  margin: 20px auto;
  margin-bottom: -120px;
  ${media.md`
    margin-bottom: -260px;
  `}
`
const FlagSubSection = styled(SubSection)`
  background-color: ${stone};
  position: relative;
  top: -80px;
  ${media.md`
    top: -220px;
  `}
`
const MainImageSection = styled(Section)`
  max-height: 66vw;
  height: 680px;
  background-size: cover;
  background-position: center left;
  background-image: url('/static/images/teenagers.jpg');
`
const WhiteLargeHeading = styled(LargeHeading)`
  color: ${white};
`
const WhiteSectionTitle = styled(SectionTitle)`
  margin-bottom: 20px;
  color: ${white};
`
const WhiteParagraph = styled(Paragraph)`
  font-size: 24px;
  color: ${white};
`
const PrincipleHeadline = styled(BodyHeadline)`
  line-height: 1.2;
  font-size: 28px;
  color: ${blue};
`

const BlueSection = styled(Section)`
  background-color: ${blue};
  position: relative;
  padding: 100px 0;
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

const PrincipleSection = styled(Section)`
  justify-content: center;
  padding: 0 20px;
`
const Number = styled.h3`
  color: ${light};
  font-family: 'Rubik', sans-serif;
  font-weight: 400;
  margin: 0;
  text-align: center;
  font-size: 32px;
  position: relative;
  bottom: -20px;
  ${media.md`
		text-align: right;
		font-size: 48px;
		bottom: 0;
	`};
`

const Who = () => (
  <Base page="who">
    <PageTitle name="Who We Are" />
    <TopSection width="1280">
      <MainImageSection />
      <Column style={{ padding: 40 }} md={6} mdShift={6} lg={8} lgShift={4}>
        <FlagSubSection>
          <WhiteLargeHeading>Here to help youth.</WhiteLargeHeading>
          <WhiteParagraph>
            Our mission is to de-stigmatize mental health services and make
            supporting students’ social and emotional well-being the norm in our
            local schools.
          </WhiteParagraph>
        </FlagSubSection>
      </Column>
    </TopSection>
    <PageSegment white>
      <Section>
        <Column md={6}>
          <LargeHeading>Young People Need Our Support</LargeHeading>
          <Paragraph>
            In a given year, 20% of young people experience mental health issues
            such as depression, anxiety, eating disorders, academic stress, low
            self-esteem, and substance abuse. Unfortunately, the vast majority
            of these kids do not receive the treatment they need. Left
            untreated, many teens contemplate suicide, the third leading cause
            of death for young people today.
          </Paragraph>
          <Paragraph>
            The good news is that quality treatment can help. The challenge,
            however, is connecting these kids with the treatment they need.
            Families often find it difficult to find and pay for qualified
            professionals, let alone getting these kids to the therapist’s
            office. Studies show that students are far more likely to seek
            counseling when it is available at their school, especially if it is
            free.
          </Paragraph>
        </Column>
        <Column md={6}>
          <FitImage src="/static/images/kid-help.jpg" />
        </Column>
      </Section>
    </PageSegment>
    <PageSegment white>
      <Section>
        <Column md={6}>
          <FitImage src="/static/images/students-group.jpg" />
        </Column>
        <Column md={6}>
          <LargeHeading>
            Sage Offers Schools a Mental Health Safety Net
          </LargeHeading>
          <Paragraph>
            We partner with schools to provide professional mental health
            services to students in their academic setting. Our therapists are
            conveniently located right on campus. All services are free to the
            student and their parents. With Sage, there are no cost,
            transportation, or insurance barriers to prevent students from
            getting the help they need. Sage has proven that when you put highly
            qualified postgraduate therapists on the school campus, students
            will come in and get help. In fact, 20-25% of the entire student
            body will come in. Some once or twice. Some every week for years.
            Being school-based is absolutely the key.
          </Paragraph>
          <Paragraph>
            By removing the social and emotional obstacles that make it
            difficult to focus on academics, we give young people a chance to
            get the most out of the educational opportunities that are provided
            to them. When we improve students’ social and emotional wellbeing,
            academic achievement tends to follow.
          </Paragraph>
        </Column>
      </Section>
    </PageSegment>
    <PageSegment width="1280">
      <BlueSection>
        <Column md={8} mdShift={2}>
          <WhiteSectionTitle>Introducing Sage</WhiteSectionTitle>
          <WhiteParagraph>
            Sage’s story began in 2009 when Liz Schoeben founded CASSY, a non
            profit agency in the San Francisco Bay Area. CASSY currently
            partners with over 70 schools in the San Francisco Bay Area to
            provide comprehensive mental health services. In the fall of 2017,
            Liz Schoeben decided to replicate the CASSY model to serve
            communities in Southern California by creating Sage.
          </WhiteParagraph>
        </Column>
      </BlueSection>
    </PageSegment>
    <PageSegment white style={{ paddingTop: 40, paddingBottom: 40 }}>
      <Section style={{ justifyContent: 'center', paddingBottom: 0 }}>
        <Column md={8}>
          <SectionTitle style={{ textAlign: 'center' }}>
            Our Guiding Principles
          </SectionTitle>
          <SubHeadline style={{ textAlign: 'center' }}>
            Although every program is unique, we always stick to the following
            five core principles:
          </SubHeadline>
        </Column>
      </Section>
      <PrincipleSection>
        <Column md={2} lg={1}>
          <Number>#1</Number>
        </Column>
        <Column md={8}>
          <PrincipleHeadline>
            Be available to help all students, regardless of their ability to
            pay.
          </PrincipleHeadline>
          <Paragraph>
            We serve financially disenfranchised communities where free services
            at school are the only realistic way to reach kids. We also serve
            financially stable communities where many families have the
            resources, but other barriers such as stigma, transportation and
            insurance limits get in the way.
          </Paragraph>
        </Column>
      </PrincipleSection>
      <PrincipleSection>
        <Column md={2} lg={1}>
          <Number>#2</Number>
        </Column>
        <Column md={8}>
          <PrincipleHeadline>
            Partner with schools to make mental health a key part of the
            educational process.
          </PrincipleHeadline>
          <Paragraph>
            The only way to achieve our shared goals is to create a strong
            working relationship between our agency and the school. To do so, we
            set up shop right on campus and integrate the Sage team with the
            school’s staff. Together, we create a mental health resource team
            that is as much a part of the school as the guidance department and
            special education.
          </Paragraph>
        </Column>
      </PrincipleSection>
      <PrincipleSection>
        <Column md={2} lg={1}>
          <Number>#3</Number>
        </Column>
        <Column md={8}>
          <PrincipleHeadline>
            Tailor our programs to meet the unique needs of the population we
            will serve.
          </PrincipleHeadline>
          <Paragraph>
            We factor in the unique characteristics of a given school when
            creating any new program. For example, our staffing for a
            2,000-student high school with a single site will be quite different
            from that for a district with a dozen elementary school sites. We
            have also found that bilingual therapists are essential for some
            schools.
          </Paragraph>
        </Column>
      </PrincipleSection>
      <PrincipleSection>
        <Column md={2} lg={1}>
          <Number>#4</Number>
        </Column>
        <Column md={8}>
          <PrincipleHeadline>
            Hire, train and mentor professional therapists who love working with
            youth.
          </PrincipleHeadline>
          <Paragraph>
            We use experienced therapists to tackle our clients’ issues rather
            than using our clients’ issues to train inexperienced therapists. We
            believe the right approach is to pay for high quality therapists,
            mentor them in their professional growth and give them a long-term
            career path at Sage.
          </Paragraph>
        </Column>
      </PrincipleSection>
      <PrincipleSection>
        <Column md={2} lg={1}>
          <Number>#5</Number>
        </Column>
        <Column md={8}>
          <PrincipleHeadline>Commit to making a difference.</PrincipleHeadline>
          <Paragraph>
            We take great pride in improving the lives of the students we
            support. We will always see each case through whether we handle it
            internally, refer it out, or both. When there is a mental health
            crisis on campus, we will be there leading the way. We expect our
            partner schools to put us in charge and rely on our expertise.
          </Paragraph>
        </Column>
      </PrincipleSection>
    </PageSegment>
  </Base>
)

export default Who
