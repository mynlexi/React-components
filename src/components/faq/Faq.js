import React, { Component } from 'react';

import { faqBlock } from './Data';


class Qanda extends Component {
  constructor(props) {
    super(props);
    this.item = props.item;
    this.index = props.index;
    this.state ={
      clicked: false
    }
  }

  handleClick = () =>{
    this.setState({ clicked: !this.state.clicked})
  }

  render() {
    return(
      <div key={this.index} class="border-t border-gray-300 mt-2 md:mt-4 pt-2 md:pt-4">
        <div class="text-left">
          
          <button onClick={this.handleClick} class="w-full flex justify-between items-center text-gray-400 focus:outline-none focus:text-gray-900 text-left">
            <span class="text-gray-900 pr-2">
              {this.item.question}
            </span>
            <span class="flex items-center">
                <div>
                  {this.state.clicked ? <i class="fas fa-angle-up"></i> : <i class="fas fa-angle-down"></i> }
                </div>
            </span>
          </button>
        </div>
        <div className={this.state.clicked ? "block" : "hidden"}>
          <div class="mt-2 md:pr-12 lg:pr-24 text-gray-500 text-sm md:text-base transform duration-150">
            <p>{this.item.answer}</p>
          </div>
        </div>

      </div>
    )
  }
}

function Bundler() {
  return(
      <section class="s-sm bg-yellow-200">
        <div class="max-w-screen-lg mx-auto text-left">
        <h2 class="mt-0">Frequently asked questions</h2>
          <div>
            {faqBlock.map((item, index) => {
              return(
              <Qanda item={ item } index={ index } />
              )
            })}
          </div>
        </div>
    
      </section>
        )
  
}

export default Bundler