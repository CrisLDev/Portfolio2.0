import React from 'react';
import * as Ui from '../../shared/Shared';
import {Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../../store';
import { logout } from '../../store/actions/authAction';
import { toogleMode } from '../../store/actions/themeAction';

const Navbar = () => {

    const dispatch = useDispatch();
    const { authenticated } = useSelector((state: RootState) => state.auth);
    const logoutClickHandler = () => {
        dispatch(logout());
    }

    const { theme } = useSelector((state: RootState) => state.theme);

    const themeExist = localStorage.getItem('theme');

    const handleChangeTheme = () => {
        if(themeExist === 'dark'){
            dispatch(toogleMode('light'));
        }else{
            dispatch(toogleMode('dark'));
        }
    }

    return (
            <Ui.AppBar position="fixed" color="default">
                <Ui.Toolbar>
                    <Ui.Container className="d-flex justify-content-center">
                        <Ui.List>
                            <Link to="/" className="nav-link text-uppercase">
                                <Ui.ListItem button>
                                    <Ui.Box ml="0.1rem">
                                        <Ui.Typography color="textSecondary" className="d-flex justify-content-center">
                                        <Ui.Home fontSize="default" />
                                        <span className="ml-1 linkText">inicio</span>
                                        </Ui.Typography>
                                    </Ui.Box>
                                </Ui.ListItem>
                            </Link>
                        </Ui.List>
                        <Ui.List component="nav" aria-labelledby="main navigation" className="d-flex justify-content-center">
                            <Link to="/projects" key="projects" className="nav-link text-uppercase">
                            <Ui.ListItem button>
                                    <Ui.Box ml="0.1rem">
                                        <Ui.Typography color="textSecondary" className="d-flex justify-content-center">
                                        <Ui.AccountTree fontSize="default" />
                                        <span className="ml-1 linkText">proyectos</span>
                                        </Ui.Typography>
                                    </Ui.Box>
                                </Ui.ListItem>
                            </Link>
                            <Link to="/tecnologies" key="tecnologies" className="nav-link text-uppercase">
                                <Ui.ListItem button>
                                    <Ui.Box ml="0.1rem">
                                        <Ui.Typography color="textSecondary" className="d-flex justify-content-center">
                                        <Ui.Extension fontSize="default" />
                                        <span className="ml-1 linkText">tecnologias</span>
                                        </Ui.Typography>
                                    </Ui.Box>
                                </Ui.ListItem>
                            </Link>
                            {!authenticated ? 
                            <Link to="/actions" key="actions" className="nav-link text-uppercase">
                                <Ui.ListItem button>
                                    <Ui.Box ml="0.1rem">
                                        <Ui.Typography color="textSecondary" className="d-flex justify-content-center align-items-center">
                                        <Ui.AccountCircle fontSize="default" />
                                        <span className="ml-1 linkText">usuario</span>
                                        </Ui.Typography>
                                    </Ui.Box>
                                </Ui.ListItem>
                            </Link>
                            :
                            <Ui.Box className="d-flex">
                                <Link to="/dashboard" key="actions" className="nav-link text-uppercase">
                                <Ui.ListItem button>
                                    <Ui.Box ml="0.1rem">
                                        <Ui.Typography color="textSecondary" className="d-flex justify-content-center align-items-center">
                                        <Ui.Dashboard fontSize="default" />
                                        <span className="ml-1 linkText">dashboard</span>
                                        </Ui.Typography>
                                    </Ui.Box>
                                </Ui.ListItem>
                            </Link>
                            <Ui.Box className="nav-link text-uppercase">
                                <Ui.ListItem button onClick={logoutClickHandler}>
                                    <Ui.Box ml="0.1rem">
                                        <Ui.Typography color="textSecondary" className="d-flex justify-content-center align-items-center">
                                            <Ui.ExitToApp fontSize="default" />
                                            <span className="ml-1 linkText">salir</span>
                                        </Ui.Typography>
                                    </Ui.Box>
                                </Ui.ListItem>
                            </Ui.Box>
                            </Ui.Box>
                            }
                            <Ui.Box className="ml-auto nav-link">
                                <Ui.ListItem button onClick={handleChangeTheme}>
                                    <Ui.Box>
                                        <Ui.Typography color="textSecondary">
                                                {theme === 'light' ? <Ui.Brightness4 /> : <Ui.Brightness7 />}
                                        </Ui.Typography>
                                    </Ui.Box>
                                </Ui.ListItem>
                            </Ui.Box>
                        </Ui.List>
                    </Ui.Container>
                </Ui.Toolbar>
            </Ui.AppBar>
    )
}

export default Navbar
