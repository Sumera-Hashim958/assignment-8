import React from 'react'

const DynamicRoutes = ({params}:any) => {
  console.log(params)
  return (
    <>
    <h1>Name: {params.name}</h1>
    </>
  )
}

export default DynamicRoutes

