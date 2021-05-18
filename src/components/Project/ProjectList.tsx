import { useEffect, useState } from 'react';
import ProjectItem from './ProjectItem';
import ProjectSkeleton from '../Util/Skeletons/Projects';
import * as Ui from '../../shared/Shared';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { getProjects } from '../../store/actions/projectsAction';
import { Project } from '../../interfaces/Project';
import {useTranslation} from 'react-i18next';

const useStyles = Ui.makeStyles({
    fixedAddButton: {
        position: `fixed`,
        bottom: `1em`,
        right: `1em`
    }
});

const TecnologyList = () => {

    const classes = useStyles();

    const [projects, setProjects] = useState<Project[]>([]);

    const dispatch = useDispatch();

    const [t, i18n] = useTranslation("global");

    const projectsInStore = useSelector((state: RootState) => state.project.projects);
    
    useEffect(() => {
        dispatch(getProjects());
        setProjects(projectsInStore);
        document.title = "Tecnologías"
    }, [projectsInStore.length, dispatch, setProjects]);

    return (
        <Ui.Fade in>
            <Ui.Box>
                <Ui.Box className="banner">
                    <Ui.Container>
                        <Ui.Grid container spacing={3} justify="center">
                            <Ui.Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                                <Ui.Typography variant="h4" component="h4" gutterBottom className="text-uppercase">
                                    {t("Titles.List-Project")}.
                                </Ui.Typography>
                            </Ui.Grid>
                        </Ui.Grid>
                    </Ui.Container>
                </Ui.Box>
                <Ui.Container>
                    <Ui.Box pt="3em" pb="3em">
                        {projects.length <= 0 ? 
                            <Ui.Grid container spacing={3}>
                                <ProjectSkeleton/>
                                <ProjectSkeleton/>
                                <ProjectSkeleton/>
                            </Ui.Grid>
                        :
                            <Ui.Grid container spacing={3}>
                                {projects.map((project) => {
                                    return <ProjectItem project={project} key={project._id} />
                                })}
                            </Ui.Grid>
                        }
                        <Link to="/projects/create">
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