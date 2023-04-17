const axios = require("axios");

async function Bot(promp){
    const options = {
      method: "POST",
	url: "https://openai80.p.rapidapi.com/chat/completions",
	headers: {
		"content-type": "application/json",
		"X-RapidAPI-Key": "6dbc83ebc3msh5413e151fb92f3bp114e8fjsnc8a3d1c5484a",
		"X-RapidAPI-Host": "openai80.p.rapidapi.com",
	},
	data: `{"model":"gpt-3.5-turbo","messages":[{"role":"user","content":"${promp}"}]}`,
};

    const ans= await axios.request(options).then(function (response) {
       
         return(response.data.choices[0].message.content);
    }).catch(function (error) {
        console.error(error);
    });
    return ans;
}

async function updatepl(message, pl){
    pl.push(message);
}

async function create_prompt(message, pl){
    let p_mess='Human:'+message;
    await updatepl(p_mess, pl);
    let promp= pl.join(' ')
    return promp
}

async function get_bot_response(message, pl){
    let promp = await create_prompt(message, pl);
    let botresponse= await Bot(promp);
    return botresponse;

}
const prompt=require("prompt-sync")()
async function main()
{
    let pl=['You are a female bot and from now on you will act as a legal advisor only in short']
    while(true)
    {
        let userinput = prompt("You: ")
        if(userinput === 'exit')
        break;
        let response = await get_bot_response(userinput, pl)
        console.log(response);
    }
}
main();
export default main;