const express = require('express')
const userBL = require('../Models/userBL')

const router = express.Router();

   router.route('/')
    .get(function(req, resp)
    {
        userBL.getAllusers().then(data =>
            {
                return resp.json(data)
            })
    })
//dfsdfdsdfdfsdfsd

    router.route('/:id')
    .get(function(req, resp)
    {
        let id = req.params.id;

        userBL.getuser(id).then(data =>
            {
                return resp.json(data)
            })
    })




router.post('/',function(req, resp)
    {
        let obj = req.body;

        userBL.createuser(obj).then(data =>
            {
                return resp.json(data)
            })
    })

router.put('/:id',function(req, resp)
    {
        let obj = req.body;
        let id = req.params.id;

        userBL.updateUser(id,obj).then(data =>
            {
                return resp.json(data)
            })
    })


    router.delete('/:id',function(req, resp)
    {
        let id = req.params.id;

        userBL.deleteuser(id).then(data =>
            {
                return resp.json(data)
            })
    })


    module.exports = router;