import * as React from 'react'
// import { useState } from 'react'
import * as ReactDOM from 'react-dom'

class QuestionDetail extends React.Component {
  // const [likeCount, setLikeCount ] = useState(0)

  constructor(props) {
    super(props)
    this.state = { 
      likeCount: 0,
      dislikeCount: 0
    }

    this.updateLikeCount = this.updateLikeCount.bind(this)
    this.updateDislikeCount = this.updateDislikeCount.bind(this)
  }

  updateLikeCount() {
    this.setState(function(state){
      return {
        likeCount: state.likeCount + 1
      }
    })
  }

  updateDislikeCount() {
    this.setState(function(state){
      return {
        dislikeCount: state.dislikeCount + 1
      }
    })
  }

  render() {
    return(
      <div className='card rounded-0 mt-3'>
        <div className='card-body'>
          <h3 className='card-title'>{this.props.question.title}</h3>
          <p className='lead'>
            <span className='badge bg-primary'>{this.props.question.tag}</span>
          </p>
          <button type="button" className="btn btn-primary position-relative" onClick={this.updateLikeCount} 
            style={{marginRight: 1 + 'em'}}>
            Like
            { this.state.likeCount > 0 ?
              <span className='position-absolute top-0 start-100 
              translate-middle badge rounded-pill bg-danger'>{this.state.likeCount}</span> : ''
            }
          </button>

          <button type="button" className="btn btn-primary position-relative" onClick={this.updateDislikeCount}>
            Dislike
            { this.state.dislikeCount > 0 ?
              <span className='position-absolute top-0 start-100 
              translate-middle badge rounded-pill bg-danger'>{this.state.dislikeCount}</span> : ''
            }
          </button>
        </div>
      </div>
    )
  }
}

export default QuestionDetail
