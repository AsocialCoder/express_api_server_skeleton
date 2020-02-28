module.exports = {
    jwt: {
        access: {
            secret: "abcd",
            options: {
                // possible values 60 (in seconds), "2 days", "10h", "7d"
                expiresIn: "7d"
            }
        },
        refresh: {
            options: {
                expiresIn: 15 * 24 * 60 * 60 // 15 days
            }
        }
    },
}