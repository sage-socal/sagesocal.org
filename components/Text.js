import styled from 'styled-components'
import { orange, dark, light } from '../utils/colors'
import { media } from '../utils/style-utils'

export const SectionTitle = styled.h1`
  font-size: 42px;
  line-height: 1;
  font-family: 'Rubik', sans-serif;
  font-weight: 700;
  margin: 0;
  color: ${orange};
  ${media.md`
		font-size: 56px;
	`};
`

export const LargeHeading = styled(SectionTitle)`
  font-size: 32px;
  ${media.md`
		font-size: 42px;
	`};
`

export const SubHeadline = styled.h2`
  line-height: 1.4;
  font-size: 22px;
  font-weight: 400;
  font-family: 'Rubik', sans-serif;
  margin: 10px 0;
  color: ${light};
  ${media.md`
		font-size: 28px;
	`};
`

export const BodyHeadline = styled.h3`
  line-height: 1.4;
  font-size: 24px;
  font-weight: 700;
  font-family: 'Rubik', sans-serif;
  margin: 0;
  color: ${orange};
`

export const Paragraph = styled.p`
  font-size: 18px;
  font-weight: 400;
  font-family: 'Rubik', sans-serif;
  line-height: 1.4;
  color: ${dark};
  margin: 10px 0;
  a {
    color: inherit;
  }
`
