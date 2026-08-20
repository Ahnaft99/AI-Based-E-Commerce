import React from 'react'

const Container = ({children, className}) => {
  return (
   <>
     <div className={`max-w-300 mx-auto ${className}`}>{children}</div>
   </>
  )
}

export default Container