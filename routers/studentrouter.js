
const express=require("express");
const{createstudent,
    getstudent,
    getstudentbyid,
    updatestudent,
    deletestudent}=require("../controller/studentcontroller");
const router=express.Router();
router.get('/students',getstudent);
router.get('/students/:id',getstudentbyid);
router.post('/students',createstudent);
router.put('/students/:id',updatestudent);
router.delete('/students/:id',deletestudent);

module.exports = router;

