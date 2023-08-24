import { getUserEmail } from "./stub.database";
// user.js
export function sendWelcomeEmail(userId: number) {
  const email = getUserEmail(userId);
  // Send email to the user...

  return email;
}
