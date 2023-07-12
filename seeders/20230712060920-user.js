'use strict';

/** @type {import('sequelize-cli').Migration} */

const falso = require('@ngneat/falso')
const users = [...Array(50)].map(() => ({
  username: falso.randUserName(),
  fullName: falso.randFullName(),
  email: falso.randEmail(),
  passwordDigest: falso.randPassword(),
  age: falso.randNumber({ min: 15, max: 110 }),
  DOB: (falso.randMonth({ abbreviation: true }), falso.randNumber({ min: 1, max: 31 })),
  profilePic: falso.randImg(), 
  city: falso.randCity(),
  state: falso.randState(),
  country: 'United States',
  bio: falso.randQuote(),
  createdAt: new Date(),
  updatedAt: new Date()

}))

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('users', users)
  },

  async down (queryInterface, Sequelize) {
    
    return queryInterface.bulkDelete('users')
  }
};
