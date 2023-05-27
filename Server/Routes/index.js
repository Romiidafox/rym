const {login} = require ('../Controller/login')
const {getChardById} = require ('../Controller/getChardById')
const {postFav, deleteFav} = require ('../Controller/handleFavorites')
const express = require ('express').Router()



router.get('/getCharById', getChardById)

router.get('/login', login)

router.post('/postFav', postFav)

router.delete('/deleteFav/:id',deleteFav )


module.exports = router;

