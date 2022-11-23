"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let data = [
    { id: 1, name: 'irvan' },
    { id: 2, name: 'cindy' },
    { id: 3, name: 'kian' },
    { id: 4, name: 'zamza' }
];
class UserController {
    index(req, res) {
        return res.send(data);
    }
    create(req, res) {
        const { id, name } = req.body;
        data.push({
            id: id,
            name: name
        });
        return res.send("create succses");
    }
    show(req, res) {
        const { id } = req.params;
        let person = data.find(item => item.id == id);
        console.log(person);
        return res.send(person);
    }
    update(req, res) {
        throw new Error('Method not implemented.');
    }
    delete(req, res) {
        throw new Error('Method not implemented.');
    }
}
exports.default = new UserController();
