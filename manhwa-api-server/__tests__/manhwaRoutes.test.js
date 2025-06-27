const mongoose = require('mongoose');
const request = require('supertest');
const Manhwa = require('../models/manhwaModel'); // remove `.js` extension
const app = require('../server'); // no .js

// Sample test data
const sampleManhwa = {
  title: "Solo Leveling",
  author: "Chugong",
  status: "Completed",
  genre: ["Action", "Fantasy"],
  rating: 9.5,
  imageUrl: "https://example.com/image.jpg"
};

beforeAll(async () => {
  await mongoose.connect("mongodb://127.0.0.1:27017/test_manhwa_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase();
  await mongoose.connection.close();
});

describe("Manhwa API Tests", () => {
  it("should create a new manhwa", async () => {
    const response = await request(app)
      .post("/api/manhwas")
      .send(sampleManhwa);

    expect(response.statusCode).toBe(201);
    expect(response.body.title).toBe(sampleManhwa.title);
  });

  it("should fetch all manhwas", async () => {
    const response = await request(app).get("/api/manhwas");

    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it("should delete a manhwa", async () => {
    const manhwa = await Manhwa.create(sampleManhwa);
    const response = await request(app).delete(`/api/manhwas/${manhwa._id}`);

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe("Deleted successfully");
  });
});
