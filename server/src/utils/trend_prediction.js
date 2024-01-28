const express = require('express');
const router = express.Router();
const spawn = require('child_process').spawn;     

router.get('/', (req, res) => {
    const py = spawn('python', ['./test.py'] );
    // const py = spawn('python', ['../../../utils/prediction.py'] );
    
    let output = '';
    py.stdout.on("data", (data) => {
          output += data.toString();
    });
    py.on("close", () => {                     // this differs 
        console.log(output);
        res.sendStatus(200);
    });
});
module.exports = router;