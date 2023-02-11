import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(400).end();
  }
  const { firstName, lastName, company, email, message } = req.body;
  if (!firstName || !lastName || !company || !email || !message) {
    return res.redirect(302, "/failure");
  }
  try {
    // Handle message here.
    res.redirect(302, "/success");
  } catch (e) {
    console.error(e);
    res.redirect(302, "/success");
  }
}
