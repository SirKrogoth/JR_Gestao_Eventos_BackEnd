"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const express_1 = __importDefault(require("express"));
const config_1 = __importDefault(require("./database/config"));
const appp = (0, express_1.default)();
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const port = parseInt(`${process.env.PORT}`);
        yield config_1.default.sync();
        console.log(`The Database is running in ${process.env.DB_NAME}...`);
        app_1.default.listen(port, () => {
            console.log(`The API Authentication is running on port ${port}...`);
        });
    }
    catch (error) {
        console.error('Fail to connect database, contact the administrator and show the message. Message: ' + error);
    }
}))();
