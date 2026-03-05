

const Hero = () => {
  return (
    <section className="bg-[#0a0a0a] text-white min-h-screen flex items-center justify-center py-20 md:py-0">
      <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 gap-12">
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-bold mb-4">
            你好，我是 <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">开发者</span>
          </h1>
          <p className="text-lg lg:text-xl text-gray-300 mb-8">
            一位热衷于构建美观且用户友好的 Web 应用的前端开发者。
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img
            src="https://via.placeholder.com/300"
            alt="Avatar"
            className="rounded-full w-64 h-64 lg:w-96 lg:h-96 object-cover border-4 border-purple-500"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
