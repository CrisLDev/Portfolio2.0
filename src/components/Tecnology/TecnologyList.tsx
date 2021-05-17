import React, { useEffect, useState } from 'react';
import { Tecnology } from '../../interfaces/Tecnology';
import TecnologyItem from './TecnologyItem';
import * as Ui from '../../shared/Shared';
import {Link} from 'react-router-dom';
import { getTecnologies } from '../../store/actions/tecnologiesAction';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {useTranslation} from 'react-i18next';
import Carousel from 'react-material-ui-carousel';

const useStyles = Ui.makeStyles({
    fixedAddButton: {
        position: `fixed`,
        bottom: `1em`,
        right: `1em`
    }
});

const TecnologyList = () => {

    const classes = useStyles();

    const [tecnologies, setTecnologies] = useState<Tecnology[]>([]);

    const dispatch = useDispatch();

    const [t, i18n] = useTranslation("global");

    const tecnologiesInStore = useSelector((state: RootState) => state.tecnology.tecnologies);

    useEffect(() => {
        dispatch(getTecnologies());
        setTecnologies(tecnologiesInStore);
        document.title = "Tecnologías"
    }, [tecnologiesInStore.length, dispatch, setTecnologies]);

    return (
        <Ui.Fade in>
            <Ui.Box>
                <Ui.Box className="banner">
                    <Ui.Container>
                        <Ui.Grid container spacing={3} justify="center">
                            <Ui.Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                                <Ui.Typography variant="h4" component="h4" gutterBottom className="text-uppercase">
                                    {t("Titles.List-Tecnology")}
                                </Ui.Typography>
                            </Ui.Grid>
                        </Ui.Grid>
                    </Ui.Container>
                </Ui.Box>
                <Ui.Container>
                    <Ui.Box pt="3em" pb="3em">
                        <Ui.Grid container spacing={3}>
                            {tecnologies.map((tecnology) => {
                                return <TecnologyItem tecnology={tecnology} key={tecnology._id} />
                            })}
                        </Ui.Grid>
                        <Link to="/tecnologies/create">
                            <Ui.Fab color="primary" variant="extended" className={classes.fixedAddButton}>
                                <Ui.Add />
                                {t("Text.New")}
                            </Ui.Fab>
                        </Link>
                    </Ui.Box>
                </Ui.Container>
            </Ui.Box>
        </Ui.Fade>
    )
}

export default TecnologyList