

const validation = async (req, res, next) => {
    try {
        const { name, email, courseName, referralName, relationToReferral } = req.body;

        const errors = [];

        if (!name || !email || !courseName || !referralName || !referralName) {
            errors.push('All Fields are required');
        } else if (name.trim().length < 3) {
            errors.push('Name must be at least 3 characters');
        }

        // Regular expression for email validation
        const emailRegex = /([a-zA-Z0-9_.+-]+)@[a-zA-Z0-9_.+-]+[a-zA-Z0-9_+-]/;
        if (!email.match(emailRegex)) {
            errors.push('Enter a valid email');
        }


        if (errors.length > 0) {
            return res.json({ errors, status: "formError" });
        }

        // If validation passes, move to the next middleware
        next();

    } catch (err) {
        console.log(err)
        return res.json({ message: "validation process failed", error: err })
    }
}

module.exports = validation
