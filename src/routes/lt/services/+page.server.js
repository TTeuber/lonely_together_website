import sgMail from '@sendgrid/mail'
import {SENDGRID_API_KEY} from '$env/static/private'

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const email = data.get('email')
        const name = data.get('name')
        const services = data.get('services')
        const description = data.get('description')
        const phone = data.get('phone')

        sgMail.setApiKey(SENDGRID_API_KEY)
        const msg = {
            to: 'tyler.teuber@gmail.com', // Change to your recipient
            from: 'tyler.teuber@me.com', // Change to your verified sender
            subject: services,
            text: `name: ${name}\n email: ${email}\n phone: ${phone}\n ${description}`,
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