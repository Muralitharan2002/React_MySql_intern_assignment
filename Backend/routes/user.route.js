const express = require('express')
const { PrismaClient } = require('@prisma/client');
const validation = require('../middleware.js/user.middleware');
const sendMail = require('../utils/SendEmail');
const route = express.Router()

const prisma = new PrismaClient();

route.post("/data", validation, async (req, res) => {
    try {
        const { name, email, courseName, referralName, relationToReferral } = req.body;

        const exist = await prisma.user.findFirst({
            where: {
                email: email
            }
        })

        if (exist) return res.json({ message: "Referral already Applied", status: "warning" })

        await prisma.user.create({
            data: {
                name,
                email,
                course_name: courseName,
                referral_name: referralName,
                relationShip_to_referral: relationToReferral
            }
        })
        await sendMail(email, name, courseName, referralName);
        return res.json({ message: "Referral Saved", status: "success" })

    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: "Failed to save referral", error: err })
    }
})

module.exports = route