import React from 'react'
import { useSearchParams } from 'react-router-dom'

function Paymentsuccess() {
  const searchQuery = useSearchParams()[0]
  const referenceNum = searchQuery.get("reference")
  
  return (
    <div>
      <h2>Order Succcessfull</h2>
      <label>Refrence Number{referenceNum}</label>
    </div>
  )
}

export default Paymentsuccess
