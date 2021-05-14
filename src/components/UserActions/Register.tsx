import React, { ChangeEvent, FormEvent, Fragment, useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import * as Ui from '../../shared/Shared';
import { SignUpData } from '../../interfaces/Auth';
import {toast} from 'react-toastify';
import { register, setError} from '../../store/actions/authAction';
import {RootState} from '../../store';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const Register = () => {

    const [user, setUser] = useState<SignUpData>({
        email: "",
        fullname: "",
        password: "",
        password2: "",
        username: "",
        showPassword: false,
        showPassword2: false
    });

    const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
      const {error} = useSelector((state: RootState) => state.auth);

      useEffect(() => {
          return () => {
              if(error){
                  dispatch(setError(''));
              }
          }
      }, [error, dispatch])

    const handleRegisterSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(user.password !== user.password2){
            return toast.error("Las contraseñas no son iguales");
          }else{
            setLoading(true);
            return dispatch(register(user, () => setLoading(false)));
        }
    }
    
    const handleInputChange = (e: InputChange) => {
        setUser({...user, [e.target.name]: e.target.value,
        })
    }

    const handleChange = (prop: keyof SignUpData) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [prop]: event.target.value });
      };
    
      const handleClickShowPassword = () => {
        setUser({ ...user, showPassword: !user.showPassword });
      };
    
      const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };

      const handleChange2 = (prop: keyof SignUpData) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [prop]: event.target.value });
      };
    
      const handleClickShowPassword2 = () => {
        setUser({ ...user, showPassword2: !user.showPassword2 });
      };
    
      const handleMouseDownPassword2 = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
      };

    return (
        <Fragment>
            <Ui.Grid item xs={12} sm={8} md={9} lg={5} xl={5}>
                                <form noValidate autoComplete="off" style={{width: `100%`}} onSubmit={handleRegisterSubmit}>
                                    <Ui.TextField 
                                    name="fullname" 
                                    label="Nombre Completo" 
                                    variant="filled"
                                    placeholder="Ingresa un nombre completo" 
                                    fullWidth 
                                    margin="normal"
                                    onChange={handleInputChange} >
                                    </Ui.TextField>
                                    <Ui.TextField 
                                    name="username" 
                                    label="Nombre de Usuario" 
                                    variant="filled" 
                                    placeholder="Ingresa tu nombre de usuario" 
                                    fullWidth 
                                    margin="normal"
                                    onChange={handleInputChange}>
                                    </Ui.TextField>
                                    <Ui.TextField 
                                    name="email" 
                                    label="Email de Usuario" 
                                    variant="filled" 
                                    placeholder="Ingresa tu email" 
                                    fullWidth 
                                    margin="normal"
                                    onChange={handleInputChange}>
                                    </Ui.TextField>
                                    <Ui.Box mb="1.5em" mt="1em">
                                    <Ui.FormControl variant="filled" fullWidth>
                                    <Ui.InputLabel htmlFor="filled-adornment-password">Contraseña</Ui.InputLabel>
                                    <Ui.FilledInput
                                        id="filled-adornment-password"
                                        type={user.showPassword ? 'text' : 'password'}
                                        value={user.password}
                                        name="password"
                                        onChange={handleChange('password')}
                                        endAdornment={
                                        <Ui.InputAdornment position="end">
                                            <Ui.IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                            >
                                            {user.showPassword ? <Ui.Visibility /> : <Ui.VisibilityOff />}
                                            </Ui.IconButton>
                                        </Ui.InputAdornment>
                                        }
                                    />
                                    </Ui.FormControl>
                                    </Ui.Box>
                                    <Ui.Box mb="1em">
                                    <Ui.FormControl variant="filled" fullWidth>
                                    <Ui.InputLabel htmlFor="filled-adornment-password2">Confirma tu Contraseña</Ui.InputLabel>
                                    <Ui.FilledInput
                                        id="filled-adornment-password2"
                                        type={user.showPassword2 ? 'text' : 'password'}
                                        value={user.password2}
                                        name="password2"
                                        onChange={handleChange2('password2')}
                                        endAdornment={
                                        <Ui.InputAdornment position="end">
                                            <Ui.IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword2}
                                            onMouseDown={handleMouseDownPassword2}
                                            edge="end"
                                            >
                                            {user.showPassword2 ? <Ui.Visibility /> : <Ui.VisibilityOff />}
                                            </Ui.IconButton>
                                        </Ui.InputAdornment>
                                        }
                                    />
                                    </Ui.FormControl>
                                    </Ui.Box>
                                    <Ui.Box className="container-btn-two">
                                            <Ui.Button type="submit" variant="contained" size="large" className="transparent" fullWidth disabled={loading}>
                                                {loading ? "Cargando..." : "Registrarse"}
                                                <Ui.Box className="fill-two"></Ui.Box>
                                            </Ui.Button>
                                        </Ui.Box>
                                </form>
                            </Ui.Grid>
        </Fragment>
    )
}

export default Register
