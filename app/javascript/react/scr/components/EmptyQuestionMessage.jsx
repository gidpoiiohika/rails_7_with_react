import * as React from 'react'
import * as ReactDOM from 'react-dom'
import "./styles.css";

const EmptyQuestionMessagea = (props) => {
  return(
    <div>
      <div className="mt-5 alert alert-danger alert-dismissible fade show" role="alert">
        <strong className='my_styles_3'>OOps!</strong> No questions found with the tag: {props.tagname}. Please select another optionals list.
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
  )
}

export default EmptyQuestionMessagea
