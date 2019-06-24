import styled from 'styled-components'
import { Page, Row } from 'hedron'
import { white } from '../utils/colors'

export const PageSegment = styled(Page)`
  background: ${props => (props.white ? white : 'none')};
  overflow: hidden;
  width: ${props => props.width || 1200}px;
  margin: 20px auto;
`

export const Section = styled(Row)`
  padding: 20px;
  text-align: ${props => props.textAlign || 'inherit'};
  position: relative;
`

export const SubSection = styled.div`
  padding: 30px;
`
