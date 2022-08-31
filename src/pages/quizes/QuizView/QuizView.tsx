import React from 'react'
import { useParams } from 'react-router-dom'
const QuizView = () => {
    const {category,id} = useParams()
  return (
    <div>QuizView  {category}{id}</div>
  )
}

export default QuizView