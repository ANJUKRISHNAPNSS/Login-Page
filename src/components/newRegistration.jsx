import { MenuItem } from "@mui/material";
import React, { useState } from "react";
import Select from 'react-select';
import { NavLink, useHistory } from "react-router-dom";

function Newregistration() {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('0')
    function changeRole(option) {
        console.log({ option })
        setRole(option.label)
    }

    let history = useHistory()
    function setAccount() {
        localStorage.setItem('userName', userName)
        localStorage.setItem('password', password)
        localStorage.setItem('role', role)
        localStorage.setItem('email', email)
        localStorage.setItem('number', number)

        history.push('/')
    }

    const dropOptions = [{ value: '1', label: 'QA' }, { value: '2', label: 'Developer' }, { value: '3', label: 'Tester' }, { value: '4', label: 'Admin' }]

    return (
        <div style={{ marginLeft: 550 }}>
            <h1 style={{ textAlign: 'left', fontSize: 50 }}>Create New Account</h1>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ text: 'left', marginTop: 50, fontSize: 40 }}>Enter Name</div>
                <div style={{ text: 'left' }}><input type='text' style={{ width: 600, height: 50, fontSize: 30, marginTop: 10 }} onChange={(e => { setUserName(e.target.value) })} /></div>
                <div style={{ text: 'left' }}>Password</div>
                <div style={{ text: 'left' }}><input type='password' style={{ width: 600, height: 50, fontSize: 30, marginTop: 10 }} onChange={(e => { setPassword(e.target.value) })} /></div>
                <div style={{ text: 'left' }}>Enter Email Id</div>
                <div style={{ text: 'left' }}><input type='email' style={{ width: 600, height: 50, fontSize: 30, marginTop: 10 }} onChange={(e => { setEmail(e.target.value) })} /></div>
                <div style={{ text: 'left' }}>Enter Phone Number</div>
                <div style={{ text: 'left' }}><input type='number' style={{ width: 600, height: 50, fontSize: 30, marginTop: 10 }} onChange={(e => { setNumber(e.target.value) })} /></div>
                <div style={{ text: 'left' }}>Select Profession</div>
                <div style={{ text: 'left', width: 610, height: 50 }}><Select id='select' onChange={changeRole} options={dropOptions} /></div>
                <div><button onClick={setAccount} style={{ width: 610, height: 50, marginTop: 40, fontSize: 20 }}>Create New Account</button></div>
                <div style={{ marginTop: 20, fontSize: 20 }}><NavLink to={'/'} onClick={setAccount}>Back To Login</NavLink></div>

            </div>
        </div>
    )
}

export default Newregistration