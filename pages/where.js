import React from 'react'
import Base from '../components/Base'
import { Column } from 'hedron'
import { FitImage } from '../components/Media'
import { BodyHeadline, LargeHeading, Paragraph } from '../components/Text'
import { Section, PageSegment } from '../components/Containers'
import styled from 'styled-components'
import { blue } from '../utils/colors'
import Map from '../components/Map'
import PageTitle from '../components/PageTitle'

const CenterSection = styled(Section)`
  justify-content: center;
`

const Where = () => <Base page="where">
  <PageTitle name="Where We Do It" />
  <PageSegment width="1280" style={{ margin: 'auto', marginTop: 20 }}>
    <Map />
  </PageSegment>
  <PageSegment
    white
    style={{ marginTop: 0, paddingTop: 40, paddingBottom: 40 }}
  >
    <CenterSection>
      <Column>
        <LargeHeading style={{ textAlign: 'center' }}>
          La Cañada Unified School District
        </LargeHeading>
      </Column>
      <Column md={6} lg={4} style={{ textAlign: 'center' }}>
        <FitImage style={{ maxWidth: 300 }} src="/static/images/lcusd.jpg" />
      </Column>
      <Column md={6} lg={8}>
        <Paragraph>
          <b>La Cañada Unified School District</b> is a high achieving K-12
          district characterized as forward-looking, involved and supportive.
          Current student enrollment is approximately 4,000 and students at
          all levels consistently score among the top 10% of all California
          students.
        </Paragraph>
        <Paragraph>
          LCUSD encompasses the attractive residential community of La Cañada
          Flintridge, thirteen miles north of the Los Angeles Civic Center in
          a picturesque section of the foothills below Angeles National
          Forest. La Cañada Flintridge's 21,600 residents are attracted to
          this community because of its excellent schools, prime location and
          ideal climate. Parent participation and involvement in the schools
          is extensive and the commitment to excellence is strong and
          continuing.
        </Paragraph>
      </Column>
    </CenterSection>
    <CenterSection>
      <Column>
        <LargeHeading style={{ textAlign: 'center' }}>
          Palos Verdes Peninsula Unified School District
        </LargeHeading>
      </Column>
      <Column md={6} lg={4}>
        <FitImage src="/static/images/pvpusd.jpg" />
      </Column>
      <Column md={6} lg={8}>
        <Paragraph>
          <b>Palos Verdes Peninsula Unified School District</b> serves the
          four Peninsula cities  and the unincorporated areas of the Palos
          Verdes Peninsula.  Student enrollment is approximately 11,400
          students. The school district's reputation for having a high quality
          education system attracts many families to this suburban area and
          its schools. Students attend two early childhood centers, ten
          elementary schools, three 6-8 intermediate schools, two
          comprehensive high schools and one continuation school.
        </Paragraph>
        <Paragraph>
          PVPUSD schools continue to be recognized for outstanding achievement
          at the local, state and national level. Community and parent
          volunteers make significant contributions to the public schools. The
          Peninsula Education Foundation has been successful in raising local
          funds to meet and supplement classroom needs. Strong PTA programs
          support and enrich school delivery systems.
        </Paragraph>
      </Column>
    </CenterSection>
    <CenterSection>
      <Column>
        <LargeHeading style={{ textAlign: 'center' }}>
          Torrance Unified School District
        </LargeHeading>
      </Column>
      <Column md={6} lg={4} style={{ textAlign: 'center' }}>
        <FitImage style={{ maxWidth: 300 }} src="/static/images/tusd.png" />
      </Column>
      <Column md={6} lg={8}>
        <Paragraph>
          <b>Torrance Unified School District</b> was established in 1947 and
          unified in 1948. Torrance Unified School District is nestled in the
          heart of the South Bay, in the south-western part of Los Angeles
          County. TUSD is bordered by the Palos Verdes Peninsula on the south,
          the beach cities - Redondo, Hermosa, and Manhattan Beach - to the
          west, and cities of Lawndale and Hawthorne to the north. The
          District serves the entire City of Torrance and is governed by five
          school board members. students.
        </Paragraph>
        <Paragraph>
          TUSD strives to ensure that each and every student is educated and
          prepared to succeed in life. We are dedicated to maximizing
          individual potential and developing lifelong learners who will be
          contributing members in a global society.
        </Paragraph>
      </Column>
    </CenterSection>
  </PageSegment>
</Base>;

export default Where;
