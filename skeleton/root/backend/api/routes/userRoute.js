var express = require('express');
var router = express.Router();

var user_controller = require('../controllers/userController');

router.get('/users', user_controller.get_all_users);
router.post('/users', user_controller.create_a_user);

// app.route('/users')
//     .get(user.get_all_users)
//     .post(user.create_a_user);

module.exports = router;