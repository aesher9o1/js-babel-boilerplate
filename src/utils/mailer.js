import nodemailer from 'nodemailer'

const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    auth: {
        user: process.env['EMAIL'],
        pass: process.env['PASSWORD']
    }
})

/**
 * Sends email to a single participat
 * @param {String} name 
 * @param {String} email 
 * @param {String} subject 
 * @returns {Promise}
 */
export const sendEmailToSingleParticipant = (name, email, subject) => {
    const mailOptions = {
        from: `9o1Mailer <${process.env['EMAIL']}>`,
        to: email,
        subject: subject,
        html: `Hi! ${name}`
    }
    return new Promise((resolve, reject) => {
        smtpTransport.sendMail(mailOptions, (err, res) => {
            if (err)
                reject(err)
            else
                resolve(res)
        })
    })
}