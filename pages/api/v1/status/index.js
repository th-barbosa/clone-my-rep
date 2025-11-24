import database from "infra/database.js";

async function status(request, response) {
    const result = await database.query("SELECT 1 + 1 AS query_result;");
    console.log(result.rows);
    response.status(200).json({ "chave":"status de thbarbosa.com.br" }); // json para habilitar UTF-8
}

export default status;