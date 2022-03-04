import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faSimplybuilt, faInstagram } from '@fortawesome/free-brands-svg-icons';

export const SocialIcons = () => {
  return <div className="social-icons">
    <ul>
      <li> <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a> </li>
      <li> <a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
      <li> <a href="#"><FontAwesomeIcon icon={faSimplybuilt} /></a> </li>
      <li> <a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
    </ul>
  </div>
}