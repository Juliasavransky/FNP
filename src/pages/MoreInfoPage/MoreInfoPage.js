import React, { Component } from 'react';
import ZoomInAdComponent from '../../components/ZoomInAd/zoomInAd';
import { useParams } from 'react-router-dom';
import login from '../Login/Login';

function MoreInfoPage({ ads, activeUser,allUsers }) {
  const { id } = useParams();
  let ad = ads.find(a => a.id == id);
  const { userid } = useParams();
  let user = allUsers.find(user => user.id == id);
  return <ZoomInAdComponent ad={ad} activeUser={activeUser} allUsers={allUsers} />;
}

export default MoreInfoPage;
