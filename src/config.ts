import "dotenv/config";

const config = {
    openaiModel: process.env.OPEN_API_ENV || "your-model",
    openaiKey: process.env.OPENAI_KEY || "your-default-api-key",
    aiBotId: "00000000-0000-0000-0000-000000000000"
}

export default config;