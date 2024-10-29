import { Unkey } from "@unkey/api";
import dotenv from "dotenv";

dotenv.config();

function withAuth(opts) {
  const unkey = new Unkey({
    rootKey: process.env.UNKEY_ROOT_KEY,
  });

  return async (req, res, next) => {
    const key = req.headers["authorization"]?.split(" ").at(1);
    if (!key) {
      console.log("No API key found");
      res.status(401);
      return res.send("Unauthorized");
    }

    const { result, error } = await unkey.keys.verify({
      apiId: process.env.UNKEY_API_ID,
      key,
      authorization: { permissions: opts.permission },
    });
    if (error) {
      console.error("Verification error:", error.message);
      res.status(500);
      return res.send("Internal Server Error");
    }

    if (!result.valid) {
      console.log("Forbidden:", result.code);
      res.status(403);
      return res.send("Forbidden");
    }

    next();
  };
}

export default withAuth;
