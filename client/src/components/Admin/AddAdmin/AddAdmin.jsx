import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { Paper, Typography, TextField, Button } from '@material-ui/core'

import { createAdmin } from '../../../actions/auth'
import useStyles from './styles'

const initialState = { username: '', password: '' }

const AddAdmin = () => {
    const [adminData, setAdminData] = useState(initialState)
    const dispatch = useDispatch()
    const history = useHistory()
    const classes = useStyles()

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(createAdmin(adminData, history))
        setAdminData({ username: '', password: '' })
        history.push('/admin')
    }

    return (
        <Paper className={classes.paper} elevation={6}>
            <form autoComplete="off" className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Create New Admin</Typography>
                <TextField name="username" variant="outlined" label="Username" type="text" fullWidth value={adminData.username} onChange={(e) => setAdminData({ ...adminData, username: e.target.value })} />
                <TextField name="password" variant="outlined" label="Password" type="password" fullWidth value={adminData.password} onChange={(e) => setAdminData({ ...adminData, password: e.target.value })} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Create</Button>
            </form>
        </Paper>
    )
}

export default AddAdmin
