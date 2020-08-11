const Database = require("./database/db")

const { subjects, weekdays, getSubject, convertHoursToMinutes } = require("./utils/format")

//Funcionalidades

function pageLanding(req, res) {
    return res.render("index.html")
}

async function pageStudy(req, res) {
    const filter = req.query

    if (!filter.subject || !filter.weekday || !filter.time) {
        return res.render("study.html", { filter, subjects, weekdays })
    }

    const timeToMinutes = convertHoursToMinutes(filter.time)

    const query = `
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS (
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filter.weekday}
            AND class_schedule.time_from <= ${timeToMinutes}
            AND class_schedule.time_to > ${timeToMinutes}
        )
        AND classes.subject = ${filter.subject}
    `

    try {
        const db = await Database
        const proffys = await db.all(query)

        return res.render("study.html", { proffys, subjects, filter, weekdays })
    } catch (error) {
        console.log(error)
    }

}

function pageGiveClasses(req, res) {
    const data = req.query
    const isNotEmpty = Object.keys(data).length > 0
    if(isNotEmpty) {
        data.subject = getSubject(data.subject)
        proffys.push(data)
        return res.redirect("/study")
    }
    return res.render("give-classes.html", { subjects, weekdays })
}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses
}