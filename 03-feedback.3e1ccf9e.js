const e={email:"",message:""},t={email:document.querySelector("input[name='email']"),message:document.querySelector("textarea[name='message']"),submit:document.querySelector(".feedback-form")};(()=>{const a=JSON.parse(localStorage.getItem("feedback-form-state"));a&&(t.email.value=a.email,t.message.value=a.message,e.email=a.email,e.message=a.message)})(),t.email.addEventListener("input",(t=>{e[t.currentTarget.name]=t.currentTarget.value,console.log(e),localStorage.setItem("feedback-form-state",JSON.stringify(e))})),t.message.addEventListener("input",(t=>{e[t.currentTarget.name]=t.currentTarget.value,console.log(e),localStorage.setItem("feedback-form-state",JSON.stringify(e))})),t.submit.addEventListener("submit",(e=>{e.preventDefault(),console.log("sent form"),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")}));
//# sourceMappingURL=03-feedback.3e1ccf9e.js.map