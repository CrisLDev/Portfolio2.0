import React from 'react';
import { Tecnology } from '../../interfaces/Tecnology';
import * as Ui from '../../shared/Shared';
import {Theme} from '@material-ui/core/';

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

    const classes = useStyles();
    
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    
      const handleClose = () => {
        setOpen(false);
    };

    return (
        <Ui.Grid item xs={12} sm={4} md={3} lg={6} xl={6}>
            <Ui.Card style={{height: `100%`}}>
               <Ui.CardHeader avatar={<Ui.Avatar className={classes.avatarModified}><img src={tecnology.urlImage} alt={tecnology.name} /></Ui.Avatar>} title={tecnology.name} action={<Ui.IconButton aria-label="settings"><Ui.MoreVert/></Ui.IconButton>} />
               <Ui.CardContent>
                   <Ui.Typography variant="body2" color="textSecondary" component="p" style={{overflow: `hidden`, textOverflow:`ellipsis`, display: `-webkit-box`, WebkitLineClamp: 3, WebkitBoxOrient: `vertical`}}>
                        {tecnology.resume}
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
                    {tecnology.description}
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