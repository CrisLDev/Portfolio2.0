import React, { useEffect, useState } from 'react';
import { Tecnology } from '../../interfaces/Tecnology';
import * as tecnologyService from '../../services/TecnologyService';
import TecnologyItem from './TecnologyItem';
import * as Ui from '../../shared/Shared';
import {Link} from 'react-router-dom';

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
    
    const loadTecnologies = async () => {
        const res = await tecnologyService.getTecnologies();
        //Whith this code we can formated tecnologies for the last tecnology apeart in first place
        /*const formatedTecnologies = res.data.map(tecnology => {
            return {
                ...tecnology,
                createdAt: tecnology.createdAt ? new Date(tecnology.createdAt): new Date(),
                updatedAt: tecnology.updatedAt ? new Date(tecnology.updatedAt): new Date(),
            }
        })
        .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());*/
        setTecnologies(res.data);
    }

    useEffect(() => {
        loadTecnologies()
    }, []);

    return (
        <Ui.Fade in>
            <Ui.Box>
                <Ui.Box className="banner">
                    <Ui.Container>
                        <Ui.Grid container spacing={3} justify="center">
                            <Ui.Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                                <Ui.Typography variant="h4" component="h4" gutterBottom>
                                    Estas son las tecnologías con las que he trabajado.
                                </Ui.Typography>
                            </Ui.Grid>
                        </Ui.Grid>
                    </Ui.Container>
                </Ui.Box>
                <Ui.Container>
                    <Ui.Box pt="3em" pb="3em">
                        <Ui.Grid container spacing={3} justify="center">
                            {tecnologies.map((tecnology) => {
                                return <TecnologyItem tecnology={tecnology} key={tecnology._id} />
                            })}
                        </Ui.Grid>
                        <Link to="/tecnologies/create">
                            <Ui.Fab color="primary" variant="extended" className={classes.fixedAddButton}>
                                <Ui.Add />
                                Nuevo
                            </Ui.Fab>
                        </Link>
                    </Ui.Box>
                </Ui.Container>
            </Ui.Box>
        </Ui.Fade>
    )
}

export default TecnologyList