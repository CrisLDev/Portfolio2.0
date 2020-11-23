import { connect, useDispatch, useSelector } from 'react-redux';
import React, { Fragment, useEffect } from 'react'
import * as Ui from "../../shared/Shared";
import UserCard from './UserCard';
import TecnologyItem from '../Tecnology/TecnologyItem';
import { RootState } from '../../store';
import { Tecnology } from '../../interfaces/Tecnology';
import {getTecnologies} from '../../store/actions/tecnologiesAction';

const mapStateToProps = (state: any) => {
    return {
        user: state.auth.user
    }
}

const Dashboard = (props:any) => {

    const tecnologies = useSelector((state: RootState) => state.tecnology.tecnologies);

    const dispatch = useDispatch();

    
    useEffect(() => {
        if(tecnologies.length <= 0){
            dispatch(getTecnologies());
        }
    }, [tecnologies.length, dispatch]);

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
                        <Ui.Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Ui.Grid container spacing={3} justify="center">
                                <Ui.Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                    <Ui.Paper elevation={3}>
                                        <Ui.Box className="d-flex justify-content-between" paddingLeft="1em" paddingRight="1em" paddingTop="1em" paddingBottom="1em">
                                            <Ui.Typography variant="h6" className="text-uppercase m-0">
                                                Tecnologias
                                            </Ui.Typography>
                                            <Ui.Button variant="contained" color="primary">
                                                Crear
                                            </Ui.Button>
                                        </Ui.Box>
                                    </Ui.Paper>
                                </Ui.Grid>
                                {tecnologies.map((tecnology: Tecnology) => {
                                    return <TecnologyItem tecnology={tecnology} key={tecnology._id} />
                                })}
                            </Ui.Grid>
                        </Ui.Grid>
                    </Ui.Grid>
                </Ui.Container>
            </Ui.Fade>
        </Fragment>
    )
}

export default connect(mapStateToProps)(Dashboard)
