const eventModel = require('./eventModel');

exports.getAllevents = function()
{
    
    return new Promise((resolve, reject) =>
    {
        eventModel.find({}, function(err, data)
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

exports.getevent = function(id)
{
    return new Promise((resolve, reject) =>
    {
        eventModel.findById(id, function(err, data)
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

exports.createvent = function(obj)
{
    return new Promise((resolve, reject) =>
    {
        let event = new eventModel({
            eventType : obj.eventType,
            eventDesc : obj.eventDesc,
            minAge:obj.maxAge,
            maxAge:obj.maxAge,
            gender:obj.gender,
            locationName:obj.locationName,
            street:obj.street,
            houseNum:obj.houseNum,
            city:obj.city,
            minParticipants:obj.minParticipants,
            maxParticipants:obj.maxParticipants,
            groups:obj.groups,
            creator:obj.creator,
            points:obj.points
        });

        event.save(function(err)
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


exports.updateEvent = function(id,obj)
{
    return new Promise((resolve, reject) =>
    {

        eventModel.findByIdAndUpdate(id,
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

exports.deleteEvent = function(id)
{
    return new Promise((resolve, reject) =>
    {

        eventModel.findByIdAndDelete(id,function(err)
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