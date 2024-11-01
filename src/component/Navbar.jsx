import React from 'react'
import { navArr } from '../arronObj/navArray'
import Link from './Link'
const Navbar = () => {
  return (
    <>
      <div className="backgrounds">
        <nav className="navbar background-eff">
          <ul>
            {navArr.map((val) => <Link key={val.id} title={val.title} link={val.link} className={val.className} classNametwo={val.classNametwo} />
            )}
          </ul>
        </nav>
      </div>
    </>
  )
}
export default Navbar