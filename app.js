const readline = require("readline");
const fs = require ("fs")
const {save_context, buatFile, buatFolder, listContact, listDetail, Deletedata} = require ('./kontek');
const yargs = require("yargs");


yargs.command({
    command:'add',
    describe: 'add new contact',
    builder:{
        name:{
            describe:'Contact Name',
            demandOption:true,
            type:'string',
        },
        email:{
            describe:'Contact Email',
            demandOption:false,
            type:'string',
        },
        mobile:{
            describe:'Contact mobile',
            demandOption:true,
            type:'string',
        },
    },
    handler(argv){
        // const contact = {
        //     name : argv.name,
        //     email : argv.email,
        //     mobile : argv.mobile,
        // };
        
        // console.log(contact)

        save_context(argv.name, argv.email, argv.mobile)
    },
    
});

yargs.command({
    command: 'list',
    describe: 'see contact list',
    handler(){
        listContact();
    }
})

yargs.command({
    command: 'detail',
    describe: 'see contact Detail',
    builder:{
        name:{
            describe:'Contact Name',
            demandOption:true,
            type:'string',
        },
    },
    handler(argv){
        listDetail(argv.name);
    }
})

yargs.command({
    command: 'delete',
    describe: 'see contact list',
    builder:{
        name:{
            describe:'Contact Name',
            demandOption:true,
            type:'string',
        },
    },
    handler(argv){
        Deletedata(argv.name);
    }
})

yargs.parse();



// const main = async() => {
//     buatFolder();
//     buatFile();
//     
//     // const name = await question("What's your name?");
//     // const email = await question("What's your email?");
//     // const phone= await question("your mobile number?");
    
    
// }

//main();
