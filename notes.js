const fs = require("fs");

const loadNotes = () => {
	try {
		const notes = fs.readFileSync("notes.json", "utf-8");
		return JSON.parse(notes);
	} catch (e) {
		fs.writeFileSync("notes.json", "[]");
		return [];
	}
};

const addNotes = (title, body) => {
	const notes = loadNotes();
	const duplicate = notes.filter((note) => note.title === title);

	if (duplicate.length === 0) {
		notes.push({ title, body });
		console.log("Note Added.");
		savenotes(notes);
	} else {
		console.log("Note title already taken.");
	}
};

const savenotes = (notes) => {
	const notesJson = JSON.stringify(notes);
	fs.writeFileSync("notes.json", notesJson);
};

module.exports = { loadNotes, addNotes };
