const express = require('express')
const eventBL = require('../Models/eventBL')

const router = express.Router();

   router.route('/')
    .get(function(req, resp)
    {
       
        eventBL.getAllevents().then(data =>
            {
                return resp.json(data)
            })
    })

    router.route('/:id')
    .get(function(req, resp)
    {
        let id = req.params.id;

        eventBL.getevent(id).then(data =>
            {
                return resp.json(data)
            })
    })




router.post('/',function(req, resp)
    {
        let obj = req.body;

        eventBL.createvent(obj).then(data =>
            {
                return resp.json(data)
            })
    })

router.put('/:id',function(req, resp)
    {
        let obj = req.body;
        let id = req.params.id;

        eventBL.updateEvent(id,obj).then(data =>
            {
                return resp.json(data)
            })
    })


    router.delete('/:id',function(req, resp)
    {
        let id = req.params.id;

        eventBL.deleteEvent(id).then(data =>
            {
                return resp.json(data)
            })
    })


    module.exports = router;