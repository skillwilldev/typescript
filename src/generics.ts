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
