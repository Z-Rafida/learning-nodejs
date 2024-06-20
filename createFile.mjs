import {writeFile} from 'node:fs';
writeFile('./hello.txt', '<h1>Learning Node.js</h2>', () =>{
    console.log('File was created');
});