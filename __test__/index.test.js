const request = require("supertest");
const app = require("../app");

test("GET api/images: Should return list of images (200)", () => {
  return request(app)
    .get("/")
    .then((response) => {
      expect(response.status).toEqual(200);
      const data = response.body;
      expect(Array.isArray(data)).toBe(true);
      expect(data.every((item) => !!item.image)).toBe(true);
    });
});
