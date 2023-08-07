import './App.css'
import Course from './Course'
import {useState} from "react";


function getRandomCourse(){
    const courseArray = ["Angular","ReactJs","NextJs","VueJs","Java"]
    return  courseArray[Math.floor(Math.random()*courseArray.length)]
}

function App() {

    
  // const [value, setValue] = useState(0)

  // const clickSetValue = () => {
  //   setValue(value + 1)
  // }

    const [courses, setCourse] = useState([]);
    
    const handleClick = () => {
        setCourse([...courses, getRandomCourse()])
    }

    const courseList =   courses.map((course, index) => {
        return <Course key={index} courseName={course}/>;
    });

    return (
    <>
      {/* <div>
        <h1>Kerem Kenan Eren</h1>
        <button onClick={clickSetValue}>Arttır</button>
        <p>{value}</p>
      </div> */}
        <button onClick={handleClick}>Add Course</button>
       <div className="wrapper">
           {courseList}
       </div>


    </>
  )
}

export default App
