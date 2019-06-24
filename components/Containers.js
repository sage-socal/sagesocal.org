import styled from 'styled-components'
import { Page, Row } from 'hedron'
import { white } from '../utils/colors'

export const SagePage = styled(Page)`
  background: ${white};
  padding-bottom: 60px;
  overflow: hidden;
  width: 1200px;
  margin-top: 40px;
`

export const Section = styled(Row)`
  padding: 20px;
  text-align: ${props => props.textAlign || 'inherit'};
  position: relative;
`

export const SubSection = styled.div`
  padding: 30px;
`
