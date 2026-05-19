const axios = require("axios");

exports.analyzeComplaint = async (req, res) => {

    try {

        const { complaint } = req.body;

        const response = await axios.post(

            "https://openrouter.ai/api/v1/chat/completions",

            {
                model: "openai/gpt-3.5-turbo",

                messages: [

                    {
                        role: "system",

                        content:
                            "You are an AI Complaint Management Assistant."
                    },

                    {
                        role: "user",

                        content: `

                        Analyze this complaint:

                        ${complaint}

                        Give response in this format:

                        Priority:
                        
                        Department:
                        
                        Summary:
                        
                        Auto Response:
                        `
                    }
                ]
            },

            {
                headers: {

                    Authorization:
                        `Bearer ${process.env.OPENROUTER_API_KEY}`,

                    "Content-Type": "application/json"
                }
            }
        );

        const aiResult =
            response.data.choices[0].message.content;

        res.json({

            analysis: aiResult
        });

    } catch (error) {

        console.log(error.response?.data || error.message);

        res.status(500).json({

            error:
                error.response?.data || error.message
        });
    }
};