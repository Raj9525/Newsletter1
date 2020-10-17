const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgMail.setSubstitutionWrappers('{{', '}}');

const fs = require("fs");

pathToAttachment = `${__dirname}/YAPNEWSLETTER.pdf`;
attachment = fs.readFileSync(pathToAttachment).toString("base64");



const msg = {
    from: "newsletter@m2p.in",
    subject: "Newsletter",
    text: "text",
    html: "<strong></strong>",
    templateId: 'd-c19ff3aa12f6471db797825e92fe29ec',
    substitutionWrappers: ['{{', '}}'],
    attachments: [
        {
          content: attachment,
          filename: "YAPNEWSLETTER.pdf",
          type: "application/pdf",
          disposition: "attachment"
        }
      ],
  

    personalizations: [
/*
{ to: 'noman.zaheer@sokin.net',dynamic_template_data: { first_name: "Noman"}, },
{ to: 'zeba.mirajkar@npci.org.in',dynamic_template_data: { first_name: "zeba"}, },
{ to: 'daman.kanwat@yesbank.in',dynamic_template_data: { first_name: "daman.kanwat@yesbank.in"}, },
{ to: 'amit.mehra@loconav.com',dynamic_template_data: { first_name: "Amit"}, },
{ to: 'markcarlton@federalbank.co.in',dynamic_template_data: { first_name: "Mark"}, },
{ to: 'etc.management@axisbank.com',dynamic_template_data: { first_name: "Electronic"}, },
{ to: 'kanakaraj.m@esafbank.com',dynamic_template_data: { first_name: "KANAKARAJ"}, },
{ to: 'mihirp@fss.co.in',dynamic_template_data: { first_name: "Mihir"}, },
{ to: 'vinay.goyal@instavans.com',dynamic_template_data: { first_name: "Vinay"}, },
{ to: 'srimanta.nayak@paynearby.in',dynamic_template_data: { first_name: "Srimanta"}, },
{ to: 'mohanarun@equitasbank.com',dynamic_template_data: { first_name: "mohan"}, },
{ to: 'harsh.sharma@dmiconsumercredit.in',dynamic_template_data: { first_name: "Harsh"}, },
{ to: 'ashish.garg2@yesbank.in',dynamic_template_data: { first_name: "Ashish"}, },
{ to: 'amit@karboncard.com',dynamic_template_data: { first_name: "Amit"}, },
{ to: 'amanbansal@bdo.in',dynamic_template_data: { first_name: "Aman"}, },
{ to: 'gaurav.chourasia@finobank.com',dynamic_template_data: { first_name: "gaurav.chourasia@finobank.com"}, },
{ to: 'events@getpostman.com',dynamic_template_data: { first_name: "The"}, },
{ to: 'ayan@transcorpint.com',dynamic_template_data: { first_name: "Ayan"}, },
{ to: 'vasundhara.shah@npci.org.in',dynamic_template_data: { first_name: "Vasundhara"}, },
{ to: 'vijayan@m2p.in',dynamic_template_data: { first_name: "Vijayan Arivalagan"}, },
{ to: 'manik@gritfirst.com',dynamic_template_data: { first_name: "Manik"}, },
{ to: 'lekhaa@m2p.in',dynamic_template_data: { first_name: "Lekhaa Vasudevan"}, },
{ to: 'arindam.das@dmiconsumercredit.in',dynamic_template_data: { first_name: "Arindam"}, },
{ to: 'narasimmanb@equitasbank.com',dynamic_template_data: { first_name: "Narasimman"}, },
{ to: 'prem@alpsdeal.in',dynamic_template_data: { first_name: "Prem"}, },
{ to: 'ssuchitra@csb.co.in',dynamic_template_data: { first_name: "Suchitra"}, },
{ to: 'mansi.soni@flipkart.com',dynamic_template_data: { first_name: "Mansi"}, },
{ to: 'rahul.jain@transcorpint.com',dynamic_template_data: { first_name: "Rahul"}, },
{ to: 'vigneshbapual@equitasbank.com',dynamic_template_data: { first_name: "Vignesh"}, },
{ to: 'harikrishnan.nr@esafbank.com',dynamic_template_data: { first_name: "HARIKRISHNAN"}, },
{ to: 'niteshgoel@trackobit.com',dynamic_template_data: { first_name: "Nitesh"}, },
{ to: 'sriramkumar@bharatpetroleum.in',dynamic_template_data: { first_name: "Sriram"}, },
{ to: 'billing@zoom.us',dynamic_template_data: { first_name: "Zoom"}, },
{ to: 'lionel@verveindia.com',dynamic_template_data: { first_name: "Lionel"}, },
{ to: 'cms.helpdesk@yesbank.in',dynamic_template_data: { first_name: "CMS"}, },
{ to: 'sidharth.bhat@loconav.com',dynamic_template_data: { first_name: "Sidharth"}, },
{ to: 'noreply@visaonline.com',dynamic_template_data: { first_name: "noreply@visaonline.com"}, },
{ to: 'pradeep.o@tvscredit.com',dynamic_template_data: { first_name: "Pradeep"}, },
{ to: 'ssanthi@csb.co.in',dynamic_template_data: { first_name: "Santhi"}, },
{ to: 'srihari.bavirisetty@npci.org.in',dynamic_template_data: { first_name: "Srihari"}, },
{ to: 'info@indiafintech.com',dynamic_template_data: { first_name: "India"}, },
{ to: 'niranjan.repaka@npci.org.in',dynamic_template_data: { first_name: "Niranjan"}, },
{ to: 'rajthilak.j@yesbank.in',dynamic_template_data: { first_name: "rajthilak.j@yesbank.in"}, },
{ to: 'feroz.khan@yesbank.in',dynamic_template_data: { first_name: "Feroz"}, },
{ to: 'kisalay.sahoo@icicibank.com',dynamic_template_data: { first_name: "Kisalay"}, },
{ to: 'fred@fireflies.ai',dynamic_template_data: { first_name: "Fred"}, },
{ to: 'anusuya.mythily@brokerage-free.com',dynamic_template_data: { first_name: "Anusuya"}, },
{ to: 'innovations@npci.org.in',dynamic_template_data: { first_name: "Innovations"}, },
{ to: 'subramaniyam.r@dvara.com',dynamic_template_data: { first_name: "Subramaniyam"}, },
{ to: 'gc-orders@woohoo.in',dynamic_template_data: { first_name: "Corporate"}, },
{ to: 'iob2866@iob.in',dynamic_template_data: { first_name: "Tuticorin"}, },
{ to: 'pranav.s@sliceit.com',dynamic_template_data: { first_name: "Pravan"}, },
{ to: 'rohit.saini@stashfin.com',dynamic_template_data: { first_name: "Rohit"}, },
{ to: 'harshit.maloo@cashflo.io',dynamic_template_data: { first_name: "Harshit"}, },
{ to: 'a_praveenanandan@equitasbank.com',dynamic_template_data: { first_name: "Praveen"}, },
{ to: 'gagandeep@loconav.com',dynamic_template_data: { first_name: "Gagandeep"}, },
{ to: 'kesav@m2p.in',dynamic_template_data: { first_name: "Kesavvels Ramalingam"}, },
{ to: 'ashwani.rathore@gladiris.com',dynamic_template_data: { first_name: "Ashwani"}, },
{ to: 'kalaivani.kandan@npci.org.in',dynamic_template_data: { first_name: "Kalaivani"}, },
{ to: 'saurav.shahlot@loconav.com',dynamic_template_data: { first_name: "Saurav"}, },
{ to: 'devendra.dembla@npci.org.in',dynamic_template_data: { first_name: "Devendra"}, },
{ to: 'vaibhav.a@mctcardstech.com',dynamic_template_data: { first_name: "Vaibhav"}, },
{ to: 'abhiroop@getvelocity.in',dynamic_template_data: { first_name: "Abhiroop"}, },
{ to: 'ag@mytrux.com',dynamic_template_data: { first_name: "ag@mytrux.com"}, },
{ to: 'matrixindia@matrixpartners.in',dynamic_template_data: { first_name: "Matrix"}, },
{ to: 'asokan@m2p.in',dynamic_template_data: { first_name: "Asokan"}, },
{ to: 'hello@newsletter.bookmyshow.com',dynamic_template_data: { first_name: "BookMyShow"}, },
{ to: 'mohana@m2p.in',dynamic_template_data: { first_name: "Mohana Mary B"}, },
{ to: 'news@postman.com',dynamic_template_data: { first_name: "The"}, },
{ to: 'vinod.tg@genisys-group.com',dynamic_template_data: { first_name: "Vinod"}, },
{ to: 'dhananjay@perfectrfid.com',dynamic_template_data: { first_name: "Dhananjay"}, },
{ to: 'saiprasad@m2p.in',dynamic_template_data: { first_name: "Sai Prasad"}, },
{ to: 'pankaj@doodleblue.com',dynamic_template_data: { first_name: "Pankaj"}, },
{ to: 'akhil@godutchpay.in',dynamic_template_data: { first_name: "Akhil"}, },
{ to: 'vinod.nagaraj@lvbank.in',dynamic_template_data: { first_name: "Vinod"}, },
{ to: 'manish.negi@colorplast.in',dynamic_template_data: { first_name: "Manish"}, },
{ to: 'arun.nainar@icicibank.com',dynamic_template_data: { first_name: "Arun"}, },
{ to: 'piyush.thakur@yesbank.in',dynamic_template_data: { first_name: "piyush.thakur@yesbank.in"}, },
{ to: 'prabhu@m2p.in',dynamic_template_data: { first_name: "Prabhu"}, },
{ to: 'shah.parag@mahindra.com',dynamic_template_data: { first_name: "Parag"}, },
{ to: 'vihang.mate@yesbank.in',dynamic_template_data: { first_name: "vihang.mate@yesbank.in"}, },
{ to: 'ganapathy@payments2.com',dynamic_template_data: { first_name: "Ganapathy"}, },
{ to: 'rsaravanakumar@csb.co.in',dynamic_template_data: { first_name: "rsaravanakumar@csb.co.in"}, },
{ to: 'shailendra@instantpay.in',dynamic_template_data: { first_name: "Shailendra"}, },
{ to: 'a_anandakumar@equitasbank.com',dynamic_template_data: { first_name: "Ananda"}, },
{ to: 'khushboo.kumari@npci.org.in',dynamic_template_data: { first_name: "Khushboo"}, },
{ to: 'pramod.verma@finobank.com',dynamic_template_data: { first_name: "pramod.verma@finobank.com"}, },
{ to: 'joseph@paygyft.com',dynamic_template_data: { first_name: "joseph@paygyft.com"}, },
{ to: 'rahul.jagtap@idfcfirstbank.com',dynamic_template_data: { first_name: "Rahul"}, },
{ to: 'jaikanth.shanmugam@visa.com',dynamic_template_data: { first_name: "Shanmugam,"}, },
{ to: 'althafbasha@csb.co.in',dynamic_template_data: { first_name: "Althaf"}, },
{ to: 'pothigai@m2p.in',dynamic_template_data: { first_name: "Pothigai Amudha"}, },
{ to: 'ignatius.dabre1@yesbank.in',dynamic_template_data: { first_name: "ignatius.dabre1@yesbank.in"}, },
{ to: 'venkataraman.k@cityunionbank.in',dynamic_template_data: { first_name: "venkataraman.k@cityunionbank.in"}, },
{ to: 'ranjithkumarr@equitasbank.com',dynamic_template_data: { first_name: "Ranjith"}, },
{ to: 'preethi@m2p.in',dynamic_template_data: { first_name: "Preethi Parthasarathy"}, },
{ to: 'bhaskar@tech.linq.store',dynamic_template_data: { first_name: "Bhaskar"}, },
{ to: 'rohit.kumar17@yesbank.in',dynamic_template_data: { first_name: "Rohit"}, },
{ to: 'sonal.malhotra@astiinfotech.com',dynamic_template_data: { first_name: "sonal.malhotra@astiinfotech.com"}, },
{ to: 'sunita.prabhu@sbmbank.co.in',dynamic_template_data: { first_name: "Sunita"}, },
{ to: 'kaushal.singh@npci.org.in',dynamic_template_data: { first_name: "Kaushal"}, },




   */     
        
      ]



};




sgMail.send(msg).catch(err => {
  console.log(err);
});