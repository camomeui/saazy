import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res.status(400).end();
  }
  const { email } = req.body;
  if (!email) {
    return res.redirect(302, "/failure");
  }
  try {
    // Connect any external service or DB to add subscriber here.
    res.redirect(302, "/success");
  } catch (e) {
    console.error(e);
    res.redirect(302, "/failure");
  }
}
