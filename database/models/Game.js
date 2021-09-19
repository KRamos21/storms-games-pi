module.exports = (sequelize,DataTypes) => {
    const Game = sequelize.define("Game", {
        descricao: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        quantidade: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        imagem_do_produto: {
            type: DataTypes.BLOB,
            allowNull: false,
        },
        valor_compra: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        valor_venda: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        forum_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        category_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },  
    });

    Game.associate = models => {
        Game.belongsTo(models.Forum, {
            foreignKey: 'forum_id',
            as: 'forum'
        });
    };

    Game.associate = models => {
        Game.belongsTo(models.Category, {
            foreignKey: 'category_id',
            as: 'category'
        });
    };

    return Game;
}