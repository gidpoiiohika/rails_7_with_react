import * as React from 'react'
import * as ReactDOM from 'react-dom'
import QuestionDetail from './QuestionDetail'

const QuestionList = () => {
  const questionList = [
      {   id: 1,
          title: 'test title 1',
          tag: 'Ruby'
      },
      {   id: 2,
          title: 'test title 2',
          tag: 'Ruby'
      },
      {   id: 3,
          title: 'test title 3',
          tag: 'Ruby'
      }
  ]

  return(
    <div className='row'>
      <div className='col-lg-10 mx-auto'>
        {questionList.map((question) =>
          <QuestionDetail question={question} key={question.id}/>
        )}
      </div>
    </div>
  )
}

export default QuestionList
