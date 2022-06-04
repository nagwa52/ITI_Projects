import React from 'react'
import { Link } from 'react-router-dom';

function NotFound() {
  const PageNotFound = "https://cdn.dribbble.com/users/4672508/screenshots/11584848/media/bf99e1c02486a053bffcf88366923dae.jpg?compress=1&resize=1200x900&vertical=top"
  return (
    <div>
      <img src={PageNotFound} alt="Not found" />
      <p style={{ textAlign: "center" }}>
        <Link to="/">Go to Home </Link>
      </p>
    </div>
  );
}

export default NotFound
