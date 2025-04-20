'use strict';
import { DataTypes } from 'sequelize';
/** @type {import('sequelize-cli').Migration} */
export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
      },
      username: { 
        type: DataTypes.STRING,
        unique: true, 
        allowNull: false
      },
      email: { 
        type: DataTypes.STRING, 
        unique: true,
        allowNull: false
      },
      password: { 
        type: DataTypes.STRING, 
        allowNull: false
      },
      refreshToken: DataTypes.TEXT,
      role: { 
        type: DataTypes.INTEGER, 
        allowNull: false
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};