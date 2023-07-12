'use strict';

/** @type {import('sequelize-cli').Migration} */

const falso = require('@ngneat/falso')
const users = [...Array(50)].map(() => ({
  username: falso.randUserName(),
  fullName: falso.randFullName(),
  email: falso.randEmail(),
  passwordDigest: falso.randPassword(),
}))

module.exports = {
  async up (queryInterface, Sequelize) {
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
