import React, { Component } from 'react';
import { MenuItems } from '../navbar/MenuItems';

class Footer extends Component {
  render() {
    let currentYear = new Date().getFullYear();
    return(
      <footer class="footer bg-blue-300 relative pt-1 border-b-2 border-blue-700">
        <div class="md:w-1/4 justify-start"> 
          <h3>Placeholder title</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 ">
            {MenuItems.map((item, index) => {
              return(
                <div key={index}>
                  <a href={item.url}>{item.title}</a>
                </div>
              )
            })
            }
          </div>
        </div>
        <div class="flex justify-between"> 
          {/* base-line  */}
        <p class="inline-block ml-4">©{currentYear} Placeholder</p>
        <div></div>
        <p class="inline-block mr-4">Done by LorenzWestner</p>
        </div>
      </footer>
    )
  }
}

export default Footer