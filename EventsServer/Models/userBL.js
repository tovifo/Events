const userModel = require('./userModel');

exports.getAllusers = function()
{
    return new Promise((resolve, reject) =>
    {
        userModel.find({}, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}

exports.getuser = function(id)
{
    return new Promise((resolve, reject) =>
    {
        userModel.findById(id, function(err, data)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve(data)
            }
        })
    })
}

exports.createuser = function(obj)
{
    return new Promise((resolve, reject) =>
    {
        let user = new userModel({
            firstname : obj.firstname,
            lastname : obj.lastname,
            address:obj.address,
            gender:obj.gender,
            birth_date:obj.birth_date,
            profile:obj.profile
        });

        user.save(function(err)
        {
            if(err)
            {
                reject(err)
            }
            else
            {
                resolve("Created !")
            }
        })
    })
}


exports.updateUser = function(id,obj)
{
    return new Promise((resolve, reject) =>
    {

        userModel.findByIdAndUpdate(id,
            {
                firstname : obj.firstname,
                lastname : obj.lastname
            }, function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve("Updated !")
                }
            })

    })
}

exports.deleteuser = function(id)
{
    return new Promise((resolve, reject) =>
    {

        userModel.findByIdAndDelete(id,function(err)
            {
                if(err)
                {
                    reject(err)
                }
                else
                {
                    resolve("Deleted !")
                }
            })

    })
}