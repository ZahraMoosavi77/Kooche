const passReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

export const passwordTester = (value) => {
    return passReg.test(value)
}