import React, { Component } from 'react';
import ZoomInAdComponent from '../../components/zoomInAd/zoomInAd';
import { useParams } from 'react-router-dom';

function MoreInfoPage({ ads }) {
  const { id } = useParams();
  let ad = ads.find(a => a.id == id);
  return <ZoomInAdComponent ad={ad} />;
}

export default MoreInfoPage;
