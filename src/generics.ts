// generic

// type IUser =  {
//     id: number;
//     // [key: string]: string | number;
// } & Record<string, string>


// interface IUser {
//     id: number;
// }

// interface Cast extends IUser {
//     [key: string]: string | number
// }

///////////////////

// interface IUser {
//     id: number;
//     name: string;
// }

// interface Cast extends IUser {
//     [key: string]: any;
// }

/////////////
// interface IUser {
//     id: number;
//     name: string;
// }

// // type Cast = IUser & Record<string, any>
// type Cast = IUser & {
//     [key: string]: any;
// }




// async function getData<T>(url: string): Promise<T> {
//     const response = await fetch(url);
//     return response.json();
// }

// const user = getData<Cast>('/api/user/1');
///////////////////

interface Cast {
    id: number;
    name: string;
    [key: string]: any;
}

type Asm = {
    id: number;
    name: string;
}




async function getData<T extends Asm>(url: string): Promise<T> {
    const response = await fetch(url);
    return response.json();
}

const user = getData<Cast>('/api/user/1');

// console.log(user.name);

/////////////////////////////////////////////////////
function longLength<T extends { length: number }>(value: T): T {
    console.log(value.length);
    return value;
}

console.log(longLength([10]));
console.log(longLength("10"));


//////// 1
function identity<T>(arg: T): T {
    return arg;
}

const num = identity<number>(42);
const str = identity<string>("hellow");

////////// 2 
function mergeProps<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const userWithId = mergeProps({ name: "Иван" }, { id: 101 });

///////////// 3
interface HasLength {
    length: number;
}

function logLength<T extends HasLength>(item: T): void {
    console.log(item.length);
}

logLength("Строка"); // Works
logLength([1, 2, 3]); // Works
// logLength(123); // Error: number does not have a length property

/////////////////// 4
interface ServerResponse<T> {
    status: number;
    errors: string[];
    data: T;
}

const userResponse: ServerResponse<{ name: string; age: number }> = {
    status: 200,
    errors: [],
    data: { name: "Олег", age: 30 }
};

///////////////// 5 
class StorageBox<T> {
    private contents: T[] = [];

    addItem(item: T): void {
        this.contents.push(item);
    }
}

const stringStorage = new StorageBox<string>();

////////////////// 6 
interface RequestConfig<T = any> {
    url: string;
    payload?: T;
}

const defaultConfig: RequestConfig = { url: "/api" }; // T defaults to any

//////////////////  7
function getValue<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const person = { name: "Анна", age: 25 };
const nameVal = getValue(person, "name"); // Type: string


///////////////////  8
interface Task {
    title: string;
    description: string;
}

// Makes all properties optional
const optionalTask: Partial<Task> = { title: "Купить молоко" };

// Makes all properties read-only
const readonlyTask: Readonly<Task> = { title: "Тест", description: "Описан" };

//////////////////// 9 
type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
};

type FeatureFlags = OptionsFlags<{ search: () => void; profile: () => void }>;
// Result: { search: boolean; profile: boolean; }

//////////////////// 10
type IsString<T> = T extends string ? true : false;

type L = IsString<string>; // true
type M = IsString<number>; // false
