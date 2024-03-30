import React from 'react'
import {NavLink} from "react-router-dom";

var img1 = 'doctor1.jpg';

function Book() {
  return (
    <>
    { <nav class="navbar navbar-expand-lg bg-body-tertiary" >
        <div class="container-fluid" style={{backgroundColor:"#000000"}}>
        <a class="navbar-brand ms-5" href="/"style={{color:"#ffffff"}}>RAYMOND VILLAS</a>
            <ul className='navbar-nav justify-content-end'>
                <div className='mx-2 p-2'><li className='nav-item'><NavLink to="/" className='nav-link'style={{color:"#ffffff"}}>Home</NavLink></li></div>
                <div className='mx-2 p-2'><li className='nav-item'><NavLink to="/bookanappointment" className='nav-link'style={{color:"#ffffff"}}>Services</NavLink></li></div>
              
                <div className='mx-2 p-2'><li className='nav-item'><NavLink to="/Contact" className='nav-link'style={{color:"#ffffff"}}>Contact Us</NavLink></li></div>

            </ul>
        </div>
    </nav> }

    <h1 class="text-center mt-3">OUR SERVICES</h1>
    <p class="lead text-center ms-4">
    "Indulge in the exquisite hospitality and unparalleled attention to detail, elevating your experience to one of pure luxury and delight."    </p>

    <div class="container-fluid mt-5 ml-5 d-flex flex-wrap justify-content-evenly">
        <div class="card mb-3" style={{width: "18rem"}}>
            <img src="https://images.pexels.com/photos/17206076/pexels-photo-17206076/free-photo-of-table-at-banquet-hall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" height={'400px'} width={'400px'} alt="..."/>
            <div class="card-body">
                <h5 class="card-title">BANQUET</h5>
                <ul class="list-group list-group-flush">
                </ul>
                <a href="#" class="btn btn-primary">Book</a>
            </div>
        </div>
        <div class="card mb-3" style={{width: "18rem"}}>
            <img src="https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" height={'400px'} width={'400px'} alt="..."/>
            <div class="card-body">
                <h5 class="card-title">RESTAURANT</h5>
                <ul class="list-group list-group-flush">
                </ul>
                <a href="#" class="btn btn-primary">Book</a>
            </div>
        </div>
        <div class="card mb-3" style={{width: "18rem"}}>
            <img src="https://images.pexels.com/photos/2147479/pexels-photo-2147479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={'400px'} width={'400px'} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">POOL</h5>
                <ul class="list-group list-group-flush">
                </ul>
                <a href="#" class="btn btn-primary">Book</a>
            </div>
        </div><div class="card mb-3" style={{width: "18rem"}}>
            <img src="https://images.pexels.com/photos/3997983/pexels-photo-3997983.jpeg" height={'400px'} width={'400px'} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">SPA</h5>
                <ul class="list-group list-group-flush">
                </ul>
                <a href="#" class="btn btn-primary">Book</a>
            </div>
        </div>
        <div class="card mb-3" style={{width: "18rem"}}>
            <img src="https://images.pexels.com/photos/1926988/pexels-photo-1926988.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={'400px'} width={'400px'} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">LIBRARY</h5>
                <ul class="list-group list-group-flush">
                </ul>
                <a href="#" class="btn btn-primary">Book</a>
            </div>
        </div>
        <div class="card mb-3" style={{width: "18rem"}}>
            <img src="https://images.pexels.com/photos/3846048/pexels-photo-3846048.jpeg" height={'400px'} width={'400px'} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">INDOOR SPORTS</h5>
                <ul class="list-group list-group-flush">
                   
                </ul>
                <a href="#" class="btn btn-primary">Book</a>
            </div>
        </div>
        <div class="card mb-3" style={{width: "18rem"}}>
            <img src="https://images.pexels.com/photos/11021812/pexels-photo-11021812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" height={'400px'} width={'400px'} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">JACUZZI</h5>
                <ul class="list-group list-group-flush">
                </ul>
                <a href="#" class="btn btn-primary">Book</a>
            </div>
        </div>
    </div>
   
    </>
  )
}

export default Book