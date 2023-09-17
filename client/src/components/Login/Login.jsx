import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button, Paper, TextField, Typography } from '@material-ui/core'

import { login } from '../../actions/auth'
import useStyles from './styles'

const initialState = { username: '', password: '' }

const Login = () => {
    const [loginData, setLoginData] = useState(initialState)
    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyles()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(login(loginData, history))
    };

    return (
        <Paper className={classes.paper} elevation={6}>
            <form autoComplete="off" className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Admin Login</Typography>
                <TextField name="username" variant="outlined" label="Username" type="text" fullWidth value={loginData.username} onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} />
                <TextField name="password" variant="outlined" label="Password" type="password" fullWidth value={loginData.password} onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
            </form>
        </Paper>
    )
}

export default Login
