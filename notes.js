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

const savenotes = (notes) => {
	const notesJson = JSON.stringify(notes);
	fs.writeFileSync("notes.json", notesJson);
};

const addNote = (title, body) => {
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

const removeNote = (title) => {
	const notes = loadNotes();
	const filteredNotes = notes.filter((note) => note.title !== title);
	console.log("Note removed");
	savenotes(filteredNotes);
};

const list = () => {
	const notes = loadNotes();

	notes.forEach((note) => {
		console.log("----------------------");
		console.log(`Title: ${note.title}`);
		console.log(`Body: ${note.body}`);
		console.log("----------------------");
	});
};

module.exports = { addNote, removeNote, list };
