import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
        <a href="https://mobile.twitter.com/im_kamleshpatil" target="_blank" rel="noreferrer">
            <BsTwitter /></a>
        </div>
        <div>
        <a href="https://www.facebook.com/profile.php?id=100055331393602" target="_blank" rel="noreferrer">
            <FaFacebookF /></a>
        </div>
        <div>
        <a href="https://www.instagram.com/kamleshpatil.21/" target="_blank" rel="noreferrer">
            <BsInstagram /></a>
        </div>
    </div>
  )
}

export default SocialMedia