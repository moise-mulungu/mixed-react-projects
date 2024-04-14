import { useState, useEffect } from 'react'

export default function Item({ title, items }) {
  return (
    <div>
      <dt className="mb-2 text-2xl font-semibold leading-6 text-gray-600">{title}</dt>
      <dd className="order-first text-1xl font-semibold tracking-tight text-gray-900">
        {items?.map((item) => {
          return <div>{item}</div>
        })}
      </dd>
    </div>
  )
}
