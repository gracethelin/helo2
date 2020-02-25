import React from 'react'
import {Switch, Route} from "react-router-dom"

import Auth from './components/Auth/Auth'
import Form from './components/Form/Form'
import Post from './components/Post/Post'
import Dashboard from './components/Dashboard/Dashboard'

export default (
    <Switch>
        <Route exact path='/' component={Auth}/>
        <Route path='/Dashboard' component={Dashboard} />
        <Route path='/new' component={Form}/>
        <Route path='/post/:postid' component={Post} />
        
    </Switch>
)