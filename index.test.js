const {sequelize} = require('./db')
const {Restaurant, Menu, Item} = require('./models/index')

const {
    seedRestaurant,
    seedMenu,
  } = require('./seedData');

describe('Restaurant and Menu Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    });

//{ name: 'Burger King', location: 'Glasgow', cuisine: 'Burgers' }

    test('can create a Restaurant', async () => {
        const restaurant1 = await Restaurant.create(seedRestaurant[0]);
            expect(restaurant1.name).toBe('AppleBees');
        
    });

    test('can create a Menu', async () => {
        const menu1 = await Menu.create({ title: 'Evening' });
            expect(menu1.title).toBe('Evening');
    });

    test('can find Restaurants', async () => {
        const restaurant33 = await Restaurant.create(seedRestaurant[0]);
        const restaurant22 = await Restaurant.findByPk(1);
        //const restaurant23 = await Restaurant.findAll()
        expect (restaurant22 === restaurant33);
    });

    test('can find Menu', async () => {
        const menu33 = await Menu.create(seedMenu[0]);
        const menu22 = await Menu.findByPk(1);
        //const restaurant23 = await Restaurant.findAll()
        expect (menu22 === menu33);
    });

    test('can delete Restaurants', async () => {
        const restaurant3 = await Restaurant.create({ name: 'McDonalds', location: 'Edinburgh', cuisine: 'Burgers and fries' });
        let deletedRestaurant3 = restaurant3.destroy(); 
        expect(deletedRestaurant3 === null); 
    });
})