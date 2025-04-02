const middleware = {};

// Middleware to ensure the user is not logged in
middleware.ensureNotLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return res.redirect("/map"); // Redirect to the dashboard if logged in
  }
  next();
};

// Middleware to ensure the user is logged in
middleware.ensureLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next(); // Proceed if the user is authenticated
  }
  req.flash("error", "You must be logged in to access this page.");
  res.redirect("/auth/login");
};

module.exports = middleware;
