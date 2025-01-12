const allowedOrigins = [
        'https://aitrendshub.org', 
        'https://ai-trends-xyz.netlify.app/'
];

const cors = (req, res, next) => {
        const origin = req.headers.origin;

        if (allowedOrigins.includes(origin)) {
                res.setHeader('Access-Control-Allow-Origin', origin);
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
                res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        }

        if (req.method === 'OPTIONS') {
                res.status(200).end();
                return;
        }

        next();
};

export default cors;