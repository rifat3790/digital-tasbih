// Subhan Allah 
const item1Display = document.getElementById('item-1-display');
const item1Increment = document.getElementById('item-1-increment');
const item1decrement = document.getElementById('item-1-decrement');

// Alhamdulillah
const item2Display = document.getElementById('item-2-display');
const item2Increment = document.getElementById('item-2-increment');
const item2decrement = document.getElementById('item-2-decrement');

// Allahuakber
const item3Display = document.getElementById('item-3-display');
const item3Increment = document.getElementById('item-3-increment');
const item3decrement = document.getElementById('item-3-decrement');

// Reset button
const reset = document.getElementById('reset-btn');


// initial value set
let subhanAllahInitialValue = 0;
let AlhamdulillahInitialValue = 0;
let AllahuakberInitialValue = 0;

// subhanAllah increment 
item1Increment.addEventListener('click', function(){
    if(subhanAllahInitialValue === 33){
        return alert('Subhan Allah complete. Please fillup another one')
    }
    subhanAllahInitialValue++;
    item1Display.innerText = subhanAllahInitialValue;
})

// subhanAllah decrement
item1decrement.addEventListener('click', function(){
    if(subhanAllahInitialValue === 0){
        return alert('You can not added nagetive value')
    }

    subhanAllahInitialValue--;
    item1Display.innerText = subhanAllahInitialValue;

})

// Alhamdulillah increment 

item2Increment.addEventListener('click', function(){
    if(AlhamdulillahInitialValue === 3){
        return alert("Alhamdulillah complete. Please fillup another one")
    }

    AlhamdulillahInitialValue++;
    item2Display.innerText = AlhamdulillahInitialValue;
})

// Alhamdulillah decrement 
item2decrement.addEventListener('click', function(){
    if(AlhamdulillahInitialValue === 0){
        return alert("You can not added nagetive value")
    }
    AlhamdulillahInitialValue--;
    item2Display.innerText = AlhamdulillahInitialValue;
})

// Allhuakber increment 
item3Increment.addEventListener('click', function(){
    if(AllahuakberInitialValue === 33){
        return alert("Allahuakber complete. Please fillup another one");
    }

    AllahuakberInitialValue++;
    item3Display.innerText = AllahuakberInitialValue;
})
