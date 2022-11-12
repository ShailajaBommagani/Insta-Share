import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {useState} from 'react'

import {GiHamburgerMenu} from 'react-icons/gi'
import {ImCross} from 'react-icons/im'
import {FaSearch} from 'react-icons/fa'

import './index.css'

const Header = props => {
  const [isShowCon, setShowCon] = useState(false)
  const [isShowSearch, setShowSearch] = useState(false)
  const [searchInput, setSearchInput] = useState('')

  const onClickHamIcon = () => {
    setShowCon(true)
  }

  const onClickCloseButton = () => {
    setShowCon(false)
  }

  const onClickSearchTab = () => {
    setShowSearch(true)
  }

  const onClickLogoutButton = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  const onChangeSearchInput = event => {
    setSearchInput(event.target.value)
  }

  const onClickSearchIcon = () => {
    const {enterSearchInput} = props
    enterSearchInput(searchInput)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="navbar-sub-container">
          <ul className="logo-heading-container">
            <Link to="/">
              <li>
                <img
                  src="https://res.cloudinary.com/dwtbqnofd/image/upload/v1668145740/Group_shailutnulsq.png"
                  alt="website logo"
                  className="website-logo"
                />
              </li>
            </Link>
            <li>
              <h1 className="nav-heading">Insta Share</h1>
            </li>
          </ul>
          <button
            className="ham-button"
            type="button"
            onClick={onClickHamIcon}
            testid="hamburgerMenuIcon"
          >
            <GiHamburgerMenu className="icon" />
          </button>
          <div className="desktop-tabs-container">
            <div className="desktop-search-container">
              <input
                className="input-search"
                onChange={onChangeSearchInput}
                value={searchInput}
                type="search"
                placeholder="Search Caption"
              />
              <button
                type="button"
                className="search-button"
                testid="searchIcon"
                onClick={onClickSearchIcon}
              >
                <FaSearch className="search-icon" />
              </button>
            </div>
            <ul className="nav-tabs-container">
              <Link to="/" className="link">
                <li>
                  <p className="tab">Home</p>
                </li>
              </Link>
              <Link to="/my-profile" className="link">
                <li>
                  <p className="tab">Profile</p>
                </li>
              </Link>
              <li>
                <button
                  className="logout-button"
                  type="button"
                  onClick={onClickLogoutButton}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {isShowCon && (
        <ul className="tabs-container">
          <Link to="/" className="link">
            <li>
              <p className="tab">Home</p>
            </li>
          </Link>
          <li>
            <button
              type="button"
              className="search-tab-button"
              onClick={onClickSearchTab}
            >
              <p className="tab">Search</p>
            </button>
          </li>
          <Link to="/my-profile" className="link">
            <li>
              <p className="tab">Profile</p>
            </li>
          </Link>
          <li>
            <button
              className="logout-button"
              type="button"
              onClick={onClickLogoutButton}
            >
              Logout
            </button>
          </li>
          <button
            className="ham-button"
            type="button"
            onClick={onClickCloseButton}
            testid="closeIcon"
          >
            <ImCross className="close-icon" />
          </button>
        </ul>
      )}
      {isShowSearch && (
        <div className="search-container">
          <input
            className="input-search"
            onChange={onChangeSearchInput}
            value={searchInput}
            type="search"
            placeholder="Search Caption"
          />
          <button
            type="button"
            className="search-button"
            onClick={onClickSearchIcon}
            testid="searchIcon"
          >
            <FaSearch className="search-icon" />
          </button>
        </div>
      )}
    </>
  )
}
export default withRouter(Header)
