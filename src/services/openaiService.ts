import OpenAI from "openai";
import config from "../config"

const openai = new OpenAI({
    baseURL: config.openaiModel,
    apiKey: config.openaiKey
});

export const generateDailyQuestion = async (): Promise<string> => {
    try{
        console.log('openaiKey:', config.openaiKey);
        const response = await openai.chat.completions.create({
            messages: [{ role: "user", content: "Generate a fun and engaging daily question for a chat conversation. make it one line and no special format" }],
            model: "deepseek-chat",
            max_tokens: 50
          });

          console.log("generate open ai called")
          console.log(response);
          console.log(response.choices[0]?.message?.content?.trim());
          console.log("===")
          return response.choices[0]?.message?.content?.trim() || "What's your favorite hobby?";
    }catch(error){
        console.error('Error generating daily question: ', error);
        return "Here is a random question: What's your favorite book?";
    }
}