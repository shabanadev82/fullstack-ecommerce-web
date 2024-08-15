"use client";
import React, { useEffect } from 'react'
import { CustomUser } from '@/app/api/auth/[...nextauth]/options';
import { useSession } from 'next-auth/react';
import { getCartByUserid } from '@/actions/CartAction';

const Cart = () => {
  const { data: session, status } = useSession();
  const user = session?.user as CustomUser;
  const fetchCart = async () => {
    await getCartByUserid(user?.id)
    .then((res) =>{
      console.log(res.data)

    })
    .catch((err)=>{
      console.log(err.message);
      
    })
  }
  useEffect(() => {
    fetchCart()
  }, [])
  if (!session) {
    return <h1>You need to login!</h1>
  }
  return (
    <div>Cart {user.id}</div>
  )
}

export default Cart