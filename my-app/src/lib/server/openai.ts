import { OPENAI_API_KEY } from '$env/static/private';

type ChatCompletion = {
    id: string
    object: string
    created : number
    choices: [{
        index: number
        message: {
            role: string
            content: string
        },
        finish_reason: string
    }],
    usage: {
        prompt_tokens: number
        completion_tokens: number
        total_tokens: number
    }
}

const isChatCompletion = (data: unknown): data is ChatCompletion =>
    typeof data === 'object' &&
    !!(data as ChatCompletion).choices?.[0].message.content



export const createChatCompletion = async (input:string) => {
    let res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: new Headers({
            'Content-Type': 'application/json',
            "Authorization": `Bearer ${OPENAI_API_KEY}`,
        }),
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: input
            }],
        })
    })

    if (!res.ok) {
        throw new Error('Could not ask OpenAI your question.')
    }

    const json = await res.json()
    console.log('json', json)
    // console.log(res.data.choices[0].message.content)

    if (!isChatCompletion(json)) {
        throw new Error('OpenAI did not return a valid chat')
    }

    return json.choices[0].message.content
}
