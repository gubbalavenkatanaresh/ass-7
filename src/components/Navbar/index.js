import Popup from 'reactjs-popup'
import {HiOutlineSun, HiMoon} from 'react-icons/hi'

import ModeContext from '../../context/ModeContext'
import './index.css'

const Navbar = () => (
  <ModeContext.Consumer>
    {value => {
      const {isDark, changeMode} = value
      const onClickModeIcon = () => {
        changeMode()
      }
      const logoUrl = isDark
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const modeIcon = isDark ? (
        <HiOutlineSun className="dark-icon" onClick={onClickModeIcon} />
      ) : (
        <HiMoon className="light-icon" onClick={onClickModeIcon} />
      )
      return (
        <nav className="navbar">
          <img src={logoUrl} alt="logo" className="navbar-logo" />
          <div>
            {modeIcon}
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
              alt="profile"
              className="profile-icon"
            />
            <Popup
              modal
              trigger={
                <button type="button" className="logout-btn">
                  Logout
                </button>
              }
              className="popup-content"
            >
              {close => (
                <>
                  <p>Are you sure,you want to logout?</p>
                  <div>
                    <button type="button" onClick={() => close()}>
                      Cancel
                    </button>
                    <button type="button">Confirm</button>
                  </div>
                </>
              )}
            </Popup>
          </div>
        </nav>
      )
    }}
  </ModeContext.Consumer>
)

export default Navbar
