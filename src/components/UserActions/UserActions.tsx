import React, { Fragment } from 'react';
import * as Ui from '../../shared/Shared';
import Login from './Login';
import Register from './Register';

const UserActions = () => {
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
                    <Ui.Container style={{backgroundColor: `rgba(243, 243, 243, 0.30)`}}>
                        <Ui.Box pt="3em" pb="3em">
                        <Ui.Box style={{display: `block`, whiteSpace: `nowrap`, position: `relative`}}>
                            <Ui.List style={{overflow: `auto`}}>
                                <Ui.Button color="primary">Iniciar Seción</Ui.Button>
                                <Ui.Button color="secondary" className="ml-1">Registrate</Ui.Button>
                            </Ui.List>
                        </Ui.Box>
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
