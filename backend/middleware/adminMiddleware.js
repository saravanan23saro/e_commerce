const admin = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next(); // ✅ admin allowed
  } else {
    res.status(403).json({ message: "Admin access only" });
  }
};

module.exports = { admin };
