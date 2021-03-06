import React, {ChangeEvent, FormEvent, useState} from 'react';
import { Tecnology } from '../../interfaces/Tecnology';
import * as Ui from '../../shared/Shared';
import * as tecnologyService from '../../services/TecnologyService';
import {toast} from 'react-toastify';
import {useHistory} from 'react-router-dom';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const TecnologyForm = () => {

    const history = useHistory();

    const [tecnology, setTecnology] = useState<Tecnology>({
        name: "",
        resume: "",
        description: "",
        url: "",
        urlImage: ""
    });

    const handleInputChange = (e: InputChange) => {
        setTecnology({...tecnology, [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await tecnologyService.createTecnology(tecnology);
        toast.success("Nueva tecnología agregada.");
        history.push('/');
    }

    return (
        <Ui.Fade in>
            <Ui.Box>
                <Ui.Box className="banner">
                    <Ui.Container>
                        <Ui.Typography variant="h5" component="h5" gutterBottom className="fontBold">
                            Agrega una nueva tecnología
                        </Ui.Typography> 
                    </Ui.Container>
                </Ui.Box>
                <Ui.Container style={{backgroundColor: `rgba(243, 243, 243, 0.30)`}}>
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
                                onChange={handleInputChange}></Ui.TextField>
                                <Ui.TextField 
                                name="url" 
                                label="Url" 
                                variant="outlined" 
                                placeholder="Ingresa la Url principal" 
                                fullWidth 
                                margin="normal"
                                onChange={handleInputChange}></Ui.TextField>
                                <Ui.TextField 
                                name="urlImage" 
                                label="Url de la Imagen" 
                                variant="outlined" 
                                placeholder="Ingresa la url de la imagen" 
                                fullWidth 
                                margin="normal"
                                onChange={handleInputChange}></Ui.TextField>
                                <Ui.Box mt="0.5em">
                                    <Ui.Button type="submit" variant="contained" color="primary" fullWidth>
                                        Enviar
                                    </Ui.Button>
                                </Ui.Box>
                            </form>
                        </Ui.Grid>
                    </Ui.Grid>
                    </Ui.Box>
                </Ui.Container>
            </Ui.Box>
        </Ui.Fade>
    )
}

export default TecnologyForm
