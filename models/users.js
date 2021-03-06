//base de datos local temporal

users = [
    {
        id:'1',
        estated:'ACTIVO',
        username:'antonio',
        name:'antonio',
    },
    {
        id:'2',
        estated:'ACTIVO',
        username:'guido',
        name:'guido',
    },
    {
        id:'3',
        estated:'INACTIVO',
        username:'tomas',
        name:'tomas',
    },
];

const findById = (id) =>{
    let user
    user= users.find(user => { return user.id === id});
    console.log(user);
    return user;
}
//metodo para traer todos los usuarios
const find = ({username,estated}) =>{
    let usuarios
    if (estated){
        usuarios = users.filter(users => users.estated === estated);
    }
    return usuarios;
}

module.exports ={
    findById,
    find
}