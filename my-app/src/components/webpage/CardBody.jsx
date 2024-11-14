import React from 'react'
import Card from './Card'

function CardBody() {
  return (
    <>
        <div className="container my-5">
            <div className="row">
                <div className="col d-flex justify-content-center"><Card/></div>
                <div className="col d-flex justify-content-center"><Card/></div>
                <div className="col d-flex justify-content-center"><Card/></div>
            </div>
        </div>
    </>
  )
}

export default CardBody