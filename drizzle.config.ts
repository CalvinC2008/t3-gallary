<<<<<<< HEAD
import { type Config } from "drizzle-kit";
=======
import type { Config } from "drizzle-kit";
>>>>>>> 8928a09 (Added three images)

import { env } from "~/env";

export default {
<<<<<<< HEAD
  schema: "./src/server/db/schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  tablesFilter: ["t3-gallery_*"],
=======
	schema: "./src/server/db/schema.ts",
	dialect: "postgresql",
	dbCredentials: {
		url: env.DATABASE_URL,
	},
	tablesFilter: ["t3-gallery2_*"],
>>>>>>> 8928a09 (Added three images)
} satisfies Config;
