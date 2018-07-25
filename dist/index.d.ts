declare type Pojo = {
    [key: string]: any;
};
declare type Callable<T> = T | (() => T);
export declare class Random {
    static array<T>(count: Callable<number>, generatorOrValue: Callable<T>): T[];
    static arrayGenerator<T>(count: Callable<number>, generatorOrValue: Callable<T>): () => T[];
    static firstName(): string;
    static firstNameGenerator(): () => string;
    static item<T>(items: T[]): T;
    static itemGenerator<T>(items: T[]): () => T;
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
