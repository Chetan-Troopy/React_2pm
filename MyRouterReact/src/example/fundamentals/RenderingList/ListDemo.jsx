import React from 'react'
import ListObjectCompo from './ListObjectCompo'

function ListDemo() {

    const arr = ["Drashti", "Hiren", "Kalpesh"]
  return (
    <>
        <div className="container text-bg-dark p-3">
                <h1>Practical Demo</h1>
                <div className="col">

            <ul>
                {arr.map((element, index) => (
                    <li key={index}>{element}</li>
                ))}
            </ul>
                </div>
                <div className="col">
                    <ListObjectCompo/>
                </div>


        
        </div>
    </>
  )
}

export default ListDemo