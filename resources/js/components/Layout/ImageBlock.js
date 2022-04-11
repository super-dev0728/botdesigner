import React from 'react'

export default function ImageBlock(props) {
  return (
    <div style={{
      float: "left",
      width: "160px",
      height: "160px",
      backgroundImage: "url(" + props.url + ")",
      backgroundSize: "cover"
    }}>
    </div>
    
  )
}
