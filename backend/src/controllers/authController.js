const pool = require("../config/db");

const login = async (req, res) => {
  const { email, password } = req.body || {};

  if (
    typeof email !== "string" || typeof password !== "string" || !email.trim() || !password) {
    return res.status(400).json({
      message: "Email and password are required.",
    });
  }

  try {
    const result = await pool.query(
      `
      SELECT id, email
      FROM public.users
      WHERE LOWER(email) = LOWER($1)
        AND password = $2
      LIMIT 1
      `,
      [email.trim(), password]
    );

    if (result.rows.length === 0) {
      return res.status(401).json({
        message: "Invalid email or password.",
      });
    }

    res.set("Cache-Control", "no-store");

    return res.status(200).json({
      message: "Login successful.",
      user: result.rows[0],
    });
  } catch (error) {
    console.error("Login failed:", error);

    return res.status(500).json({
      message: "Unable to sign in. Please try again.",
    });
  }
};

module.exports = {
  login,
};