import { config } from "dotenv"
config()
import { Configuration, OpenAIApi } from "openai"
import readline from "readline"

//console.log(process.env.API_KEY)
const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
}))



let userInterface = readline.createInterface({
    prompt: "Hello, how may I assist you today, Mr. Stark? ",
    input: process.stdin,
    output: process.stdout,
})
//prompt for input
userInterface.prompt()
//when input is provided via cli, it will be instantiated as input
//send it over to chat gpt
//log out a message to the screen
//and then ask for input again
userInterface.on("line", async input => {
    const res = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role:"user", content: input}],
    })
    console.log(res.data.choices[0].message.content)
    userInterface.setPrompt("What else may I help you with today? ")
    userInterface.prompt()
})
//currently there is not array of inputs for the code to traverse over, so it can't remember its responses.
