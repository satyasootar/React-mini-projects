import './profile.css';
import { useState } from 'react';

export const Profile = () => {
    const [state, setState] = useState({
        image: "https://s1.playblackdesert.com/web/Static/community_upload/monthly_2019_09/tenor.gif.80bf9593d445b7b0c003ebc6ad37d6bc.gif",
        name: "Satya Sootar",
        email: "satya@gmail.com",
        gender: "Male",
        country: "India"
    });

    const [style, setStyle] = useState({
        width: "500px",
        height: "250px",
        margin: "50px auto",
        padding: "10px",
        display: "flex",
        backgroundColor: "white",
        color: "black",
        borderRadius:"7px"
    });

    const [isDarkMode, setIsDarkMode] = useState(false);

    const getNewUser = async () => {
        let res = await fetch("https://randomuser.me/api/?results=1");
        let data = await res.json();
        console.log(data);
        setState({
            image: data.results[0].picture.large,
            name: data.results[0].name.title + " " + data.results[0].name.first + " " + data.results[0].name.last,
            email: data.results[0].email,
            gender: data.results[0].gender,
            country: data.results[0].location.country
        });
    };

    const toggleMode = () => {
        if (isDarkMode) {
            setStyle({
                ...style,
                backgroundColor: "white",
                color: "black"
            });
        } else {
            setStyle({
                ...style,
                backgroundColor: "black",
                color: "white"
            });
        }
        setIsDarkMode(!isDarkMode);
    };

    return (
        <div className='card' style={style}>
            <div className='imageContainer'>
                <img src={state.image} alt="User" />
            </div>
            <div className='detailsContainer'>
                <dl className='details'>
                    <dt><b>User Name</b></dt>
                    <dd>{state.name}</dd>

                    <dt><b>User email</b></dt>
                    <dd>{state.email}</dd>

                    <dt><b>Gender</b></dt>
                    <dd>{state.gender}</dd>

                    <dt><b>Country</b></dt>
                    <dd>{state.country}</dd>
                </dl>
                <button onClick={getNewUser}>Change user</button>
                <br />
                <div className="toggle-switch">
                    <input className="toggle-input" id="toggle" type="checkbox" onChange={toggleMode} />
                    <label className="toggle-label" htmlFor="toggle"></label>
                </div>
            </div>
        </div>
    );
};
