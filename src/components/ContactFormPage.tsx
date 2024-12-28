import React from 'react';
import '../App.css'; // Import Tailwind CSS

const ContactForm: React.FC = () => {
    return (
        <form className="max-w-4xl mx-auto bg-snowWhite text-shadowGray p-8 rounded-lg shadow-lg">
            {/* First Name and Surname Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* First Name */}
                <div>
                    <label htmlFor="firstName" className="hidden md:block text-lg font-bold mb-2">
                        First Name
                    </label>
                    <input
                        type="text"
                        id="firstName"
                        placeholder="Your First Name"
                        className="form-input"
                    />
                </div>

                {/* Surname */}
                <div>
                    <label htmlFor="surname" className="hidden md:block text-lg font-bold mb-2">
                        Surname
                    </label>
                    <input
                        type="text"
                        id="surname"
                        placeholder="Your Surname"
                        className="form-input"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">

                {/* Email */}
                <div>
                    <label htmlFor="email" className="hidden md:block text-lg font-bold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="Your Email"
                        className="form-input"
                    />
                </div>

                {/* Occupation */}
                <div>
                    <label htmlFor="subject" className="hidden md:block text-lg font-bold mb-2">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        placeholder="Subject"
                        className="form-input"
                    />
                </div>
            </div>

            {/* Message */}
            <div className="mb-6">
                <label htmlFor="message" className="hidden md:block text-lg font-bold mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    rows={5}
                    placeholder="Your Message"
                    className="form-input"
                ></textarea>
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                className="px-6 py-3 bg-vibrantOrange text-snowWhite font-bold text-lg rounded hover:bg-deepBluePurple transition duration-300"
            >
                Send Message
            </button>
        </form>
    );
};

export default ContactForm;
