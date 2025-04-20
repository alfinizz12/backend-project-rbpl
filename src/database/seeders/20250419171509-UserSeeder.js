'use strict';
import bcrypt from "bcrypt";
import {v4 as uuidv4} from "uuid";
/** @type {import('sequelize-cli').Migration} */
export default {
  async up (queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('password', 10); // 10 adalah jumlah "salt rounds";
    await queryInterface.bulkInsert('Users', [
      {
        id: uuidv4(),
        username: "Rhino",
        email: "rhino123@gmail.com",
        password: hashedPassword,
        role: 1,
        refreshToken: "ABC",
        createdAt: new Date(), // Berikan nilai untuk createdAt
        updatedAt: new Date()  // Berikan nilai untuk update
      }
    ])
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
