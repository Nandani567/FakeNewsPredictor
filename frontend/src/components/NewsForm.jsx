import React, { useState } from "react";
import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
import axios from "axios";

function NewsForm({ addArticle }) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content) return;

    setLoading(true);
    try {
      const response = await axios.post("http://localhost:3001/predict", { content });
      const label = response.data.prediction.toLowerCase(); // 'real' or 'fake'
      addArticle({ title: "", content, label });
      setContent("");
    } catch (error) {
      console.error(error);
      alert("Prediction failed. Make sure backend is running!");
    }
    setLoading(false);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <FormControl
          placeholder="Enter news content..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="rounded-pill shadow-sm"
        />
        <Button type="submit" variant="primary" className="ms-2 rounded-pill shadow-sm">
          {loading ? "Predicting..." : "Search"}
        </Button>
      </InputGroup>
    </Form>
  );
}

export default NewsForm;

// import React, { useState } from "react";
// import { Form, Button, InputGroup, FormControl } from "react-bootstrap";
// import axios from "axios";

// function NewsForm({ addArticle }) {
//   const [content, setContent] = useState("");
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!content) return;

//     setLoading(true);
//     try {
//     const response = await axios.post(
//   "https://fakenewspredictor-ip43.onrender.com/predict",
//   { content }
// );

//       // Get prediction ('real' or 'fake') from backend
//       const label = response.data.prediction.toLowerCase();
//       addArticle({ title: "", content, label });

//       setContent("");
//     } catch (error) {
//       console.error(error);
//       alert("Prediction failed. Make sure backend is running!");
//     }
//     setLoading(false);
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <InputGroup>
//         <FormControl
//           placeholder="Enter news content..."
//           value={content}
//           onChange={(e) => setContent(e.target.value)}
//           className="rounded-pill shadow-sm"
//         />
//         <Button
//           type="submit"
//           variant="primary"
//           className="ms-2 rounded-pill shadow-sm"
//         >
//           {loading ? "Predicting..." : "Search"}
//         </Button>
//       </InputGroup>
//     </Form>
//   );
// }

// export default NewsForm;
