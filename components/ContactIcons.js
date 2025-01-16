import {
  Instagram,
  Linkedin,
  MessageCircle,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import React from "react";

const ContactIcons = () => {
  return (
    <>
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
        {[
          {
            icon: <Phone className="w-6 h-6" />,
            label: "Call Us",
            link: "tel:+917073160557",
            color: "bg-green-500",
          },
          {
            icon: <MessageCircle className="w-6 h-6" />,
            label: "WhatsApp",
            link: "https://wa.me/919256308961",
            color: "bg-green-600",
          },
          {
            icon: <Send className="w-6 h-6" />,
            label: "Telegram",
            link: "#",
            color: "bg-blue-500",
          },
          {
            icon: <Instagram className="w-6 h-6" />,
            label: "Instagram",
            link: "#",
            color: "bg-pink-600",
          },
          {
            icon: <Linkedin className="w-6 h-6" />,
            label: "LinkedIn",
            link: "#",
            color: "bg-blue-700",
          },
          {
            icon: <Twitter className="w-6 h-6" />,
            label: "Twitter",
            link: "#",
            color: "bg-blue-400",
          },
        ].map((item, index) => (
          <a
            key={index}
            href={item.link}
            className={`${item.color} text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300 group relative`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.icon}
            <span className="absolute right-full mr-2 top-1/2 -translate-y-1/2 bg-gray-800 text-white px-2 py-1 rounded text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {item.label}
            </span>
          </a>
        ))}
      </div>
    </>
  );
};

export default ContactIcons;
