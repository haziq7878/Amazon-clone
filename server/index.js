const express = require("express");
const cors = require('cors');
const stripe = require('stripe')('sk_test_51LVX5ZCaBHPQkgQPFvHMNQAPApsKIAXalIFXLe4jd5WHuBS7MaBxBWn0SNNQuNao2LFSYr9t7Xgi99OOBxeJ4ucd00JgYWiKbm')


//App config
const app = express();


//Middleware 
app.use(cors({ origin: true }))
app.use(express.json());

//Routes
app.get('/', (req, res) => {
    console.log()
    res.json({ "message": "Hello World" });

})

app.get('/payment/create', async (req, res) => {
    const total = parseInt(req.query.total);
    // console.log(typeof total)
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    //Ok great
    res.send({
        client_secret: paymentIntent.client_secret
    })
    // res.json({ 'client_secret': paymentIntent['client_secret'] })
})


const port = process.env.PORT || 4000;
// This will connect to local host 3000 on the webpage
app.listen(port, () => console.log(`Listenting to port ${port}`));
