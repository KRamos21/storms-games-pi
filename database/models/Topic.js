module.exports = (sequelize,DataTypes) => {
    const Topic = sequelize.define("Topic", {
        titulo_topico: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        data_publicacao: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        forum_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            allowNull: false,
        },  
    });

    Topic.associate = models => {
        Topic.belongsTo(models.Forum, {
            foreignKey: 'forum_id',
            as: 'forum'
        });
    };
    
    return Topic;
};