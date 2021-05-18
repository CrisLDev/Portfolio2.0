import * as Ui from '../../../shared/Shared';

const Tecnology = () => {
    return (
        <Ui.Grid item xs={12} sm={4} md={3} lg={6} xl={6}>
            <Ui.Card style={{height: `100%`, padding: `16px`}}>
                <Ui.Typography variant="h5" className="mb-4 d-flex">
                    <Ui.Skeleton variant="circle" width={50} height={50} />
                    <Ui.Skeleton className="ms-4" width={130} variant="text" />
                    <Ui.Skeleton className="ms-auto" variant="circle" width={50} height={50} />
                </Ui.Typography>
                <Ui.Skeleton width={570} variant="text" />
                <Ui.Skeleton width={570} variant="text" />
                <Ui.Skeleton width={570} variant="text" />
                <Ui.Skeleton className="mt-4" variant="circle" width={50} height={50} />
            </Ui.Card>
        </Ui.Grid>
    )
}

export default Tecnology