import React from 'react';
import Banner from '../../Banner/Banner';
import NewService from '../NewService/NewService';
import Offers from '../Offers/Offers';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <Offers></Offers>
               <Testimonials></Testimonials>
               <NewService></NewService>
          </div>
     );
};

export default Home;