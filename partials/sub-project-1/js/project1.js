const cursorElm = document.getElementById('cursor');

let tmrId = null;

addEventListener('mousemove', (eventData)=>{
    if (tmrId){
        clearTimeout(tmrId);
        tmrId = null;
    }
    cursorElm.style.opacity = 1;
    cursorElm.style.left = `${eventData.pageX}px`;
    cursorElm.style.top = `${eventData.pageY}px`;
    tmrId = setTimeout(()=>{
        cursorElm.style.opacity = 0;
    }, 2000);
});

document.body.addEventListener('mouseleave', ()=>{
    cursorElm.style.opacity = 0;
});

document.body.addEventListener('mouseenter', ()=>{
    cursorElm.style.opacity = 1;
});

// let x= 0;

// const tmrId1 = setTimeout(()=> {
//     console.log("Bombea Pipuruwa...!");
// }, 5000);

// const btnStopTimer1 = document.querySelector("#btnStopTimer1");
// btnStopTimer1.addEventListener('click', ()=> {
//     clearTimeout(tmrId1);
//     console.log("Nishkriya Kalaa...")
// });

// for(let i=0; i < 100000; i++){
//     console.log('E-' + i);
// }


/* Truthy? Falsy */

/*
[] - t
[10,20] - t
[false] - t
0.0 - f
-0.25 - t
null - fal
undefined - f
"0.0" -t
"" - f
{} - t
5>2 - t
null == undefined - t (Equality [value])
5 == "5" t
null === undefined - f (Identitical [value+data type])

*/