import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/home'
import AppBar from '@material-ui/core/AppBar'
import Menu from './components/menu'
import CssBaseline from '@material-ui/core/CssBaseline'
import Container from '@material-ui/core/Container'
import Builder from './pages/builder'

export default () => {
    return (
        <>
            <CssBaseline />

            <AppBar position='static'>
                <Menu></Menu>
            </AppBar>

            <Switch>
                <Route exact='true' path='/'>
                    <Home />
                </Route>
                <Route path='/builder'>
                    <Builder />
                </Route>
            </Switch>
        </>
    )
}
