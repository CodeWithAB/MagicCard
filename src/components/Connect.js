import './Connect.css'

let links = [
    {
        icon: "fab fa-instagram-square",
        url: "https://www.instagram.com/_ydv.abhay_/"
    },
    {
        icon: "fab fa-youtube",
        url: "https://www.youtube.com"
    },
    {
        icon: "fab fa-telegram",
        url: "https://t.me/abhay_ydv1"
    },
    {
        icon: "fab fa-facebook-square",
        url: "https://www.facebook.com/profile.php?id=100009448220369"
    },
    {
        icon: "fab fa-linkedin",
        url: "javascript:void(0)"
    },
    {
        icon: "fab fa-twitter",
        url: "javascript:void(0)"
    },
]

let socialLinks = links.map((link, i) => {
    return <a href={link.url} target='_blank'  key={i}> <i className={link.icon}></i> </a>
})


function Connect() {
    return (
        <div className='connect'>
            <h2>Let's connect 😊</h2>
            {socialLinks}
        </div>
    )
}

export default Connect