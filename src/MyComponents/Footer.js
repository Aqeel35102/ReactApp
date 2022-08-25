import React from 'react'

export default function Footer() {
    let FooterStyle = {
        bottom: "0px",
        width:"100%",
        position: "inherit"
    }; 
  return (
    <div className='bg-dark text-white m-0 p-0' style={FooterStyle}>
        <p className="text-center m-0">Copyright &copy; MyReactApp</p>
    </div>
  )
}
