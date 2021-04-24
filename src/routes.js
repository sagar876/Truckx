import React from 'react'
import { Route, Switch } from 'react-router-dom'
import App from './App'
import AddUser from './components/components/addUser';


const Routes = () => (
    <App>
        <Switch>
            <Route exact path="/addUser" component={AddUser} />
        </Switch>
    </App> )

export default Routes