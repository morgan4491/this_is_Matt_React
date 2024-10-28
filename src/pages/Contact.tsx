function Contact() {
    return (
        <form id="contact">

            <h3 className="text-center">Contact Me</h3>

            <input type="hidden" name="subject" value="New Submission from Portfolio" />

            <input name="full_name" type="text" placeholder="Enter your full name" required />
            <input name="email" type="email" placeholder="Enter your email address" required />
            <textarea name="message" placeholder="Tell me something" required></textarea>
            <button>Send</button>
        </form>
    )
}

export default Contact;