const express = require("express")
const router = express.Router()

router.post('/foodData',(req,res)=>{
    try{
        res.json([
            global.food_items,
            global.food_Category
        ]);
    } catch(err){
        console.error(err.message);
        res.status(500).json({ error: "Internal Server Error" }); 
    }
});

module.exports = router;