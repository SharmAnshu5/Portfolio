import { FaLinkedin, FaGithub, FaYoutube, FaHackerrank } from "react-icons/fa";

const SocialLinks = () => (
  <section id="social" className="py-10 text-center">
    <h3 className="text-gray-300 text-lg font-semibold mb-4">
      Let’s Connect
    </h3>
    <div className="flex justify-center gap-6">
      <a href="https://linkedin.com/in/anshu-sharma-b74a07221" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-blue-500 hover:text-blue-400 text-3xl transition" />
      </a>
      <a href="https://github.com/SharmAnshu5" target="_blank" rel="noopener noreferrer">
        <FaGithub className="text-gray-300 hover:text-gray-200 text-3xl transition" />
      </a>
      <a href="https://www.hackerrank.com/profile/anshusharma5_as" target="_blank" rel="noopener noreferrer">
        <FaHackerrank className="text-green-400 hover:text-green-300 text-3xl transition" />
      </a>
      <a href="https://www.youtube.com/@anshusharma6560">
        <FaYoutube className="text-pink-400 hover:text-pink-300 text-3xl transition" />
      </a>
    </div>
  </section>
);

export default SocialLinks;