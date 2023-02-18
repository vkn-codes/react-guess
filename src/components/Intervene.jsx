import React from 'react'
import MyComponent from './MyComponent'
function Intervene({props}) {
  return (
    <div><MyComponent color='red' {...props} message="override"/></div>
  )
}


export default Intervene