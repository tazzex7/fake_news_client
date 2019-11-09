import { generateAuthActions } from 'redux-token-auth';

// "http://localhost:3000/auth"

const config = {
  authUrl: "https://fake-news-api.herokuapp.com/auth",
  userAttributes: {
    uid: "uid",
    email: "email",
    role: "role"
  },
  userRegistrationAttributes: {
    uid: "uid",
    email: "user@mail.com",
    password_confirmation: "password_confirmation",
    role: "role"
  }
};

const {
  registerUser,
  signInUser,
  signOutUser,
  verifyCredentials
} = generateAuthActions(config);

export { registerUser, signInUser, signOutUser, verifyCredentials };  