import React from 'react'
import "./form.css"

const Form = () => {
  return (
    <div className="form">
        <form action="mailto:nareshkumar12092003@gmail.com" method="post" >
            <label>Your Name</label>
            <input type="text"></input>
            <label>Mobile No.</label>
            <input type="text"></input>
            <label>E-mail</label>
            <input type="email"></input>
            <label>Your Message</label>
            <textarea rows="6" placeholder="Type Your Message Here"></textarea>
            <button className="btn">Submit</button>
        </form>
    </div>
  )
}

export default Form