import React from 'react'
import Base from '../components/Base'
import { Column } from 'hedron'
import { FitImage } from '../components/Media'
import { Section, PageSegment } from '../components/Containers'
import { SectionTitle, Paragraph, BodyHeadline } from '../components/Text'
import { blue, light } from '../utils/colors'
import { media } from '../utils/style-utils'
import styled from 'styled-components'
import PageTitle from '../components/PageTitle'

const SocialIcon = styled(FitImage)`
  width: 80px;
  height: 80px;
  margin-right: 60px;

  &:hover {
    opacity: 0.75;
  }
`

const Blurb = styled(Section)`
  justify-content: center;
`

const BigParagraph = styled(Paragraph)`
  ${media.md`
    font-size: 26px;
	`};
`

const Person = styled(BodyHeadline)`
  color: ${blue};
  font-size: 26px;
  text-align: center;
  ${media.md`
		text-align: left;
		font-size: ${(props) => (props.primary ? `32px` : `26px`)};
	`};
`

const PersonTitle = styled(BodyHeadline)`
  color: ${light};
  font-size: 18px;
  text-align: center;
  font-weight: 400;
  ${media.md`
		text-align: left;
		font-size: ${(props) => (props.primary ? `26px` : `18px`)};
	`};
`

const Contact = styled(Paragraph)`
  font-size: 16px;
  margin: 5px 0;
  text-align: center;
  ${media.md`
		text-align: left;
		font-size: ${(props) => (props.primary ? `20px` : `18px`)};
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

const ContactComponent = () => (
  <Base page="contact">
    <PageTitle name="Contact Us" />
    <PageSegment
      white
      style={{ marginTop: 20, paddingTop: 40, paddingBottom: 40 }}
    >
      <Blurb>
        <Column lg={8}>
          <SectionTitle>Contact us</SectionTitle>
          <BigParagraph>
            If you are school personnel or a parent and want to know more about
            Sage services, are interested in either employment or volunteer
            opportunities, or want more information about how to best support
            Sage's work, please call or email us.
          </BigParagraph>
        </Column>
      </Blurb>
      <Blurb>
        <Column md={4} lg={2}>
          <CircleImage src="/static/images/kathi-colli.jpg" />
        </Column>
        <Column md={6} lg={6}>
          <Person primary>Kathi Colli, LMFT</Person>
          <PersonTitle primary>Executive Director</PersonTitle>
          <Contact primary>
            kathicolli@sagesocal.org
            <br />
            (424) 262-0896
          </Contact>
        </Column>
      </Blurb>
      <Blurb>
        <Column md={4} lg={2}>
          <CircleImage src="/static/images/liz-schoeben.jpg" />
        </Column>
        <Column md={6} lg={6}>
          <Person primary>Liz Schoeben, LMFT</Person>
          <PersonTitle primary>Founder/Strategic Advisor</PersonTitle>
          <Contact primary>
            lizschoeben@sagesocal.org
          </Contact>
        </Column>
      </Blurb>
      <Blurb>
        <Column md={4} lg={2}>
          <CircleImage src="/static/images/erica-smith.jpg" />
        </Column>
        <Column md={6} lg={6}>
          <Person primary>Erica Smith, PhD, LMFT</Person>
          <PersonTitle primary>Clinical Supervisor</PersonTitle>
          <Contact primary>
            esmith@lcusd.net
          </Contact>
        </Column>
      </Blurb>
      <Blurb>
        <Column md={4} lg={2}>
          <CircleImage src="/static/images/sari.jpg" />
        </Column>
        <Column md={6} lg={6}>
          <Person primary>Sari Yoshioka, LCSW</Person>
          <PersonTitle primary>Clinical Supervisor</PersonTitle>
          <Contact primary>
            sari@sagesocal.org
          </Contact>
        </Column>
      </Blurb>
      <Blurb>
        <Column lg={8}>
          <SectionTitle>Follow us</SectionTitle>
          <BigParagraph>
            Follow us on your favorite social media platform to show your
            support for students’ social and emotional well being.
          </BigParagraph>
        </Column>
      </Blurb>
      <Blurb style={{ paddingTop: 0, marginTop: -20 }}>
        <Column lg={8}>
          <a href="https://www.instagram.com/sagesocal/" target="_blank">
            <SocialIcon src="/static/icons/instagram.png" />
          </a>
          <a href="https://www.twitter.com/sagesocal/" target="_blank">
            <SocialIcon src="/static/icons/twitter.png" />
          </a>
          <a href="https://www.facebook.com/sagesocal/" target="_blank">
            <SocialIcon src="/static/icons/facebook.png" />
          </a>
        </Column>
      </Blurb>
    </PageSegment>
  </Base>
)

export default ContactComponent
