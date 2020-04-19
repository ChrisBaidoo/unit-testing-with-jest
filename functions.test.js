const functions = require('./functions');

//beforeAll
beforeAll(() =>  initialisedDatabase())
initialisedDatabase = () => console.log('Database initialised...')

//afterAll
afterAll(() =>  closedDatabase())
closedDatabase = () => console.log('Database closed...')




//toBe
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

//not
test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

//toBeNull
test('Should be null', () => {
    expect(functions.isNull()).toBeNull();
});

//tobeFalsy
test('Should be null', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

//toEqual
test('User should be Chris Baidoo object', () => {
    expect(functions.creatUser()).toEqual({firstName: 'Chris', lastName: 'Baidoo'});
});

//less than and greater than
test('Should be under 1600', () => {
    expect(functions.checkWeight(800, 700)).toBeLessThan(1600);
});

//Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/)
})

//Arrays
test('Admin should be in usernames', () => {
    usernames =['john', 'darren', 'admin'];
    expect(usernames).toContain('admin');
})

test('User fetched name should be Leanne Graham', () => {
    expect.assertions(1);
    return functions.fetchUser()
    .then(data => {
        expect(data.name).toEqual('Leanne Graham')
    })
})




