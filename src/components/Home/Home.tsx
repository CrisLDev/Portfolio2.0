import React, { useEffect, useState } from 'react';
import * as Ui from '../../shared/Shared';
import * as tecnologyService from '../../services/TecnologyService';
import TecnologyItem from '../Tecnology/TecnologyItem';
import { Tecnology } from '../../interfaces/Tecnology';
const Home = () => {

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [tecnologies, setTecnologies] = useState<Tecnology[]>([]);
    
    const loadTecnologies = async () => {
        const res = await tecnologyService.getTecnologies();
        setTecnologies(res.data);
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        loadTecnologies()
    }, []);

    return (
        <Ui.Fade in>
            <Ui.Box>
                <Ui.Box className="banner">
                    <Ui.Container>
                        <Ui.Grid container spacing={3} justify="center">
                            <Ui.Grid item xs={5} sm={4} md={3} lg={2} xl={2}>
                                <Ui.Box>
                                    <img loading="lazy" src="https://i.imgur.com/Olx0SLG.jpg" alt="Foto De Perfil" className="rounded-circle img-fluid border" />
                                </Ui.Box>
                            </Ui.Grid>
                            <Ui.Grid item xs={12} sm={10} md={7} lg={5} xl={5}>
                                <Ui.Box style={{backgroundColor: `rgba(0, 0, 0, 0.075)`}} p="1em">
                                    <Ui.Typography variant="h5" component="h5" gutterBottom>
                                        Cristhian Moreira Pazmiño
                                    </Ui.Typography>
                                    <Ui.Typography paragraph component="p" align="justify">
                                        Soy un diseñador y desarollador web, vivo en Guayaquil/Ecuador. Actualmente trabajo como desarrollador web independiente y me gustaría realizar más trabajar para aumentar mis habilidades en UI/UX.
                                    </Ui.Typography>
                                    <Ui.Box>
                                        <Ui.Box component="div" className="text-truncate">
                                            <Ui.Box component="span" className="fontBold">
                                                TELÉFONO
                                            </Ui.Box>
                                            <Ui.Box component="span" ml="1em">
                                                0969927711
                                            </Ui.Box>
                                        </Ui.Box>
                                        <Ui.Box component="div" className="text-truncate">
                                            <Ui.Box component="span" className="fontBold">
                                                EMAIL
                                            </Ui.Box>
                                            <Ui.Box component="span" ml="3em">
                                                leonardomoreirapazmio@gmail.com
                                            </Ui.Box>
                                        </Ui.Box>
                                    </Ui.Box>
                                </Ui.Box>
                            </Ui.Grid>
                        </Ui.Grid>
                    </Ui.Container>
                </Ui.Box>
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
