/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('test');

// Insert a few documents into the sales collection.
db.getCollection('projects').insertMany([
  {'_id':1, 'projectName': 'Management Data website','projectDesc': 'Management Data website description Text' ,'imageUrl': '/', 'width': '200', 'height': '200','date': new Date('2023-10-15T08:00:00Z') },
  {'_id':2, 'projectName': 'Portfolio website','projectDesc': 'Portfolio website description Text' ,'imageUrl': '/', 'width': '200', 'height': '200','date': new Date('2023-10-15T08:00:00Z') },
  {'_id':3, 'projectName': 'Crypto Wallet ','projectDesc': 'Crypto Wallet description Text' ,'imageUrl': '/', 'width': '200', 'height': '200','date': new Date('2023-10-15T08:00:00Z') },
  {'_id':4, 'projectName': 'Finance Dark Theme','projectDesc': 'Finance Dark Theme  description Text' ,'imageUrl': '/', 'width': '200', 'height': '200','date': new Date('2023-10-15T08:00:00Z') },
  
]);

