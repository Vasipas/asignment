/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react-hooks/exhaustive-deps */
import { CountButton, CounterInput, ProductRow, TableCell } from '@/components/styled'
import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import {
  changeCountInCart,
  getCartItemsRequest,
  pushToCart,
  removeItemFromCart,
} from '@/redux/reducers/products/reducer'
import { getCart, getCartList } from '@/redux/reducers/products/selectors'
import { ChangeEvent, useEffect } from 'react'
import styled from 'styled-components'

const CartWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const TotalWrapper = styled.div`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 600;
`
const Plag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`

const CartPage = () => {
  const dispatch = useAppDispatch()
  const cart = useAppSelector(getCart)
  const cartList = useAppSelector(getCartList)

  useEffect(() => {
    dispatch(getCartItemsRequest(cart))
  }, [dispatch])

  const handleDecrement = (id: string) => {
    const count = cart?.find((cartItem) => cartItem[0] === id)?.[1]
    if (count && count < 2) {
      return
    }
    dispatch(pushToCart({ id, count: -1 }))
  }
  const handleIncrement = (id: string) => {
    dispatch(pushToCart({ id, count: 1 }))
  }
  const itemsInCart = (id: string) => {
    return cart?.find((cartItem) => cartItem[0] === id)?.[1]
  }
  const handleCountChange = (e: ChangeEvent<HTMLInputElement>, id: string) => {
    const { value } = e.target
    if (/^[0-9]*$/.test(value) && Number(value) > 0) {
      dispatch(changeCountInCart({ id, count: Number(value) }))
    }
    if (!value || Number(value) === 0) {
      dispatch(removeItemFromCart({ id }))
    }
  }
  const handleRemoveItem = (id: string) => {
    dispatch(removeItemFromCart({ id }))
  }
  const countTotalPrice = () => {
    return cartList
      ?.reduce(
        (acc, item) =>
          acc + Number(item.price) * Number(cart?.find((i) => Number(i[0]) === item.id)?.[1]),
        0
      )
      .toFixed(2)
  }

  return (
    <CartWrapper>
      <ProductRow>
        <TableCell>Title</TableCell>
        <TableCell>Description</TableCell>
        <TableCell>Price</TableCell>
        <TableCell>Action</TableCell>
        <TableCell>Remove From Cart</TableCell>
      </ProductRow>
      {cartList && cartList.length ? (
        cartList.map((item) => {
          return (
            <ProductRow key={item.id}>
              <TableCell>{item.title}</TableCell>
              <TableCell>{item.description}</TableCell>
              <TableCell>{item.price}</TableCell>
              <TableCell flex="row">
                <CountButton onClick={() => handleDecrement(String(item.id))}>-</CountButton>
                <CounterInput
                  value={itemsInCart(String(item.id))}
                  onChange={(e) => handleCountChange(e, String(item.id))}
                />
                <CountButton onClick={() => handleIncrement(String(item.id))}>+</CountButton>
              </TableCell>
              <TableCell>
                <CountButton onClick={() => handleRemoveItem(String(item.id))}>X</CountButton>
              </TableCell>
            </ProductRow>
          )
        })
      ) : (
        <Plag>Looks like your cart is empty</Plag>
      )}
      <TotalWrapper>
        <span>Total: </span>
        <span>{countTotalPrice()}</span>
      </TotalWrapper>
    </CartWrapper>
  )
}

export default CartPage
