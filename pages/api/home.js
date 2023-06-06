

export default function handler(req, res) {
    res.status(200).json([
        {
            id: 1,
            text: 'This is the first comment',
            url: 'https://www.google.com'
        },
        {
            id: 2,
            text: 'This is the second comment',
            url: 'https://www.google.com'
        },
    ])
}