users = [
    {
        id:1,
        username:'antonio',
        name:'antonio',
    },
    {
        id:2,
        username:'guido',
        name:'guido',
    },
    {
        id:3,
        username:'tomas',
        name:'tomas',
    },
];

const findById = (id) =>{
    return this.users.find(user => {user.id === id});
}

const find = () =>{
    return this.users
}

module.exports ={
    findById,
    find
}