export const getIndexCategory = (arrIndex: string[], filter: string) => {
    return arrIndex.map((val) => val == filter).filter((val) => val == true).length;
};
