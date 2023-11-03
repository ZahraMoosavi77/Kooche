const emailReg = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

export const emailTester = (value) => {
   return emailReg.test(value) 
}