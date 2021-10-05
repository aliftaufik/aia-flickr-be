const axios = require("axios");

class MainController {
  static async getImages(req, res) {
    const {
      data: { items },
    } = await axios.get(
      "https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1"
    );

    const mappedData = items.map((item) => {
      return {
        image: item.media?.m ?? "",
      };
    });

    res.json(mappedData);
  }
}

module.exports = MainController;
