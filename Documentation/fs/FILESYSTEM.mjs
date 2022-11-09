debugger;
import * as fs from "node:fs";
import { stat } from "node:fs";

// fs.access


fs.access(new URL('./notes/fsnotes.md', import.meta.url), fs.constants.W_OK | fs.constants.R_OK, (error) => {
    console.log(`notes ${error ? 'is not' : 'is'} readable and writable`);
});


// Recommended Pattern - avoid accessing file before opening/reading/writing

// fs.open('./notes/fsnotes.md', 'r', (error, fd) => {
//     if (error && error.code === "ENOENT") {
//         throw new Error('file does not exists')
//     }

//     try {
//         console.log(fd)
//     } finally {
//         fs.close(fd, (error) => {
//             if (error) throw error;
//         });
//     }
// });

// fs.open('./notes/fsnots.md', 'wx', (error, fd) => {
//     if (error && error.code === "EEXIST") {
//         throw new Error('file alraedy exists')
//     }

//     try {
//         console.log(fd)
//     } finally {
//         fs.close(fd, (error) => {
//             if (error) throw error;
//         });
//     }
// });

// fs.appendFile

// fs.appendFile('./notes/notes.md', 'This is another notebook ig', { encoding: 'utf8' }, (error) => {
//     if (error) throw error;
//     console.log('data added to the file!')
// })

// We can use a file handler as the path for fs.appendFile


// fs.open('./notes/fsnotes.md', 'a', (err, fd) => {
//     if (err) throw err;

//     try {
//         appendFile(fd, 'stuff', 'utf8', (err) => {
//             fs.close(fd, (err) => {
//                 if (err) throw err;
//             });
//             if (err) throw err;
//         })
//     } catch (e) {
//         fs.close(fd, (e) => {
//             if (e) throw e;
//         });
//         throw e;
//     }
// });

// fs.chmod - changes the permissions/access to a specific file

// fs.chmod('./notes/fsnotes.md', 0o765, (err) => {
//     if (err) throw err;
//     console.log('The permissions for file has changed!')
// })

// fs.chown('./notes/fsnotes.md', 0, 0, (err) => {
//     if (err) throw err;
// })

// let notes = fs.createReadStream('./notes/fsnotes.md');
// setTimeout(() => {
//     notes.close();
//     notes.push(null);
//     notes.read(0);
// }, 100);

// fs.fdatasync(0, (err) => {
//     if (err) throw err;
//     console.log('works')
// });



// fs.fstat(3, (err, stats) => {
//     if (err) throw err;
//     console.log(stats);
// });

// fs.watch('./', (event, filename) => {
//     console.log('event type is: ' + event);
//     if (filename) {
//         console.log('this is file :' + filename);
//     } else {
//         console.log('filename not provided')
//     }
// })

// fs.watchFile('./app', (current, previous) => {
//     console.log(current);
//     console.log(previous)
// })