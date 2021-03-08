const User = require('../modules/user-model');

const createUser = (req, res) => {
    const body = req.body;

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a user'
        }) 
    }

    const user = new User(body);

    if (!user) {
        return res.status(400).json({
            success: false,
            error: err
        })
    }

    user.save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: user._id,
                message: 'user created!'
            })
        })
        .catch(error => {
            console.log(error)
            return res.status(400).json({
                error,
                message: 'user not created!'
               
            })
            
        })
}


const deleteUser = async (req, res) => {
    await user.findOneAndDelete({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!user) {
            return res.statuse(404).json({ success: false, error: err })
        }
        return res.status(200).json({ success: true, date: user })
    }).catch(err => console.log(err))
}
const getUserById = async (req, res) => {
    await user.findOne({ _id: req.params.id }, (err, user) => {
        if (err) {
            return res.status(400).json({ success: false, error: `user not found` })
        }
        if (!user) {
            return res.status(404).json({ success: false, error: `user not found` })
        }
        return res.status(200).json({ success: true, data: user })
    }).catch(err => console.log(err))
}
const updateUser = (req, res) => {
    const body = req.body

    user.updateOne({ _id: req.params.id }, body)
        .then(() => {
            return res.status(200).json({ seccess: true });
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: "user not updated!"
            })
        })

}


module.exports = {
    getUserById,
    createUser,
    deleteUser,
    updateUser
    
}