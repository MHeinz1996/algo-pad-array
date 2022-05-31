def pad(array, min_size, value = None):
    
    if(len(array) >= min_size):
        return array
    else:
        for i in range(len(array), min_size):
            if(len(array) < min_size):
                array.append(value)

    return array