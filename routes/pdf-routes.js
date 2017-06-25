const express = require('express');
const pdfFiller = require('pdffiller');
const fillPdf = require("fill-pdf");
const exec = require('child_process').exec;

const pdfRoute = express.Router();


pdfRoute.get('/pdf', (req, res, next) => {
  res.render('pdf-views/pdf-writer-view',
    {successMessage: req.flash('success')}
  );
});

pdfRoute.post('/pdf', (req, res, next) => {
  exec('pdftk test.pdf fill_form form-data.fdf output filled-test.pdf', (err, stdout, stderr) => {
    if (err) {
      next(err);
      return;
    }

    if (stderr) {
      next(stderr);
      return;
    }

    console.log('This worked: ' + stdout);
  });
});

// pdfRoute.post('/pdf', (req, res, next) => {
//
//   const sourcePDF = 'test.pdf';
//   const destinationPDF = 'filled-test.pdf';
//
//   const data = {
//     'PlayerName': req.body.charName
//   };
//
//   pdfFiller.fillForm( sourcePDF, destinationPDF, data, (err) => {
//     if (err) {
//       next(err);
//       return;
//     }
//
//     req.flash('success', 'This worked!');
//
//     console.log("In callback (we're done).");
//     res.redirect('/pdf');
//   });
//
// });

// pdfRoute.post('/pdf', (req, res, next) => {
//   var formData = {
//     'PlayerName': req.body.charName
//   };
//   var pdfTemplatePath = "test.pdf";
//
//
//   fillPdf.generatePdf(formData, pdfTemplatePath, function(err, output) {
//     if (err) {
//       next(err);
//       return;
//     }
//
//     req.flash('success', 'This worked!');
//
//     // res.type("application/pdf");
//     // res.send(output);
//     res.redirect('/pdf');
//   });
// });


module.exports = pdfRoute;
