import * as Ui from '../../../shared/Shared';

const Projects = () => {
    return (
        <Ui.Grid item xs={12} sm={4} md={3} lg={3} xl={3} style={{padding: `12px`}} >
            <Ui.Card style={{height: `100%`, padding: `16px`}}>
                <Ui.Typography variant="h4" className="mb-5">
                    <Ui.Skeleton width={130} variant="text" />
                </Ui.Typography>
                <Ui.Box className="d-flex justify-content-center">
                    <Ui.Skeleton variant="rect" width={258} height={118} />
                </Ui.Box>
                <Ui.Box className="d-flex mt-4">
                    <Ui.Skeleton variant="circle" width={50} height={50} />
                    <Ui.Skeleton className="ms-auto" variant="circle" width={50} height={50} />
                </Ui.Box>
            </Ui.Card>
        </Ui.Grid>
    )
}

export default Projects