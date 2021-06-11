import React from 'react';
import * as Ui from '../../shared/Shared';
import {Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { RootState } from '../../store';
import { logout } from '../../store/actions/authAction';
import { toogleMode } from '../../store/actions/themeAction';
import { toogleLanguage } from '../../store/actions/languageAction';
import {useTranslation} from 'react-i18next';

const Navbar = () => {

    const dispatch = useDispatch();
    const { authenticated } = useSelector((state: RootState) => state.auth);
    const logoutClickHandler = () => {
        dispatch(logout());
    }

    const { theme } = useSelector((state: RootState) => state.theme);

    const [t, i18n] = useTranslation("global");

    const { language } = useSelector((state: RootState) => state.language);

    const themeExist = localStorage.getItem('theme');

    const languageExist = localStorage.getItem('language');

    const handleChangeTheme = () => {
        if(themeExist === 'dark'){
            document.getElementsByTagName("body")[0].classList.replace("darkScrollBar", "lightScrollBar");
            dispatch(toogleMode('light'));
        }else{
            document.getElementsByTagName("body")[0].classList.replace("lightScrollBar", "darkScrollBar");
            dispatch(toogleMode('dark'));
        }
    }

    const handleChangeLanguage = () => {
        if(languageExist === 'es'){
            dispatch(toogleLanguage('en'));
            i18n.changeLanguage("en")
        }else{
            dispatch(toogleLanguage('es'));
            i18n.changeLanguage("es")
        }
    }

    return (
            <Ui.AppBar position="fixed" color="default">
                <Ui.Toolbar>
                    <Ui.Container className="d-flex justify-content-center">
                        <Ui.List component="nav" aria-labelledby="main navigation" className="d-flex flex-nowrap overflow-hidden" id="navScroll">
                            {!authenticated ? 
                            <Link to="/" className="nav-link text-uppercase link-shadow">
                                <Ui.ListItem button>
                                    <Ui.Box ml="0.1rem">
                                        <Ui.Typography color="textSecondary" className="d-flex justify-content-center">
                                        <Ui.Home fontSize="default" />
                                        <span className="ml-1 linkText">{t("Titles.Home")}</span>
                                        </Ui.Typography>
                                    </Ui.Box>
                                </Ui.ListItem>
                            </Link>
                            :
                            <div>
                                <Link to="/projects" key="projects" className="nav-link text-uppercase link-shadow">
                            <Ui.ListItem button>
                                    <Ui.Box ml="0.1rem">
                                        <Ui.Typography color="textSecondary" className="d-flex justify-content-center">
                                        <Ui.AccountTree fontSize="default" />
                                        <span className="ml-1 linkText">{t("Titles.Projects")}</span>
                                        </Ui.Typography>
                                    </Ui.Box>
                                </Ui.ListItem>
                            </Link>
                            <Link to="/tecnologies" key="tecnologies" className="nav-link text-uppercase link-shadow">
                                <Ui.ListItem button>
                                    <Ui.Box ml="0.1rem">
                                        <Ui.Typography color="textSecondary" className="d-flex justify-content-center">
                                        <Ui.Extension fontSize="default" />
                                        <span className="ml-1 linkText">{t("Titles.Tecnologies")}</span>
                                        </Ui.Typography>
                                    </Ui.Box>
                                </Ui.ListItem>
                            </Link>
                            <Ui.Box className="d-flex">
                                <Link to="/dashboard" key="actions" className="nav-link text-uppercase link-shadow">
                                <Ui.ListItem button>
                                    <Ui.Box ml="0.1rem">
                                        <Ui.Typography color="textSecondary" className="d-flex justify-content-center align-items-center">
                                        <Ui.Dashboard fontSize="default" />
                                        <span className="ml-1 linkText">{t("Titles.Dashboard")}</span>
                                        </Ui.Typography>
                                    </Ui.Box>
                                </Ui.ListItem>
                            </Link>
                            <Ui.Box className="nav-link text-uppercase link-shadow">
                                <Ui.ListItem button onClick={logoutClickHandler}>
                                    <Ui.Box ml="0.1rem">
                                        <Ui.Typography color="textSecondary" className="d-flex justify-content-center align-items-center">
                                            <Ui.ExitToApp fontSize="default" />
                                            <span className="ml-1 linkText">{t("Text.Close")}</span>
                                        </Ui.Typography>
                                    </Ui.Box>
                                </Ui.ListItem>
                            </Ui.Box>
                            </Ui.Box>
                            </div>
                            }
                            <Ui.Box className="ml-auto nav-link link-shadow">
                                <Ui.ListItem button onClick={handleChangeTheme}>
                                    <Ui.Box>
                                        <Ui.Typography color="textSecondary">
                                                {theme === 'light' ? <Ui.Brightness4 /> : <Ui.Brightness7 />}
                                        </Ui.Typography>
                                    </Ui.Box>
                                </Ui.ListItem>
                            </Ui.Box>
                            <Ui.Box className="ml-auto nav-link link-shadow">
                                {language === 'es' ? 
                                    <Ui.ListItem button onClick={handleChangeLanguage}>
                                                <Ui.Typography color="textSecondary" className="d-flex justify-content-center align-items-center"><Ui.Translate fontSize="default" /><span className="ml-1 linkText">EN</span></Ui.Typography>
                                    </Ui.ListItem>
                                    :
                                    <Ui.ListItem button onClick={handleChangeLanguage}>
                                                <Ui.Typography color="textSecondary" className="d-flex justify-content-center align-items-center"><Ui.Translate fontSize="default" /><span className="ml-1 linkText">ES</span></Ui.Typography>
                                    </Ui.ListItem>
                                }
                            </Ui.Box>
                        </Ui.List>
                    </Ui.Container>
                </Ui.Toolbar>
            </Ui.AppBar>
    )
}

export default Navbar
