const daysArray = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

function tConvert(time) {
    // Check correct time format and split into components
    time = time.toString ().match (/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
    if (time.length > 1) { // If time format correct
        time = time.slice (1);  // Remove full string match value
        time[5] = +time[0] < 12 ? 'AM' : 'PM'; // Set AM/PM
        time[0] = +time[0] % 12 || 12; // Adjust hours
    }
    return time.join (''); // return adjusted time or original string
    }

const sortByTime = (a,b) => {
    if ( a.data.time < b.data.time ){
        return -1;
    }
    if ( a.data.time > b.data.time ){
        return 1;
    }
    return 0;
}

const sortStandardsInOrder = (a, b) => {
    if (a.statementNotation) {
        if (a.statementNotation < b.statementNotation){
            return -1;
        }
        if (a.statementNotation > b.statementNotation) {
            return 1;
        }
        return 0;
    } else if (a.listId) {
        if (a.listId < b.listId){
            return -1;
        }
        if (a.listId > b.listId) {
            return 1;
        }
        return 0;
    } 
    return 0;
    
    }

export { daysArray, tConvert, sortByTime, sortStandardsInOrder };