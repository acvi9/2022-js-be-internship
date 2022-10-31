const db = require('../config/db-config');
const bookic = require("./initialModel");



test("does object exist", async () => {
    const querry = `SELECT * FROM books WHERE id =1`;
    console.log(bookic.Book)
    const result = await bookic.title;

    expect(result).toEqual("test");
})

