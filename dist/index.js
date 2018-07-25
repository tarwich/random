"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { floor, random } = Math;
const call = (value, data) => (value && value instanceof Function ? value(data) : value);
const femaleFirstNames = [
    'Alice',
    'Brandy',
    'Christy',
    'Denise',
    'Erica',
    'Fergie',
    'Gwen',
    // 'H',
    'Irene',
    'Julie',
    'Kim',
    'Linda',
    'Michelle',
    'Nichole',
    'Oprah',
    'Paula',
    // 'Q',
    'Renee',
    'Susanne',
    'Teresa',
    'Uhora',
    'Vicky',
    'Wendy',
    'Xavier',
];
const maleFirstNames = [
    'Adam',
    'Bill',
    'Carlos',
    'David',
    'Eric',
    'Franklin',
    'George',
    'Harry',
    'Ian',
    'John',
    'Karl',
    'Luke',
    'Mike',
    'Nathan',
    'Oscar',
    'Paul',
    // 'Q',
    'Richard',
    'Saul',
    'Timothy',
    // 'U',
    'Victor',
    'Wayne',
    // 'X',
    // 'Y',
    'Zack',
];
const lastNames = [
    'Andrews',
    'Bailey',
    'Churchill',
    'Dillon',
    'Edwards',
    'Getz',
    'Hoover',
    'Indiana',
    'Jameson',
    'Killgore',
    'Lopez',
    'Maguire',
    'Nelson',
    'Orville',
    'Patterson',
    'Smith',
    'Thompson',
    'Vandertulip',
    'Wilson',
    'Zajack',
];
class Random {
    static array(count, generatorOrValue) {
        return this.arrayGenerator(count, generatorOrValue)();
    }
    static arrayGenerator(count, generatorOrValue) {
        return () => {
            return Array.from(Array(call(count)), () => call(generatorOrValue));
        };
    }
    static firstName() {
        return this.firstNameGenerator()();
    }
    static firstNameGenerator() {
        return this.itemGenerator(maleFirstNames.concat(femaleFirstNames));
    }
    static item(items) {
        return this.itemGenerator(items)();
    }
    static itemGenerator(items) {
        let data = [];
        return () => {
            if (data.length === 0)
                data = items.slice(0);
            return data.splice(floor(random() * data.length), 1)[0];
        };
    }
    static lastName() {
        return this.lastNameGenerator()();
    }
    static lastNameGenerator() {
        return this.itemGenerator(lastNames);
    }
    static number(options) {
        return this.numberGenerator(options)();
    }
    static numberGenerator(options) {
        const { min = 0, max = 100 } = options;
        return () => {
            return floor(random() * (max - min) + min);
        };
    }
    static object(template) {
        return this.objectGenerator(template)();
    }
    static objectGenerator(template) {
        return () => {
            const result = {};
            Object.entries(template).map(([key, value]) => {
                result[key] = call(value, result);
            });
            return result;
        };
    }
    static sequentialNumberGenerator(options) {
        const { start, step = 1 } = options;
        let i = 0;
        return () => {
            return start + step * i++;
        };
    }
}
exports.Random = Random;
