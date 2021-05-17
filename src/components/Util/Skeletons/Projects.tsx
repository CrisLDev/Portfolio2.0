import React from 'react';
import * as Ui from '../../../shared/Shared';

const Projects = () => {
    return (
        <Ui.Grid item xs={12} sm={4} md={3} lg={3} xl={3}>
            <Ui.Card style={{height: `100%`, padding: `16px`}}>
                <Ui.Typography variant="h4" className="mb-5">
                    <Ui.Skeleton width={130} variant="text" />
                </Ui.Typography>
                <Ui.Skeleton variant="rect" width={258} height={118} />
                <Ui.Skeleton className="mt-5" variant="circle" width={50} height={50} />
            </Ui.Card>
        </Ui.Grid>
    )
}

export default Projects
