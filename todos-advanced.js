var faker = require('faker'),
    _ = require('underscore');

module.exports = function() {
    return {
        todos: _.times(25, function(index) {
            return {
                id: index,
                title: faker.lorem.sentence(),
                completed: Boolean(_.random(0, 1))
            };
        })
    };
};
