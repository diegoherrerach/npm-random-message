const messages =[
    "Diego",
    "Benjamin",
    "Arturo",
    "Ximena",
    "Soledad",
    "Valentina",
    "Ana",
    "Ernesto",
    "Gabriel",
    "Renzo"
];

const randomMsg=()=>{
    const message = messages[Math.floor(Math.random()*messages.length)];
    console.log(message);
}
module.exports = {randomMsg};