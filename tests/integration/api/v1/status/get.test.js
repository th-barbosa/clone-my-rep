test("GET to /api/v1/status should return 200", async() => {
    const response = await fetch("http://localhost:3000/api/v1/status")
    expect(response.status).toBe(200)
});

// `npm run test:watch` é o comando para deixar os testes rodando em modo watch