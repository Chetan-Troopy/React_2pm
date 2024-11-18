import React from 'react'

function InlineStyle() {

  const para = {
    backgroundColor : "blue",
    color: "white",
    padding: "5px"
  }
  return (
    <>
        <div className='container '>
                <p style={para}>This Is An Example Of Inline Style In React.</p>
                <p style={{color: "black"}}>Inline CSS</p>
        </div>

    </>
  )
}

export default InlineStyle