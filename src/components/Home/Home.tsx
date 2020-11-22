import React, { useEffect, useState } from 'react';
import * as Ui from '../../shared/Shared';
import * as tecnologyService from '../../services/TecnologyService';
import TecnologyItem from '../Tecnology/TecnologyItem';
import { Tecnology } from '../../interfaces/Tecnology';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
const Home = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tecnologies, setTecnologies] = useState<Tecnology[]>([]);
    
    const loadTecnologies = async () => {
        const res = await tecnologyService.getTecnologies();
        setTecnologies(res.data);
    }

    const { theme } = useSelector((state: RootState) => state.theme);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        loadTecnologies()
    }, []);

    return (
        <Ui.Fade in>
            <Ui.Box>
                <Ui.Box className="banner">
                    <Ui.Container>
                        <Ui.Grid container spacing={3} justify="space-between">
                            <Ui.Grid item xs={12} sm={12} md={4} lg={4} xl={2}>
                                <Ui.Grid container spacing={3} justify="center">
                                    <Ui.Grid item xs={5} sm={2} md={12} lg={12} xl={2}>
                                        <Ui.Box>
                                            <Ui.Typography component="p">
                                            <svg viewBox="0 0 16 16" className="bi bi-code-slash img-fluid" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"/>
                                            </svg>
                                            </Ui.Typography>
                                        </Ui.Box>
                                    </Ui.Grid>
                                </Ui.Grid>
                            </Ui.Grid>
                            <Ui.Grid item xs={12} sm={12} md={3} lg={3} xl={2}>
                                <Ui.Grid container spacing={3} justify="center">
                                    <Ui.Grid item xs={5} sm={4} md={12} lg={12} xl={2}>
                                        <Ui.Box p="1.2em">
                                            <img loading="lazy" src="https://i.imgur.com/Olx0SLG.jpg" alt="Foto De Perfil" className="rounded-circle img-fluid border floating" />
                                        </Ui.Box>
                                        <Ui.Box mt="2em" borderBottom="1px solid white" padding="5px">
                                            <Ui.AssignmentInd/>
                                        </Ui.Box>
                                    </Ui.Grid>
                                </Ui.Grid>
                            </Ui.Grid>
                        </Ui.Grid>
                    </Ui.Container>
                </Ui.Box>
                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="wave"><path className={theme} fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,224C384,213,480,171,576,176C672,181,768,235,864,240C960,245,1056,203,1152,186.7C1248,171,1344,181,1392,186.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
                <Ui.Container>
                    <Ui.Box pt="3em" pb="3em">
                        <Ui.Box pb="1em">
                            <Ui.Typography variant="h5" component="h5" gutterBottom className="fontBold">
                                Proyectos
                            </Ui.Typography> 
                        </Ui.Box>
                        <Ui.Box style={{display: `block`, whiteSpace: `nowrap`, position: `relative`}}>
                            <Ui.List style={{overflow: `auto`}}>
                                <Ui.Button color="primary">Todos</Ui.Button>
                                <Ui.Button color="inherit" className="ml-1">Desarrollos Web</Ui.Button>
                                <Ui.Button color="secondary" className="ml-1">Desarrollos Mobiles</Ui.Button>
                            </Ui.List>
                        </Ui.Box>
                        <Ui.Box>
                        {tecnologies.map((tecnology) => {
                            return <TecnologyItem tecnology={tecnology} />
                        })}
                        </Ui.Box>
                    </Ui.Box>
                </Ui.Container>
                <Ui.Box className="banner">

                </Ui.Box>
            </Ui.Box>
        </Ui.Fade>
    )
}

export default Home
