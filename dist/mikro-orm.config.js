"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./src/constants");
const Post_1 = require("./src/entities/Post");
const path_1 = __importDefault(require("path"));
const User_1 = require("./src/entities/User");
exports.default = {
    migrations: {
        path: path_1.default.join(__dirname, "./src/migrations"),
        pattern: /^[\w-]+\d+\.[tj]s$/,
    },
    entities: [Post_1.Post, User_1.User],
    dbName: "lireddit",
    password: "postgres",
    type: "postgresql",
    debug: !constants_1.__prod__,
};
//# sourceMappingURL=mikro-orm.config.js.map