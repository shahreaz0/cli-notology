const yargs = require("yargs");

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
		console.log(argv.title, argv.body);
	},
});

yargs.command({
	command: "remove",
	describe: "Remove a note",
	handler: function () {
		console.log("Removing a note.");
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
		console.log("Listing a note.");
	},
});

yargs.parse();
// console.log(yargs.argv);
