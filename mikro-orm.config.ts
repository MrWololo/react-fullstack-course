import { __prod__ } from "./src/constants";
import { Post } from "./src/entities/Post";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./src/entities/User";

export default {
  migrations: {
    path: path.join(__dirname, "./src/migrations"),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: "lireddit",
  password: "postgres",
  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
