/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const functions = require('firebase-functions')
const express = require('express')
const fs = require('fs')
const {join} = require('path')

const app = express()
const DIST_FOLDER = join(process.cwd(), 'dist/unravel-test/browser')

// Server static files
app.get('*.*', (req, res) => {
  res.sendFile(join(DIST_FOLDER, req.url))
})

// All other requests should be sent to the server bundle
app.get('*', (req, res) => {
  const {AppServerModule} = require('../dist/unravel-test/server/main')
  const {renderModule} = require('@angular/platform-server')

  const indexHtml = fs.readFileSync(join(DIST_FOLDER, 'index.html'), 'utf-8')

  renderModule(AppServerModule, {
    document: indexHtml,
    url: req.url
  })
    .then(html => {
      res.send(html)
    })
    .catch(err => {
      console.error(err)
      res.status(500).send('Server Error')
    })
})

exports.ssr = functions.https.onRequest((req, res) => {
  console.log("SSR Function triggered:", req.url)
  app(req, res)
})

