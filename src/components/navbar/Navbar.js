import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import { ReactComponent as Icon }from './cubes-solid.svg';


class Navbar extends Component {
  state = { clicked: true }

  handleClick = () =>{
    this.setState({ clicked: !this.state.clicked})
  }




  render() {
    let NavbarItems =
      " md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none md:justify-end md:flex-grow " 
    let Navbar = 
    "flex flex-wrap items-center p-5 bg-blue-200"

    if (this.state.clicked) {
      NavbarItems = 'hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 md:border-none border-blue-900 md:border-none md:justify-end md:flex-grow'
      Navbar = 'flex flex-wrap items-center  p-5 bg-blue-200 '
    }
    return(
    
      <nav className={Navbar}  >
        
        <div class="space-x-4 my-auto justify-start md:flex-grow-0">
          <div class="inline-block">
            <h1> Placeholder</h1>
          </div>
          <div class="inline-block">
            <Icon class="h-4 " />
          </div>
        </div>
         <div class="md:hidden absolute right-0 top-0 mt-4 mr-4" onClick={this.handleClick}>
         
          <i class={this.state.clicked ? 
            "fas fa-bars":
            "fas fa-times"
          }/>
        </div> 
        <div className={NavbarItems}>
        {MenuItems.map((item, index)=>{
            return(
              <div key={index} class="
              block md:inline-block text-blue-900 hover:text-blue-500 px-3 py-3 border-b-2 border-blue-900 md:border-none md:w-28 lg:w-36">
                <a  href={item.url}>
                  {item.title}
                </a>
              </div>
            )
          })}
        </div> 
      
        <button class="hidden md:flex w-full md:w-auto px-4 py-2 text-right bg-blue-900 hover:bg-blue-500 text-white md:rounded md:flex-grow-0 md:ml-6 lg:ml-12">
          Sign-up
        </button> 
        
        
      </nav> 
    )
  }

}

export default Navbar