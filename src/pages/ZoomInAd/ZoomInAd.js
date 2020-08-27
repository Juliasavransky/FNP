import React, { Component } from 'react';
import ZoomInAdComponent from '../../components/ZoomInAd/ZoomInAd'
import {useParams} from "react-router-dom";


function ZoomInAd({ads}){
  const { id } = useParams();
  let ad = ads.find((a) => a.id == id)
  return(
    <ZoomInAdComponent ad={ad}/>
  );
}

export default ZoomInAd
