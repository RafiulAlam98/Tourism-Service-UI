import React from 'react';
import Banner from '../../Banner/Banner';
import NewService from '../NewService/NewService';
import Offers from '../Offers/Offers';
import Testimonials from '../Testimonials/Testimonials';
import Client from './../Client/Client';

const Home = () => {
     return (
          <div>
               <Banner></Banner>
               <Offers></Offers>
               <Testimonials></Testimonials>
               <NewService></NewService>
               <Client></Client>
          </div>
     );
};

export default Home;