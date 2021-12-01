const colors = ['yellow', 'blue', 'rgb(255, 254, 121)', '#00e600'];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    //Get random number between 0 - 3 
    const randomNumber = getRandomNumber();
    console.log(randomNumber); 

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
};


//Practice
//Spread operator:
const ray =['Hi', 'there', 'my', 'name', 'is', 'Rayyan'];
const ray2 =[...ray];
//This puts the content of ray in ray2

//Destructuring operator:
const temp = {
    today : 30,
    tomorrow : 40,
    next : 100
}
const  {today, tomorrow} = temp;
//This means 'pick the contents of today and tomorrow in object temp' but keeps their names;
//OR
const {today : Yesterday, tomorrow : today} = temp;
//This gets the content of today and tomorrow and assigns them to new objects with other names;
//There is a way to pick on an object in an object:
//Imagine next was an object now to pick on 100
const {next: {100 : later}} = temo;
//Array distructuring 
const [a,b] = [1,2,3,4,5,6,7,8,9,0]
console.log(a,b)
//this brings the value of a,b as 1,2 coz a will be assigned the first value and b the next
//but if you want to access a certain value, you :
const [a,b,,,,c]
//a remains 1, b remains 2 but c becomes 1,2,5