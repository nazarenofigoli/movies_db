module.exports = (sequelize,DataTypes) => {

    const alias = "Genre";
    const cols ={
        id:{
            type:DataTypes.INTEGER,
            allownull:false,
            primaryKey:true,
            autoIncrement:true,
            unsigne:true
        },
        name:{
            type:DataTypes.STRING(100),
            allownull:false
        },
        ranking:{
            type:DataTypes.INTEGER,
            allownull:false,
            unsigne:true

        },
        active:{
            type:DataTypes.TINYINT(1),
            allownull:false
        }
    };
    const config={
        tableName: "genres",
        timestamps: false
        
    };
const genres = sequelize.define(alias,cols,config);
return genres
}