import { createChatCompletion } from "$lib/server/openai";
import type { PageServerLoad } from "./$types";


export async function load() {
    const response = await createChatCompletion('Hello how are you today')
        return response

}
