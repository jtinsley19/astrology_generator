const determineDate = (day, leap) => {
	let daysInYear = 365;
	if (leap) {
		daysInYear = 366;
		day += 1;
	}
	
	let month = '';
	let dayOfMonth = 0;
	
	
	if (day > daysInYear - 32) {
		month = 'December';
		dayOfMonth = day - (daysInYear - 32);
	} else if (day > daysInYear - 62) {
		month = 'November';
		dayOfMonth = day - (daysInYear - 62);
	} else if (day > daysInYear - 93) {
		month = 'October';
		dayOfMonth = day - (daysInYear - 93);
	} else if (day > daysInYear - 123) {
		month = 'September';
		dayOfMonth = day - (daysInYear - 123);
	} else if (day > daysInYear - 154) {
		month = 'August';
		dayOfMonth = day - (daysInYear - 154);
	} else if (day > daysInYear - 185) {
		month = 'July';
		dayOfMonth = day - (daysInYear - 185);
	} else if (day > daysInYear - 215) {
		month = 'June';
		dayOfMonth = day - (daysInYear - 215);
	} else if (day > daysInYear - 246) {
		month = 'May';
		dayOfMonth = day - (daysInYear - 246);
	} else if (day > daysInYear - 276) {
		month = 'April';
		dayOfMonth = day - (daysInYear - 276);
	} else if (day > daysInYear - 307) {
		month = 'March';
		dayOfMonth = day - (daysInYear - 307);
	} else if (day < 31) {
		month = 'January';
		dayOfMonth = day + 1;
	} else {
		month = 'February';
		dayOfMonth = day - 30;
	}
	
	return [month, dayOfMonth];
}

const generateDateAndTime = () => {

	let day = Math.floor(Math.random() * 1461);
	let date = [];
	let leap = false;
	let sign = '';

	let year = ((Math.floor(Math.random() * 50)) * 4) + 1900;
	if (day < 366) {
		leap = true;
		date = determineDate(day);
	} else if (day < 731) {
		year += 1;
		date = determineDate((day - 366) % 365);
	} else if (day < 1096) {
		year += 2;
		date = determineDate((day - 366) % 365);
	} else {
		year += 3;
		date = determineDate((day - 366) % 365);
	}

	let minute = (Math.floor(Math.random() * 1440));
	day += ((Math.round(minute / 1.44)) / 1000);
	let time = [Math.floor(minute / 60), (minute % 60)]
	
	let adjustedDate = (((Math.floor((year - 2000) / 4)) * 1461) + day) - 79.317;

	let degree = Math.abs((((adjustedDate % 365.24273) + 365.24273) % 365.24273) / 365.24273 ) * 360;
	let readableDegree = [Math.floor(degree % 30), Math.floor(((degree % 30) % 1) * 60)];

	return {
		year, date, time, day, adjustedDate, sign, degree, readableDegree
	};
}


const determineSunSign = (obj) => {
	if (obj.degree < 30) {
		return 'Aries';
	} else if (obj.degree < 60) {
		return 'Taurus';
	} else if (obj.degree < 90) {
		return 'Gemini';
	} else if (obj.degree < 120) {
		return 'Cancer';
	} else if (obj.degree < 150) {
		return 'Leo';
	} else if (obj.degree < 180) {
		return 'Virgo';
	} else if (obj.degree < 210) {
		return 'Libra';
	} else if (obj.degree < 240) {
		return 'Scorpio';
	} else if (obj.degree < 270) {
		return 'Sagittarius';
	} else if (obj.degree < 300) {
		return 'Capricorn';
	} else if (obj.degree < 330) {
		return 'Aquarius';
	} else if (obj.degree < 360) {
		return 'Pisces';
	} else {
		return 'Aries';
	}
}

let createChart = () => {
	let newChart = generateDateAndTime();
	newChart.sign = determineSunSign(newChart);
	
	let secondDigitHour = '';
	let secondDigit = '';
	if (newChart.time[0] < 10) {
		secondDigitHour = '0';
	}
	if (newChart.time[1] < 10) {
		secondDigit = '0';
	}
	console.log(newChart);
	console.log(`For a person born on ${newChart.date[0]} ${newChart.date[1]}, ${newChart.year} at ${secondDigitHour}${newChart.time[0]}:${secondDigit}${newChart.time[1]} UTC, the sun was in the sign of ${newChart.sign} at ${newChart.readableDegree[0]} degrees, ${newChart.readableDegree[1]} minutes.`)
}

createChart();