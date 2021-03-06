declare type Pojo = {
    [key: string]: any;
};
declare type Callable<T> = T | (() => T);
export declare class Random {
    static array<T>(count: Callable<number>, generatorOrValue: Callable<T>): T[];
    static arrayGenerator<T>(count: Callable<number>, generatorOrValue: Callable<T>): () => T[];
    static date(options: {
        min: number | Date;
        max: number | Date;
    }): Date;
    static dateGenerator(options: {
        min: number | Date;
        max: number | Date;
    }): () => Date;
    static firstName(): string;
    static firstNameGenerator(): () => string;
    static item<T>(items: T[]): T;
    static itemGenerator<T>(items: T[]): () => T;
    static join(items: Callable<any>[], glue?: string): string;
    static joinGenerator(items: Callable<any>[], glue?: string): () => string;
    static lastName(): string;
    static lastNameGenerator(): () => string;
    static number(options: {
        min?: number;
        max: number;
    }): number;
    static numberGenerator(options: {
        min?: number;
        max: number;
    }): () => number;
    static object<T>(template: Pojo): T;
    static objectGenerator<T>(template: Pojo): () => T;
    static sequentialNumberGenerator(options: {
        start: number;
        step?: number;
    }): () => number;
}
export {};
