const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.setSubstitutionWrappers('{{', '}}');

const fs = require("fs");

//pathToAttachment = `${__dirname}/YAPNEWSLETTER.pdf`;
//attachment = fs.readFileSync(pathToAttachment).toString("base64");



const msg = {
    from: "newsletters@m2p.in",
    subject: "subject",
    text: "text",
    html: "<strong></strong>",
    templateId: 'd-2fa82ca1fa1949a4ac7200ea623a34c8',
    substitutionWrappers: ['{{', '}}'],
    /*attachments: [
        {
          content: attachment,
          filename: "YAPNEWSLETTER.pdf",
          type: "application/pdf",
          disposition: "attachment"
        }
      ],*/
  

    personalizations: [
      { to: 'rajakumaran@m2p.in',dynamic_template_data: { first_name: "Rajakumaran"}, },
      //{ to: 'rajkumar95ws@gmail.com',dynamic_template_data: { first_name: "Raja"}, },
//{ to: 'sandhya@m2p.in',dynamic_template_data: { first_name: "Sandhya"}, },
//{ to: 'rajkumar95ws@gmail.com',dynamic_template_data: { first_name: "Raj"}, },
//{ to: 'jack@m2p.in',dynamic_template_data: { first_name: "Antony Jackson"}, },
//{ to: 'jeeva@m2p.in',dynamic_template_data: { first_name: "Jeevanantham"}, },
//{ to: 'vidhya@m2p.in',dynamic_template_data: { first_name: "Vidhya"}, },
        
        
      ]



};




sgMail.send(msg).catch(err => {
  console.log(err);
});