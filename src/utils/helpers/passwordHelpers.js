import argon2 from "argon2";

function hashPassword(password) {
  return argon2.hash(password);
}

function verifyPassword(hashed, original) {
  return argon2.verify(hashed, original);
}

export { hashPassword, verifyPassword };
