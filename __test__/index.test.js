const request = require("supertest");
const app = require("../app");

test(`GET api/images (200):
    Should return data with properties: last_update, images
    Each image should have properties:
    - title
    - image_url
    - flickr_link`, () => {
  return request(app)
    .get("/api/images")
    .then((response) => {
      expect(response.status).toEqual(200);

      const data = response.body;
      expect(data).toHaveProperty("last_update");
      expect(data).toHaveProperty("images");

      const images = data.images;
      expect(Array.isArray(images)).toBe(true);
      expect(
        images.every(({ title, image_url, flickr_link }) =>
          [title, image_url, flickr_link].every((item) => !!item)
        )
      ).toBe(true);
    });
});

test(`GET api/images?tags=* (200):
    Should return data with properties: last_update, images
    Each image should have properties:
    - tags
    Any of tags should match tags params`, () => {
  const tagsParam = "footbal player,sport";
  return request(app)
    .get("/api/images?tags=" + tagsParam)
    .then((response) => {
      expect(response.status).toEqual(200);

      const data = response.body;
      expect(data).toHaveProperty("last_update");
      expect(data).toHaveProperty("images");

      const images = data.images;
      expect(Array.isArray(images)).toBe(true);
      expect(
        images.every(({ tags }) =>
          tags.some((item) => tagsParam.replace(" ", "").includes(item))
        )
      ).toBe(true);
    });
});
