import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/config/connection.js';

class User extends Model {
  static associate(models) {
    User.belongsToMany(models.Workspace, {
      through: 'workspace_members',
      foreignKey: 'userId'
    });
    User.belongsToMany(models.Task, {
      through: 'responsibilities',
      foreignKey: 'userId'
    });
    User.hasMany(models.Attachment, { foreignKey: userId });
    User.hasMany(models.History, { foreignKey: userId });
    User.belongsTo(models.Role, { foreignKey: roleId })
  }
}

User.init({
  id: {
    type: DataTypes.UUIDV4,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
    allowNull: false
  },
  username: { type: DataTypes.STRING, allowNull: false, unique: true },
  email: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  refreshToken: DataTypes.TEXT,
  role: { type: DataTypes.INTEGER, allowNull: false },
}, {
  sequelize,
  modelName: 'User',
});

export default User;
