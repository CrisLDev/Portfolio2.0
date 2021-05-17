import React, {ChangeEvent, FormEvent, Fragment, useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Project } from '../../interfaces/Project';
import * as Ui from '../../shared/Shared';
import { getProject, registerProject, editProject } from '../../store/actions/projectsAction';
import { useHistory, useParams } from 'react-router-dom';
import { RootState } from '../../store';
import {Theme, useTheme} from '@material-ui/core/styles';
import { getTecnologies } from '../../store/actions/tecnologiesAction';
import { Tecnology } from '../../interfaces/Tecnology';
import {toast} from 'react-toastify';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Params {
    id: string;
}

/* 
// This code return a placeholder for the multi select
renderValue={(selected) => {
                                        if((selected as string[]).length === 0 && document.getElementById("tecnologiesLabel")?.className.includes('MuiInputLabel-shrink')){
                                            return <span style={{color: `rgba(255, 255, 255, 0.7)`}}>Escoja algunas tecnologías</span>
                                        }
                                        return <div className={classes.chips}>
                                                    {
                                                        (selected as string[]).map((value) => (
                                                            
                                                            <Ui.Chip key={getTecnologyNameForLabel(value)} label={getTecnologyNameForLabel(value)} className={classes.chip} />
                                                        ))
                                                    }
                                                </div>
                                    }}

*/

const useStyles = Ui.makeStyles((theme: Theme) => 
        Ui.createStyles({
            chips:{
                display: 'flex',
                flexWrap: 'wrap'
            },
            chip: {
                margin: 2
            },
            noLabel: {
                marginTop: theme.spacing(3)
            }
        })
    );

    function getStyles(name: string, tecnologyName: string[], theme: Theme){
        return {
            fontWeight:
            tecnologyName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium
        };
    }

const ProjectForm = () => {
    const classes = useStyles();

    const theme = useTheme();

    const params = useParams<Params>();

    const history = useHistory();

    const [project, setProject] = useState<Project>({
        es_name: '',
        en_name: '',
        es_description: '',
        en_description: '',
        tecnologies: [],
        imgUrls: []
    });


    const [tecnologyName, setTecnologyName] = useState<string[]>([]);

    const dispatch = useDispatch();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (params.id){
            project.tecnologies = tecnologyName;
            await dispatch(editProject(params.id, project));
            return history.push('/');
        }else{
            project.tecnologies = tecnologyName;
            await dispatch(registerProject(project));
            return history.push('/');
        }
    }

    const projectById = useSelector((state: RootState) => state.project.projectById);

    const projects = useSelector((state: RootState) => state.project.projects);

    const tecnologies = useSelector((state: RootState) => state.tecnology.tecnologies);

    const handleInputChange = (e: InputChange) => {
        setProject({...project, [e.target.name]: e.target.value,
        })
    };

    const handleSelectChange = (e: ChangeEvent<{value: unknown}>) => {
        setTecnologyName(e.target.value as string[])
    };

    useEffect(() => {
        if(tecnologies.length <= 0){
            dispatch(getTecnologies());
        }
        if(tecnologies.length <= 0){
            toast.error("Primero agrega una tecnología o más.");
            return history.push('/');
        }
        if (params.id){
            const project = projects.find((project:Project) => project._id === params.id);
            if(project){
                setProject(project);
                const tecnologiesIdsToPut: any = [];
                const tecnologiesIds = project.tecnologies.map((tecnology: Tecnology) => {
                    tecnologiesIdsToPut.push(tecnology._id)
                });
                setTecnologyName(tecnologiesIdsToPut);
            }else{
                dispatch(getProject(params.id));
                setProject(projectById);
            }
            document.title = "Editar proyecto"
        }else{
            document.title = "Crear proyecto"
        }
    }, [dispatch, params.id, projects, projectById, tecnologies.length, history]);

    const {
        es_name,
        en_name,
        es_description,
        en_description,
        imgUrls
    } = project;

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;

    const MenuProps = {
        PaperProps:{
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP, width: 250,
            }
        }
    };

    function getTecnologyNameForLabel(value: string) {
        const tecnology = tecnologies.filter((tecnology: Tecnology) => tecnology._id === value);
        return tecnology[0].name;
    }

    return (
        <Fragment>
            <Ui.Fade in>
            <Ui.Box>
                <Ui.Box className="banner">
                    <Ui.Container>
                        <Ui.Grid container spacing={3} justify="center">
                            <Ui.Grid item xs={12} sm={12} md={12} lg={12} xl={12} className="text-center">
                                <Ui.Typography variant="h4" component="h4" gutterBottom>
                                {
                                    params.id ?
                                    'Editar un proyecto' :
                                    'Agregar un nuevo proyecto'
                                }
                                </Ui.Typography>
                            </Ui.Grid>
                        </Ui.Grid>
                    </Ui.Container>
                </Ui.Box>
                <Ui.Container>
                    <Ui.Box pt="3em" pb="3em">
                    <Ui.Grid container justify="center">
                        <Ui.Grid item xs={12} sm={8} md={9} lg={5} xl={5}>
                            <form noValidate autoComplete="off" style={{width: `100%`}} onSubmit={handleSubmit}>
                                <Ui.TextField 
                                name="es_name" 
                                label="Nombre en español" 
                                variant="filled" 
                                autoFocus 
                                placeholder="Ingresa un nombre" 
                                fullWidth 
                                margin="normal"
                                value={es_name}
                                onChange={handleInputChange} >
                                </Ui.TextField>
                                <Ui.TextField 
                                name="en_name" 
                                label="Nombre en ingles" 
                                variant="filled" 
                                placeholder="Ingresa un nombre" 
                                fullWidth 
                                margin="normal"
                                value={en_name}
                                onChange={handleInputChange} >
                                </Ui.TextField>
                                <Ui.TextField 
                                name="es_description" 
                                label="Descripción en español" 
                                variant="filled" 
                                placeholder="Ingresa una descripción" 
                                multiline 
                                rowsMax={4} 
                                fullWidth 
                                margin="normal"
                                value={es_description}
                                onChange={handleInputChange}></Ui.TextField>
                                <Ui.TextField 
                                name="en_description" 
                                label="Descripción en ingles" 
                                variant="filled" 
                                placeholder="Ingresa una descripción" 
                                multiline 
                                rowsMax={4} 
                                fullWidth 
                                margin="normal"
                                value={en_description}
                                onChange={handleInputChange}></Ui.TextField>
                                <Ui.FormControl variant="filled" fullWidth className="noFocus mt-3 mb-2">
                                    <Ui.InputLabel id="tecnologiesLabel">Tecnologias</Ui.InputLabel>
                                    <Ui.Select 
                                    name="tecnologies" 
                                    labelId="tecnologiesLabel" 
                                    labelWidth={90}
                                    multiple
                                    value={tecnologyName}
                                    onChange={handleSelectChange}
                                    displayEmpty
                                    renderValue={(selected) => (
                                        <div className={classes.chips}>
                                            {
                                                (selected as string[]).map((value) => (
                                                            
                                                    <Ui.Chip key={getTecnologyNameForLabel(value)} label={getTecnologyNameForLabel(value)} className={classes.chip} />
                                                ))
                                            }
                                        </div>
                                    )}
                                    MenuProps={MenuProps}>
                                        {tecnologies.map((tecnology: Tecnology) => (
                                            <Ui.MenuItem key={tecnology._id} value={tecnology._id} style={getStyles(tecnology.name, tecnologyName, theme)}>
                                                {tecnology.name}
                                            </Ui.MenuItem>
                                        ))}
                                    </Ui.Select>
                                </Ui.FormControl>
                                <Ui.TextField 
                                name="imgUrls" 
                                label="Urls de las Imagenes" 
                                variant="filled" 
                                placeholder="Ingresa la url de la imagen" 
                                fullWidth 
                                margin="normal"
                                value={imgUrls}
                                onChange={handleInputChange}></Ui.TextField>
                                <Ui.Box mt="0.5em">
                                    <Ui.Button type="submit" variant="contained" color="primary" fullWidth>
                                        {
                                            params.id ?
                                                'Editar' :
                                                'Crear'
                                        }
                                        </Ui.Button>
                                    </Ui.Box>
                            </form>
                        </Ui.Grid>
                    </Ui.Grid>
                    </Ui.Box>
                </Ui.Container>
            </Ui.Box>
        </Ui.Fade>
        </Fragment>
    )
}

export default ProjectForm