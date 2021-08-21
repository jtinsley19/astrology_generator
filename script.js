const determineDate = (day, leap) => {
	let daysInYear = 365;
	if (leap) {
		daysInYear = 366
	}
	
	let month = '';
	let dayOfMonth = 0;
	
	
	if (day > daysInYear - 31) {
		month = 'December';
		dayOfMonth = day - (daysInYear - 31);
	} else if (day > daysInYear - 61) {
		month = 'November';
		dayOfMonth = day - (daysInYear - 61);
	} else if (day > daysInYear - 92) {
		month = 'October';
		dayOfMonth = day - (daysInYear - 92);
	} else if (day > daysInYear - 122) {
		month = 'September';
		dayOfMonth = day - (daysInYear - 122);
	} else if (day > daysInYear - 153) {
		month = 'August';
		dayOfMonth = day - (daysInYear - 153);
	} else if (day > daysInYear - 184) {
		month = 'July';
		dayOfMonth = day - (daysInYear - 184);
	} else if (day > daysInYear - 214) {
		month = 'June';
		dayOfMonth = day - (daysInYear - 214);
	} else if (day > daysInYear - 245) {
		month = 'May';
		dayOfMonth = day - (daysInYear - 245);
	} else if (day > daysInYear - 275) {
		month = 'April';
		dayOfMonth = day - (daysInYear - 275);
	} else if (day > daysInYear - 306) {
		month = 'March';
		dayOfMonth = day - (daysInYear - 306);
	} else if (day <= 31) {
		month = 'January';
		dayOfMonth = day;
	} else {
		month = 'February';
		dayOfMonth = day - 31;
	}
	
	return [month, dayOfMonth];
}

const generateDateAndTime = () => {
	let year = (Math.floor(Math.random() * 800) + 1600);
	let day = 0;
	let date = [];
	let leap = false;
	
	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
		leap = true;
		day = Math.floor(Math.random() * 366);
		
	} else {
		day = Math.floor(Math.random() * 365);
		
	}
	date = determineDate(day, leap);
	
	
	let minute = (Math.floor(Math.random() * 1440));
	let time = [Math.floor(minute / 60), (minute % 60)]
	
	
	return {
		year, date, time
	};
}


let test1 = generateDateAndTime();

console.log(test1);
//console.log(determineSunSign(test1));
