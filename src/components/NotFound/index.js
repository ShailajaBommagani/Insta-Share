import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <>
    <div className="not-con">
      <img
        src="https://res.cloudinary.com/dwtbqnofd/image/upload/v1668156112/erroring_1_shailuwjxipd.png"
        alt="page not found"
        className="not-image"
      />
      <h1 className="not-heading">Page Not Found</h1>
      <p className="not-para">
        we are sorry, the page you requested could not be found
      </p>
      <p className="not-para"> Please go back to the homepage</p>
      <Link to="/">
        <button type="button" className="not-button">
          Home Page
        </button>
      </Link>
    </div>
  </>
)
export default NotFound
