function stringify(value) {
	let start = "";
	if (typeof value === "object") {
		let isLast = Object.keys(value).pop();
		start += Array.isArray(value) ? "[" : "{";
		for (let key in value) {
			start += Array.isArray(value) ? "" : `"${key}":`;
			let val = value[key];
			start += `${stringify(val)}`;
			if (key !== isLast) {
				start += ",";
			}
		}
		start += Array.isArray(value) ? "]" : "}";
	} else if (typeof value === "string") {
		return `"${value}"`;
	} else if (typeof value === "number" || typeof value === "boolean") {
		return value;
	}

	return start;
}

let obj = {
	name: "manoj",
	bool: true,
	skills: [{ name: "nodes", skills: [1, 2, 3, 4] }, 4, 5, 6, 7, 8],
};

let aString = stringify(obj);
let parse = JSON.parse(aString);
console.log("Is Valid:", aString === JSON.stringify(obj));
console.log("parse:", parse);
