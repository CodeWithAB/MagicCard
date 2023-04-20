import './Contact.css';

let infos = [
  {
    text: '+91 7080817607',
    buttons: [
      {
        className: 'phone',
        href: 'tel:+91 7080817607',
        icon: 'fas fa-phone'
      },
      {
        className: 'whatsapp',
        href: 'https://wa.me/+917080817607',
        icon: 'fab fa-whatsapp'
      },
    ]
  },
  {
    text: 'me.ydv.abhay@gamil.com',
    buttons: [{
      className: 'mail',
      href: 'me.ydv.abhay.com',
      icon: 'fas fa-envelope'
    }]
  },
  {
    text: 'github.in',
    buttons: [{
      className: 'website',
      href: 'https://github.com/CodeWithAB',
      icon: 'fas fa-external-link-alt'
    }]
  },
]


function Contact() {
  return (
    <div className='contact'>

      {infos.map((info, i) =>
        <div className='row' key={i}>
          <div className='left'>{info.text}
            <div className='right'>
              {info.buttons.map((btn, j) => <a className={btn.className} href={btn.href} key={j}> <i className={btn.icon}></i> </a>)}

            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default Contact

