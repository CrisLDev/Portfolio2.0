import React, { FC } from 'react'
import * as Ui from '../../shared/Shared';

interface MessageProps {
    msg: string;
    type: 'error' | 'success' | 'warning' | 'info';
}

const Message: FC<MessageProps> = ({msg, type}) => {

    if(type === 'error'){
        return (
            <Ui.Alert severity="error">
                <Ui.AlertTitle>Error</Ui.AlertTitle>
                    This is a error alert — <strong>{msg}</strong>
            </Ui.Alert>
        )
    }

    if(type === 'success'){
        return (
            <Ui.Alert severity="success">
                <Ui.AlertTitle>Success</Ui.AlertTitle>
                    This is a success alert — <strong>{msg}</strong>
            </Ui.Alert>
        )
    }

    if(type === 'warning'){
        return (
            <Ui.Alert severity="warning">
                <Ui.AlertTitle>Warning</Ui.AlertTitle>
                    This is a warning alert — <strong>{msg}</strong>
            </Ui.Alert>
        )
    }

    if(type === 'info'){
        return (
            <Ui.Alert severity="info">
                <Ui.AlertTitle>Info</Ui.AlertTitle>
                    This is a info alert — <strong>{msg}</strong>
            </Ui.Alert>
        )
    }

    return (
        <Ui.Alert severity="info">
            <Ui.AlertTitle>Info</Ui.AlertTitle>
                This is a info alert — <strong>No pos por alguna razon valio verga y nos saltamos a este alert xD</strong>
        </Ui.Alert>
    )

}

export default Message
