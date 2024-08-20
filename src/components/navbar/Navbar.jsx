import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Hasan Hamadeh
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/Hasan.Hamada07" target="_blank">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="www.linkedin.com/in/hasan-hamadeh" target="_blank">
            <img src="/linkedin.svg" alt="" />
          </a>
          <a href="https://www.xing.com/profile/hasan_hamada" target="_blank">
            <img src="/xing.svg" alt="" />
          </a>
          <a href="https://wa.me/+963931660174" target="_blank">
            <img src="/whatsapp.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
