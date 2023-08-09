import Angular_img from "./assets/angular-image.png"
import React_img from "./assets/react-image.png"
import Vue_img from "./assets/vue-image.png"
import NextJs_img from "./assets/next.js.png"
import Java_img from "./assets/java.png"

const courseMap = {
    Angular:Angular_img,
    ReactJs:React_img,
    NextJS:NextJs_img,
    VueJs:Vue_img,
    Java:Java_img
}

function Course({courseName}) {
    return (
        <>
            <div>
                {/*<h1>Kerem Kenan Eren <u>Courses</u></h1>*/}
                <img src={courseMap[courseName]} alt=""/>
            </div>
        </>
    );
}

export default Course;