import React from 'react'
import './Test.css'

const Test = () => {
  return (
    <>
        
        <ul>
        <h1 className='test-heading'>&#8649;Things to take care of...</h1>
          <li >Component folder &#8649; new folder(with your feature Name like "NewOrder")</li>
          <br/>
          <li>Each feature folder have two files (Only with .js and .css) like NewOrder.js and NewOrder.css </li>
          <br/>
          <li>className should be in this format for all the Components featureNickname-className like "no-heading","test-heading"</li>
          <br/>
          <li>Function name should be in camelCase and readable format like handleOnchange,onClickEvent etc</li>
          <br/>
          <li className='text-primary'>You can use bootstrap classes it has been already imported in index.js</li>
          <br/>
          <li>You can Find all color code from app.css file</li>
        </ul>
        <marquee><h1>Aeeeye haaye!</h1></marquee>
    </>
  )
}

export default Test