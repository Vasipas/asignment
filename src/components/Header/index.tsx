import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { pushToCart } from '@/redux/reducers/products/reducer'
import { getCartItemsCount, getDragged } from '@/redux/reducers/products/selectors'
import { ROUTES } from '@/services/routes'
import Link from 'next/link'
import { DragEvent } from 'react'
import styled from 'styled-components'
import { MENU_ITEMS } from './menu'

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80px;
  background-color: #e0dcdc;
`
const HeaderWrapper = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: space-around;
`
const CartWrapper = styled.div`
  margin-right: 20px;
`

const HeaderComponent = () => {
  const dispatch = useAppDispatch()
  const cartItems = useAppSelector(getCartItemsCount)
  const dragged = useAppSelector(getDragged)

  const onDrop = (e: DragEvent<HTMLDivElement>, item: string) => {
    e.preventDefault()
    if (item === 'cart' && dragged) {
      dispatch(pushToCart({ id: dragged, count: 1 }))
    }
  }
  const onDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  return (
    <Header>
      <HeaderWrapper>
        <Link href={ROUTES.HOME}>
          <div>Logo</div>
        </Link>
        {cartItems > 0 ? (
          <Link href={ROUTES.CART}>
            <CartWrapper onDrop={(e) => onDrop(e, 'cart')} onDragOver={(e) => onDragOver(e)}>
              Cart ({cartItems})
            </CartWrapper>
          </Link>
        ) : (
          <CartWrapper onDrop={(e) => onDrop(e, 'cart')} onDragOver={(e) => onDragOver(e)}>
            Cart ({cartItems})
          </CartWrapper>
        )}
      </HeaderWrapper>
    </Header>
  )
}

export default HeaderComponent
