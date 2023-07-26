function compare(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}

function solution(list){
    let result = [];
    const sortedList = list.sort(compare);
    let rangeStartElement = sortedList[0];
    let rangeEndElement = sortedList[0];
    for (i = 1; i < sortedList.length; i++) {
        if (sortedList[i] - rangeEndElement === 1) {
            rangeEndElement = sortedList[i];
        }
        else {
            if (rangeEndElement - rangeStartElement >= 2) {
                result.push(`${rangeStartElement}-${rangeEndElement}`);
            }
            else {
                result.push(rangeStartElement.toString());
                if (rangeEndElement !== rangeStartElement) {
                    result.push(rangeEndElement.toString());
                }
            }
            rangeStartElement = sortedList[i];
            rangeEndElement = sortedList[i];
        }
    }
    // Add the last range or individual numbers if any
    if (rangeEndElement - rangeStartElement >= 2) {
        result.push(`${rangeStartElement}-${rangeEndElement}`);
    } else {
        result.push(rangeStartElement.toString());
        if (rangeEndElement !== rangeStartElement) {
            result.push(rangeEndElement.toString());
        }
    }

    return result.join(",");
}
console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]))