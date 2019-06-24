import styled from 'styled-components'
import { Page, Row } from 'hedron'
import * as colors from '../utils/colors'

export const SagePage = styled(Page)`
  background: ${colors.white};
  padding-bottom: 60px;
  overflow: hidden;
`

export const Section = styled(Row)`
  padding: 20px;
  text-align: ${props => props.textAlign || 'inherit'};
  position: relative;
`

export const SubSection = styled.div`
  padding: 30px;
`
