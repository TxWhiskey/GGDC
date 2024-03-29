import * as admin from 'firebase-admin'
import * as functions from "firebase-functions";

admin.initializeApp()

const db = admin.firestore()

import nodemailer = require('nodemailer');

const cors = require('cors')({
    origin: true,
});

exports.submitSurvey = functions.https.onRequest( (req: functions.https.Request , res: functions.Response ) => {

    cors( req, res, async () => {

        const surveyResponse = req.body.selection

        const doc = await db.collection('surveyResponses').add({
            surveyNumber: 12,
            response: surveyResponse,
            timestamp: admin.firestore.Timestamp.now()
        })

        res.send((await doc.get()).data())

    })


})

exports.handleFormSubmit = functions.https.onRequest( ( req: functions.https.Request , res: functions.Response) => {

    cors( req , res, () => {

        console.log("STARTING EMAIL HANDLER!")

        let requestBody = JSON.parse(req.body)

        console.log( typeof requestBody )

        console.log( requestBody )

        console.log(requestBody.email)

        let transporter = nodemailer.createTransport({
            host: 'smtp.office365.com',
            port: 587,
            secure: false,
            requireTLS: true,
            auth: {
                user: 'Patricia@GGCollab.com',
                pass: '203488Jpra!'
            },
            tls: {
                ciphers: 'SSLv3'
            } 
        })

        const mailOptions = {
            from: 'Info@GGCollab.com',
            to: "Info@GGCollab.com",
            subject: `Contact request from ${requestBody.email}`,
            html: `
            <h1>New Form Submission</h1>
            <p>First Name: ${requestBody.firstName || "n/a"}</p>
            <p>Last Name: ${requestBody.lastName || "n/a"}</p>
            <p>Email: ${requestBody.email || "n/a"}</p>
            <p>Phone: ${requestBody.phone || "n/a"}</p>
            <p>Project Type: ${requestBody.projectType || "n/a"}</p>
            <p>Architect Hired: ${requestBody.architectHired || "n/a"}</p>
            <p>Architect Hired: ${requestBody.architectSeeking || "n/a"}</p>
            <p>Builder Hired: ${requestBody.builderHired || "n/a"}</p>
            <p>Builder Hired: ${requestBody.builderSeeking || "n/a"}</p>
            <p>Designer Hired: ${requestBody.designerHired || "n/a"}</p>
            <p>Designer Hired: ${requestBody.designerSeeking || "n/a"}</p>
            <p>Detail: ${requestBody.detail || "n/a"}</p>
            `
        }

        console.log("PREPPING EMAIL")

        return transporter.sendMail(mailOptions, (e,d) => {

            if (e) {
                console.error("ERROR DETECTED")
                return res.send(e.message.toString());
            }

            console.log("SUCCESS")
            return res.send(`Your contact form has been received. If you would like to get in touch faster, please reach out directly at 713.248.2987.`)

        })

    })

})

// let ssrServerServer: any

// exports.ssrServer = functions.region("us-central1").https.onRequest(async (request, response) => {
//     if (!ssrServerServer) {
//             functions.logger.info("Initialising SvelteKit SSR entry");
//             ssrServerServer = require("./ssrServer/index").default;
//             functions.logger.info("SvelteKit SSR entry initialised!");
//     }
//     functions.logger.info("Requested resource: " + request.originalUrl);
//     return ssrServerServer(request, response);
// });