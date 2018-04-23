module.exports = function(sequelize, DataTypes) {
    var Adventure = sequelize.define("Adventure", {
      place: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },  
      image: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      route1: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },

      route2: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },

      route3: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          len: [1]
        }
      },

      route4: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          len: [1]
        }
      },

    });
  
    
    
    Adventure.associate = function(models) {
      // We're saying that a Location should belong to an Player
      // A Place can't be created without a Player due to the foreign key constraint
      // Adventure.belongsTo(models.Player, {
      //   foreignKey: {
      //     allowNull: false
      //   }
      // });
    };
  
    return Adventure;
  };