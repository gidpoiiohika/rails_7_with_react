import * as React from 'react'
import * as ReactDOM from 'react-dom'

const QuestionList = () => {
  const questionList = [
      {
          title: 'test title 1',
          tag: 'Ruby'
      },
      {
          title: 'test title 2',
          tag: 'Ruby'
      },
      {
          title: 'test title 3',
          tag: 'Ruby'
      }
  ]

  return(
    <div className='row'>
      <div className='col-lg-10 mx-auto'>
        {questionList.map((question) =>
          <div className='card rounded-0 mt-3'>
            <div className='card-body'>
              <h3 className='card-title'>{question.title}</h3>
              <p className='lead'>
                <span className='badge bg-primary'>{question.tag}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default QuestionList