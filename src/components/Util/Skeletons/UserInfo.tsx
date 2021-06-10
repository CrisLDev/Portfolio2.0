import * as Ui from '../../../shared/Shared';

const UserInfo = () => {
    return (
        <Ui.Card style={{height: `100%`, padding: `16px`}}>
            <Ui.Box className="d-flex">
                <Ui.Skeleton variant="circle" width={50} height={50} />
                <Ui.Typography variant="body2" className="mb-5 ms-3">
                    <Ui.Skeleton width={130} variant="text" />
                    <Ui.Skeleton width={180} variant="text" />
                </Ui.Typography>
                <Ui.Skeleton className="ms-auto" variant="circle" width={50} height={50} />
            </Ui.Box>
            <Ui.Box className="d-flex justify-content-center">
                <Ui.Skeleton variant="rect" width={120} height={118} />
            </Ui.Box>
            <Ui.Box className="mt-4">
                <Ui.Typography variant="body2" className="mb-3 ms-3">
                    <Ui.Skeleton width={130} variant="text" />
                    <Ui.Skeleton width={180} variant="text" />
                </Ui.Typography>
                <Ui.Typography variant="body2" className="mb-3 ms-3">
                    <Ui.Skeleton width={130} variant="text" />
                    <Ui.Skeleton width={180} variant="text" />
                </Ui.Typography>
                <Ui.Typography variant="body2" className="ms-3">
                    <Ui.Skeleton width={130} variant="text" />
                    <Ui.Skeleton width={180} variant="text" />
                </Ui.Typography>
            </Ui.Box>
            <Ui.Box className="d-flex justify-content-between">
                <Ui.Skeleton className="mt-5" variant="circle" width={50} height={50} />
                <Ui.Skeleton className="mt-5" variant="circle" width={50} height={50} />
            </Ui.Box>
        </Ui.Card>
    )
}

export default UserInfo