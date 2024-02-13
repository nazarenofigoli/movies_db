const { where } = require('sequelize');
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
            res.render('moviesDetail',{movie:movie})
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

     //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
     add: function (req, res) {
    res.render('moviesAdd')
    },
    create:(req, res) =>{
        db.Movie.create({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length
        })
        res.redirect('/movies')
    },
    edit: function(req, res) {
        db.Movie.findByPk(req.params.id)
            .then (movie => res.render('moviesEdit',{Movie:movie})
    )
    },
    update: function (req,res) {
        db.Movie.update({
            title: req.body.title,
            rating: req.body.rating,
            awards: req.body.awards,
            release_date: req.body.release_date,
            length: req.body.length
        }, {
            where: {
                id: req.params.id
            },
            then: res.redirect("/movies/detail/" + req.params.id)      
        })
        },



    delete: function (req, res) {
        db.Movie.findByPk(req.params.id)
            .then (movie => res.render('moviesDelete',{Movie:movie})
    )
    },
    destroy: function (req, res) {
        db.Movie.destroy({
            where:{
                id: req.params.id
            },
        then: res.redirect("/movies")
        })
    }

    };




module.exports = genresController;




