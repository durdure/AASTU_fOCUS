import React from 'react'
import './contact.css'
import messageIcon from './../assets/msg-icon.png'
import mailIcon from './../assets/mail-icon.png'
import phoneIcon from './../assets/phone-icon.png'
import loactionIcon from './../assets/location-icon.png'
import whiteIcon from './../assets/white-arrow.png'


const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5e5f8b16-5beb-448c-af7a-197d7882e65f");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (

    <div className='contact'>
        <div className="contact-col">
            <h3>Send Message <img src= {messageIcon} alt=""  /></h3>
            <p>Gaaffii yaada qabdaan kan gaddii kan irraatti bilisaan dhuheefachuu dandessuu </p>
            <ul>
                <li> <img src= {mailIcon} alt=""  /> aastufocus@gmail.com </li>
                <li> <img src= {phoneIcon} alt=""  /> +251X **** ****</li>
                <li> <img src= {loactionIcon} alt=""  /> Qaliti, finfinee, Ethiopia</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Maqaa keessan</label>
                <input type="text" name='name' placeholder='Maqaa Keesan galchaa' required/>
                <label>Lakkoofsa Bilbilaa Keessan</label>
                <input type="tel" name='phone' placeholder='Lakkoofsa bilbila keesan galchaa' required/>
                <label>Ergaa ykn yaada Qabdaan</label>
                <textarea name="message" rows='10' placeholder='yaada Qadaa' required></textarea>
                <button type='submit' className='btn dark-nav' >Ammaa Ergi  <img src= {whiteIcon} alt="" /> </button>
            </form>
            <span>
                {result}
            </span>
        </div>
    </div>
  )
}

export default Contact