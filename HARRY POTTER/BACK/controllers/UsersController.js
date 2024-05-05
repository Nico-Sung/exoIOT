import prisma from "../config/prisma.js";
import { hashPassword } from "../utils/bcrypt.js";

class UsersController {
    getMyProfile(req, res) {
        const user = req.user;
        return res.status(200).send(user);
    }

    async index(req, res) {
        const users = await prisma.user.findMany();
        return res.status(200).send(users);
    }

    async store(req, res) {
        try {
            const body = req.body;
            const user = await prisma.user.create({
                data: {
                    name: body.name,
                    email: body.email,
                    password: await hashPassword(body.password),
                },
            });
            return res.status(201).send(user);
        } catch (error) {
            return res
                .status(400)
                .send(
                    "Une erreur est survenue lors de la création de l'utilisateur"
                );
        }
    }

    async show(req, res) {
        const userId = req.params.id;
        const user = await prisma.user.findUnique({
            where: {
                id: parseInt(userId),
            },
        });
        if (!user) {
            return res.status(404).send("Utilisateur non trouvé");
        }
        return res.status(200).send(user);
    }

    async update(req, res) {
        try {
            const userId = req.params.id;
            const body = req.body;
            const user = await prisma.user.update({
                where: {
                    id: parseInt(userId),
                },
                data: body,
            });
            if (user === null) {
                return res.status(404).send("Utilisateur non trouvé");
            }
            return res.status(200).send(user);
        } catch (error) {
            return res.status(500).send("Mail deja utilisé");
        }
    }

    async destroy(req, res) {
        try {
            const userId = req.params.id;
            const user = await prisma.user.delete({
                where: {
                    id: parseInt(userId),
                },
            });
            return res.status(200).send("supprimed");
        } catch (error) {
            return res.status(404).send("Utilisateur non trouvé");
        }
    }
}

//module.exports = new UsersController();

export default new UsersController();
