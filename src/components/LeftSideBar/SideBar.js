import React from 'react'
import './style.css'
import { BiHomeAlt } from 'react-icons/bi';
import {IoAnalyticsSharp} from 'react-icons/io5';
export default function SideBar() {
  return (
    <>
    
    
        <nav className='left-side-bar align-item-center'>
        

          <div className="category">
            
            <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
              <div className="category-text text-center">
                <div className="icon sidebar-icon">
                  <BiHomeAlt/>
                </div>
                <div>Home</div>
              </div>
            </a>
            
            <div className="collapse" id="collapseExample">
              <div className="options">
                <div className="icon sidebar-icon">
                <BiHomeAlt/>
                </div>
                <div className="value">Dashboard </div>
              </div>
              <div className="options">
                <div className="icon sidebar-icon">
                <IoAnalyticsSharp/>
                </div>
                <div className="value">Analytics </div>
              </div>
              <div className="options">
                <div className="icon sidebar-icon">
                <BiHomeAlt/>     
                 </div>
                <div className="value">option1 </div>
              </div>
              <div className="options">
                <div className="icon sidebar-icon">
                <BiHomeAlt/>
                </div>
                <div className="value">option1 </div>
              </div>
            </div>
          </div>

          <div className="category">
            
            <a data-bs-toggle="collapse" href="#collapseExample2" role="button" aria-expanded="false" aria-controls="collapseExample">
              <div className="category-text text-center">
                <div className="icon sidebar-icon">
                  <BiHomeAlt/>
                </div>
                <div>Home</div>
              </div>
            </a>
            
            <div className="collapse" id="collapseExample2">
              <div className="options">
                <div className="icon sidebar-icon">
                <BiHomeAlt/>
                </div>
                <div className="value">Dashboard </div>
              </div>
              <div className="options">
                <div className="icon sidebar-icon">
                <IoAnalyticsSharp/>
                </div>
                <div className="value">Analytics </div>
              </div>
              <div className="options">
                <div className="icon sidebar-icon">
                <BiHomeAlt/>     
                 </div>
                <div className="value">option1 </div>
              </div>
              <div className="options">
                <div className="icon sidebar-icon">
                <BiHomeAlt/>
                </div>
                <div className="value">option1 </div>
              </div>
            </div>
          </div>
          
       </nav>
       </>
  )
}
