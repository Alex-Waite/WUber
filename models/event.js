module.exports = function (sequelize, DataType) {
    const Event = sequelize.define("Event", {
        eventname: {
            type: DataType.STRING,
            allowNull: false,
            validate: {
                len: [3, 20]
            }
        },


        time: {
            type: DataType.STRING,
            allowNull: false,
        },

        date: {
            type: DataType.STRING,
            allowNull: false,

        },

        isPast: {
            type: DataType.BOOLEAN,
            defaultValue: false,
            allowNull: false,
        }


    });


    Event.associate = function (models) {
        Event.belongsToMany(models.User, {
                through: 'Bookings',
                as: 'Users',
                foreignKey: {
                    allowNull: false
                },
                otherKey: "UserID"
            }),
            Event.belongsTo(models.Wineries, {
                foreignKey: {
                    allowNull: false
                }
            });
    };




    return Event
};