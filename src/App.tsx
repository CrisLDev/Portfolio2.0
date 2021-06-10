import React, { useEffect } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

// Redux
import { RootState } from './store'
import {loadUser, setLoading} from './store/actions/authAction';

// Components
import Home from './components/Home/Home';
import TecnologyList from './components/Tecnology/TecnologyList';
import TecnologyForm from './components/Tecnology/TecnologyForm';
import ProjectList from './components/Project/ProjectList';
import ProjectForm from './components/Project/ProjectForm';
import UserActions from "./components/UserActions/UserActions";
import PrivateRoute from "./components/Routing/PrivateRoute";
import PublicRoute from "./components/Routing/PublicRoute";
import { ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux';
import Loader from './components/Util/Loader';
import Dashboard  from './components/Dashboard/Dashboard';

import {ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {CssBaseline} from '@material-ui/core';
import { toogleLanguage } from './store/actions/languageAction';

const App = () => {

    const { theme } = useSelector((state: RootState) => state.theme);

    const themeToogle = createMuiTheme({
        palette:{
            type: theme === 'dark' ? 'dark' : 'light'
        }
    })

    if(theme === 'dark'){
        document.getElementsByTagName("body")[0].classList.replace("lightScrollBar", "darkScrollBar");
    }

    const {loading} = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch();

    const local = async () => {
        await localStorage.removeItem('language');
        await localStorage.setItem('language', 'es');
        await dispatch(toogleLanguage('es'));
    }

    // Check if user is loged
    useEffect(() => {
        local();
        dispatch(setLoading(true));
        dispatch(loadUser());
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    <PrivateRoute exact path="/tecnologies" component={TecnologyList} />
                    <PrivateRoute exact path="/tecnologies/create" component={TecnologyForm} />
                    <PrivateRoute exact path="/tecnologies/update/:id" component={TecnologyForm} />
                    <PrivateRoute exact path="/projects" component={ProjectList} />
                    <PrivateRoute exact path="/projects/create" component={ProjectForm} />
                    <PrivateRoute exact path="/projects/update/:id" component={ProjectForm} />
                    <PublicRoute exact path="/actions" component={UserActions} />
                    <PrivateRoute exact path="/dashboard" component={Dashboard} />
                    <Redirect from="*" to="/" />
                    </Switch>
                    <ToastContainer position="bottom-right" />
                </main>
                </BrowserRouter>
            </ThemeProvider>
    )
}

export default App
