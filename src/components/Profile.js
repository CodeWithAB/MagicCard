import userPic from './abhay.jpg'
import  './Profile.css'

function Profile(){
    return(
        <div className="profile">
            <img src={userPic}/>
            <h1>Abhay Yadav</h1>
            <p>
            Student & Learner 👉  <a href="https://github.com/CodeWithAB" target="_blank">weball.io</a>
            </p>
        </div>
    )
}

export default Profile
