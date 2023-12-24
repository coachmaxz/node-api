const express = require('express')
const bodyParser = require('body-parser')
const useragent = require('express-useragent')

const cors = require('cors')
const morgan = require('morgan')

module.exports = async (app) => {

  // Enable All CORS Requests
  app.use(cors())

  // Parser Body
  app.use(express.json())
  app.use(express.urlencoded({ extended: false }))
  app.use(bodyParser.text())
  app.use(bodyParser.raw())
  app.use(useragent.express())

  // Logger
  app.use(morgan('dev'))

}