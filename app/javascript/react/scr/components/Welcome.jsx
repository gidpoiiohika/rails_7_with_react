import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import App from './App'
import QuestionList from './QuestionList'

const Welcome = () => {
  return(
    <div>
      <div>
        <App />
      </div>
      <div className='container'>
        <QuestionList />
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('welcome'))
root.render(
  <Welcome />
)

export default Welcome
