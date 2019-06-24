import React from 'react'
import Base from '../components/Base'
import { Column } from 'hedron'
import { BodyHeadline, LargeHeading, Paragraph } from '../components/Text'
import { Section } from '../components/Containers'
import styled from 'styled-components'
import { blue } from '../utils/colors'
import Map from '../components/Map'
import PageTitle from '../components/PageTitle'

const School = styled.div``
const CenterSection = styled(Sectsion)`
  justify-content: center;
`
const SchoolName = styled(BodyHeadline)`
  color: ${blue};
`
const Address = styled(Paragraph)`
  margin: 5px 0;
  font-size: 18px;
`

export default () => (
  <Base page="where">
    <PageTitle name="Where We Do It" />
    <Map />
    <CenterSection>
      <Column>
        <LargeHeading style={{ textAlign: 'center' }}>
          High Schools
        </LargeHeading>
      </Column>
      <Column md={6} lg={4}>
        <School>
          <SchoolName>Rancho del Mar High School</SchoolName>
          <Address>
            38 Crest Road West
            <br />
            Rolling Hills, CA 90274
          </Address>
        </School>
      </Column>
      <Column md={6} lg={4}>
        <School>
          <SchoolName>Palos Verdes High School</SchoolName>
          <Address>
            600 Cloyden Rd
            <br />
            Palos Verdes Estates, CA 90274
          </Address>
        </School>
      </Column>
      <Column md={6} lg={4}>
        <School>
          <SchoolName>
            Palos Verdes Peninsula
            <br />
            High School
          </SchoolName>
          <Address>
            27118 Silver Spur Rd
            <br />
            Rolling Hls Estates, CA 90274
          </Address>
        </School>
      </Column>
    </CenterSection>
    <CenterSection>
      <Column>
        <LargeHeading style={{ textAlign: 'center' }}>
          Intermediate Schools
        </LargeHeading>
      </Column>
      <Column md={6} lg={4}>
        <School>
          <SchoolName>Miraleste Intermediate School</SchoolName>
          <Address>
            29323 Palos Verdes Drive East
            <br />
            Rancho Palos Verdes, CA 90275
          </Address>
        </School>
      </Column>
      <Column md={6} lg={4}>
        <School>
          <SchoolName>Palos Verdes Intermediate School</SchoolName>
          <Address>
            2161 Via Olivera
            <br />
            Palos Verdes Estates, CA 90274
          </Address>
        </School>
      </Column>
      <Column md={6} lg={4}>
        <School>
          <SchoolName>Ridgecrest Intermediate School</SchoolName>
          <Address>
            28915 Northbay Road
            <br />
            Rancho Palos Verdes, CA 90275
          </Address>
        </School>
      </Column>
    </CenterSection>
    <CenterSection>
      <Column>
        <LargeHeading style={{ textAlign: 'center' }}>
          Elementary Schools
        </LargeHeading>
      </Column>
      <Column md={6} lg={4}>
        <School>
          <SchoolName>Cornerstone Elementary</SchoolName>
          <Address>
            6069 Groveoak Pl
            <br />
            Rancho Palos Verdes, CA 90275
          </Address>
        </School>
      </Column>
      <Column md={6} lg={4}>
        <School>
          <SchoolName>Dapplegray Elementary</SchoolName>
          <Address>
            3011 Palos Verdes Dr N<br />
            Rolling Hills Estates, CA 90274
          </Address>
        </School>
      </Column>
      <Column md={6} lg={4}>
        <School>
          <SchoolName>Mira Catalina Elementary</SchoolName>
          <Address>
            30511 Lucania Dr
            <br /> Rancho Palos Verdes, CA 90275
          </Address>
        </School>
      </Column>
      <Column md={6} lg={4}>
        <School>
          <SchoolName>Lunada Bay Elementary</SchoolName>
          <Address>
            520 Paseo Lunado
            <br /> Palos Verdes Estates, CA 90274
          </Address>
        </School>
      </Column>
      <Column md={6} lg={4}>
        <School>
          <SchoolName>Montemalaga Elementary</SchoolName>
          <Address>
            1121 Vía Nogales
            <br />
            Palos Verdes Estates, CA 90274
          </Address>
        </School>
      </Column>
      <Column md={6} lg={4}>
        <School>
          <SchoolName>Point Vicente Elementary</SchoolName>
          <Address>
            30540 Rue De La Pierre
            <br />
            Rancho Palos Verdes, CA 90275
          </Address>
        </School>
      </Column>
      <Column md={6} lg={4}>
        <School>
          <SchoolName>Rancho Vista Elementary</SchoolName>
          <Address>
            4323 Palos Verdes Dr N<br /> Rolling Hills Estates, CA 90274
          </Address>
        </School>
      </Column>
      <Column md={6} lg={4}>
        <School>
          <SchoolName>Silver Spur Elementary</SchoolName>
          <Address>
            5500 Ironwood St
            <br />
            Rancho Palos Verdes, CA 90275
          </Address>
        </School>
      </Column>
      <Column md={6} lg={4}>
        <School>
          <SchoolName>Soleado Elementary</SchoolName>
          <Address>
            27800 Longhill Dr
            <br />
            Rancho Palos Verdes, CA 90275
          </Address>
        </School>
      </Column>
      <Column md={6} lg={4}>
        <School>
          <SchoolName>Vista Grande Elementary</SchoolName>
          <Address>
            7032 Purple Ridge Dr
            <br />
            Rancho Palos Verdes, CA 90275
          </Address>
        </School>
      </Column>
    </CenterSection>
  </Base>
)
