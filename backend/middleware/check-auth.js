const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, 'npkr8ryPpOiY_MkSVlcFZLmcV7KB6AOuV1NVDS9QCDc3Hf3m7RIqMkKgGXv9TnmtFLjDEPUguwu_M3p0EHIzyxigfVPLWlBTmMBIKbE3Nhb7Qt66Vn3JTY7VuquRjbseEfS2l3bjxoF2HIZMzzhSLjYtf4eD_WNI8QyRKc5-OUa8YVMBuHA7pIsQILsPOeyOf_yEVoU7tYilErPS70XYCvjfnHqqVVHWrhFf0mCChoVRWn6a1UfEKzDbiCkyhgb0wLwk7TahLCjleh2MsY_50l7PD4HzcRs6QvBM8SHDnhCILiU_1HIHO_F7O04NjqP6cNR9tE7c6QFEj6gFkxZ8Aw');
    next();
  } catch (err) {
    res.status(401).json({
      message: 'Unauthorized'
    })
  }

}
