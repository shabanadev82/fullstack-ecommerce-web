import { getServerSession } from 'next-auth'
import React from 'react'

const OrderPage = async () => {
    const session = await getServerSession()
  return (
    session ?
    <div>OrderPage</div>
    :
    <div>you need to login</div>
  )
}

export default OrderPage