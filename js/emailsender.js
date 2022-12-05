// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

function emailSender(form) {
    return;
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey('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')
    const msg = {
        to: 'ismaelojd96@gmail.com', // Change to your recipient
        from: 'ismaelojd96@gmail.com', // Change to your verified sender
        subject: 'Nuevo Pedido de contacto entrante',
        text: 'Un cliente ha solicitado que lo contacnten',
        html: '<div>Nombre Completo: <span>'+ name+'</span></div>'+
        '<div>Email: <span>'+ email+'</span></div>'+
        '<div>Télefono: <span>'+ phone+'</span></div>'
      }
      sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent')
        })
        .catch((error) => {
          console.error(error)
        })
}