class FormValidation{
    formValues = {
        username :"",
        email :"",
        password :"",
        phoneNumber :"",
        education :"",
        gender :"",
        yourLanguage :""
    }
    errorValues = {
        usernameErr :"",
        emailErr :"",
        passwordErr :"",
        phoneNumberErr :"",
        educationErr :"",
        genderErr :"",
        yourLanguageErr :""
    }
    showErrorMsg(index,msg){

        const form_group = document.
        getElementsByClassName('form-group')
        [index]
        form_group.classList.add('error')
        form_group.getElementsByTagName('span')[0].textContent =msg
    }
    showSuccessMsg(index){

        const form_group =document.getElementsByClassName('form-group')[index]
        form_group.classList.remove('error')
        form_group.classList.add('success')

    }
    getInputs(){

        this.formValues.username =document.getElementById("username").value.trim()
        this.formValues.email =document.getElementById("email").value.trim()
        this.formValues.password =document.getElementById("password").value.trim()
        this.formValues.phoneNumber =document.getElementById("phoneNumber").value.trim()
        // this.formValues.education =document.getElementById("education").value.trim()
        // this.formValues.uploadPhoto =document.getElementById("file").value.trim()
        this.formValues.gender =document.getElementById("gender").value.trim()
        this.formValues.yourLanguage =document.getElementById("language").value.trim()
        
        


    }
    validateUsername(){

        if(this.formValues.username ===""){
            this.errorValues.usernameErr ="*please enter your name"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        } else if(this.formValues.username.length <= 4 ){
            this.errorValues.usernameErr = "* Username must be atLeast 5 Characters"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        } else if(this.formValues.username.length > 14){
            this.errorValues.usernameErr = "* Username should not exceeds 14 Characters"
            this.showErrorMsg(0,this.errorValues.usernameErr)
        } else {
            this.errorValues.usernameErr = ""
            this.showSuccessMsg(0)
        }

    }
    validateEmail(){

        //abc123@gmail.com
        const regExp = /^([a-zA-Z0-9-_\.]+)@([a-zA-Z0-9]+)\.([a-zA-Z]{2,10})(\.[a-zA-Z]{2,8})?$/
        if(this.formValues===""){

            this.errorValues.emailErr = "*please enter the email*"
            this.showErrorMsg(1,this.errorValues.emailErr)
        }else if(!(regExp.test(this.formValues.email))){
            this.errorValues.emailErr = "* Invalid Email"
            this.showErrorMsg(1,this.errorValues.emailErr)
        } else {
            this.errorValues.emailErr = ""
            this.showSuccessMsg(1)
        }    
    }
    validatePassword(){


        if(this.formValues.password === ""){
            this.errorValues.passwordErr = "* Please Provide a Password"
            this.showErrorMsg(2,this.errorValues.passwordErr)
        } else if(this.formValues.password.length <= 4){
            this.errorValues.passwordErr = "* Password must be atleast 5 Characters"
            this.showErrorMsg(2,this.errorValues.passwordErr)
        } else if(this.formValues.password.length > 10){
            this.errorValues.passwordErr = "* Password should not exceeds 10 Characters"
            this.showErrorMsg(2,this.errorValues.passwordErr)
        } else {
            this.errorValues.passwordErr = ""
            this.showSuccessMsg(2)
        }
        
    }
    validatePhoneNumber(){

        const phoneNo = /^\d{10}$/
        if(this.formValues.phoneNumber === ""){
            this.errorValues.phoneNumberErr = "* Please Enter your Phone Number"
            this.showErrorMsg(3,this.errorValues.phoneNumberErr)
        } else if(phoneNo.test(this.formValues.phoneNumber)){
            this.errorValues.phoneNumberErr = ""
            this.showSuccessMsg(3)
        } else {
            this.errorValues.phoneNumberErr = "* Invalid Phone Number"
            this.showErrorMsg(3,this.errorValues.phoneNumberErr)
        }
        
    }
    validateEducation(){

        
      
               
}
    validateUploadPhoto(){
        
    }
    validateGender(){
    //   if(this.formValues.gender === ''){
    //       this.errorValues.genderErr = "* please enter the value";
    //       this.showErrorMsg(5,this.errorValues.genderErr)
    //   }else{
        
    //   }
        
}
    validateYourLanguage(){
        
    }
    alertMessage(){
      

    }
}

const validateUserInputs = new  FormValidation() 

document.getElementsByClassName('form')[0].addEventListener('submit' , event =>{
    event.preventDefault()
    validateUserInputs.getInputs()
    validateUserInputs.validateUsername()
    validateUserInputs.validateEmail()
    validateUserInputs.validatePassword()
    validateUserInputs.validatePhoneNumber()
    validateUserInputs.validateEducation()
    validateUserInputs.validateGender()

})





