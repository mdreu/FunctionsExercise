function fozzieBear(){
    console.log('Wocka Wocka!');
}

fozzieBear();

console.log('='.repeat(25));

function beaker(speak){
    console.log('${speak}');
    console.log('${speak}');
    console.log('${speak}');
    console.log('${speak}');
}
beaker('Meep');

function muppetShow(a, b){
    if (a === 'Muppet' && b === 'Show'){
        return "It's time to play the music. It's time to light the lights.";
    }
    return '';
}
console.log(muppetShow('Muppet', 'Show'));
console.log(muppetShow('Hi', 'Bye'));
function kermit(){
    console.log('Kermit the Frog');
}
console.log(kermit());

console.log('='.repeat(25));

function muppetShowSeasons(seasons){
    if(seasons === 5){
        return true;
    }
    return false;
}

console.log(muppetShowSeasons(5));
console.log(muppetShowSeasons(3));

const manOrMuppet = function(){
    console.log('Am I am or am I a Muppet?');
}

manOrMuppet();

console.log('='.repeat(25));

rainbowConnection = () => console.log("Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me");
rainbowConnection();


console.log('='.repeat(25));

//No

//Yes