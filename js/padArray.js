exports.pad = (array, minSize, value=null) => {

    if(array.length >= minSize) {
        return array;
    } else {
        for(let i=array.length; i < minSize; i++) {
            if(array.length < minSize) {
                array.push(value);
            }
        }
    }

    return array;
}