const axios = require("axios");

class MainController {
  static async getImages(req, res) {
    const response = await axios.get(
      "https://www.flickr.com/services/feeds/photos_public.gne?format=json&nojsoncallback=1"
    );

    res.json(response.data);
  }
}

module.exports = MainController;
