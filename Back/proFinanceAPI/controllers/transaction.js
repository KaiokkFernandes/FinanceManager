export const getTransactions = async (req, res) => {
    const query = "SELECT * FROM usuario"; // ajuste o nome da tabela conforme necessário

    try {
        const [data] = await database.query(query);
        res.status(200).json(data);
    } catch (err) {
        res.json(err);
    }
};
