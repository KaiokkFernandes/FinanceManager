
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
// Adicione esta função ao seu controller
export const deleteUser = async (req, res) => {
    const id = req.params.id; // Ou como você deseja passar o ID
    const q = "DELETE FROM usuario WHERE id = ?";

    try {
        await database.query(q, [id]);
        res.status(200).json({ message: "Item deletado com sucesso." });
    } catch (err) {
        res.status(500).json(err);
    }
};

export const getSummary = async (req, res) => {
    const queryEntradas = "SELECT SUM(entrada) as totalEntradas FROM usuario";
    const querySaidas = "SELECT SUM(saida) as totalSaidas FROM usuario";
    const queryTotal = "SELECT (SUM(entrada) - SUM(saida)) as saldoTotal FROM usuario";

    try {
        const [entradas] = await database.query(queryEntradas);
        const [saidas] = await database.query(querySaidas);
        const [total] = await database.query(queryTotal);

        const summary = {
            income: entradas[0].totalEntradas || 0,
            expense: saidas[0].totalSaidas || 0,
            total: total[0].saldoTotal || 0
        };
        res.status(200).json(summary);
    } catch (err) {
        console.error("Erro ao obter o resumo financeiro:", err);
        res.status(500).json(err);
    }
};


