import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faYoutube, faDiscord } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const SocialIcons = () => {
  return <div className="social-icons">
    <ul>
      <li> <a target='_blank' href="mailto:contact@lostinthemetaverse.io"><FontAwesomeIcon icon={faEnvelope} /></a> </li>
      <li> <a target='_blank' href="https://twitter.com/metaverse_lost"><FontAwesomeIcon icon={faTwitter} /></a></li>
      <li> <a target='_blank' href="https://discord.gg/vzXNyucu5y"><FontAwesomeIcon icon={faDiscord} /></a> </li>
      <li> <a target='_blank' href="https://www.youtube.com/channel/UCj7AZOGo9EXBhEdUdZ-WIXQ"><FontAwesomeIcon icon={faYoutube} /></a></li>
    </ul>
  </div>
}