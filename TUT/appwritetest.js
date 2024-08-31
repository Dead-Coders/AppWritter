import { Client,Databases,ID} from 'appwrite';
const client = new Client();
const databases = new Databases(client);

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('66580d4c001947e552be');


const promise = databases.createDocument(
    '66582dbb0018c6dde7ea',
    '66582dcc00002bf351de',
  ID.unique(),
    { "Title": "Abdullah" , "Desc":"I am Abdullah a professional Webdeveloper"}
);

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});