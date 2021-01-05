import React, { Component } from 'react';
import { faqBlock } from './Data';

// we need either question component, answer component & something for both 
const Question = (item, index, isOpen, answerId, onToggle )  => {
    return(
      <div key={'question' + index}>
     {item.question}
      </div>
    )
  }



const Answer = (item, index)  =>  {
  
    return(
      <div key={'answer' + index}>
      {item.answer}
    </div>
    )
  }





class Faq extends Component {
  
  // state = { clicked: true}

  // handleClick = () =>{
  //   this.setState({ clicked: !this.state.clicked})
  // }
  // make a state that is a dictionary or array?
  // linked to the display items 
  
  render() {
    // const buttonOpen = this.state;
    return(
      <div class="w-2/3 bg-yellow-300 border-2 ">
        <div>
          <button onClick={this.handleClick}>open all</button>
          <p> {this.state.clicked ? "open" :"close"}</p>
          {faqBlock.map((item, index) => {
            return(
              <div key={index} class="text-left">
                  {Question(item, index)}
                <div className={this.state.clicked ? "block" : "hidden"}> 
                  {Answer(item, index)}
                </div>
              </div>
            )
          })}
        </div>

    
     </div>
    )
  }
}

export default Faq

