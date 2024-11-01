import React from 'react'
const Image = ({imgSrc, title, className}) => {
  return <img src={imgSrc} className={className} alt={title} />
}
export default Image