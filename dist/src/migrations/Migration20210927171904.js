"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20210927171904 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20210927171904 extends migrations_1.Migration {
    async up() {
        this.addSql('drop table if exists "user" cascade;');
    }
}
exports.Migration20210927171904 = Migration20210927171904;
//# sourceMappingURL=Migration20210927171904.js.map