'use strict'

const db = require('../db/dbConnect/connection.js');


module.exports = {

  signIn: (params, cb) => {
    let data = [params.email];
    const queryString = 'SELECT * FROM physician WHERE email=? LIMIT 1';
    db.query(queryString, data, (error, results) => cb(error, results) );
  },

  signUp: (params, cb) => {
    // Post Request To: /api/physician/signup i think this is a guess
    let data = [params.first, params.last, params.email, params.password];
    const queryString = "INSERT INTO physician (first, last, email, \
      password) VALUE (?,?,?,?)";
    db.query(queryString, data, (error, results) => cb(error, results) );
  },

  // to see if the email is already taken when signing up
  checkPhysician: (params, cb) => {
    let data = [params.email];
    const queryString = "SELECT * FROM physician WHERE email=? LIMIT 1";
    db.query(queryString, data, (error, results) => cb(error, results) );
  },

  update_physician_info: (params, cb) => {
    let data = [params.first, params.last, params.email,
      params.phone_number, params.password,
      params.photo_path, params.specialty];
    const queryString = 'UPDATE physician SET first=?, last=?, \
      email=?, phone_number=?, photo_path=?, specialty=? \
      WHERE id='+ params.uid;
  },

  update_password: (params, cb) => {
    let data = [params.password];
    const queryString ='UPDATE physician SET password=? WHERE id='+ params.uid;
    db.query(queryString, data, (error, results) => cb(error, results) );
  },

  // added
  getAllPhysicians: (cb) => {
    const queryString = 'SELECT * FROM physician LIMIT 50'
    db.query(queryString, (error, results) => cb(error, results) );
  },

  // added
  getSpecialtyPhysician: (params, cb) => {
    let data = [params.specialty];
    const queryString = 'SELECT * FROM physician WHERE specialty=? LIMIT 20'
    db.query(queryString, data, (error, results) => cb(error, results) );
  },

  checkBetterDoc: (params, cb) => {
    let data = [params.betterDocId];
    const queryString = "SELECT * FROM physician WHERE betterDoctorUID=?";
    db.query(queryString, data, (error, results) => cb(error, results) );
  },

  addBetterDocId: (params, cb) =>  {
    let data = [params.betterDocId];
    const queryString = "INSERT INTO physician (betterDoctorUID) VALUE (?)";
    db.query(queryString, data, (error, results) => cb(error, results) );
  }


  // (params, cb) => {
  //   let data = [params]
  //
  //   db.query(queryString, data, (error, results) => cb(error, results) );
  // },


};
