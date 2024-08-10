describe('Prueba unitaria de página Hola Mundo', () => {
    beforeAll(async () => {
        await page.goto('file://' + process.cwd() + '/index.html');
    });

    it('debe mostrar "Hola Mundo" en un h1', async () => {
        await expect(page).toMatch('Hola Mundo');
    });
});
