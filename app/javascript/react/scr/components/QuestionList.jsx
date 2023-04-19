import * as React from 'react'
import { useState, useEffect } from 'react'
import * as ReactDOM from 'react-dom'
import QuestionDetail from './QuestionDetail'
import EmptyQuestionMessagea from './EmptyQuestionMessage'

const QuestionList = () => {

  const questionsTags = [
    { label: 'All', value: 0 },
    { label: 'Ruby', value: 1 },
    { label: 'React', value: 2 },
    { label: 'Rails', value: 3 },
    { label: 'Bootstrap', value: 4 }
  ]

  const [questionsList, setQuestionsList] = useState([])
  const [selectedOption, setSelectedOption] = useState(questionsTags[0].value)

  const questionsUrl = 'http://localhost:3000/api/v1/questions'

  const fetchQuestionList = () => {
    fetch(questionsUrl)
      .then(response => response.json())
      .then((data) => {
        setQuestionsList(data)
      })
  }

  useEffect(() => {
    fetchQuestionList()
  }, [])

  const updateSelectItem = (event) => {
    setQuestionsList([])
    setSelectedOption(event.target.value)
    fetch(questionsUrl + '/' + `?tags=${questionsTags[event.target.value].label}`)
        .then(response => response.json())
        .then((data) => {
          setQuestionsList(data)
        })
  }

  return(
    <div className='row'>
      <div className='col-lg-10 mx-auto'>
        <p className='lead fw-bold'>Fileter Question by Tags</p>
        <select className='form-select form-select-lg' value={selectedOption} onChange={event => updateSelectItem(event)}>
          {questionsTags.map(tag => (
            <option key={tag.value} value={tag.value}>{tag.label}</option>
          ))}
        </select>
        { questionsList.length > 0 ?
          questionsList.map((question) => 
            <QuestionDetail question={question} key={question.id} />) : <EmptyQuestionMessagea tagname={questionsTags[selectedOption].label}/>
        }
      </div>
    </div>
  )
}

export default QuestionList
