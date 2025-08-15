/* ------------------------------------------------------------------------------
given a time in 12-hour AM/PM format, convert it to military (24-hour) time. Note: 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock. 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
Example:
s = '12:01:00PM' returns '12:01:00'
s = '12:01:00AM' returns 00:01:00
timeConversion has 1 parameter: string s: a time in 12-hour format

Sample output:
07:05:45PM
input:
19:05:45
 */
function timeConversion(s) {
    //console.log(s.substring(0,2))
    let hours = s.substring(0,2)
    //console.log(s.substring(3,5))
    let minutes = s.substring(3,5)
    //console.log(s.substring(6,8))
    let seconds = s.substring(6,8)
    //console.log(s.substring(8,10))
    let amPm = s.substring(8,10)
    if(hours === '12' && amPm === 'AM'){
        hours = '00'
    }
    if(amPm === 'PM' && hours !== '12'){
        hours = parseInt(hours) + 12
    }
    let militaryTime = `${hours}:${minutes}:${seconds}`
    return militaryTime
}

const s = "10:35:05PM"
console.log(timeConversion(s))
/* ------------------------------------------------------------------------------

 */