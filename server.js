const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(cors())

const customers = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Pete'},
    {id: 3, name: 'Mary'}
];

// app.get('/api', (req, res) => {
//         return setTimeout(() => {res.json(customers)}, 5000);
// })
app.post('/api', (req, res) => {
    // return res.json(req.body.delay);
    if (req.body.delay>=0 && req.body.delay<=60) {
        return setTimeout(() => {res.json(customers)}, req.body.delay * 1000);
    } else {
        // send json response 
        return res.status(400), res.json({error: 'delay must be between 0 and 60'});
    }
})


    
    const port = 5000;
    app.listen(process.env.PORT | port, () => {
        console.log(`Listening on port ${port}`);
    })

