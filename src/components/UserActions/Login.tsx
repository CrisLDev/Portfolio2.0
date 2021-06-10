import React, { ChangeEvent, FormEvent, Fragment, useEffect, useState } from 'react'
import * as Ui from '../../shared/Shared';
import { useDispatch, useSelector} from 'react-redux';
import { SignInData, SignUpData } from '../../interfaces/Auth';
import { Link } from 'react-router-dom';
import { login, setError } from '../../store/actions/authAction';
import { RootState } from '../../store';
import {useTranslation} from 'react-i18next';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

const Login = () => {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [t, i18n] = useTranslation("global");

    const [user, setUser] = useState<SignInData>({
        email: "",
        password: "",
        showPassword: false
    });
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);

    const {error} = useSelector((state: RootState) => state.auth);

      useEffect(() => {
          return () => {
              if(error){
                  dispatch(setError(''));
              }
          }
      }, [error, dispatch])

    const handleLoginSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        dispatch(login(user, () => setLoading(false)));
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

    return (
        <Fragment>
            <Ui.Grid item xs={12} sm={8} md={9} lg={5} xl={5}>
                                <form noValidate autoComplete="off" style={{width: `100%`}} onSubmit={handleLoginSubmit}>
                                    <Ui.TextField 
                                    name="email" 
                                    label={t("Labels.UserEmail")} 
                                    variant="filled" 
                                    autoFocus
                                    placeholder={t("Placeholders.UserEmail")}
                                    fullWidth 
                                    margin="normal"
                                    onChange={handleInputChange}>
                                    </Ui.TextField>
                                    <Ui.FormControl variant="filled" fullWidth>
                                    <Ui.InputLabel htmlFor="filled-adornment-password">{t("Labels.Password")}</Ui.InputLabel>
                                    <Ui.FilledInput
                                        id="filled-adornment-password"
                                        type={user.showPassword ? 'text' : 'password'}
                                        value={user.password}
                                        onChange={handleChange('password')}
                                        placeholder={t("Placeholders.Password")}
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
                                    <Ui.Box mt="0.5em">
                                        <Link to="/reset" className="linkItem">
                                            <Ui.Box mt="1em" mb="1em" color="#0093E9">
                                                {t("Text.Forgot")}
                                            </Ui.Box>
                                        </Link>
                                        <Ui.Box className="container-btn-two">
                                            <Ui.Button type="submit" variant="contained" size="large" className="transparent" fullWidth disabled={loading}>
                                            {loading ? t("Text.Loading") : t("Text.LogIn")}
                                                <Ui.Box className="fill-two"></Ui.Box>
                                            </Ui.Button>
                                        </Ui.Box>
                                    </Ui.Box>
                                </form>
                            </Ui.Grid>
        </Fragment>
    )
}

export default Login
