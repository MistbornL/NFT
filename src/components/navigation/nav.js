import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <ul className="tuar_daarqvi">
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>

                <li>
                    <Link to='/Explore'>
                        Explore
                    </Link>
                </li>

                <li>
                    <Link to='/Activity'>
                        Activity
                    </Link>
                </li>

                <li>
                    <Link to='/Comunity'>
                        Activity
                    </Link>
                </li>

                <li>
                    <Link to='/Activity'>
                        Contact
                    </Link>
                </li>
            </ul>
  )
}

export default Nav