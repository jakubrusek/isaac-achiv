var express = require("express");
const api_helper = require("../API_helper");
var router = express.Router();

router.get("/", function (req, res, next) {
  key = "2E6AE0E2AF6595F6BD3171BB92A86F9F";
  appid = "250900";

  call = `http://api.steampowered.com/ISteamUserStats/GetSchemaForGame/v2?appid=${appid}&key=${key}`;

  api_helper
    .make_API_call(call)
    .then((response) => {
      res.json(response);
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
