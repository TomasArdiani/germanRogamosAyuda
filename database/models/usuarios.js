module.exports = (sequelize, dataTypes) => {

    let alias = "usuarios";
    let cols = {

        usuario_id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        usuario: {
            allowNull: false,
            type: dataTypes.STRING,
        },
        contrasena: {
            allowNull: false,
            type: dataTypes.STRING
        }
    }

    let config = {
        tableName: "usuarios",
        timestamps: false,
    };

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(models){
        Usuario.belongsTo(models.clientes,{
            as: 'cliente',
            foreignKey: 'usuario_id'
        });
    }

    return Usuario;
}