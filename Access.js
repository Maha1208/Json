//JSON Object
const data=
{
    "name":"maha",
    "age":22,
    "hobbies":{
    reading:["novel","comics"],
    gaming:[true],
    sports:["cricket"]
    },
    "sessions":["HTML", "CSS", "JS", "REACT"]
}
//JSON object accessing
console.log(data.name);
console.log(data.hobbies.reading[1]);
console.log(data.hobbies.gaming);
console.log(data.sessions[2]);