import React from 'react'
import banner1 from '../../assets/banner1.jpg'
import banner2 from '../../assets/banner2.jpg'
import banner3 from '../../assets/banner3.jpg'

function Slider() {
  return (
    <>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner ">
    <div className="carousel-item active ">
      <img src={banner1} className="d-block w-100 " style={{height: "500px"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={banner2} className="d-block w-100" style={{height: "500px"}} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={banner3} className="d-block w-100" style={{height: "500px"}} alt="..."/>
    </div>
  </div>
</div>
    </>
  )
}

export default Slider