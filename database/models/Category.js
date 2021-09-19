module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("Category", {
        descricao: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    return Category;
};