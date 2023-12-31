import jwt from "jsonwebtoken";

export const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id.toString(),
      email: user.email,
      name: user.name,
    },
    process.env.SECRET,
    { expiresIn: "1h" }
  ); // 1 hour expiry
};

export const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, SECRET);
    return decoded;
  } catch (err) {
    throw err;
  }
};
