import { NextApiHandler } from 'next'
import nodemailer from 'nodemailer'

const sendEmailHandler: NextApiHandler = async (req, res) => {
    const { method, body } = req

    return new Promise<void>((resolve, reject) => {
        if (method === 'POST') {
            // const transporter = nodemailer.createTransport({
            //     service: 'hotmail',
            //     auth: {
            //         user: process.env.HOTMAIL_USER,
            //         pass: process.env.HOTMAIL_PASS
            //     }
            // })
            const transporter = nodemailer.createTransport({
                host: 'smtp-relay.sendinblue.com',
                port: 587,
                auth: {
                    user: process.env.SENDINBLUE_USER,
                    pass: process.env.SENDINBLUE_PASS
                }
            })

            const { subject, text, userName, userEmail } = body

            const htmlContent = `<h3>${subject} - ${userEmail}</h3><p>${text}</p>`

            const mailOptions = {
                from: `${userName} <${userEmail}>`,
                to: process.env.SENDINBLUE_USER,
                subject,
                html: htmlContent
            }

            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    console.log(error)
                    res.status(500).end('Não foi possível enviar o email')
                    reject()
                }

                res.status(200).json({
                    message: `Email  enviado com sucesso`
                })
                resolve()
            })
        } else {
            res.setHeader('Allow', ['POST'])
            res.status(405).end(`Method ${method} Not Allowed`)
            reject()
        }
    })
}

export default sendEmailHandler
