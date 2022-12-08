/* Your Code Here */
function createEmployeeRecord(array) {
    const record = {} 
    record.firstName = array[0];
    record.familyName = array[1];
    record.title = array[2];
    record.payPerHour = array[3];
    record.timeInEvents = []
    record.timeOutEvents = []
    return record;
}

function createEmployeeRecords(arrayofarrays) {
    return arrayofarrays.map((array) => createEmployeeRecord(array));

}

function createTimeInEvent(datetime){
    let [date, hour] = datetime.split(' ');
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(hour),
        date
    })
    return this;
}

function createTimeOutEvent(datetime) {
    let [date, hour] = datetime.split(' ');
    this.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    })
    return this;
}
/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

