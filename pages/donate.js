import React from 'react'
import Base from '../components/Base'
import { Column } from 'hedron'
import { Section } from '../components/Containers'
import Donate from '../components/Donate'
import { LargeHeading, BodyHeadline, Paragraph } from '../components/Text'
import Head from 'next/head'
import { green, blue, orange } from '../utils/colors'
import styled from 'styled-components'

const Blurb = Section.extend`
  justify-content: center;
`

const DonateHeading = BodyHeadline.extend`
  color: ${blue};
  margin-top: 20px;
`

const Donation = styled.div`
  display: flex;
`

const DonationAmount = Paragraph.extend`
  flex: 0 0 auto;
  width: 70px;
  font-size: 22px;
  margin-right: 20px;
  color: ${green};
  text-align: right;
`

const DonationDescription = Paragraph.extend``

const NewsItem = styled.a`
  text-decoration: none;
  img {
    width: 100%;
    display: block;
    margin: 20px 0;
  }
`

export default () => (
  <Base page="donate">
    <Head>
      <title>CASSY SoCal / Donate</title>
    </Head>
    <Section>
      <Column lg={8}>
        <LargeHeading>Thank You For Supporting CASSY!</LargeHeading>
        <DonateHeading style={{ marginBottom: 20 }}>Donate Now</DonateHeading>
        <Donate />
        <DonateHeading>Our Need</DonateHeading>
        <Paragraph>
          We are bringing the proven CASSY on-campus mental health model to
          communities in Southern California by creating CASSY SoCal, A Project
          of The Giving Back Fund. Our first program is a partnership with the
          Palos Verdes Peninsula School District to support their 10 elementary
          and two high schools.
        </Paragraph>
        <Paragraph>
          To get this exciting program off the ground, we need your help. While
          school district fees cover over 80% of our program costs, we need to
          raise an additional $25,000 to get the agency up and running. It’s a
          great opportunity to help provide seed funding for a program that we
          hope will become part of the fabric of our local community.
        </Paragraph>
        <DonateHeading>The Impact of Your Gift</DonateHeading>
        <Donation>
          <DonationAmount>$250</DonationAmount>
          <DonationDescription>
            Funds a series of classroom lessons on friendship skills
          </DonationDescription>
        </Donation>
        <Donation>
          <DonationAmount>$500</DonationAmount>
          <DonationDescription>
            Provides a group of students an eight week social skills group
          </DonationDescription>
        </Donation>
        <Donation>
          <DonationAmount>$1200</DonationAmount>
          <DonationDescription>
            Gives parent outreach, consultation, and support for a semester
          </DonationDescription>
        </Donation>
        <Donation>
          <DonationAmount>$2100</DonationAmount>
          <DonationDescription>
            Provides weekly counseling for one student for the entire academic
            year
          </DonationDescription>
        </Donation>
      </Column>
      <Column lg={4}>
        <DonateHeading>In The News</DonateHeading>
        <NewsItem
          href="https://www.easyreadernews.com/student-safety-valve/"
          target="_blank"
        >
          <img
            src="/static/images/student-safety-valve.jpg"
            alt="Linsey Gotanda Ed.D, Emiko Chapman M.Ed., Liz Schoeben MFT, Nancy De La Rosa MFT. Photos by Brad Jacobson (CivicCouch.com)"
          />
          <DonateHeading
            style={{ fontSize: 26, color: orange, marginBottom: 0 }}
          >
            Student safety valve
          </DonateHeading>
          <Paragraph style={{ marginTop: 8 }}>
            Liz Schoeben’s therapists help school students deal with increasing
            pressures
          </Paragraph>
          <Paragraph
            style={{ fontSize: 16, textDecoration: 'underline', color: green }}
          >
            www.easyreadernews.com/student-safety-valve
          </Paragraph>
        </NewsItem>
      </Column>
    </Section>
  </Base>
)
