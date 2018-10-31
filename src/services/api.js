import axios from "axios";
import { Question } from "../models";
const BASE_URL = process.env.VUE_APP_BASE_URI;
const HTTP = axios.create({
  baseURL: BASE_URL
  // headers: {
  //   Authorization: 'Bearer {token}'
  // }
});

export const Api = {
  getQuestions: getQuestions,
  getRandomQuestions: getRandomQuestions,
  getTags: getTags
};

async function getQuestions() {
  return HTTP.get("questions").then(response => {
    return response.data.map(x => new Question(x));
  });
}
async function getRandomQuestions(n, tags) {
  let questions = await getQuestions();
  if (tags && Array.isArray(tags) && tags.length > 0) {
    questions = questions.filter(q =>
      q.tags.some(t => tags.includes(t.toLowerCase()))
    );
  }
  return getRandomItemsFromArray(questions, n, tags);
}

function getRandomItemsFromArray(array, n) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

async function getTags() {
  const questions = await getQuestions();
  const tags = questions.reduce((tags, item) => {
    item.tags.forEach(t => tags.add(t));
    return tags;
  }, new Set());

  return Array.from(tags);
}
