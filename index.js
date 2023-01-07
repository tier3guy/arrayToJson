const arrayToJson = ({ data }) => {

    var JSON_DATA = [];
    const Labels = data[0];

    const COLUMNS_COUNT = Labels.length;
    const ROWS_COUNT = data.length - 1; // subtracted 1, considering first row to be the labels

    for(var i=1; i<=ROWS_COUNT; i++){
        var row = {};
        for(var j=0; j<COLUMNS_COUNT; j++){
            row = {...row, [Labels[j]]: data[i][j]};
        }
        JSON_DATA.push(row);
    }

    return JSON_DATA;
}

module.exports = arrayToJson;