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
	handler: function (argv) {
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
	handler: function (argv) {
		notes.removeNote(argv.title);
	},
});

yargs.command({
	command: "read",
	describe: "Read a note",
	handler: function () {
		console.log("Reading a note.");
	},
});

yargs.command({
	command: "list",
	describe: "List a note",
	handler: function () {
		notes.list();
	},
});

yargs.parse();
// console.log(yargs.argv);
