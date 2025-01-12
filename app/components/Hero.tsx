import { client } from '@/sanity/lib/client';
import React from 'react'

const Hero = async () => {

  const query = await client.fetch(
    `*[_type == "products"]{`
  );
  console.log(query)
  return (
    <div>Hero</div>
  )
}

export default Hero