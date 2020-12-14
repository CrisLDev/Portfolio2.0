import React, {ChangeEvent, FormEvent, Fragment, useState, useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import { Tecnology } from '../../interfaces/Tecnology';
import * as Ui from '../../shared/Shared';
import { getTecnology, registerTecnology } from '../../store/actions/tecnologiesAction';
import { useHistory, useParams } from 'react-router-dom';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface Params {
    id: string;
}

const mapStateToProps = (state: any) => {
    return {
        tecnologyStore: state.tecnology.tecnologyById
    }
}

const TecnologyForm = (props:any) => {

    const params = useParams<Params>();

    const history = useHistory();

    const [tecnology, setTecnology] = useState<Tecnology>({
        name: "",
        resume: "",
        description: "",
        url: "",
        urlImage: ""
    });

    const dispatch = useDispatch();

    const handleInputChange = (e: InputChange) => {
        setTecnology({...tecnology, [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await dispatch(registerTecnology(tecnology));
        return history.push('/');
    }

    useEffect(() => {
        if (params.id){
            dispatch(getTecnology(params.id));
            setTecnology({
                name: props.tecnologyStore.name,
                description: props.tecnologyStore.description,
                resume: props.tecnologyStore.resume,
                url: props.tecnologyStore.url,
                urlImage: props.tecnologyStore.urlImage,
            });
        }
    }, [dispatch, setTecnology])

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
                                    'Editar una tecnología' :
                                    'Agregar una nueva tecnología'
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
                                name="name" 
                                label="Nombre" 
                                variant="outlined" 
                                autoFocus 
                                placeholder="Ingresa un nombre" 
                                fullWidth 
                                margin="normal"
                                value={tecnology.name}
                                onChange={handleInputChange} >
                                </Ui.TextField>
                                <Ui.TextField 
                                name="resume" 
                                label="Resumen" 
                                variant="outlined"
                                placeholder="Ingresa un pequeño resumen" 
                                multiline 
                                rowsMax={4}
                                fullWidth 
                                margin="normal"
                                value={tecnology.resume}
                                onChange={handleInputChange} >
                                </Ui.TextField>
                                <Ui.TextField 
                                name="description" 
                                label="Descripción" 
                                variant="outlined" 
                                placeholder="Ingresa una descripción" 
                                multiline 
                                rowsMax={4} 
                                fullWidth 
                                margin="normal"
                                value={tecnology.description}
                                onChange={handleInputChange}></Ui.TextField>
                                <Ui.TextField 
                                name="url" 
                                label="Url" 
                                variant="outlined" 
                                placeholder="Ingresa la Url principal" 
                                fullWidth 
                                margin="normal"
                                value={tecnology.url}
                                onChange={handleInputChange}></Ui.TextField>
                                <Ui.TextField 
                                name="urlImage" 
                                label="Url de la Imagen" 
                                variant="outlined" 
                                placeholder="Ingresa la url de la imagen" 
                                fullWidth 
                                margin="normal"
                                value={tecnology.urlImage}
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

export default connect(mapStateToProps)(TecnologyForm)
