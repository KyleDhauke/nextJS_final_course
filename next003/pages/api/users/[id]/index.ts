import { NextApiRequest, NextApiResponse } from "next";
import { users } from "..";

export default async function endpoint(req: NextApiRequest, res: NextApiResponse) {
  console.log("I've been requested!")
  res.status(200).json(users[parseInt(req.query.id as any) - 1])
}
