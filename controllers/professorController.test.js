const professorController = require('./professorController');

describe('Professor Controller', () => {
    describe('listAllProfessors', () => {
        test('should return 200 when get all professors', async () => {
            const res = {
                status: jest.fn().mockReturnThis(),
                json: jest.fn().mockReturnThis()
            };

            await professorController.listAllProfessors(null, res);
            
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalled();
        });
    });

});
