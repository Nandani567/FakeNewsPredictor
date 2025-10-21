import React from "react";
import { Card } from "react-bootstrap";

function NewsCard({ title, content, label }) {
  return (
    <Card style={{ width: '18rem', margin: '10px', backgroundColor: label === 'real' ? '#d4edda' : '#f8d7da' }}>
      <Card.Body>
        {/* <Card.Title>{title || "No Title"}</Card.Title> */}
        <Card.Text>{content}</Card.Text>
        <Card.Text className="fw-bold" style={{ color: label === 'real' ? '#155724' : '#721c24' }}>
          {label.toUpperCase()}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NewsCard;
