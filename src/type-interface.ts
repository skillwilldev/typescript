//დავალება 1 — Student Type
type Students = {
    id: number;
    name: string;
    age: number;
}

const student: Students[] = [
    {
        id: 1,
        name: 'Melik',
        age: 40
    },
    {
        id: 2,
        name: 'James',
        age: 22
    },
    {
        id: 3,
        name: 'Lasha',
        age: 39
    }
];

student.forEach((item) => {
    console.log(item.name);
})

