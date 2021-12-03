import React from "react";

const FooterCard = props => {
  return (
    <div className='card aside-card'>
      <div className='footer-card-content'>
        <div>
          <a href='https://github.com/HowDidIGitHere/peroos'><h1>Github</h1></a>
          <a href='https://www.linkedin.com/in/jamie-an-6b9b41114/'><h1>LinkedIn</h1></a>
        </div>
        <div>
          <a>Javascript</a>
          <a>React</a>
          <a>Redux</a>
          <a>jQuery</a>
          <a>Ruby on Rails</a>
          <a>PostgreSQL</a>
          <a>HTML</a>
          <a>CSS</a>
        </div>
      </div>
      <div className='reserved-rights'>
        <p>Peroos Inc ©️ 2021 . All rights reserved</p>
      </div>
    </div>
  )
}

export default FooterCard;