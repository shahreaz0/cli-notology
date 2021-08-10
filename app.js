const yargs = require("yargs");
const notes = require("./notes");

yargs.version("1.0.0");

yargs.command({
	command: "add",
	describe: "Add a note",
	builder: {
		title: {
			describe: "Note title",
			type: "string",
			demandOption: true,
		},
		body: {
			describe: "Note content",
			type: "string",
			demandOption: true,
		},
	},
	handler(argv) {
		notes.addNote(argv.title, argv.body);
	},
});

yargs.command({
	command: "remove",
	describe: "Remove a note",
	builder: {
		title: {
			describe: "Note title",
			type: "string",
			demandOption: true,
		},
	},
	handler(argv) {
		notes.removeNote(argv.title);
	},
});

yargs.command({
	command: "read",
	describe: "Read a note",
	builder: {
		title: {
			describe: "Note title",
			demandOption: true,
			type: "string",
		},
	},
	handler(argv) {
		notes.readNote(argv.title);
	},
});

yargs.command({
	command: "list",
	describe: "List a note",
	handler() {
		notes.noteList();
	},
});

yargs.parse();
