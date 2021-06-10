import { useDispatch, useSelector } from 'react-redux';
import { Fragment, useEffect } from 'react'
import * as Ui from "../../shared/Shared";
import UserCard from './UserCard';
import TecnologyItem from '../Tecnology/TecnologyItem';
import UserInfoSkeleton from '../Util/Skeletons/UserInfo';
import TecnologySkeleton from '../Util/Skeletons/Tecnology';
import { RootState } from '../../store';
import { Tecnology } from '../../interfaces/Tecnology';
import {getTecnologies} from '../../store/actions/tecnologiesAction';
import { Link } from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const Dashboard = (props:any) => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [t, i18n] = useTranslation("global");

    const tecnologies = useSelector((state: RootState) => state.tecnology.tecnologies);

    const user = useSelector((state: RootState) => state.auth.user);

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
*/
    useEffect(() => {
        document.title = t("Titles.Dashboard")
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Fragment>
            <Ui.Fade in>
                <Ui.Container style={{marginTop: `9em`}}>
                    <Ui.Grid container spacing={3} justify="center">
                        <Ui.Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                            <Ui.Box>
                                {   user ?
                                    <UserCard user={user} /> :
                                    <UserInfoSkeleton />
                                }
                            </Ui.Box>
                        </Ui.Grid>
                        <Ui.Grid item xs={12} sm={12} md={12} lg={8} xl={8}>
                            <Ui.Box style={{overflowX: `hidden`, maxHeight: `464px`}}>
                                <Ui.Grid container spacing={3}>
                                    <Ui.Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                                        <Ui.Paper elevation={3}>
                                            <Ui.Box className="d-flex justify-content-between" paddingLeft="1em" paddingRight="1em" paddingTop="1em" paddingBottom="1em">
                                                <Ui.Typography variant="h6" className="text-uppercase m-0">
                                                    {t("Titles.Tecnologies")}
                                                </Ui.Typography>
                                                <Link to="/tecnologies/create">
                                                    <Ui.Button variant="contained" color="primary">
                                                        {t("Text.Create")}
                                                    </Ui.Button>
                                                </Link>
                                            </Ui.Box>
                                        </Ui.Paper>
                                    </Ui.Grid>
                                    {
                                        tecnologies.length <= 0 ? 
                                            <Ui.Grid container spacing={3}>
                                                <TecnologySkeleton/>
                                                <TecnologySkeleton/>
                                                <TecnologySkeleton/>
                                            </Ui.Grid>
                                        :
                                        tecnologies.map((tecnology: Tecnology) => {
                                            return <TecnologyItem tecnology={tecnology} key={tecnology._id} />
                                        })
                                    }
                                </Ui.Grid>
                            </Ui.Box>
                        </Ui.Grid>
                    </Ui.Grid>
                </Ui.Container>
            </Ui.Fade>
        </Fragment>
    )
}

export default Dashboard