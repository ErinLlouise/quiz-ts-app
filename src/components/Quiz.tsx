import React, { useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import { QuestionData } from '../data/Questions'

const Quiz = () => {
    const [score, setScore] = useState(0)
    const id = useParams()
    const question: any = QuestionData.find((question) => question.id === id)

    const checkUserAnswer = (isCorrect: any) => {
        isCorrect ? setScore(score + 1) : setScore(score + 0)

    }
    return (
        <>
          <div>
              {
                  id < 11 ? (
                      <div>
                          <h2>{question?.question}</h2>
                          <Link to={`/quiz/${Number(id) + 1}`} >
                              <div>
                                  <button onClick={() => checkUserAnswer(question?.options[0].isCorrect)}>{question?.options[0].option}</button>
                              </div>
                              <div>
                                  <button onClick={() => checkUserAnswer(question?.options[1].isCorrect)}>{question?.options[1].option}</button>
                              </div>
                              <div>
                                  <button onClick={() => checkUserAnswer(question?.options[2].isCorrect)}>{question?.options[2].option}</button>
                              </div><div>
                                  <button onClick={() => checkUserAnswer(question?.options[3].isCorrect)}>{question?.options[3].option}</button>
                              </div>
                          </Link>
                      </div>
                  ) : (
                      <div>
                          <h2>Your Final Score is {score}/10</h2>
                          { score < 5 ? (
                              <div>
                                  <h1>Almost There!</h1>
                                  <Link to='/'>
                                      <button>Try Again</button>
                                  </Link>
                              </div>
                          ) : (
                              <h1>Well done!</h1>
                          )}
                      </div>
                  )
              }
          </div>
        </>
    )
}

export default Quiz