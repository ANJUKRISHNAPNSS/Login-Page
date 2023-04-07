import React from "react";
import { connect } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import { getList } from "./mainPageAction";
import { useState } from "react";
import Select from 'react-select';



function LoginPage(props) {
    const history = useHistory()
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [role, setRole] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('0')
    let [error, setError] = useState(false)

    const loginfunction = () => {
        const { getList } = props
        if (localStorage.getItem('userName') === userName &&
            localStorage.getItem('password') === password &&
            localStorage.getItem('role') === role &&
            localStorage.getItem('email') === email &&
            localStorage.getItem('number') === number) {
            setError(false)
            history.push('/mainPage')
            getList()
        } else {
            setError(true)
        }
    }
    function changeRole(option) {
        console.log({ option })
        setRole(option.label)
    }

    const dropOptions = [{ value: '1', label: 'QA' }, { value: '2', label: 'Developer' }, { value: '3', label: 'Tester' }, { value: '4', label: 'Admin' }]


    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', marginLeft: 500, marginTop: 100 }}>
            <div style={{ marginLeft: 100 }}>
                <h1 style={{ textAlign: 'left', fontSize: 50 }}>Sign In</h1>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ text: 'left', fontSize: 30 }}>New User?</div>{''}
                    <div style={{ marginLeft: '50px', fontSize: 30 }}><NavLink to={'/createUser'}>Create User</NavLink></div>
                </div>
                <div style={{ textAlign: 'left' }}>
                    <input
                        type='text'
                        placeholder="Enter Name"
                        style={{ width: 600, height: 50, marginTop: 20, fontSize: 20 }}
                        onChange={e => { setUserName(e.target.value) }}
                    />
                </div>
                <div style={{ textAlign: 'left' }}>
                    <input
                        type='password'
                        placeholder="Enter Password"
                        style={{ width: 600, height: 50, marginTop: 20, fontSize: 20 }}
                        onChange={e => { setPassword(e.target.value) }}
                    />
                </div>
                <div style={{ textAlign: 'left' }}>
                    <input
                        type='email'
                        placeholder="Enter Email"
                        style={{ width: 600, height: 50, marginTop: 20, fontSize: 20 }}
                        onChange={e => { setEmail(e.target.value) }}
                    />
                </div>
                <div style={{ textAlign: 'left' }}>
                    <input
                        type='number'
                        placeholder="Enter Phone Number"
                        style={{ width: 600, height: 50, marginTop: 20, fontSize: 20 }}
                        onChange={e => { setNumber(e.target.value) }}
                    />
                </div>
                <div style={{ textAlign: 'left', marginTop: 40 }}>
                    <Select id='select' onChange={changeRole} options={dropOptions} />
                </div>
                <div style={{ textAlign: 'left', marginTop: 10, fontSize: 20 }}>
                    <input
                        type='checkbox'
                        style={{ boxSizing: 90 }}
                    // style={{ width: 400, height: 30, marginTop: 20 }}
                    />
                    Keep me signed in
                </div>
                {error && <div style={{ color: 'red' }}>InValid Entries!</div>}
                <div style={{ textAlign: 'left', marginTop: 20 }}>
                    <button style={{ width: 610, height: 50 }} onClick={loginfunction}>Login</button>
                </div>
                <div></div>
            </div>
        </div>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        getList: () => dispatch(getList())
    }
}

export default connect(null, mapDispatchToProps)(LoginPage)