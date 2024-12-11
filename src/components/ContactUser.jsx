import React from 'react'

const ContactUser = () => {
  return (
    <>
    <div className="contactuser-body">
        <div className="contactuser-container">
            <div className="contactuser-left-row">
                <h1>Hubungi kami</h1>
                <br /><br /><br />
                <form action="">
                    <input type="text" maxLength={20} name="Name" placeholder="Nama Anda" required/>
                    <input type="email" maxLength={40} name="Email" placeholder="Email Anda" required/>
                    <input type="text" maxLength={100} name="Message" placeholder="Pesan Anda" required/>
                </form>
                <button>KIRIM</button>
            </div>
            <div className="contactuser-right-row">
                <div className="contactuser-right-row-core">
                    <div className="contactuser-right-row-sosmed">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sahabathijrahkuu2?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="><img src="src\assets\contactuser\Instagram.png"/></a>
                        <h3>@sahabathijrahku1</h3>
                    </div>
                    <div className="contactuser-right-row-sosmed">
                        <a target="_blank" rel="noopener noreferrer" href=""><img src="src\assets\contactuser\Whatsapp.png"/></a>
                        <h3>+621234567890</h3>
                    </div>
                    <div className="contactuser-right-row-sosmed">
                        <a target="_blank" rel="noopener noreferrer" href=""><img src="src\assets\contactuser\Instagram.png"/></a>
                        <h3>johndoe@gmail.com</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ContactUser