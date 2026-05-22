import { motion, AnimatePresence } from "framer-motion";
import { HiX } from "react-icons/hi";

const Modal = ({ isOpen, onClose, title, content, videoId }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-4"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >

          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 30, opacity: 0 }}
            className="relative bg-[#0B0F1A] border border-white/10 rounded-3xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col"
          >

            {/* CLOSE BUTTON */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-red-500 transition text-white z-10"
            >
              <HiX size={20} />
            </button>

            {/* HEADER */}
            <div className="p-6 border-b border-white/10">
              <h2 className="text-2xl md:text-3xl font-bold">
                {title}
              </h2>
              <p className="text-gray-400 text-sm mt-2">
                BDLG Knowledge Hub
              </p>
            </div>

            {/* BODY */}
            <div className="p-6 overflow-y-auto space-y-6">

              {/* ARTICLE CONTENT */}
              <p className="text-gray-300 leading-7 whitespace-pre-line">
                {content}
              </p>

              {/* VIDEO SECTION */}
              {videoId && (
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-3 text-blue-400">
                    Watch Related Video
                  </h3>

                  <div className="aspect-video w-full rounded-2xl overflow-hidden border border-white/10">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${videoId}`}
                      title="YouTube video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              )}

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;