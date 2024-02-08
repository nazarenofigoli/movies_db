const db =  require('../database/models/index.js')

const genresController = {

    list: function(req,res) {
        db.Genre.findAll()
        .then (function(genres){
            res.render('genresList',{genres:genres})

        })

    },

    detail:function(req,res) {
        db.Genre.findByPk(req.params.id)
        .then((genre) => {
            res.render('genresDetail',{genre})
        })
            
        },

}

module.exports = genresController;


