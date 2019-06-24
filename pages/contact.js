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
  font-weight: 400;
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
        <LargeHeading style={{ fontSize: 62 }}>Contact us.</LargeHeading>
        <Paragraph style={{ fontSize: 26 }}>
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
      <Column md={6} lg={6}>
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
      <Column md={6} lg={6}>
        <Person primary>Kathi Colli, MFT</Person>
        <PersonTitle primary>Clinical Director</PersonTitle>
        <Contact primary>
          (424) 262-0896
          <br />
          collik@pvpusd.net
        </Contact>
      </Column>
    </Blurb>
  </Base>
)
