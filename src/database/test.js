const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    proffyValue = {
        name: "GG",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "989898",
        bio: "blblllbllal",
    }

    classValue = {
        subject: "Math",
        cost: "50",
    }

    classScheduleValues = [
        {
            weekday: 2,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 5,
            time_from: 1220,
            time_to: 1520
        }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})
    const selectedProffys = await db.all("SELECT * FROM proffys")
    console.log(selectedProffys)
})
