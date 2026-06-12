import { ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export default function App() {
  const GOOGLE_DRIVE_FOLDER_URL = "https://drive.google.com/drive/folders/1AAZBMOE99ag6TlubMmGx4zfKNMcAmWyL?usp=sharing";

  return (
    <div 
      className="min-h-screen bg-slate-50 flex items-center justify-center p-4 notranslate" 
      id="main-viewport"
      translate="no"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-emerald-50/40 via-slate-50 to-slate-50 pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, scale: 0.96, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white border border-slate-100 shadow-2xl rounded-3xl p-8 text-center relative z-10"
        id="access-card"
      >
        {/* Subtle top indicator bar */}
        <div className="w-12 h-1 bg-emerald-500 rounded-full mx-auto mb-6" />

        {/* Success Check Icon */}
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-6 border border-emerald-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 stroke-[2.5]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Copy / Message */}
        <h2 className="text-2xl font-black font-display text-slate-900 tracking-tight mb-2 leading-tight">
          ¡Pago Procesado!
        </h2>
        <p className="text-sm text-slate-500 leading-relaxed mb-8">
          Haz clic en el botón de abajo para acceder directamente a la carpeta segura que contiene tu <strong>Material y PDF</strong> de inmediato.
        </p>

        {/* The Single Affordance Button requested */}
        <motion.a 
          id="access-google-drive-link"
          href={GOOGLE_DRIVE_FOLDER_URL} 
          target="_blank" 
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full inline-flex items-center justify-center gap-2.5 bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm tracking-tight py-4 px-6 rounded-2xl shadow-xl shadow-slate-900/10 transition-colors cursor-pointer"
        >
          <span>Acceder al PDF / Google Drive</span>
          <ExternalLink className="w-4 h-4 opacity-90 stroke-[2.5]" />
        </motion.a>

        {/* Small footer reassurance */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-center gap-1.5 text-[10px] text-slate-400 font-mono tracking-wider uppercase font-semibold">
          <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          Conexión Segura SSL
        </div>
      </motion.div>
    </div>
  );
}
