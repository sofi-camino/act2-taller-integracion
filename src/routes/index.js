const { Router } = require('express');
const router = Router();

const { getStatus, getInfo, deleteSecurity } = require('../controllers/index.controller')

router.get('/status', getStatus);
router.get('/info', getInfo);
router.delete('/security', deleteSecurity);


module.exports = router;