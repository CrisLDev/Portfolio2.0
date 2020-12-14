import React, { useEffect } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

// Redux
import { RootState } from './store'
import {loadUser, setLoading} from './store/actions/authAction';

// Components
import Home from './components/Home/Home';
import TecnologyList from './components/Tecnology/TecnologyList';
import TecnologyForm from './components/Tecnology/TecnologyForm';
import UserActions from "./components/UserActions/UserActions";
import PrivateRoute from "./components/Routing/PrivateRoute";
import PublicRoute from "./components/Routing/PublicRoute";
import { ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
import Loader from './components/Util/Loader';
import Dashboard  from './components/Dashboard/Dashboard';

import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';

const App = () => {

    const { theme } = useSelector((state: RootState) => state.theme);

    const themeToogle = createMuiTheme({
        palette:{
            type: theme === 'dark' ? 'dark' : 'light'
        }
    })

    const {loading} = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();
    // Check if user is loged
    useEffect(() => {
        dispatch(setLoading(true));
        dispatch(loadUser());
    }, [dispatch]);

    if(loading){
        return <Loader/>
    }

    return (
            <ThemeProvider theme={themeToogle}>
                <CssBaseline/>
                <BrowserRouter>
                <Navbar />
                <main>
                    <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/tecnologies" component={TecnologyList} />
                    <Route exact path="/tecnologies/create" component={TecnologyForm} />
                    <Route exact path="/tecnologies/update/:id" component={TecnologyForm} />
                    <PublicRoute exact path="/actions" component={UserActions} />
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    </Switch>
                    <ToastContainer position="bottom-right" />
                </main>
                </BrowserRouter>
            </ThemeProvider>
    )
}

export default App
