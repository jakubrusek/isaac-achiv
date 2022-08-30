var express = require("express");
const api_helper = require("../API_helper");
var router = express.Router();
const gamedata = require("../public/jsons/game_data.json");

// router.use(function(req, res, next) {
//    console.log(req.url, "@", Date.now());
// });

router.post("/", function (req, res, next) {
  steamid = req.body.steamid[0];
  key = "2E6AE0E2AF6595F6BD3171BB92A86F9F";
  appid = "250900";

  call = `http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=${appid}&key=${key}&steamid=${steamid}`;

  console.log(`\nRequest for steamid: ${steamid}\n`);

  api_helper
    .make_API_call(call)
    .then((response) => {
      res.render("response", {
        response: response.playerstats.achievements,
        title: steamid,
        gamedata: gamedata,
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

router.get("/:steamid", function (req, res, next) {
  steamid = req.params.steamid;
  key = "2E6AE0E2AF6595F6BD3171BB92A86F9F";
  appid = "250900";

  call = `http://api.steampowered.com/ISteamUserStats/GetUserStatsForGame/v0002/?appid=${appid}&key=${key}&steamid=${steamid}`;

  console.log(`\nRequest for steamid: ${steamid}\n`);

  api_helper
    .make_API_call(call)
    .then((response) => {
      res.render("response", {
        response: response.playerstats.achievements,
        title: steamid,
        gamedata: gamedata,
      });
    })
    .catch((error) => {
      res.send(error);
    });
});

module.exports = router;
