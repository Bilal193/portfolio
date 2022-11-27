import React from 'react';
import { NavContent } from './Header';

const ExpendableNAvBar = ({menuOpen}) => {
  return (
    <div className={`ExpendableNAvBar ${menuOpen?"navPhoneOpen":""}`} clas>
        <NavContent/>
    </div>
  )
}

export default ExpendableNAvBar