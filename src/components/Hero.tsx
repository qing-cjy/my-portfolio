

import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="text-gray-800 min-h-screen flex items-center justify-center py-32">
      <div className="w-full flex flex-col lg:flex-row items-center justify-center px-4 sm:px-6 lg:px-12 gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-black tracking-tighter mb-4 text-gray-900">
            你好，我是 <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-yellow-400">开发者</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 mb-8">
            一位热衷于构建美观且用户友好的 Web 应用的前端开发者。
          </p>
          <motion.button 
            className="bg-yellow-300 text-gray-900 font-bold py-4 px-10 rounded-full shadow-lg hover:bg-yellow-400 hover:ring-2 hover:ring-yellow-300/50 transition-colors"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30, ease: "easeInOut" }}
          >
            联系我
          </motion.button>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <motion.img
            src="https://via.placeholder.com/300"
            alt="Avatar"
            className="rounded-full w-64 h-64 lg:w-96 lg:h-96 object-cover border-8 border-white shadow-2xl shadow-gray-300/50"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 20, delay: 0.2 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
