import React from 'react'
import Base from '../components/Base'
import { Column } from 'hedron'
import { FitImage } from '../components/Media'
import { Section } from '../components/Containers'
import { LargeHeading, Paragraph, BodyHeadline } from '../components/Text'
import { blue, stone, light } from '../utils/colors'
import { media } from '../utils/style-utils'
import { tint } from 'polished'
import styled from 'styled-components'
import PageTitle from '../components/PageTitle'

const Blurb = styled(Section)`
  justify-content: center;
`

const Person = styled(BodyHeadline)`
  color: ${blue};
  font-size: 22px;
  text-align: center;
  ${media.md`
		text-align: left;
		font-size: ${props => (props.primary ? `28px` : `24px`)};
	`};
`

const PersonTitle = styled(BodyHeadline)`
  color: ${light};
  font-size: 18px;
  text-align: center;
  ${media.md`
		text-align: left;
		font-size: ${props => (props.primary ? `22px` : `18px`)};
	`};
`

const Contact = styled(Paragraph)`
  font-size: 16px;
  margin: 5px 0;
  text-align: center;
  ${media.md`
		text-align: left;
		font-size: ${props => (props.primary ? `20px` : `18px`)};
	`};
`

const CircleImage = styled(FitImage)`
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
    <PageTitle name="Contact Us" />
    <Blurb>
      <Column lg={8}>
        <Paragraph />
        <LargeHeading>Contact us.</LargeHeading>
        <Paragraph>
          If you are school personnel or a parent and want to know more about
          Sage services, are interested in either employment or volunteer
          opportunities, or want more information about how to best support
          Sage's work, please call or email us.
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
          (650) 799-5266
          <br />
          lizschoeben@sagesocal.org
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
          (424) 262-0896
          <br />
          collik@pvpusd.net
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
          (310) 377-4888 x211
          <br />
          ganib@pvpusd.net
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
          (310) 378-8471 x213
          <br />
          delarosan@pvpusd.net
        </Contact>
      </Column>
    </Blurb>
    <Blurb>
      <Column md={4} lg={2}>
        <CircleImage src="/static/images/kourtney.jpg" />
      </Column>
      <Column md={6} lg={3}>
        <Person>Kourtney Gonzalez, MFT</Person>
        <PersonTitle>Elementary Student Support Specialist</PersonTitle>
        <Contact>
          (424) 262-6289
          <br />
          gonzalezk@pvpusd.net
        </Contact>
      </Column>
      <Column md={4} lg={2}>
        <CircleImage src="/static/images/sarit.jpg" />
      </Column>
      <Column md={6} lg={3}>
        <Person>Sarit Fassazadeh, LCSW</Person>
        <PersonTitle>Elementary Student Support Specialist</PersonTitle>
        <Contact>
          (818) 724-9431
          <br />
          fassazadehs@pvpusd.net
        </Contact>
      </Column>
    </Blurb>
    <Blurb>
      <Column md={4} lg={2}>
        <CircleImage src="/static/person-placeholder.jpg" />
      </Column>
      <Column md={6} lg={3}>
        <Person>Kelli Washington, APCC</Person>
        <PersonTitle>Student Support Specialist at Peninsula High</PersonTitle>
      </Column>
      <Column md={4} lg={2}>
        <CircleImage src="/static/person-placeholder.jpg" />
      </Column>
      <Column md={6} lg={3}>
        <Person>Ally Sokoloff, MSW</Person>
        <PersonTitle>
          Student Support Specialist at Palos Verdes High School
        </PersonTitle>
      </Column>
    </Blurb>
    <Blurb>
      <Column md={4} lg={2}>
        <CircleImage src="/static/person-placeholder.jpg" />
      </Column>
      <Column md={6} lg={3}>
        <Person>Rachael Shanbrom, AMFT</Person>
        <PersonTitle>
          Intermediate School Student Support Specialist
        </PersonTitle>
      </Column>
      <Column md={4} lg={2}>
        <CircleImage src="/static/person-placeholder.jpg" />
      </Column>
      <Column md={6} lg={3}>
        <Person>Julia Savoni, MSW</Person>
        <PersonTitle>
          Intermediate School and Ranch del Mar High School Student Support
          Specialist
        </PersonTitle>
      </Column>
    </Blurb>
  </Base>
)
