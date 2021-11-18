const router = require("express").Router();

// if needed
// redirects user to homepage after login
router.get("/login", (req, res) => {
  console.log('**enter login redirect')
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  
  res.render("login");
});

router.get("/", (req, res) => {
  res.render("index", {
    loggedIn: req.session.loggedIn
  });
});

module.exports = router;
