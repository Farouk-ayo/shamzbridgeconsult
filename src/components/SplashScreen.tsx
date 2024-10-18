import { motion } from "framer-motion";

const SplashScreen = ({ finishLoading }: { finishLoading: () => void }) => {
  return (
    <section className="flex w-full h-screen justify-center items-center">
      <div className="flex justify-start sm:justify-center items-center uppercase tracking-wider">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: [0, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: "mirror" }}
          onAnimationComplete={finishLoading}
        >
          <div className="text-white font-bold text-2xl">
            <img
              src="https://cdn.hashnode.com/res/hashnode/image/upload/v1724055539467/36a4b661-bd4f-488c-88d9-7109189330e5.png"
              alt="Logo"
              className="w-52"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SplashScreen;
