import { FaXTwitter, FaLinkedin, FaGithub } from "react-icons/fa6";
const Contact = () => {
    return (
        <section className="py-20 md:py-20 scroll-mt-24" id="contact">
        <div className="mx-auto px-8 lg:px-16">
            <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl title mb-6">Get in touch 🙋‍♂️</h2>
            <p className="text-xl sub-text mb-8">
                I'm eager to grow and contribute to real-world projects.<br/>
                If you have an internship opportunity or a project where I can learn and make an impact, I’d love to hear from you!
            </p>
            </div>
            <div className="flex justify-center gap-8 mt-4">
            <a href="https://github.com/oshriagronov">
              <FaGithub className="icon-button sub-text hover-effect" />
            </a>
            <a href="https://www.linkedin.com/in/oshri-agronov/">
              <FaLinkedin className="icon-button sub-text hover-effect" />
            </a>
            <a href="https://x.com/oshriagronov">
              <FaXTwitter className="icon-button sub-text hover-effect" />
            </a>
            </div>
        </div>
        </section>
    )
}
export default Contact;