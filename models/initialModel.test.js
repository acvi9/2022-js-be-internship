const bookic = require("./initialModel");

test("should check if model exists", async() => {

    const a = await bookic.getTableName();
    expect(a).toBe("books");
});


