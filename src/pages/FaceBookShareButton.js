import React, { Component} from 'react';
import { FacebookProvider, ShareButton } from 'react-facebook';

export default class FacebookShare extends Component {
  render() {
    return (
      <FacebookProvider appId="123456789">
        <ShareButton href="http://www.facebook.com">
          Share
        </ShareButton>
      </FacebookProvider>
    );
  }
}