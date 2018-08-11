const { floor, random } = Math;

type Pojo = { [key: string]: any };

type Callable<T> = T | (() => T);
const call = <T>(value: T, data?: Pojo) => (value && value instanceof Function ? value(data) : value);

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
  // 'Y',
  // 'Z',
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

export class Random {
  static array<T>(count: Callable<number>, generatorOrValue: Callable<T>): T[] {
    return this.arrayGenerator(count, generatorOrValue)();
  }
  static arrayGenerator<T>(count: Callable<number>, generatorOrValue: Callable<T>): () => T[] {
    return () => {
      return Array.from(Array(call(count)), () => call(generatorOrValue));
    };
  }

  static date(options: {min: number | Date, max: number | Date}) {
    return Random.dateGenerator(options)();
  }
  static dateGenerator(options: {min: number | Date, max: number | Date}) {
    return () => {
      return new Date(
        Random.number({
          min: options.min instanceof Date ? options.min.getTime() : options.min,
          max: options.max instanceof Date ? options.max.getTime() : options.max,
        })
      )
    };
  }

  static firstName() {
    return this.firstNameGenerator()();
  }
  static firstNameGenerator() {
    return this.itemGenerator(maleFirstNames.concat(femaleFirstNames));
  }

  static item<T>(items: T[]) {
    return this.itemGenerator(items)();
  }
  static itemGenerator<T>(items: T[]) {
    let data: T[] = [];

    return () => {
      if (data.length === 0) data = items.slice(0);
      return data.splice(floor(random() * data.length), 1)[0];
    };
  }

  static join(items: Callable<any>[], glue = '') {
    return this.joinGenerator(items, glue)();
  }
  static joinGenerator(items: Callable<any>[], glue = '') {
    return () => {
      return items.map(item => call(item)).join(glue);
    }
  }

  static lastName() {
    return this.lastNameGenerator()();
  }
  static lastNameGenerator() {
    return this.itemGenerator(lastNames);
  }

  static number(options: { min?: number; max: number }) {
    return this.numberGenerator(options)();
  }
  static numberGenerator(options: { min?: number; max: number }) {
    const { min = 0, max = 100 } = options;

    return () => {
      return floor(random() * (max - min) + min);
    };
  }

  static object<T>(template: Pojo): T {
    return this.objectGenerator<T>(template)();
  }
  static objectGenerator<T>(template: Pojo) {
    return () => {
      const result: Pojo = {};

      Object.entries(template).map(([key, value]) => {
        result[key] = call(value, result);
      });

      return result as T;
    };
  }

  static sequentialNumberGenerator(options: { start: number; step?: number }) {
    const { start, step = 1 } = options;
    let i = 0;

    return () => {
      return start + step * i++;
    };
  }
}
