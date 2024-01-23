import React from 'react';

export default function Contact() {
  return (
    <main>
      <h1 id="page-title">Contact us or Visit In-Store</h1>
      <div className="container">
        <div className="map-responsive">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d208952.60925294217!2d-81.0306481981502!3d35.08461802744658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88569f50bb2f85e5%3A0x9a60c043557445d!2sPlantHouse!5e0!3m2!1sen!2sus!4v1698808526657!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <form id="contact-form">
          <fieldset className="your-info">
            <legend>Leave a Message</legend>

            <section className="entry">
              <label htmlFor="name">Name</label>
              <input className="input" id="name" name="name" type="text" required />
            </section>

            <section className="entry">
              <label htmlFor="email">Email</label>
              <input className="input" id="email" name="email" type="email" required />
            </section>

            <section className="entry">
              <label htmlFor="phone">Phone</label>
              <input className="input" id="phone" name="phone" type="tel" />
            </section>

            <section className="entry">
              <label htmlFor="reason">Reason</label>
              <select className="entry" id="reason" name="reason" required>
                <option>--Inquiry Choices--</option>
                <option>Looking for a specific plant</option>
                <option>Questions</option>
                <option>Concern</option>
              </select>
            </section>

            <button id="formButton" onClick={() => {}}>
              Submit
            </button>
          </fieldset>
        </form>
      </div>

      <br />

      
    </main>
  );
}
