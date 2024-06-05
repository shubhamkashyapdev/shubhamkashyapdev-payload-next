import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

const Homepage = async () => {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'users',
  })
  return <div>{JSON.stringify(data)}</div>
}

export default Homepage
