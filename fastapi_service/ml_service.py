from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import re


class NewsInput(BaseModel):
    content: str


app = FastAPI(title="Fake News Detection API")


with open("fake_news_model.pkl", "rb") as f:
    model = pickle.load(f)

with open("tfidf_vectorizer.pkl", "rb") as f:
    vectorizer = pickle.load(f)


def clean_text(text):
    text = str(text).lower()
    text = re.sub(r"http\S+|www\S+", "", text)  # remove URLs
    text = re.sub(r"[^a-z\s]", "", text)        # keep alphabets only
    text = re.sub(r"\s+", " ", text).strip()
    return text


@app.post("/predict")
def predict_news(news: NewsInput):
    cleaned = clean_text(news.content)
    vec = vectorizer.transform([cleaned])
    pred = model.predict(vec)[0]
    return {"prediction": pred}
