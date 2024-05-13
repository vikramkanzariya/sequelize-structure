// const { DataTypes , Model } = require('sequelize');
// const  sequelize = require('./index');


module.exports = (sequelize , DataTypes) => {

const Contact = sequelize.define(
  'Contact',
  {
    permanent_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    current_address: {
      type: DataTypes.STRING,
    },
  },
  {
    // Other model options go here
  },
);
  return Contact;
}
