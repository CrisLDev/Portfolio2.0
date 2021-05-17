import React from 'react';
import { Tecnology } from '../../interfaces/Tecnology';
import * as Ui from '../../shared/Shared';
import {Theme} from '@material-ui/core/';
import {useHistory} from 'react-router';
import { deleteTecnology } from '../../store/actions/tecnologiesAction';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';

interface Props{
    tecnology: Tecnology
}

const useStyles = Ui.makeStyles((theme: Theme) =>
Ui.createStyles({
    avatarModified: {
        display: `block!important`,
        backgroundColor: `transparent`,
    }
  }),
);

const TecnologyItem = ({tecnology}: Props) => {

    const dispatch = useDispatch();

    const history = useHistory();

    const { language } = useSelector((state: RootState) => state.language);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClickMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleCloseMenu = () => {
        setAnchorEl(null);
    };

    const classes = useStyles();
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    
    const handleCloseEdit = () => {
        history.push(`/tecnologies/update/${tecnology._id}`);
        setOpen(false);
    };

    const handleCloseDelete = () => {
        dispatch(deleteTecnology(tecnology._id));
        setOpen(false);
    };

    return (
        <Ui.Grid item xs={12} sm={4} md={3} lg={6} xl={6}>
            <Ui.Card style={{height: `100%`}}>
               <Ui.CardHeader avatar={<Ui.Avatar variant="rounded" className={classes.avatarModified}><img className="img-fluid" src={tecnology.urlImage} alt={tecnology.name} /></Ui.Avatar>} title={tecnology.name} action={<Ui.IconButton aria-label="settings" aria-haspopup="true" onClick={handleClickMenu}><Ui.MoreVert/></Ui.IconButton>} />
               <Ui.Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleCloseMenu}
                >
                    <Ui.MenuItem onClick={handleCloseEdit}>Editar</Ui.MenuItem>
                    <Ui.MenuItem onClick={handleCloseDelete}>Eliminar</Ui.MenuItem>
                </Ui.Menu>
               <Ui.CardContent>
                   <Ui.Typography variant="body2" color="textSecondary" component="p" style={{overflow: `hidden`, textOverflow:`ellipsis`, display: `-webkit-box`, WebkitLineClamp: 3, WebkitBoxOrient: `vertical`}}>
                        {language === 'es' ? tecnology.es_resume : tecnology.en_resume }
                   </Ui.Typography>
               </Ui.CardContent>
               <Ui.CardActions disableSpacing>
                    <Ui.IconButton aria-label="mostrar más" onClick={handleClickOpen}>
                        <Ui.Add />
                    </Ui.IconButton>
               </Ui.CardActions>
            </Ui.Card>
            <Ui.Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Ui.DialogTitle id="alert-dialog-title">{tecnology.name}</Ui.DialogTitle>
                <Ui.DialogContent>
                <Ui.DialogContentText id="alert-dialog-description" style={{whiteSpace: `pre-line`}}>
                    {language === 'es' ? tecnology.es_description : tecnology.en_description}
                </Ui.DialogContentText>
                </Ui.DialogContent>
                <Ui.DialogActions>
                <Ui.Button onClick={handleClose} color="default" autoFocus>
                    Cerrar
                </Ui.Button>
                </Ui.DialogActions>
            </Ui.Dialog>
        </Ui.Grid>
    )
}

export default TecnologyItem