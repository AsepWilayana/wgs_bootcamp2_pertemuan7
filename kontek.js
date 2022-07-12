// const readline = require("readline");
const fs = require ("fs")
var validator = require("validator");


// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

//membuat folder data apabila tidak ada
function buatFolder() {
    const dirPath = './data';
    if(!fs.existsSync(dirPath)){
        fs.mkdirSync(dirPath);
    }
}

// membuat file contact.json jika belum ada
function buatFile() {
    const dataPath = './data/contacts.json';
    if(!fs.existsSync(dataPath)){
        fs.writeFileSync(dataPath,'[]', 'utf-8')
    }
}

// const question = (ask) => {
//     return new Promise((resolve, reject) => {
//         rl.question(ask, inputvariable => {
//             if (inputvariable) {
//                 resolve(inputvariable);
//             } else {
//                 resolve(question_name());
//             }
//         });
//     });
// };

const loadContact = () => {
    const file = fs.readFileSync('data/contacts.json','utf8');

    const contacts = JSON.parse(file);
    return contacts;
}

const save_context = (name, email, mobile) => {
    //data yg akan di masukan file contact
    const contact = {
        name, 
        email, 
        mobile
    };
    //tempat penyimpanan
    // const file = fs.readFileSync('data/contacts.json','utf8');

    // const contacts = JSON.parse(file);

    const contacts = loadContact();
    let findData = contacts.findIndex(item => item.name == name);
    //console.log(findData)
    if(findData >= 0){
        console.log('nama sudah ada');
        return;
    }

    validemail = validator.isEmail(email);
        if (validemail === false) {
            console.log('format email salah');
            return;
        }
    
    validphone = validator.isMobilePhone(mobile, "id-ID");
        if (validphone === false) {
            console.log('phone number salah');
            return;
        }
    //tambhakan ke file
    contacts.push(contact);

    fs. writeFileSync('data/contacts.json',JSON.stringify(contacts));
    console.log('terimakasih sudah memasukkan data');
    console.log(contacts);
    //rl.close();
};

const listContact = () => {
    const contacts = loadContact();
    console.log('Contact List :');
    contacts.forEach((contact, i) => {
        console.log(`${i+1}. ${contact.name} - ${contact.mobile}`);
    });
};

const listDetail = (name) => {
    const contacts = loadContact();
    const findData = contacts.find(item => item.name == name);
    console.log(findData);
    console.log('Contact List :');
   
    console.log(`nama : ${findData.name}`);
    console.log(`email : ${findData.email}`);
    console.log(`mobile : ${findData.mobile}`);
};

const Deletedata = (name) => {
    const contacts = loadContact();
    const findData = contacts.filter(item => item.name !== name);
    //console.log(findData);
    
    fs. writeFileSync('data/contacts.json',JSON.stringify(findData));
    console.log(findData);
};




module.exports = {buatFile, buatFolder, save_context, listContact, listDetail, Deletedata}