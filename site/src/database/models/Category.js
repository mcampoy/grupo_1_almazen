module.exports = (sequelize, dataTypes) => {
    const Category = sequelize.define("Category",

        {
            id: {
                type: dataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true
            },

            name: {
                type: dataTypes.STRING,
            },
            img_category: {
                type: dataTypes.STRING,
            },

            enabled: {
                type: dataTypes.INTEGER,
            },

        },

        {
            tableName: 'categories',
            timestamps: false,
        });



    Category.associate = function(models) {
        Category.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'id_category',
            timestamps: false,
        });
    }

    return Category;
}