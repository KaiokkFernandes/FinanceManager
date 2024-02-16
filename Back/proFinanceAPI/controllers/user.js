
import database from "../database.js";

//controler para obter os itemns do grid 
export const getUsers = async (req, res) => {
    const q = "SELECT * FROM usuario";

    try {
        const [data] = await database.query(q);
        res.status(200).json(data);
    } catch (err) {
        res.json(err);
    }
};
//controler para deletar um item do grid    
export const deleteUser = async (req, res) => {
    const id = req.params.id; 
    const q = "DELETE FROM usuario WHERE id = ?";

    try {
        await database.query(q, [id]);
        res.status(200).json({ message: "Item deletado com sucesso." });
    } catch (err) {
        res.status(500).json(err);
    }
};
//controler para obter o resumo financeiro
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
//updateTotal é uma função que atualiza o total de entradas e saídas    
const updateTotal = async () => {
 
    const [rows] = await database.query('SELECT (SUM(entrada) - SUM(saida)) as saldoTotal FROM usuario');
    const totalAtualizado = rows[0].saldoTotal || 0;

    await database.query('UPDATE usuario SET total = ?', [totalAtualizado]);
};


// Controller para adicionar uma nova transação e atualizar o total
export const addTransaction = async (req, res) => {
    const { desc, valor, isExpense } = req.body; 
    
    const valoresAjustados = isExpense ? { entrada: 0, saida: valor } : { entrada: valor, saida: 0 };

    const insertTransactionQuery = `
    INSERT INTO usuario (\`desc\`, \`valor\`, \`entrada\`, \`saida\`)
    VALUES (?, ?, ?, ?)
    `;

    try {
        await database.query(insertTransactionQuery, [desc, valor, valoresAjustados.entrada, valoresAjustados.saida]);

        await updateTotal();    
        res.status(201).json({ message: "Transação adicionada com sucesso." });
    } catch (error) {
        console.error("Erro ao adicionar a transação:", error);
        res.status(500).json({ message: "Erro ao adicionar a transação", error });
    }
};
