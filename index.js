const express = require('express');
const app = express();
const port = 3000;


function coinFlip(req,res) {
    const random = Math.floor(Math.random() * Math.floor(2));
    if(random === 0) {
        res.redirect('/heads');
    } else {
        res.redirect('/tails');
    }
}

function heads(req,res) {
    res.send('Heads');
};
function tails(req,res) {
    res.send('Tails');
};

app.get('/', coinFlip);

app.get('/heads', heads);
app.get('/tails', tails);


app.listen(port, () => {
    console.log(`youre on port ${port}`);
});