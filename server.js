const express = require("express");
const cors = require("cors");
require("dotenv").config();

const OpenAI = require("openai");

const app = express();

app.use(cors());
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

app.post("/analyze", async (req, res) => {

  try {

    const { idea } = req.body;

    const prompt = `
You are an advanced AI market analyst.

Analyze this business idea:

"${idea}"

Return:
1. Trend Strength
2. Growth Prediction
3. Competition Level
4. Best Markets
5. Monetization Potential
6. Risks
7. Future Outlook

Keep answers concise and professional.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4.1-mini",

      messages: [
        {
          role: "user",
          content: prompt
        }
      ]
    });

    const result =
      completion.choices[0].message.content;

    res.json({
      success: true,
      analysis: result
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      error: "Something went wrong."
    });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
