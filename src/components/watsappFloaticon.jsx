import { FaWhatsapp } from "react-icons/fa";

const WhatsAppFloat = () => {
  return (
    <a
      href="https://wa.me/919892409029"
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-10 z-50
        hidden md:flex
        items-center justify-center
        w-14 h-14 rounded-full
        bg-green-500 text-white
        shadow-lg hover:shadow-xl
     transform hover:scale-110 transition-all duration-300 animate-[bounce_1s_infinite]
      "
    >
      <FaWhatsapp size={30} />
    </a>
  );
};

export default WhatsAppFloat;