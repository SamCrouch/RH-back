const express = require('express');
const knex = require('knex')(require('./knexfile.js')['development']);
const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors')
const _ = require('lodash')

app.use(express.json())
app.use(cors());

app.get('/quotes', function(req, res) {
    // let hw = req.query.hw ? _.startCase(_.toLower(req.query.hw)): "%";
    knex.select('quotes.id', 'quotes.quote', 'quotes.img_url', 'housewives.name')
        .from('quotes')
        .join('housewives', 'quotes.hw_id', 'housewives.id')
        .orderBy('hw_id', 'asc')
        .then(data => res.status(200).json(data))
        .catch(err =>
            res.status(404).json({
                message: 'No quotes by searched housewife'
            }))
})

app.get('/housewives', function(req, res) {
    knex.select('*')
        .from('housewives')
        .then(data => res.status(200).json(data))
        .catch(err =>
            res.status(404).json({
                message: 'No housewives found in database'
            }))
})

app.get('/randomquote', function(req, res) {
    knex.select('*')
        .from('quotes')
        .innerJoin("housewives", "quotes.hw_id", "housewives.id")
        .orderByRaw('RANDOM()')
        .limit(1)
        .then(data => res.status(200).json(data))
        .catch(err =>
            res.status(404).json({
                message: 'No quotes found'
            }))
})

app.post('/newquote', function(req, res) {
    let hw_id = 0
    let housewife = _.startCase(_.toLower(req.body.hw))
    knex.select('*')
    .from('housewives')
    .where({name: housewife})
    .then(data => {
        if(data.length > 0){
            hw_id = Number(data[0].id);
            knex('quotes').insert({quote: req.body.quote, hw_id: hw_id}).then(() => res.status(201).send("Quote added to database"));
        } else {
            knex('housewives').insert({name: housewife})
                           .returning('id')
                           .then(id => {
                               hw_id = Number(id)
                               knex('quotes').insert({quote: req.body.quote, hw_id: hw_id, img_url: req.body.img_url}).then(() => res.status(201).send("Quote added to database"))
                           });
        }
    })
})

app.delete('/delete', function(req, res) {
    knex('quotes')
        .where('id', req.body.id)
        .delete()
        .then(data => res.status(200).json(data))
        .catch(err =>
            res.status(404).json({
                message: 'quote not deleted'
            }))
})

app.post('/:id', function(req,res) {
    let hw_id = 0
    let housewife = _.startCase(_.toLower(req.body.name))
    knex.select('id')
        .from('housewives')
        .where({name: housewife})
        .then(data => {
            if(data.length > 0){
                hw_id = Number(data[0].id)
                knex('quotes')
                    .where('id', '=', req.body.id)
                    .insert({
                      quote: req.body.quote,
                      hw_id: hw_id,
                      img_url: req.body.img_url
                    })
                    .then(() => res.status(201).send('Quote updated'))
            } else {
                knex('housewives')
                    .insert({name: housewife})
                    .returning('id')
                    .then(id => {
                        hw_id = Number(id)
                        knex('quotes')
                            .insert({
                              quote: req.body.quote,
                              hw_id: hw_id,
                              img_url: req.body.img_url
                            })
                            .then(() => res.status(201).send('Quote added to database with new housewife'))
                    })
            }
        })
})

app.listen(port, () => console.log(`app listening at real-housewives-server.herokuapp.com`))