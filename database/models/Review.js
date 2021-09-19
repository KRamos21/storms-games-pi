module.exports = (sequelize, DataTypes) => {
    const Review = sequelize.define("Review", {
        nota: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        texto_avaliacao: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        user_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
        game_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },
    });
    
    Review.associate = models => {
        Review.belongsTo(models.User, {
            foreignKey: 'user_id',
            as: 'user'
        });
    };

    Review.associate = models => {
        Review.belongsTo(models.Game, {
            foreignKey: 'game_id',
            as: 'game'
        });
    };

    return Review;
}