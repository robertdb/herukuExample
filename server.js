const  express = require('express');
const app = express();
const hbs =  require('hbs');
const port = process.env.PORT || 3080;

app.use(express.static( __dirname + '/public' ));

hbs.registerPartials( __dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('home.hbs', {
        nombre: 'Robert'
    })
});
 
app.listen(port, () =>{
    console.log(`escuchando peticiones en el puerto ${port}`);
});

