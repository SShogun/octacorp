import React from "react";
import './Feedback.css'
import logo from '../assets/favicon.png'
// name, email, feedback type, description, screenshots(if any), submit
const Feedback = () => {
  return (
    <div className="w-[100vw] h-[100vh] flex ">
        <div className="w-[50vw] h-full flex justify-start align-middle items-center pl-10">
            <form>
                <br />
                Name:  <input type="text" id="name" required/><br />
                <br />
                Email:   <input type="email" id="email" required/><br />
                <br />
                Feedback type: <select id="feedback" required>
                    <option value="bug">Bug</option>
                    <option value="feature">Course</option>
                    <option value="question">Question</option>
                    <option value="question">Refund</option>
                </select><br />
                <br />
                Description: <input type="text" id="description" required/><br />
                <br />
                Screenshot: <input  type="file" accept=".png,.jpg,.jpeg" id="screenshot"/><br />(If any)
                <br />
                <br />
                <button id="submitBtn" onClick={()=>{submitForm('name','email','feedback','description')}} >Submit</button>
            </form>
        </div>
        <div className="w-[50vw] flex justify-start items-center h-[60vh]">
            <p className="text-5xl">don't be hesitant,<br />ask your queries in our feedback</p>
        </div>
    </div>
  );
};

export default Feedback;