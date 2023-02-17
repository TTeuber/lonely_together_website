import sgMail from '@sendgrid/mail'
import {VITE_SENDGRID_API_KEY} from '$env/static/private'

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const email = data.get('email')
        const name = data.get('name')
        const subject = data.get('subject')
        const description = data.get('description')

        sgMail.setApiKey(VITE_SENDGRID_API_KEY)
        const msg = {
            to: 'tyler.teuber@gmail.com', // Change to your recipient
            from: 'tyler.teuber@me.com', // Change to your verified sender
            subject: subject,
            text: `name: ${name}\n email: ${email}\n ${description}`,
        }
        sgMail
            .send(msg)
            .then(() => {
                console.log('Email sent')
            })
            .catch((error) => {
                console.error(error)
            })

        return {success: true}
    }
}