
import database from "../database.js";

export const getUsers = async (req, res) => {
    const q = "SELECT * FROM usuario";

    try {
        const [data] = await database.query(q);
        res.status(200).json(data);
    } catch (err) {
        res.json(err);
    }
};
