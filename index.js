let cardNumberInput = document.querySelector('.cardNumberInput')
let cardHoldersInput = document.querySelector('.cardHoldersInput')
let dateOfMonth = document.querySelector('.dateOfMonth')
let dateOfYear = document.querySelector('.dateOfYear')
let setMyName = document.querySelector('.setMyName')
let cvv = document.querySelector('#cvv')
let myCardNumber = document.querySelector('#myCardNumber')
let myCardHolders = document.querySelector('#myCardHolders')
let myCardExpires = document.querySelector('#myCardExpires')
let setMyExpires = document.querySelector('.setMyExpires')



function numberInputHandler(event){
 console.log(event.key);
 if(event.target.value == ''){
    myCardNumber.innerHTML = '#### #### #### ####'
    console.log('doros');
 }else{
     myCardNumber.innerHTML = event.target.value
 }
}

function HoldersInputHandler(event){
 if(event.target.value == ''){
    setMyName.innerHTML = 'Full Name'
 }else{
    setMyName.innerHTML = event.target.value
 }
}


cardNumberInput.addEventListener('focus',function(){
    console.log('focus');
    myCardNumber.classList.add('numberOfCard')
    numberInputHandler(event)
    
})
cardNumberInput.addEventListener('blur',function(){
    console.log('blur');
    myCardNumber.classList.remove('numberOfCard')
})

cardHoldersInput.addEventListener('focus',function(){
    console.log('focus');
    myCardHolders.classList.add('holdersBox')
    
})
cardHoldersInput.addEventListener('blur',function(){
    console.log('blur');
    myCardHolders.classList.remove('holdersBox')
})

dateOfMonth.addEventListener('focus',function(){

    console.log(dateOfMonth.value);
    console.log(dateOfYear.value);
    myCardExpires.classList.add('expiresBox')
    if(dateOfMonth.value === '' &&  dateOfYear.value === ''){
        setMyExpires.innerHTML = 'MM/YY'
    }else{
        
        setMyExpires.innerHTML = `${dateOfMonth.value}/${dateOfYear.value}`
    }
})
dateOfMonth.addEventListener('blur',function(){
    
    myCardExpires.classList.remove('expiresBox')
    if(dateOfMonth.value === '' &&  dateOfYear.value === ''){
        setMyExpires.innerHTML = 'MM/YY'
    }else{
        
        setMyExpires.innerHTML = `${dateOfMonth.value}/${dateOfYear.value}`
    }
})
dateOfYear.addEventListener('focus',function(){
    console.log('focus');
    myCardExpires.classList.add('expiresBox')
    console.log(dateOfMonth.value);
    console.log(dateOfYear.value);
    if(dateOfMonth.value === '' &&  dateOfYear.value === ''){
        setMyExpires.innerHTML = 'MM/YY'
    }else{
        
        setMyExpires.innerHTML = `${dateOfMonth.value}/${dateOfYear.value}`
    }
})
dateOfYear.addEventListener('blur',function(){
    console.log('blur');
    myCardExpires.classList.remove('expiresBox')
    console.log(dateOfMonth.value);
    console.log(dateOfYear.value);
    if(dateOfMonth.value === '' &&  dateOfYear.value === ''){
        setMyExpires.innerHTML = 'MM/YY'
    }else{
        
        setMyExpires.innerHTML = `${dateOfMonth.value}/${dateOfYear.value}`
    }
})



cardNumberInput.addEventListener('keyup',numberInputHandler)
cardHoldersInput.addEventListener('keyup',HoldersInputHandler)