import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';


class MainPage extends Component {

  render() {
    return (
      <div className="mainPage">
        <h1>Your Fun Space</h1>
        <button 
          onClick={() => scrollToComponent(this.Violet, { offset: 0, align: 'top', duration: 1500 })}> Blast off!</button>
        <section className='violet' ref={(section) => { this.Violet = section; }}></section>

      </div>
    )}
}


export default MainPage;