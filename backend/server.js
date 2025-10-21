const express = require("express");
const axios = require("axios");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3001; 


app.use(cors()); 
app.use(bodyParser.json());


app.post("/predict", async (req, res) => {
  try {
    const { content } = req.body;

    if (!content) {
      return res.status(400).json({ error: "Content is required" });
    }

   
    const response = await axios.post("http://127.0.0.1:8000/predict", { content });
    
    const prediction = response.data.prediction;

  
    res.json({ prediction });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Something went wrong" });
  }
});


app.listen(PORT, () => {
  console.log(`Node.js backend running at http://localhost:${PORT}`);
});


// const express = require("express");
// const axios = require("axios");
// const bodyParser = require("body-parser");
// const cors = require("cors");

// const app = express();
// const PORT = 3001;

// app.use(cors());
// app.use(bodyParser.json());

// app.post("/predict", async (req, res) => {
//   try {
//     const { content } = req.body;

//     if (!content) {
//       return res.status(400).json({ error: "Content is required" });
//     }

//     // Call the deployed FastAPI service
//     const modelApiUrl = "https://fakenewspredictor-ip43.onrender.com/predict";
//     const response = await axios.post(modelApiUrl, { content });

//     const prediction = response.data.prediction;

//     res.json({ prediction });
//   } catch (error) {
//     console.error(error.message);
//     res.status(500).json({ error: "Something went wrong" });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Node.js backend running at http://localhost:${PORT}`);
// });
