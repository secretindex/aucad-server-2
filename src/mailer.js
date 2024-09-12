import nodemailer from "nodemailer"

const transport = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: "Buxtehude",
  },
});

export default transport;
