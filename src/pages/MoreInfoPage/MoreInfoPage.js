import React, { Component } from 'react';
import ZoomInAdComponent from '../../components/ZoomInAd/zoomInAd'
import { useParams } from 'react-router-dom';
import login from '../Login/Login';

function MoreInfoPage({ ads }) {
  const { id } = useParams();
  let ad = ads.find(a => a.id == id);
  return <ZoomInAdComponent ad={ad}  />;
}

export default MoreInfoPage;