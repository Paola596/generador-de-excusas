window.onload = () => {
    document.querySelector('#reload'). addEventListener("click",() => {
    document.querySelector('#excuse'). innerHTML = generate();
    });   
};

let generate =() => {
    let who = ['My dog','The police', 'The tornado', 'My cat', 'My grandpa'];
    let what = ['ate','took', 'flew', 'float', 'stole'];
    let which = ['my homework','my car', 'my house', 'my chair', 'my cellphone'];
    let when = ['yesterday.','this morning.', 'last night.', 'last week.'];

    let whoindex = Math.floor(Math.random()*who.length);
    let whatindex = Math.floor(Math.random()*what.length);
    let whichindex = Math.floor(Math.random()*which.length);
    let whenindex = Math.floor(Math.random()*when.length);

    return who[whoindex]+' '+what[whatindex]+' '+which[whichindex]+' '+when[whenindex];

}