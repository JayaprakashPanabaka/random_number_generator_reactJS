// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  onChangeRandomNumber = () => {
    // const {randomNumber} = this.state
    this.setState({
      randomNumber: Math.ceil(Math.random() * 100),
    })
  }

  render() {
    const {randomNumber} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            onClick={this.onChangeRandomNumber}
            className="btn"
            type="button"
          >
            Generate
          </button>
          {/* <br /> */}
          <p className="random-num">{randomNumber}</p>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
