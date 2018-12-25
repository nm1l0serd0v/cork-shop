import React from 'react'

const languageSwitcher = () => {
  return(
    <div className="lang-switcher">
      <div className="lang-toggle">
        <img src="images/flags/GB.png" alt="English" />
        <i className="material-icons arrow_drop_down"></i>
        <ul className="lang-dropdown">
          <li>
            <a href="#"> <img src="images/flags/FR.png" alt="French" />FR</a>
          </li>
          <li>
            <a href="#"><img src="images/flags/DE.png" alt="German" />DE</a>
          </li>
          <li>
            <a href="#"><img src="images/flags/IT.png" alt="Italian" />IT</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default languageSwitcher
