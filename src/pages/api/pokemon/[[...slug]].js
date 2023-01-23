// this api url is not used by the app itself, but is useful
// for viewing the data and debugging the getData function
// http://localhost:3000/api/pokemon
// http://localhost:3000/api/pokemon/001

// in nextjs, [[...slug]].js matches the following route paths:
// /api/pokemon/001 - serves one pokemon
// AND
// /api/pokemon - to serve all pokemon
// more: https://nextjs.org/docs/api-routes/introduction

import getData from "@/server/features/pokemon/get-data";

export default async function handler(req, res) {
  const [num] = req.query.slug || [];

  const data = await getData();

  res.status(200).json(num ? data.filter((d) => d.num === num) : data);
}
