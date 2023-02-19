import sgMail from '@sendgrid/mail'
import {VITE_SENDGRID_API_KEY} from '$env/static/private'

export const actions = {
    default: async ({request}) => {
        const data = await request.formData();
        const email = data.get('email')
        const name = data.get('name')
        const services = data.get('services')
        const description = data.get('description')
        const phone = data.get('phone')

        sgMail.setApiKey(VITE_SENDGRID_API_KEY)
        const msg = {
            to: 'lonelytogethermusic@gmail.com',
            from: 'tyler.teuber@me.com',
            subject: services,
            text: `name: ${name}\n email: ${email}\n phone: ${phone}\n ${description}`,
        }
        await sgMail
            .send(msg)
            .then(() => {
                console.log("email sent")
                return {success: true}
            })
            .catch((error) => {
                console.log(error)
                return {success: false}
            })
    }
}