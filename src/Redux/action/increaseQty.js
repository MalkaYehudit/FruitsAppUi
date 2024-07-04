export const increaseQty = (index, qty) => {
    return {
        type: 'INCREASEQTY',
        payload: qty + 1,
        index

    };
};