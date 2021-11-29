import React from "react";

const FooterCard = props => {
  return (
    <div className='card aside-card'>
      <div className='footer-card-content'>
        <div>
          <a href='#'>Help</a>
          <a href='#'>Peroos Coins</a>
          <a href='#'>Peroos Premium</a>
          <a href='#'>Peroos Gifts</a>
        </div>
        <div>
          <a href='#'>About</a>
          <a href='#'>Careers</a>
          <a href='#'>Press</a>
          <a href='#'>Advertise</a>
          <a href='#'>Blog</a>
          <a href='#'>Terms</a>
          <a href='#'>Content Policy</a>
          <a href='#'>Privacy Policy</a>
          <a href='#'>Mod Policy</a>
        </div>
      </div>
      <div className='reserved-rights'>
        <p>Peroos Inc ©️ 2021 . All rights reserved</p>
      </div>
    </div>
  )
}

export default FooterCard;