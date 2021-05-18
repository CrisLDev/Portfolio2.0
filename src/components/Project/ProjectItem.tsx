import React from 'react';
import * as Ui from '../../shared/Shared';
import {Theme} from '@material-ui/core/';
import {useHistory} from 'react-router';
import { Project } from '../../interfaces/Project';
import { useDispatch, useSelector } from 'react-redux';
import { deleteProject } from '../../store/actions/projectsAction';
import Carousel from 'react-material-ui-carousel';
import { Tecnology } from '../../interfaces/Tecnology';
import { RootState } from '../../store';
import {useTranslation} from 'react-i18next';

interface Props{
    project: Project
}

const useStyles = Ui.makeStyles((theme: Theme) =>
Ui.createStyles({
    avatarModified: {
        display: `block!important`,
        backgroundColor: `transparent`,
        width: theme.spacing(3),
        height: theme.spacing(3),
        marginRight: `5px`,
    },
    media: {
        height: 140,
      },
  }),
);

const ProjectItem = ({project}: Props) => {

    const [t, i18n] = useTranslation("global");

    const { language } = useSelector((state: RootState) => state.language);

    const dispatch = useDispatch();

    const history = useHistory();

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
        history.push(`/projects/update/${project._id}`);
        setOpen(false);
    };

    const handleCloseDelete = () => {
        dispatch(deleteProject(project._id));
        setOpen(false);
    };

    function Item(props: any)
    {
        return (
            <Ui.CardMedia
            className={classes.media}
            image={props.item}
            title={project.es_name}
            />
        )
    }

    function ItemDialog(props: any)
    {
        return (
            <Ui.Box mb="5">
                <img className="img-fluid" src={props.item} alt="img" />
            </Ui.Box>
        )
    }

    function Tecnology(props: any)
    {
        return (
            <Ui.Box className="d-flex align-items-end">
                <Ui.Avatar variant="rounded" className={classes.avatarModified}>
                    <img className="img-fluid" src={props.item.urlImage} alt={props.item.name} />
                </Ui.Avatar>
                <Ui.Typography variant="body2" color="textSecondary">
                        <span style={{marginRight: `15px`}}>{props.item.name}</span>
                   </Ui.Typography>
            </Ui.Box>
        )
    }

    return (
        <Ui.Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
            <Ui.Card style={{height: `100%`}}>
               <Ui.CardActionArea>
                <Ui.CardHeader title={language === 'es' ? project.es_name : project.en_name } action={<Ui.IconButton aria-label="settings" aria-haspopup="true" onClick={handleClickMenu}><Ui.MoreVert/></Ui.IconButton>} />
                <Ui.Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleCloseMenu}
                    >
                        <Ui.MenuItem onClick={handleCloseEdit}>{t("Text.Edit")}</Ui.MenuItem>
                        <Ui.MenuItem onClick={handleCloseDelete}>{t("Text.Delete")}</Ui.MenuItem>
                    </Ui.Menu>
                <Ui.CardContent>
                        <Carousel index={0} indicators={false}>
                            {
                                project.imgUrls.map( (item, i) => <Item key={i} item={item} /> )
                            }
                        </Carousel>
                </Ui.CardContent>
               </Ui.CardActionArea>
               <Ui.CardActions disableSpacing>
                    <Ui.IconButton aria-label="mostrar más" onClick={handleClickOpen} className="me-auto">
                        <Ui.Add />
                    </Ui.IconButton>
                    <a href="https://subcentro.vercel.app" target="_blank" rel="noreferrer">
                    <Ui.IconButton aria-label="ir a" className="ms-auto">
                        <Ui.Link />
                    </Ui.IconButton>
                    </a>
               </Ui.CardActions>
            </Ui.Card>
            <Ui.Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <Ui.DialogTitle id="alert-dialog-title">{language === 'es' ? project.es_name : project.en_name }</Ui.DialogTitle>
                <Ui.DialogContent>
                <Ui.DialogContentText id="alert-dialog-description" style={{whiteSpace: `pre-line`}}>
                    <Ui.Box className="d-flex mb-4 flex-nowrap overflow-auto">
                        {project.tecnologies.map((item:Tecnology) => <Tecnology key={item._id} item={item} />)}
                    </Ui.Box>
                    <Carousel index={0}>
                            {
                                project.imgUrls.map( (item, i) => <ItemDialog key={i} item={item} /> )
                            }
                    </Carousel>
                    {language === 'es' ? project.es_description : project.en_description }
                </Ui.DialogContentText>
                </Ui.DialogContent>
                <Ui.DialogActions>
                <Ui.Button onClick={handleClose} color="default" autoFocus>
                    {t("Text.Close")}
                </Ui.Button>
                </Ui.DialogActions>
            </Ui.Dialog>
        </Ui.Grid>
    )
}

export default ProjectItem