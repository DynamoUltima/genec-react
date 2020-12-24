import React from 'react';
import styled from 'styled-components';
import CarouselSpecial from './Carousel';
import Parallax from './Parallax';



const Home = () => {
   const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

   const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;
   return (
      <div  >

      <CarouselSpecial />
      
      
      <div className="row"></div>
         <div className="container">
            <div className="row">
               <h3 className="col s4  text-grey text-darken-3">What we do</h3>
               <div className="col s4 text-dark-4">
                  Services including General Electrical Construction works,
                  Civil Engineering Works, Electrical Project Management, Installation of Air-Conditioning Equipments,
                  Installation of Security Systems and Voice and Data installation Works.
            </div>
               <div className="col s4"><TomatoButton className="waves-effect waves-light">All Services</TomatoButton></div>
            </div>
         </div>
         <div className="section"></div>
         <Parallax/>


      </div>
   );
}

export default Home;