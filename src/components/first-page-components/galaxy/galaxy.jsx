import React from 'react';
import './galaxy.css';
import carrot from '../../../assets/svg/carrot-svgrepo-com.svg';
import {ReactSVG} from 'react-svg';
import moon from '../../../assets/svg/moon.svg';
import astronaut from '../../../assets/png/Astronaut_noback.png';
import useWindowDimensions from '../../window-dimensions/window';
// import mars from '../../../assets/svg/mars.svg';
// import earth from '../../../assets/svg/earth.svg';
import svgButton
  from './../../../assets/png/NicePng_white-button-png_2084310.png';

const MyComponent = () => {
  return (
      <div className="galaxy" style={{
        width: useWindowDimensions()['width'],
        height: useWindowDimensions()['height'],
      }}>
        <div id="stars"></div>
        <div id="stars2"></div>
        <div id="stars3"></div>
        <img className="astronaut" src={astronaut} alt={'astronaut'}/>
        <ReactSVG className={'moonSvg'} src={moon}/>
        <div id="title">
          <span>Happy Rabbit inu Year</span>
          <ReactSVG className={'carrotSvg'} src={carrot}/>
        </div>
        <div className={'firstPageButtons'}>
          <div className="marsDiv">
            <img src={svgButton} className="customButton"/>
            <h1 className={'whitePaperButtonText'}>KYC</h1>
          </div>
          <div className="earthDiv">
            <img src={svgButton} className="customButton"/>
            <h1 className={'kycButtonText'}>WHITEPAPER</h1>
          </div>
        </div>
      </div>
  );
};

export default MyComponent;
