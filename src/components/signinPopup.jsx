  // import React, { useEffect, useState } from "react";

  // const SignInModal = ({ isOpen, onClose, onSignIn, role }) => {
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  //   const [showPassword, setShowPassword] = useState(false);
  //   const [loading, setLoading] = useState(false);
  //   const [success, setSuccess] = useState(false);

  //   // if (!isOpen) return null;

  //   const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setLoading(true);
  //     await onSignIn({ email, password });
  //     setLoading(false);
  //     setSuccess(true);
  //   };
  // useEffect(()=>{
  //   console.log({email})
  // },[email])
  //   const handleClose = () => {
  //     setSuccess(false);
  //     setEmail("");
  //     setPassword("");
  //     onClose();
  //   };

  //   // ── Success Screen ──
  //   if (success) {
  //     return (
  //       // <div
  //       //   className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/10 backdrop-blur-lg"
  //       //   onClick={handleClose}
  //       // >
      

  //       <div
  //   className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-hidden"
  //   onClick={(e) => {
  //     if (e.target === e.currentTarget) handleClose();
  //   }}
  // >
  //   <video
  //     autoPlay
  //     loop
  //     muted
  //     playsInline
  //     className="absolute inset-0 w-full h-full object-cover"
  //   >
  //     <source src="/video/bg-loop.mp4" type="video/mp4" />
  //   </video>

  //   <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
  //   <div
  //     className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl z-10"
  //     style={{ background: "rgba(255,255,255,0.92)" }}
  //     onClick={(e) => e.stopPropagation()}
  //   >
  //     <div
  //       className="h-1.5 w-full"
  //       style={{
  //         background:
  //           "linear-gradient(to right, #f472b6, #fb7185, #f43f5e)",
  //       }}
  //     />

  //     <div className="flex flex-col items-center justify-center px-7 py-10 text-center gap-4">

  //       {/* Animated checkmark */}
  //       <div
  //         className="w-16 h-16 rounded-full flex items-center justify-center"
  //         style={{
  //           background: "linear-gradient(135deg, #fce7f3, #ffe4e6)",
  //         }}
  //       >
  //         <svg
  //           className="w-8 h-8"
  //           viewBox="0 0 24 24"
  //           fill="none"
  //           stroke="#f43f5e"
  //           strokeWidth={2.5}
  //         >
  //           <path
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             d="M4.5 12.75l6 6 9-13.5"
  //           />
  //         </svg>
  //       </div>

  //       <div>
  //         <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">
  //           {role === "Signup" ? "Account Created!" : "Welcome Back!"}
  //         </h2>
  //         <p className="text-sm text-gray-400 mt-1 leading-relaxed">
  //           {role === "Signup"
  //             ? "Your account has been successfully created. Welcome to Podsphere!"
  //             : `You're successfully signed in as ${role}.`}
  //         </p>
  //       </div>

  //       <button
  //         onClick={handleClose}
  //         className="mt-2 w-full py-3 rounded-2xl text-white font-bold text-sm tracking-widest cursor-pointer"
  //         style={{
  //           background: "linear-gradient(to right, #f472b6, #f43f5e)",
  //         }}
  //       >
  //         {role === "Signup" ? "GET STARTED" : "CONTINUE"}
  //       </button>
  //     </div>
  //   </div>
  // </div>
  //     );
  //   }

  //   return (
  //     isOpen && (
  //       <div
  //       className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/10 backdrop-blur-lg"
  //       onClick={(e) => {
  //         if (e.target === e.currentTarget) handleClose();
  //       }}
  //     >
  //       <div
  //         className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl"
  //         style={{ background: "rgba(255,255,255,0.92)" }}
  //         onClick={(e) => e.stopPropagation()}
  //       >
  //         <div className="h-1.5 w-full" style={{ background: "linear-gradient(to right, #f472b6, #fb7185, #f43f5e)" }} />

  //         <button
  //           onClick={handleClose}
  //           className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center cursor-pointer z-10"
  //           style={{ background: "rgba(0,0,0,0.06)", color: "#9ca3af" }}
  //         >
  //           <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
  //             <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  //           </svg>
  //         </button>

  //         <div className="pt-7 pb-5 px-7 text-center">
  //           <div className="mx-auto mb-3 w-12 h-12 rounded-2xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #fce7f3, #ffe4e6)" }}>
  //             <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth={1.8}>
  //               <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
  //             </svg>
  //           </div>
  //           <h2 className="text-lg font-extrabold text-gray-900 tracking-tight">
  //             {role === "Signup" ? "Create Account" : role === "Parent Login" ? "Parent Login" : role === "Teacher Login" ? "Teacher Login" : "Welcome Back"}
  //           </h2>
  //           <p className="text-xs text-gray-400 mt-0.5">Sign in to continue to Podsphere</p>
  //         </div>

  //         <form onSubmit={handleSubmit} className="px-7 pb-7 space-y-3">
      
        

  //           <button
  //             type="button"
  //             className="w-full flex items-center justify-center gap-2.5 py-2.5 rounded-2xl text-sm font-semibold cursor-pointer"
  //             style={{ border: "1.5px solid #e5e7eb", color: "#374151", background: "#fff" }}
  //           >
  //             <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
  //               <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
  //               <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
  //               <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
  //               <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  //             </svg>
  //             Continue with Google
  //           </button>

  //           <button type="button" onClick={handleClose}  className="w-full text-[11px] font-medium cursor-pointer py-1" style={{ color: "#9ca3af" }}>
  //             Cancel
  //           </button>
  //         </form>
  //       </div>
  //     </div>
      
  //   ));
  // };
 

  // export default React.memo(SignInModal); 



    import React, { useState } from "react";
import ENDPOINT from "../lib/endpoints";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import CONFIG from "../constance";

  const SignInModal = ({ isOpen, onClose, onSignIn, role  }) => {
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
  
    const handleClose = () => {
      setSuccess(false);
      onClose();
    };
  
    const login = useGoogleLogin({
      onSuccess: async (tokenResponse) => {
        try {
          setLoading(true);

           
                const res = await axios.post(
                  `${CONFIG.API_BASE_URL}/${ENDPOINT.googleLogin()}`,
                  {
                    token: tokenResponse.access_token,
                  }
                );
  
      
  
          //  store token
          localStorage.setItem("token", res.data.token);
  
          setSuccess(true);
  
          if (onSignIn) onSignIn(res.data);
  
        } catch (err) {
          console.error("Google login error:", err);
        } finally {
          setLoading(false);
        }
      },
      onError: () => console.log("Login Failed"),
    });
  
    const handleGoogleSignIn = () => {
      login();
    };
  

    // ── Success Screen ──
    if (success) {
      return (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 overflow-hidden"
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
            <source src="/video/bg-loop.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
          <div
            className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl z-10"
            style={{ background: "rgba(255,255,255,0.92)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-1.5 w-full" style={{ background: "linear-gradient(to right, #f472b6, #fb7185, #f43f5e)" }} />

            <div className="flex flex-col items-center justify-center px-7 py-10 text-center gap-4">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #fce7f3, #ffe4e6)" }}
              >
                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>

              <div>
                <h2 className="text-xl font-extrabold text-gray-900 tracking-tight">
                  {role === "Signup" ? "Account Created!" : "Welcome Back!"}
                </h2>
                <p className="text-sm text-gray-400 mt-1 leading-relaxed">
                  {role === "Signup"
                    ? "Your account has been successfully created. Welcome to Podsphere!"
                    : `You're successfully signed in as ${role}.`}
                </p>
              </div>

              <button
                onClick={handleClose}
                className="mt-2 w-full py-3 rounded-2xl text-white font-bold text-sm tracking-widest cursor-pointer"
                style={{ background: "linear-gradient(to right, #f472b6, #f43f5e)" }}
              >
                {role === "Signup" ? "GET STARTED" : "CONTINUE"}
              </button>
            </div>
          </div>
        </div>
      );
    }

    return (
      isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/10 backdrop-blur-lg"
          onClick={(e) => { if (e.target === e.currentTarget) handleClose(); }}
        >
          <div
            className="relative w-full max-w-sm rounded-3xl overflow-hidden shadow-2xl"
            style={{ background: "rgba(255,255,255,0.92)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="h-1.5 w-full" style={{ background: "linear-gradient(to right, #f472b6, #fb7185, #f43f5e)" }} />

            <button
              onClick={handleClose}
              className="absolute top-4 right-4 w-7 h-7 rounded-full flex items-center justify-center cursor-pointer z-10"
              style={{ background: "rgba(0,0,0,0.06)", color: "#9ca3af" }}
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="pt-7 pb-5 px-7 text-center">
              <div
                className="mx-auto mb-3 w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #fce7f3, #ffe4e6)" }}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="#f43f5e" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              </div>
              <h2 className="text-lg font-extrabold text-gray-900 tracking-tight">
                {role === "Signup" ? "Create Account" : role === "Parent Login" ? "Parent Login" : role === "Teacher Login" ? "Teacher Login" : "Welcome Back"}
              </h2>
              <p className="text-xs text-gray-400 mt-0.5">Sign in to continue to Podsphere</p>
            </div>

            <div className="px-7 pb-7 space-y-3">
              <button
                type="button
                
                "
                onClick={handleGoogleSignIn}
                disabled={loading}
                className="w-full flex items-center justify-center gap-2.5 py-2.5 rounded-2xl text-sm font-semibold cursor-pointer disabled:opacity-60"
                style={{ border: "1.5px solid #e5e7eb", color: "#374151", background: "#fff" }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                    </svg>
                    SIGNING IN...
                  </span>
                ) : (
                  <>
                    <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    Continue with Google
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleClose}
                className="w-full text-[11px] font-medium cursor-pointer py-1"
                style={{ color: "#9ca3af" }}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )
    );
  };

  export default React.memo(SignInModal);