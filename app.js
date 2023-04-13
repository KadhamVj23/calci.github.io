let result = document.getElementById('result');
// clear result
clearResult = () => {
    result.value = '';
}
// append
append = (value) => {
    result.value += value;
}
// calculate
calculate = () => {
    try{
        result.value = eval(result.value);
    }
    catch(error){
        result.value = 'Error';
    }
}

