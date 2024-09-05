module.exports = (connection, DataTypes) => {
    const User = connection.define(
      "User",{
      username:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      password:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      email:{
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
       
      },
      }
    );
    return User;
  };