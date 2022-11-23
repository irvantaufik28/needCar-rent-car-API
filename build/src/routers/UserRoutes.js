"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// Controllers
const UserControllers_1 = __importDefault(require("../controllers/UserControllers"));
class UserRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.routes();
    }
    routes() {
        this.router.get('/', UserControllers_1.default.index);
        this.router.post('/', UserControllers_1.default.create);
        this.router.get('/:id', UserControllers_1.default.show);
        this.router.put('/update/:id', UserControllers_1.default.update);
        this.router.delete('/delete/:id', UserControllers_1.default.delete);
    }
}
exports.default = new UserRoutes().router;
