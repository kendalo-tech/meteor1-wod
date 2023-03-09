import React from 'react';
import TopMenu from '../components/TopMenu';
import CenterImage from '../components/CenterImage';
import BottomFooter from '../components/BottomFooter';

const Boardroom = () => (
  <div className="d-flex flex-column min-vh-100">
    <div className="px-o justify-content-center pb-2">
      <TopMenu />
      <CenterImage />
      <BottomFooter />
    </div>
  </div>
);

export default Boardroom;
