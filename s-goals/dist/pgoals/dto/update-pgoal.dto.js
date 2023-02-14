"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePgoalDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_pgoal_dto_1 = require("./create-pgoal.dto");
class UpdatePgoalDto extends (0, mapped_types_1.PartialType)(create_pgoal_dto_1.CreatePgoalDto) {
}
exports.UpdatePgoalDto = UpdatePgoalDto;
//# sourceMappingURL=update-pgoal.dto.js.map