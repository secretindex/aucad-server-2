import express from "express";
import transport from "../mailer.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "fala friends",
  });
});

router.post("/sendmail", (req, res) => {
  try {
    if (!req.body.from || !req.body.subject || !req.body.text)
      throw new Error("Please, fill the entire form");

    const mailOptions = {
      from: req.body.from,
      to: "souleaterply@gmail.com",
      subject: req.body.subject,
      text: req.body.text,
    };

    console.log(mailOptions);

    transport.sendMail(mailOptions, (err, data) => {
      if (err) console.error(err);
      else {
        console.log("email sent succesfully ");
        console.log(data);

        res.json({
          message: "oi manda email",
          body: req.body,
        });
      }
    });
  } catch (error) {
    res.json({
      message: "deu erro",
      error,
    });
  }
});

export default router;
