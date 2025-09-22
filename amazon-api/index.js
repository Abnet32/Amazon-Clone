import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import Stripe from "stripe";

dotenv.config();
const stripe = new Stripe(
  "sk_test_51S9QPyPtguzKrL0HrPnZ8Zp50EA0o6oNjvNlOWtTnUCApVQJNQayaSj47anII6Ip5KdCqFolii855KXt973RWLlt00DXQMnmo3"
);

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Success",
  });
});
app.post("/payment/create", async (req, res) => {
  const total =parseInt(req.query.total);
  if (total > 0) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
    });
    res.status(201).json({
      clientSecret: paymentIntent.client_secret,
    });
  } else {
    res.status(403).json({
      message: "total must be greater than 0",
    });
  }
});
app.listen(3000,()=>{
    console.log("Amazon server running on port:3000 http://localhost:3000")
})