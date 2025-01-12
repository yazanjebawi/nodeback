const express  = require('express');
const router = express.Router();
const {getallbros,createNewbro} = require('../controllers/broController');

router.get('/bros', getallbros);
router.post('/bros',createNewbros);



module.exports = router;