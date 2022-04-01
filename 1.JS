function counDown(number){
    console.log(number)
    const newNumber=number-1
    if(newNumber>0){
        counDown(newNumber)
    }
}
counDown(4)