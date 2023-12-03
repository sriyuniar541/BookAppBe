const nodemailer = require("nodemailer");


let transporter = nodemailer.createTransport({
	// service: "gmail",
    host: "smtp.zoho.com",
    secure: true,
    port: 465,
    auth: {
		user: "noreply@pijarproject.site",
		pass:  "yqJN1sCZcrWB"
    },
  });
 
module.exports = (email, subject, verifUrl,fullname) => {
	let mailOptions = {
		from: "noreply@pijarproject.site",
		to: email,
		subject: `${subject} is your otp`,
		text: `Hello ${fullname} \n Thank you for join us. Please copy your otp and verif  otp --${subject}--`
	};

	transporter.sendMail(mailOptions, function(err, data) {
		if (err) {
		  console.log("Error " + err);
		  console.log("email not sent!");
		} else {
		  console.log("Email sent successfully");
		  return "email sent successfully"
		}
	  });
};



//     user:'sriyuniar541@gmail.com',
//     pass:'reakquaudqzwdctq'
//   },
// });

// // let transporter = nodemailer.createTransport({
// //     host: "smtp.zoho.com",
// //     secure: true,
// //     port: 465,
// //     auth: {
    //   user: "noreply@projectpijar.site",
    //   pass:  "yqJN1sCZcrWB",
      
// //     },
// //   });

// module.exports = (email, subject, text) => {
//   let mailOptions = {
//     from: 'sriyuniar541@gmail.com',
//     to: email,
//     subject: subject,
//     text: text,
//   };

//   transporter.sendMail(mailOptions, function (err, data) {
//     if (err) {
//       console.log("Error " + err);
//       console.log("email not sent!");
//     } else {
//       console.log("Email sent successfully");
//       return "email sent successfully";
//     }
//   });
// };




// let transporter = nodemailer.createTransport({
//       host: "smtp.zoho.com",
//     secure: true,
//     port: 465,
//     auth: {
//       user: "noreply@projectpijar.site",
//       pass:  "yqJN1sCZcrWB",
      
//     // },
// //   });
//   // service: 'gmail',
//   // auth: {
//   //   user: "noreply@projectpijar.site",
//   //   pass:  "yqJN1sCZcrWB",
//   },
// });

// module.exports = (email, subject, text) => {
//   let mailOptions = {
//     from: "noreply@projectpijar.site",
//     to: email,
//     subject: subject,
//     text: text,
//   };

//   transporter.sendMail(mailOptions, function (err, data) {
//     if (err) {
//       console.log('Error ' + err);
//       console.log('email not sent!');
//     } else {
//       console.log('Email sent successfully');
//       return 'email sent successfully';
//     }
//   });
// };