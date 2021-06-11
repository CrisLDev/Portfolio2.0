import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as Ui from '../../shared/Shared';
import TecnologyItem from '../Tecnology/TecnologyItem';
import {getTecnologies} from '../../store/actions/tecnologiesAction';
import { Tecnology } from '../../interfaces/Tecnology';
import { RootState } from '../../store';
import { getProjects } from '../../store/actions/projectsAction';
import ProjectSkeleton from '../Util/Skeletons/Projects';
import ProjectItem from '../Project/ProjectItem';
import {useTranslation} from 'react-i18next';
import { Project } from '../../interfaces/Project';
import TecnologySkeleton from '../Util/Skeletons/Tecnology';

const Home = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [t, i18n] = useTranslation("global");

    const tecnologies = useSelector((state: RootState) => state.tecnology.tecnologies);

    const projects = useSelector((state: RootState) => state.project.projects);

    const dispatch = useDispatch();

    useEffect(() => {
        if(tecnologies.length <= 0){
            dispatch(getTecnologies());
        }
        if(projects.length <= 0){
            dispatch(getProjects());
        }
        document.title  = t("Titles.Home");
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [tecnologies.length, dispatch, projects.length]);

    return (
        <Fragment>
            <Ui.Fade in>
            <Ui.Box>
                <Ui.Box className="banner">
                    <Ui.Container>
                        <Ui.Grid container spacing={3} justify="space-between">
                            <Ui.Grid item xs={12} sm={12} md={5} lg={4} xl={2}>
                            <Ui.Box id="withWidthFull">
                                    <Ui.Grid container spacing={3}>
                                        <Ui.Grid item xs={4} sm={4} md={7} lg={7} xl={2}>
                                            <Ui.Box>
                                                <Ui.Typography component="p">
                                                <svg viewBox="0 0 16 16" className="bi bi-code-slash img-fluid" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"/>
                                                </svg>
                                                </Ui.Typography>
                                            </Ui.Box>
                                        </Ui.Grid>
                                        <Ui.Grid item xs={12} sm={12} md={12} lg={12} xl={2}>
                                            <Ui.Box>
                                                <Ui.Typography component="h1" variant="h3" className="text-uppercase font-weight-bold">
                                                    {t("Text.Hello")},
                                                </Ui.Typography>
                                                <Ui.Typography component="h1" variant="h5" className="text-uppercase font-weight-bold">
                                                    {t("Text.AWeb")}.
                                                </Ui.Typography>
                                            </Ui.Box>
                                        </Ui.Grid>
                                    </Ui.Grid>
                                </Ui.Box>
                                <Ui.Box id="withNoWidthFull" className="mb-4" >
                                    <Ui.Grid container spacing={3} justify="center">
                                        <Ui.Grid item xs={4} sm={2} md={5} lg={7} xl={2}>
                                            <Ui.Box>
                                                <Ui.Typography component="p">
                                                <svg viewBox="0 0 16 16" className="bi bi-code-slash img-fluid" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0zm-.999-3.124a.5.5 0 0 1 .33.625l-4 13a.5.5 0 0 1-.955-.294l4-13a.5.5 0 0 1 .625-.33z"/>
                                                </svg>
                                                </Ui.Typography>
                                            </Ui.Box>
                                        </Ui.Grid>
                                        <Ui.Grid item xs={12} sm={12} md={12} lg={12} xl={2} className="d-flex justify-content-center">
                                            <Ui.Box>
                                                <Ui.Typography component="p" variant="h6" className="text-uppercase font-weight-bold text-center">
                                                    {t("Text.Hello")}, {t("Text.AWeb")}.
                                                </Ui.Typography>
                                            </Ui.Box>
                                        </Ui.Grid>
                                    </Ui.Grid>
                                </Ui.Box>
                            </Ui.Grid>
                            <Ui.Grid item xs={12} sm={12} md={4} lg={3} xl={2}>
                                <Ui.Grid container spacing={3} justify="center">
                                    <Ui.Grid item xs={9} sm={6} md={12} lg={12} xl={2} className="floating">
                                        <Ui.Box p="1.2em">
                                            <img loading="lazy" src="./assets/avatar.svg" alt="Foto De Perfil" className="rounded-circle img-fluid border" />
                                        </Ui.Box>
                                        <Ui.Box pb="1em" borderBottom="0.5em solid white" padding="5px">
                                        <Ui.List className="d-flex justify-content-center">
                                            <Ui.ListItem button>
                                                <a className="text-white" href="https://www.linkedin.com/in/cristhian-leonardo-moreira-pazmi%C3%B1o-365a3165/" target="_blank" rel="noreferrer">
                                                <Ui.Box ml="0.1rem">
                                                        <Ui.AssignmentInd fontSize="large" />
                                                </Ui.Box>
                                                </a>
                                            </Ui.ListItem>
                                            <Ui.ListItem button>
                                            <a className="text-white" href="https://github.com/CrisLDev" target="_blank" rel="noreferrer">
                                                <Ui.Box ml="0.1rem">
                                                    <Ui.GitHub fontSize="large" />
                                                </Ui.Box>
                                                </a>
                                            </Ui.ListItem>
                                            <Ui.ListItem button>
                                            <a className="text-white" href="https://www.instagram.com/cristianmoreirapazmino/?hl=es-la" target="_blank" rel="noreferrer">
                                                <Ui.Box ml="0.1rem">
                                                    <Ui.Instagram fontSize="large" />
                                                </Ui.Box>
                                                </a>
                                            </Ui.ListItem>
                                            <Ui.ListItem button>
                                            <a className="text-white" href="https://www.facebook.com/cristian.moreirapazmino.58/" target="_blank" rel="noreferrer">
                                                <Ui.Box ml="0.1rem">
                                                    <Ui.Facebook fontSize="large" />
                                                </Ui.Box>
                                                </a>
                                            </Ui.ListItem>
                                        </Ui.List>
                                        </Ui.Box>
                                    </Ui.Grid>
                                </Ui.Grid>
                            </Ui.Grid>
                        </Ui.Grid>
                    </Ui.Container>
                </Ui.Box>
                <Ui.Container>
                    <Ui.Box pt="3em" pb="3em">
                        <Ui.Box>
                            <Ui.Typography variant="h5" component="h5" gutterBottom className="fontBold text-uppercase">
                                {t("Titles.Projects")}
                            </Ui.Typography> 
                        </Ui.Box>
                        <Ui.Box style={{display: `block`, whiteSpace: `nowrap`, position: `relative`}} mb="1em">
                            <Ui.List style={{overflow: `auto`}}>
                                <Ui.Button color="primary">{t("Titles.All")}</Ui.Button>
                                <Ui.Button color="inherit" className="ml-1">{t("Titles.Web")}</Ui.Button>
                                <Ui.Button color="secondary" className="ml-1">{t("Titles.Mobile")}</Ui.Button>
                            </Ui.List>
                        </Ui.Box>
                        <Ui.Box>
                        <Ui.Grid>
                            {projects.length <= 0 ? 
                                <Ui.Grid container spacing={3}>
                                    <ProjectSkeleton/>
                                    <ProjectSkeleton/>
                                    <ProjectSkeleton/>
                                </Ui.Grid>
                            :
                                <Ui.Grid container spacing={3}>
                                    {projects.map((project: Project) => {
                                        return <ProjectItem project={project} key={project._id} />
                                    })}
                                </Ui.Grid>
                            }
                        </Ui.Grid>
                        </Ui.Box>
                    </Ui.Box>
                </Ui.Container>
                <Ui.Box className="banner pt-5">
                    <Ui.Container>
                        <Ui.Box>
                            <Ui.Box pb="3em">
                                <Ui.Typography variant="h5" component="h5" gutterBottom className="fontBold">
                                    {t("Titles.Tecnologies")}
                                </Ui.Typography> 
                            </Ui.Box>
                        </Ui.Box>
                        <Ui.Grid>
                            {tecnologies.length <= 0 ? 
                            <Ui.Grid container spacing={3}>
                            <TecnologySkeleton/>
                            <TecnologySkeleton/>
                            <TecnologySkeleton/>
                        </Ui.Grid>
                            :
                            <Ui.Grid container spacing={3}>
                                    {tecnologies.map((tecnology: Tecnology) => {
                                return <TecnologyItem tecnology={tecnology} key={tecnology._id} />
                            })}
                        </Ui.Grid>
                        }
                        </Ui.Grid>
                    </Ui.Container>
                </Ui.Box>
            </Ui.Box>
        </Ui.Fade>
        </Fragment>
    )
}

export default Home
