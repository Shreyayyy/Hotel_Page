import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../Css/Homepage.css';
let img='hotel.jpg'

function Home() {
  return (
    <>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" >
      <div class="container-fluid "style={{backgroundColor:"#000000"}}>
      <a class="navbar-brand ms-5" href="#" style={{color:"#ffffff"}}>RAYMOND VILLAS</a>
          <ul className='navbar-nav justify-content-end'>
              <div className='mx-2 p-2'><li className='nav-item'><NavLink to="/" className='nav-link'style={{color:"#ffffff"}} >Home</NavLink></li></div>
              <div className='mx-2 p-2'><li className='nav-item'><NavLink to="/bookanappointment" className='nav-link' style={{color:"#ffffff"}}>Services</NavLink></li></div>
  
              <div className='mx-2 p-2'><li className='nav-item'><NavLink to="/Contact" className='nav-link'style={{color:"#ffffff"}}>Contact Us</NavLink></li></div>

          </ul>
      </div>
    </nav>
    {/* <HomeCarousel/> */}
    <Homepage/>
  </>
  )
}



const Homepage = () => {
  // Feedback data
  const feedbackData = [
    {
      id: 1,
      name: 'Saraswati Dey',
      name1: 'CUSTOMER FEEDBACK',
      feedback: 'Excellent service and caring staff. I highly recommend this hotel.',
      imageUrl: 'woman1.jpg',
    },
    {
      id: 2,
      name: 'Sunil Kapoor',
      name1: 'CUSTOMER FEEDBACK',
      feedback: 'I had a great experience here. The ambience is excellent.',
      imageUrl: 'man3.jpg', 
    },
    {
      id: 3,
      name: 'Kanika Sharma',
      name1: 'CUSTOMER FEEDBACK',
      feedback: ' "Exceptional service at the hotel made my stay truly memorable." . Five stars!',
      imageUrl: 'woman2.jpeg', 
    },
    {
        id: 4,
        name: 'Kamal Dey',
        name1: 'CUSTOMER FEEDBACK',
        feedback: 'The service provided is efficient, fast and on point. No complaints!',
        imageUrl: 'man2.jpg', 
    },
    {
        id: 5,
        name: 'Saswati Chatterjee',
        name1: 'CUSTOMER FEEDBACK',
        feedback: '"The impeccable attention to detail and warm hospitality exceeded all expectations during my stay at the hotel."',
        imageUrl: 'woman3.jpg', 
    },
    {
        id: 6,
        name: 'Tanishq Kapoor',
        name1: 'CUSTOMER FEEDBACK',
        feedback: '"The dedication and professionalism of the hotel staff enhanced my experience and made my stay truly enjoyable."',
        imageUrl: 'man1.jpeg', 
    },
  ];

  return (
    <div>
    <div class="d-flex justify-content-around " style={{padding:20}}>

<div class='font-weight-bold shadow p-3 text-white' style={{backgroundColor:"#93a7c7"}}><h5> Welcome to RAYMOND VILLAS, where luxury meets comfort and every guest experience is crafted with care. Nestled in the heart of KOLKATA, our hotel offers a haven of tranquility amidst the bustling cityscape. <br />Whether you're traveling for business or pleasure, our exquisite accommodations, impeccable service, and array of amenities ensure a memorable stay.<br/>
From the moment you step into our elegant lobby, you'll be greeted with warmth and hospitality by our attentive staff. Each of our thoughtfully designed rooms and suites is a sanctuary of style and sophistication, featuring modern furnishings, plush bedding, and all the amenities needed for a relaxing retreat.</h5></div>

<center>
<div class='shadow p-3 mt-2 ms-5 bg-white rounded img-fluid'>
    <img src= {img}></img>
</div>
</center>

</div>
<br></br>
<br></br>
    <div className="feedback-carousel-container" >
    <Carousel showArrows={true}>
        {feedbackData.map((item) => (
          <div key={item.id} className="feedback-item">
          <p>{item.name1}</p>
            <img src={item.imageUrl} alt={item.name} className="patient-image" />
            <p>{item.feedback}</p>
            <p className="feedback-author">- {item.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
    </div>
    
  );
};

export {Home, Homepage};