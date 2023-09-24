const fs = require("fs/promises");
const path = require("path");

const contactPath = require("./db/contacts.json");

const { readFile, writeFile } = fs;
