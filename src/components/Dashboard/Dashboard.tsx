import { connect } from 'react-redux';
import React, { Fragment, useEffect, useState } from 'react'
import * as Ui from "../../shared/Shared";
import { User } from '../../interfaces/User';
import UserCard from './UserCard';

const mapStateToProps = (state: any) => {
    return {
        user: state.auth.user
    }
}

const Dashboard = (props:any) => {
/*
    const [user, setUser] = useState<User>();

    const loadUser = async () => {
        setUser(props.user);
    }

    useEffect(() => {
        loadUser()
    }, []);*/

    return (
        <Fragment>
            <Ui.Fade in>
                <Ui.Container>
                    <Ui.Grid container spacing={3} justify="center">
                        <Ui.Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                            <Ui.Box mt="8em">
                                <UserCard user={props.user} />
                            </Ui.Box>
                        </Ui.Grid>
                    </Ui.Grid>
                </Ui.Container>
            </Ui.Fade>
        </Fragment>
    )
}

export default connect(mapStateToProps)(Dashboard)
