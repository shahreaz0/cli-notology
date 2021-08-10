const fs = require("fs");
const chalk = require("chalk");

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
	const duplicate = notes.find((note) => note.title === title);

	if (!duplicate) {
		notes.push({ title, body });
		console.log(chalk.green.bold("Note Added."));
		savenotes(notes);
	} else {
		console.log(chalk.red.bold("Note title already taken."));
	}
};

const removeNote = (title) => {
	const notes = loadNotes();

	const filteredNotes = notes.filter((note) => note.title !== title);

	notes.length > filteredNotes.length
		? console.log(chalk.green.bold("Note removed"))
		: console.log(chalk.red.bold("No note found"));

	savenotes(filteredNotes);
};

const readNote = (title) => {
	const notes = loadNotes();
	const note = notes.find((note) => note.title === title);

	!note
		? console.log(chalk.red.bold("No note found"))
		: console.log(`${chalk.blue.bold("Body")}: ${note.body}`);
};

const noteList = () => {
	const notes = loadNotes();

	notes.forEach((note) => {
		console.log("----------------------");
		console.log(`${chalk.blue.bold("Title")}: ${note.title}`);
		console.log(`${chalk.blue.bold("Body")}: ${note.body}`);
		console.log("----------------------");
	});
};

module.exports = { addNote, removeNote, readNote, noteList };
