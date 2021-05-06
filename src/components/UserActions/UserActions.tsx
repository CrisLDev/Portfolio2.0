import React, { Fragment, useEffect } from 'react';
import * as Ui from '../../shared/Shared';
import Login from './Login';
import Register from './Register';

const UserActions = () => {

    useEffect(() => {
        document.title = "Inicia Sesión o Regístrate"
    }, [])

    return (
        <Fragment>
            <Ui.Fade in>
                <Ui.Box>
                    <Ui.Box className="banner">
                        <Ui.Container>
                            <Ui.Grid container spacing={3} justify="center">
                                <Ui.Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                                    <Ui.Typography variant="h4" component="h4" gutterBottom>
                                        Inicia seción o registrate.
                                    </Ui.Typography>
                                </Ui.Grid>
                            </Ui.Grid>
                        </Ui.Container>
                    </Ui.Box>
                    <Ui.Container>
                        <Ui.Box pt="3em" pb="3em">
                        <Ui.Grid container spacing={3} justify="center">
                            <Login/>
                            <Register/>
                        </Ui.Grid>
                        </Ui.Box>
                    </Ui.Container>
                </Ui.Box>
            </Ui.Fade>
        </Fragment>
    )
}

export default UserActions
