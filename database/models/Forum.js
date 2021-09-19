module.exports = (sequelize,DataTypes) => {
    const Forum = sequelize.define("Forum", {
        titulo_forum: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    
    return Forum;
};