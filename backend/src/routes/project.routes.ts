import {Router} from 'express';

import {getProject} from '../controllers/project';

const router = Router();

router.route('/project')
.get(getProject);

export default router;