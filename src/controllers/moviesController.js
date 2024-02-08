const db =  require('../database/models/index.js')

const genresController = {

    list: function(req,res) {
        db.Movie.findAll()
        .then (function(movies){
            res.render('moviesList',{movies})

        })

    },

    detail:function(req,res) {
        db.Movie.findByPk(req.params.id)
        .then((movie) => {
            res.render('moviesDetail',{movie})
        })
            
        },

    new:function(req,res){
        db.Movie.findAll({
        order:[['release_date', 'desc']]
        })
        .then((movies) => {
            res.render('newestMovies',{movies})
        })
    },

    recomended:function(req,res){
        db.Movie.findAll({
        order:[['rating','desc']],
        limit: 5
        })
        .then((movies) => {
            res.render('recommendedMovies',{movies})
        })
    },

    
    
    };




module.exports = genresController;