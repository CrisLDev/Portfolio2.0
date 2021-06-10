import Gravatar from 'react-gravatar';
import { User } from '../../interfaces/User';
import * as Ui from "../../shared/Shared";
import Moment from 'react-moment';
import 'moment-timezone';
import {useTranslation} from 'react-i18next';

interface Props {
    user: User
}

const UserCard = ({user}: Props) => {

    const [t, i18n] = useTranslation("global");

    return (
        <Ui.Card>
            <Ui.CardHeader avatar={<Ui.Avatar aria-label="userImage">
                            <Gravatar email={user.email} />
                        </Ui.Avatar>}
                        action={<Ui.IconButton><Ui.MoreVert/></Ui.IconButton>}
                        title={user.fullname}
                        subheader={user.createdAt}>
            </Ui.CardHeader>
            <Ui.CardMedia style={{display: `flex`, justifyContent: `center`}} title={user.username}>
                <Gravatar email={user.email} size={100} />
            </Ui.CardMedia>
            <Ui.CardContent>
                <Ui.Box mb="1em">
                    <Ui.Typography component="p" className="d-flex align-items-center mb-2">
                        <Ui.Person/>
                        <span className="ml-2">{t("Labels.UserName")}:</span>
                    </Ui.Typography>
                    <Ui.Box ml="5px">
                        <Ui.Typography component="span" color="textSecondary" className="d-flex align-items-center">
                            <Ui.FiberManualRecord className="ml-3" fontSize="small" />
                            <span className="ml-2">{user.username}</span>
                        </Ui.Typography>
                    </Ui.Box>
                </Ui.Box>
                <Ui.Box mb="1em">
                    <Ui.Typography component="p" className="d-flex align-items-center mb-2">
                        <Ui.Email/>
                        <span className="ml-2">{t("Labels.UserEmail")}:</span>
                    </Ui.Typography>
                    <Ui.Box ml="5px" className="text-truncate">
                        <Ui.Typography component="span" color="textSecondary" className="text-nowrap">
                            <Ui.FiberManualRecord className="ml-3" fontSize="small" />
                            <span className="ml-2">{user.email}</span>
                        </Ui.Typography>
                    </Ui.Box>
                </Ui.Box>
                <Ui.Box>
                    <Ui.Typography component="p" className="d-flex align-items-center mb-2">
                        <Ui.Schedule/>
                        <span className="ml-2">{t("Labels.RegisterDate")}:</span>
                    </Ui.Typography>
                    <Ui.Box ml="5px">
                        <Ui.Typography component="span" color="textSecondary">
                            <Ui.FiberManualRecord className="ml-3" fontSize="small" />
                            <span className="ml-2"><Moment format="DD/MM/YYYY" date={user.createdAt} /></span>
                        </Ui.Typography>
                    </Ui.Box>
                </Ui.Box>
            </Ui.CardContent>
            <Ui.CardActions disableSpacing className="d-flex justify-content-between">
                <Ui.IconButton>
                    <Ui.Info/>
                </Ui.IconButton>
                <Ui.IconButton>
                    <Ui.Delete/>
                </Ui.IconButton>
            </Ui.CardActions>
        </Ui.Card>
    )
}

export default UserCard
