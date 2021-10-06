const axios = require("axios");

class MainController {
  static async getImages(req, res) {
    const { data } = await axios.get(
      "https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1"
    );

    const result = {
      last_update: data.modified,
      images: data.items.map((item) => {
        const imageUrl = item.media?.m ?? "";
        return {
          title: item.title || imageUrl,
          image_url: imageUrl,
          flickr_link: item.link,
          tags: item.tags.split(" "),
        };
      }),
    };

    res.json(result);
  }
}

module.exports = MainController;
