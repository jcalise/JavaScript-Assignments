var HOUR = 7
var MINUTE = 35
var PERIOD = "PM"

var timeOfDay = ""
var timeOfHour = ""

if (PERIOD == "AM") {
  timeOfDay = " in the morning"
} else {
  timeOfDay = " in the evening"
}

if (MINUTE < 30) {
  timeOfHour = "just after"
} else (
  timeOfHour = "almost"
)

console.log("It is " + timeOfHour + " " + HOUR + timeOfDay)
