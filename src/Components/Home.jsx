import { useEffect, useState } from "react"
import axios from 'axios'

const Home = () => {

    const [user, setUser] = useState({
        firstName: '',
        lastName: '',
        email: '',
        jobTitle: "Software",
        gender: "male",
        skin: "fair"
    });

    const [userData, setUserData] = useState()

    useEffect(() => {
        axios({
            method: 'get',
            url: "/api/users",

        })
            .then((res) => {
                setUserData(res.data);
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])


    function handleChange(e) {
        const value = e.target.value;

        setUser({
            ...user,
            [e.target.name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault(); // Prevent the rerendring when form is submited and new user is created.
        const userData = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            jobTitle: user.jobTitle,
            gender: user.gender,
            skin: user.skin
        }

        axios({
            method: 'post',
            url: "/api/users",
            headers: { 'content-type': 'application/x-www-form-urlencoded' }, // very-very important line to include
            data: userData,
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            })

    }

    function handleDelete(userId) {

        axios({
            method: 'delete',
            url: `/api/users/${userId}`
        })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))


        // this line are used to update the UI and rerender the page
        const filterData = userData.filter((elm) => {
            return elm._id !== userId
        })
        // // console.log(filterData)
        setUserData(filterData);

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="userfield"> FirstName : </label>
                <input type="text" name="firstName" onChange={handleChange} />

                <label htmlFor="">LastName :</label>
                <input type="text" name="lastName" onChange={handleChange} />

                <label htmlFor="">Email :</label>
                <input type="email" name="email" onChange={handleChange} />

                <label htmlFor="">JobTitle :</label>
                <input type="text" name="jobTitle" />

                <label htmlFor="">Gender :</label>
                <input type="text" name="gender" />

                <label htmlFor="">Skin :</label>
                <input type="text" name="skin" />

                <button type="submit">Submit</button>
            </form>

            <div><h1>User Data</h1></div>
            {
                userData && userData.map((user) => (
                    <div key={user._id}>
                        <h3>{user.firstName}</h3>
                        <h3>{user.lastName}</h3>
                        <h3>{user.email}</h3>
                        <button type="submit" onClick={() => handleDelete(user._id)} >Delete</button>
                        <br />
                    </div>
                ))
            }
        </>
    )
}

export default Home