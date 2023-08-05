const htmlContactForm = (message) => {
    return (
    `
    <img src="cid:logo@nodemailer.com" style="height: 50px; margin: 20px;"></img>
    <h2 style="font-size: 20px; color: blue;">Message from Zurea Shop</h2>
    <p style="line-height: 1.7; color: cadetblue;">${message}</p>
    <a style="display: block;" href="https://www.google.com" target="_blank">Google</a>
    `
    )
}

module.exports = { htmlContactForm };