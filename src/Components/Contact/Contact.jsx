import React from 'react'
import './Contact.css'
import message_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png';

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c0cbf835-84bd-4fe1-b5c0-5d6e8347742a");

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
        <div className='contact-col'>
            <h3>Send us a message <img src={message_icon} alt="" /></h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni sint laudantium veritatis ducimus, suscipit rem, quaerat distinctio beatae iusto quibusdam doloribus dolorum totam cumque ab adipisci, perferendis fuga tenetur. Maiores!</p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@university.com</li>
                <li><img src={phone_icon} alt="" />+91 123-456-1234</li>
                <li><img src={location_icon} alt="" />Opposite of University, 442706, India</li>
            </ul>
        </div>
        <div className='contact-col'>
            <form onSubmit={onSubmit}>
                <label>Your name</label>
                <input type="text" name='name'placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone'placeholder='Enter mobile number' required/>
                <label>Write your message here</label>
                <textarea name="message" id="" rows="6" placeholder='enter your message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit now
                    <img src={white_arrow} alt="" />
                </button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact