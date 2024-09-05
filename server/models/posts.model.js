

module.exports = (connection, DataTypes) => {
    const Posts = connection.define(
      "Posts",{
      title:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      description:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      expiredAt:{
        type: DataTypes.BOOLEAN,
        default:true
       
      },
      }
    );
    return Posts;
  };