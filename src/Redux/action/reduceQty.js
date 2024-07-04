export const reduceQty = (index, qty) => {
    return {
        type: 'REDUCEQTY',
        payload: qty - 1,
        index
    };
};




