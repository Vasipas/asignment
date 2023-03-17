import styled from 'styled-components'
import { ICellProps, IWrapperProps } from './types'

export const Wrapper = styled.div<IWrapperProps>`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  min-width: 100%;
  max-width: 1440px;
  flex: ${(props) => (props.content ? `1 1 auto` : `1 0 auto`)};
`
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 270px;
  min-width: 270px;
  height: 270px;
  border: 1px solid #ccc;
  border-radius: 20px;
  align-content: center;
  justify-content: space-around;
  align-items: center;
`

export const BuyButton = styled.button.attrs({ type: 'button' })`
  background-color: #2e975d;
  width: 80px;
  height: 40px;
  color: white;
  border-radius: 10px;
  &:disabled {
    background-color: #dbdfdd;
  }
`
export const TableCell = styled.div<ICellProps>`
  display: ${(props) => (props.flex ? 'flex' : 'block')};
  flex-direction: ${(props) => props.flex && props.flex};
  width: 120px;
  padding: 10px;
`
export const ProductRow = styled.div`
  display: flex;
  padding: 10px;
  border: 1px solid #ccc;
`
export const CountButton = styled.button.attrs({ type: 'button' })`
  display: block;
  width: 40px;
  height: 40px;
`

export const CounterInput = styled.input.attrs({ type: 'text' })`
  width: 40px;
  height: 40px;
  font-size: 20px;
`
