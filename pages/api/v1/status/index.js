function status(request, response) {
    response.status(200).json({ "chave":"status de thbarbosa.com.br" }) // json para habilitar UTF-8
}

export default status;