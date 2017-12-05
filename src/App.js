import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import './App.css';
import star from './images/star-small.png';

class App extends Component {
state = {
    position: 0,
  }

  handleChange = (event) => {
    this.setState({ position: event.target.value, 
    })
  }

  // handlePosition = (position) => {
  //   this.setState({ sliderPosition: this.state.position,
  //   })
  // }
  

  // logslider = (position) => {
  //   debugger;
  // // position will be between 0 and 100
  // let minp = -100;
  // let maxp = 100;

  // // The result should be between 100 an 10000000
  // let minv = Math.log(100);
  // let maxv = Math.log(10000000);

  // // calculate adjustment factor
  // let scale = (maxv-minv) / (maxp-minp);

  // return Math.exp(minv + scale*(position-minp));
  // }

  // valuer = (sliderPosition) => {
  //   debugger;
  // // position will be between 0 and 100
  // let minp = -100;
  // let maxp = 100;

  // // The result should be between 100 an 10000000
  // let minv = Math.log(100);
  // let maxv = Math.log(10000000);

  // // calculate adjustment factor
  // let scale = (maxv-minv) / (maxp-minp);

  // return (Math.log(sliderPosition)-minv) / scale + minp;
  // }
  
  render() {
    const style =  {
      color: 'yellow'
    };
    const starImage = {
      opacity: '0.4',
    }

      


    if(this.state.position >= -100 && this.state.position < 0) {
      starImage.opacity = Math.abs(this.state.position) / 100 ;
      starImage.background = 'linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 255, 0.5), transparent), url(./images/star-small.png) no-repeat center' 
    }

    if(this.state.position >= 0  && this.state.position <= 100) {
      starImage.opacity = ( this.state.position / 100 );
      starImage.background = 'linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 0, 0, 0.5), transparent), url(./images/star-small.png) no-repeat center' 
    }



    return (
      <div className="App">
        <div className = "row">
            <div className = "col-sm-12 col-xs-12"
              style = {starImage}>
              <img src={star} alt={"star"}/>
            </div>
            
            <div className = "col-sm-6 col-xs-12 inputField">
              <input 
                type="number"
                min="-100" 
                max="100"
                step="0.1"
                onChange = {this.handleChange}
                value={this.state.position}
              />
            </div>
            <div className = "col-sm-6 col-xs-12 slider">
              <input 
                type="range" 
                min="-100" 
                max="100" 
                step="0.1"
                onChange = {this.handleChange}
                value={this.state.position}
              />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
