const { get } = require('request-promise');
require("dotenv").config();
const { IgApiClient } = require('instagram-private-api');

const postToInsta = async () => {
    const ig = new IgApiClient();
    ig.state.generateDevice(process.env.IG_USERNAME);
    await ig.account.login(process.env.IG_USERNAME, process.env.IG_PASSWORD);

    const imageBuffer = await get({
        url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/440px-Tomato_je.jpg',
        encoding: null, 
    });

    console.log(imageBuffer);
    await ig.publish.photo({
        file: imageBuffer,
        caption: 'Tomato!', // nice caption
    });
}

postToInsta();