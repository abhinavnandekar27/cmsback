"use strict";(self.webpackChunktms_front=self.webpackChunktms_front||[]).push([[781],{5781:(xe,b,p)=>{p.r(b),p.d(b,{LoginModule:()=>ve});var h=p(6895),d=p(1635),a=p(4006),e=p(4650),f=p(513),g=p(7009),l=p(3546),c=p(9549),v=p(4144),x=p(7392),u=p(4859);function T(i,r){if(1&i&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Oqu(t.getErrorMessage())}}function k(i,r){if(1&i&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Oqu(t.getPasswordErrorMessage())}}function P(i,r){1&i&&(e.TgZ(0,"div",0)(1,"div",12)(2,"div",6)(3,"a",17)(4,"h6"),e._uU(5,"Verify User"),e.qZA()()()()())}let E=(()=>{class i{constructor(t,n,o){this.authService=t,this.snackBar=n,this.router=o,this.hide=!0,this.email=new a.NI("",[a.kI.required,a.kI.email]),this.password=new a.NI("",[a.kI.required,a.kI.minLength(8)]),this.errorMessage="",this.loading=!1,this.loadingMessage="Sign In"}getErrorMessage(){return this.email.hasError("required")?"Email is required":this.email.hasError("email")?"Not a valid email":""}getPasswordErrorMessage(){return this.password.hasError("required")?"Password is required":this.password.hasError("minlength")?"Password should be at least 8 characters long":""}submit(){this.email.valid&&this.password.valid&&(this.loading=!0,this.loadingMessage="Signing in...",this.authService.login({Username:this.email.value,Password:this.password.value}).subscribe(n=>{this.authService.setToken(n.token);const s=()=>{const _=this.authService.getUserType();_?(this.UserId=sessionStorage.getItem("UserId")??"",this.authService.setUserOnline(this.UserId).subscribe(()=>{this.redirectUser(_),this.snackBar.open("Login successful!","Dismiss",{duration:2e3})},et=>{})):setTimeout(s,100)};s()},n=>{this.snackBar.open(n.error.message||"Login failed. Please try again.","Dismiss",{duration:2e3}),this.errorMessage=n.error.message||"",this.loading=!1,this.loadingMessage="Sign In"}))}redirectUser(t){"Standard"===t||"Admin"===t?this.router.navigate(["/dash/temp"]):"Super Admin"===t&&this.router.navigate(["/sa/users"])}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(f.e),e.Y36(g.ux),e.Y36(d.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-login"]],decls:35,vars:11,consts:[[1,"row"],[1,"col-lg-8","col-md-6"],["mat-card-image","","src","./assets/img/lg.png","alt","Login"],[1,"col-lg-4","col-md-6","col-sm-12","col-xs-12"],[1,"login-box"],[1,"form-container"],[1,"text-center"],["matInput","","placeholder","pat@example.com","required","",3,"formControl"],[4,"ngIf"],["matInput","",3,"type","formControl"],["mat-icon-button","","matSuffix","",3,"click"],["mat-raised-button","","color","primary",3,"disabled","click"],[1,"col"],[1,"d-flex","justify-content-between"],["routerLink","/login/register",1,"link"],["routerLink","/login/forgot",1,"link"],["class","row",4,"ngIf"],["routerLink","/login/resend-verify",1,"link"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.qZA(),e.TgZ(3,"div",3)(4,"mat-card",4)(5,"mat-card-content")(6,"div",5),e._UZ(7,"div",0),e.TgZ(8,"h5",6),e._uU(9,"Login your Account"),e.qZA(),e.TgZ(10,"mat-form-field")(11,"mat-label"),e._uU(12,"Username and Email"),e.qZA(),e._UZ(13,"input",7),e.YNc(14,T,2,1,"mat-error",8),e.qZA(),e.TgZ(15,"mat-form-field")(16,"mat-label"),e._uU(17,"Enter your password"),e.qZA(),e._UZ(18,"input",9),e.YNc(19,k,2,1,"mat-error",8),e.TgZ(20,"button",10),e.NdJ("click",function(){return n.hide=!n.hide}),e.TgZ(21,"mat-icon"),e._uU(22),e.qZA()()(),e.TgZ(23,"button",11),e.NdJ("click",function(){return n.submit()}),e._uU(24),e.qZA(),e.TgZ(25,"div",0)(26,"div",12)(27,"div",13)(28,"a",14)(29,"h6"),e._uU(30,"New user? Sign up"),e.qZA()(),e.TgZ(31,"a",15)(32,"h6"),e._uU(33,"Forgot Password"),e.qZA()()()()(),e.YNc(34,P,6,0,"div",16),e.qZA()()()()()),2&t&&(e.xp6(13),e.Q6J("formControl",n.email),e.xp6(1),e.Q6J("ngIf",n.email.invalid),e.xp6(4),e.Q6J("type",n.hide?"password":"text")("formControl",n.password),e.xp6(1),e.Q6J("ngIf",n.password.invalid),e.xp6(1),e.uIk("aria-label","Hide password")("aria-pressed",n.hide),e.xp6(2),e.Oqu(n.hide?"visibility_off":"visibility"),e.xp6(1),e.Q6J("disabled",n.loading),e.xp6(1),e.hij(" ",n.loadingMessage," "),e.xp6(10),e.Q6J("ngIf","User is not verified. Please verify your account."===n.errorMessage))},dependencies:[h.O5,d.rH,l.a8,l.dn,l.G2,c.KE,c.hX,c.TO,c.R9,v.Nt,a.Fj,a.JJ,a.Q7,a.oH,x.Hw,u.lW,u.RK],styles:["img[_ngcontent-%COMP%]{width:auto;height:80vh;margin-top:13vh}.login-box[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:25vh}.form-container[_ngcontent-%COMP%]{width:100%;max-width:400px;display:flex;flex-direction:column;gap:16px}h5.text-center[_ngcontent-%COMP%]{color:#3f51b5;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:500;line-height:1.2;letter-spacing:.02em;margin-top:0}a[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:.8rem}.link[_ngcontent-%COMP%]{color:#3f51b5;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:500;line-height:1.2;letter-spacing:.02em;margin-top:0;text-decoration:none}@media (max-width: 767px){img[_ngcontent-%COMP%]{display:none}}"]}),i})();var y=p(850);function O(i,r){if(1&i&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Oqu(t.getCompanyEmailErrorMessage())}}function Z(i,r){if(1&i&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Oqu(t.getPersonalEmailErrorMessage())}}function R(i,r){if(1&i&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Oqu(t.getPasswordErrorMessage())}}function D(i,r){if(1&i&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Oqu(t.getConfirmPasswordErrorMessage())}}const A=function(){return["/login/login"]};function q(i,r){if(1&i&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Oqu(t.getErrorMessage())}}function L(i,r){if(1&i&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Oqu(t.getPasswordErrorMessage())}}function F(i,r){if(1&i&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Oqu(t.getConfirmPasswordErrorMessage())}}function H(i,r){1&i&&(e.TgZ(0,"p"),e._uU(1,"Didn't Receive Mail?"),e.qZA())}function B(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"button",7),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.resendResetPasswordEmail())}),e._uU(1,"Resend"),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("disabled",t.counter>0)}}function J(i,r){1&i&&(e.TgZ(0,"p"),e._uU(1,"Didn't Receive Mail?"),e.qZA())}function j(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"button",7),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.resendVerificationEmail())}),e._uU(1,"Resend"),e.qZA()}if(2&i){const t=e.oxw();e.Q6J("disabled",t.counter>0)}}function G(i,r){if(1&i&&(e.TgZ(0,"mat-error"),e._uU(1),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Oqu(t.getErrorMessage())}}const W=[{path:"login",component:E},{path:"register",component:(()=>{class i{constructor(t,n,o,s){this.authService=t,this.snackBar=n,this.router=o,this.encrptService=s,this.hidePassword=!0,this.hideConfirmPassword=!0,this.firstName=new a.NI("",[a.kI.required]),this.lastName=new a.NI("",[a.kI.required]),this.contact=new a.NI("",[a.kI.required]),this.location=new a.NI("",[a.kI.required]),this.designation=new a.NI("",[a.kI.required]),this.companyName=new a.NI("",[a.kI.required]),this.companyEmail=new a.NI("",[a.kI.required,a.kI.email]),this.personalEmail=new a.NI("",[a.kI.required,a.kI.email]),this.confirmPassword=new a.NI("",[a.kI.required,a.kI.minLength(8)]),this.password=new a.NI("",[a.kI.required,a.kI.minLength(8)]),this.loading=!1,this.loadingMessage="Sign Up"}getCompanyEmailErrorMessage(){return this.companyEmail.hasError("required")?"Email is Required":this.companyEmail.hasError("email")?"Not a valid email":""}getPersonalEmailErrorMessage(){return this.personalEmail.hasError("required")?"Email is Required":this.personalEmail.hasError("email")?"Not a valid email":""}getPasswordErrorMessage(){return this.password.hasError("required")?"Password is required":this.password.hasError("minlength")?"Password should be at least 8 characters long":""}getConfirmPasswordErrorMessage(){return this.confirmPassword.hasError("required")?"Password is required":this.confirmPassword.hasError("minlength")?"Password should be at least 8 characters long":this.password.value!==this.confirmPassword.value?"Passwords do not match":""}submit(){if(this.companyName.valid&&this.companyEmail.valid&&this.contact.valid&&this.location.valid&&this.firstName.valid&&this.lastName.valid&&this.personalEmail.valid&&this.designation.valid&&this.password.valid&&this.confirmPassword.valid){this.loading=!0,this.loadingMessage="Signing Up...";const t={companyName:this.companyName.value,companyEmail:this.companyEmail.value,contact:this.contact.value,location:this.location.value,firstName:this.firstName.value,lastName:this.lastName.value,personalEmail:this.personalEmail.value,designation:this.designation.value,password:this.password.value};this.authService.register(t).subscribe(()=>{this.redirectToRegVerify(t.personalEmail),this.snackBar.open("Registration successful!","Dismiss",{duration:2e3})},n=>{this.snackBar.open(n.error.message||"Registration failed. Please try again.","Dismiss",{duration:2e3}),this.errorMessage=n.error.message||"",this.loading=!1,this.loadingMessage="Sign Up"})}}redirectToRegVerify(t){if(t){const s={queryParams:{personalEmail:this.encrptService.encryptData(t)}};this.router.navigate(["/login/regVerify"],s)}else console.error("Personal email is null")}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(f.e),e.Y36(g.ux),e.Y36(d.F0),e.Y36(y.z))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-register"]],decls:89,vars:26,consts:[[1,"row"],[1,"col-lg-4","col-md-4","text-center"],["mat-card-image","","src","./assets/img/lg.png","alt","Login"],[1,"col-lg-8","col-md-8","col-sm-12","col-xs-12"],[1,"register-box"],[1,"register-container"],[1,"row","mb-2"],[1,"text-center"],[1,"row","text-center"],[1,"link"],[1,"col-lg-4","col-md-6"],[1,"from-field"],["matInput","","placeholder","Company Name","required","",3,"formControl"],[1,"col-lg-8","col-md-6"],["matInput","","placeholder","Company Email","required","",3,"formControl"],[4,"ngIf"],[1,"col-lg-6","col-md-6"],["matInput","","placeholder","Contact No","required","",3,"formControl"],["matInput","","placeholder","Location","required","",3,"formControl"],["matInput","","placeholder","First Name","required","",3,"formControl"],["matInput","","placeholder","Last Name","required","",3,"formControl"],["matInput","","placeholder","Personal Email","required","",3,"formControl"],["matInput","","placeholder","Designation","required","",3,"formControl"],["matInput","",3,"type","formControl"],["mat-icon-button","","matSuffix","",3,"click"],[1,"col-lg-6","col-md-6","mb-2"],["mat-raised-button","","color","primary",1,"from-field",3,"disabled","click"],["mat-raised-button","",1,"from-field",3,"routerLink"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.TgZ(3,"h4"),e._uU(4,"Welcome to the Temperature Dashboard"),e.qZA(),e.TgZ(5,"p"),e._uU(6,"Thank you for choosing our temperature dashboard. We are excited to have you on board!"),e.qZA(),e.TgZ(7,"p"),e._uU(8,"Before you can start using the dashboard, we kindly ask you to complete the registration process."),e.qZA()(),e.TgZ(9,"div",3)(10,"mat-card",4)(11,"mat-card-content")(12,"div",5)(13,"div",6)(14,"h5",7),e._uU(15,"Create an Account"),e.qZA()(),e.TgZ(16,"div",8)(17,"h6",9),e._uU(18,"- Company Detail"),e.qZA(),e.TgZ(19,"div",10)(20,"mat-form-field",11)(21,"mat-label"),e._uU(22,"Enter Company Name"),e.qZA(),e._UZ(23,"input",12),e.qZA()(),e.TgZ(24,"div",13)(25,"mat-form-field",11)(26,"mat-label"),e._uU(27,"Enter Company Email"),e.qZA(),e._UZ(28,"input",14),e.YNc(29,O,2,1,"mat-error",15),e.qZA()(),e.TgZ(30,"div",16)(31,"mat-form-field",11)(32,"mat-label"),e._uU(33,"Enter Contact"),e.qZA(),e._UZ(34,"input",17),e.qZA()(),e.TgZ(35,"div",16)(36,"mat-form-field",11)(37,"mat-label"),e._uU(38,"Enter Location"),e.qZA(),e._UZ(39,"input",18),e.qZA()(),e.TgZ(40,"h6",9),e._uU(41,"- Personal Detail"),e.qZA(),e.TgZ(42,"div",16)(43,"mat-form-field",11)(44,"mat-label"),e._uU(45,"Enter First Name"),e.qZA(),e._UZ(46,"input",19),e.qZA()(),e.TgZ(47,"div",16)(48,"mat-form-field",11)(49,"mat-label"),e._uU(50,"Enter Last Name"),e.qZA(),e._UZ(51,"input",20),e.qZA()(),e.TgZ(52,"div",13)(53,"mat-form-field",11)(54,"mat-label"),e._uU(55,"Personal Email"),e.qZA(),e._UZ(56,"input",21),e.YNc(57,Z,2,1,"mat-error",15),e.qZA()(),e.TgZ(58,"div",10)(59,"mat-form-field",11)(60,"mat-label"),e._uU(61,"Designation"),e.qZA(),e._UZ(62,"input",22),e.qZA()(),e.TgZ(63,"h6",9),e._uU(64,"- Set password"),e.qZA(),e.TgZ(65,"div",16)(66,"mat-form-field",11)(67,"mat-label"),e._uU(68,"Enter your password"),e.qZA(),e._UZ(69,"input",23),e.YNc(70,R,2,1,"mat-error",15),e.TgZ(71,"button",24),e.NdJ("click",function(){return n.hidePassword=!n.hidePassword}),e.TgZ(72,"mat-icon"),e._uU(73),e.qZA()()()(),e.TgZ(74,"div",16)(75,"mat-form-field",11)(76,"mat-label"),e._uU(77,"Confirm password"),e.qZA(),e._UZ(78,"input",23),e.YNc(79,D,2,1,"mat-error",15),e.TgZ(80,"button",24),e.NdJ("click",function(){return n.hideConfirmPassword=!n.hideConfirmPassword}),e.TgZ(81,"mat-icon"),e._uU(82),e.qZA()()()(),e.TgZ(83,"div",25)(84,"button",26),e.NdJ("click",function(){return n.submit()}),e._uU(85),e.qZA()(),e.TgZ(86,"div",16)(87,"button",27),e._uU(88,"Sign In"),e.qZA()()()()()()()()),2&t&&(e.xp6(23),e.Q6J("formControl",n.companyName),e.xp6(5),e.Q6J("formControl",n.companyEmail),e.xp6(1),e.Q6J("ngIf",n.companyEmail.invalid),e.xp6(5),e.Q6J("formControl",n.contact),e.xp6(5),e.Q6J("formControl",n.location),e.xp6(7),e.Q6J("formControl",n.firstName),e.xp6(5),e.Q6J("formControl",n.lastName),e.xp6(5),e.Q6J("formControl",n.personalEmail),e.xp6(1),e.Q6J("ngIf",n.personalEmail.invalid),e.xp6(5),e.Q6J("formControl",n.designation),e.xp6(7),e.Q6J("type",n.hidePassword?"password":"text")("formControl",n.password),e.xp6(1),e.Q6J("ngIf",n.password.invalid),e.xp6(1),e.uIk("aria-label","Hide password")("aria-pressed",n.hidePassword),e.xp6(2),e.Oqu(n.hidePassword?"visibility_off":"visibility"),e.xp6(5),e.Q6J("type",n.hideConfirmPassword?"password":"text")("formControl",n.confirmPassword),e.xp6(1),e.Q6J("ngIf",n.confirmPassword.invalid),e.xp6(1),e.uIk("aria-label","Hide password")("aria-pressed",n.hideConfirmPassword),e.xp6(2),e.Oqu(n.hideConfirmPassword?"visibility_off":"visibility"),e.xp6(2),e.Q6J("disabled",n.loading),e.xp6(1),e.Oqu(n.loadingMessage),e.xp6(2),e.Q6J("routerLink",e.DdM(25,A)))},dependencies:[h.O5,d.rH,l.a8,l.dn,l.G2,c.KE,c.hX,c.TO,c.R9,v.Nt,a.Fj,a.JJ,a.Q7,a.oH,x.Hw,u.lW,u.RK],styles:["img[_ngcontent-%COMP%]{width:auto;height:50vh;align-items:center;margin-top:15%}.register-box[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:3%}.register-container[_ngcontent-%COMP%]{flex-direction:column;padding-top:10px}h4[_ngcontent-%COMP%], h5.text-center[_ngcontent-%COMP%]{color:#3f51b5;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:500;line-height:1.2;letter-spacing:.02em;margin-top:0}p[_ngcontent-%COMP%]{color:#3f51b5}a[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:.8rem}.link[_ngcontent-%COMP%]{color:#3f51b5;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:500;line-height:1.2;letter-spacing:.02em;margin-top:0;text-decoration:none;text-align:left}.from-field[_ngcontent-%COMP%]{width:100%}@media (max-width: 767px){img[_ngcontent-%COMP%], p[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{display:none}}"]}),i})()},{path:"forgot",component:(()=>{class i{constructor(t,n,o,s){this.authService=t,this.snackBar=n,this.router=o,this.encrptService=s,this.email=new a.NI("",[a.kI.required,a.kI.email]),this.errorMessage="",this.loading=!1,this.loadingMessage="Submit"}getErrorMessage(){return this.email.hasError("required")?"Email is required":this.email.hasError("email")?"Not a valid email":""}submit(){if(this.email.valid){this.loading=!0,this.loadingMessage="Submitting...";const t={personalEmail:this.email.value};this.authService.forgot(t).subscribe(()=>{this.redirectToMailSend(t.personalEmail),this.snackBar.open("Reset Password Link send successful!","Dismiss",{duration:2e3})},n=>{this.snackBar.open(n.error.message||"Failed to send Link. Please try again.","Dismiss",{duration:2e3}),this.errorMessage=n.error.message||"",this.loading=!1,this.loadingMessage="Submit"})}}redirectToMailSend(t){if(t){const s={queryParams:{personalEmail:this.encrptService.encryptData(t)}};this.router.navigate(["/login/mail"],s)}else console.error("Personal email is null")}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(f.e),e.Y36(g.ux),e.Y36(d.F0),e.Y36(y.z))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-forgot"]],decls:23,vars:4,consts:[[1,"row"],[1,"col-lg-8","col-md-6"],["mat-card-image","","src","./assets/img/fg.jpg","alt","Forgot"],[1,"col-lg-4","col-md-6","col-sm-12","col-xs-12"],[1,"login-box"],[1,"form-container"],[1,"text-center"],["matInput","","placeholder","pat@example.com","required","",3,"formControl"],[4,"ngIf"],["mat-raised-button","","color","primary",3,"disabled","click"],[1,"col"],[1,"d-flex","justify-content-center"],["routerLink","/login/login",1,"link"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.qZA(),e.TgZ(3,"div",3)(4,"mat-card",4)(5,"mat-card-content")(6,"div",5),e._UZ(7,"div",0),e.TgZ(8,"h5",6),e._uU(9,"Forgot Password"),e.qZA(),e.TgZ(10,"mat-form-field")(11,"mat-label"),e._uU(12,"Username and Email"),e.qZA(),e._UZ(13,"input",7),e.YNc(14,q,2,1,"mat-error",8),e.qZA(),e.TgZ(15,"button",9),e.NdJ("click",function(){return n.submit()}),e._uU(16),e.qZA(),e.TgZ(17,"div",0)(18,"div",10)(19,"div",11)(20,"a",12)(21,"h6"),e._uU(22,"Remember password? Sign In"),e.qZA()()()()()()()()()()),2&t&&(e.xp6(13),e.Q6J("formControl",n.email),e.xp6(1),e.Q6J("ngIf",n.email.invalid),e.xp6(1),e.Q6J("disabled",n.loading),e.xp6(1),e.Oqu(n.loadingMessage))},dependencies:[h.O5,d.rH,l.a8,l.dn,l.G2,c.KE,c.hX,c.TO,v.Nt,a.Fj,a.JJ,a.Q7,a.oH,u.lW],styles:["img[_ngcontent-%COMP%]{width:auto;height:80vh;margin-top:15vh}.login-box[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:30vh}.form-container[_ngcontent-%COMP%]{width:100%;max-width:400px;display:flex;flex-direction:column;gap:16px}h5.text-center[_ngcontent-%COMP%]{color:#3f51b5;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:500;line-height:1.2;letter-spacing:.02em;margin-top:0}a[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:.8rem}.link[_ngcontent-%COMP%]{color:#3f51b5;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:500;line-height:1.2;letter-spacing:.02em;margin-top:0;text-decoration:none}@media (max-width: 767px){img[_ngcontent-%COMP%]{display:none}}"]}),i})()},{path:"reset",component:(()=>{class i{constructor(t,n,o,s){this.authService=t,this.router=n,this.route=o,this.snackBar=s,this.hidePassword=!0,this.hideConfirmPassword=!0,this.password=new a.NI("",[a.kI.required,a.kI.minLength(8)]),this.confirmpassword=new a.NI("",[a.kI.required,a.kI.minLength(8)])}ngOnInit(){this.token=this.route.snapshot.queryParams.token}getPasswordErrorMessage(){return this.password.hasError("required")?"Password is required":this.password.hasError("minlength")?"Password should be at least 8 characters long":""}getConfirmPasswordErrorMessage(){return this.confirmpassword.hasError("required")?"Confim Password is required":this.confirmpassword.hasError("minlength")?"Confim Password should be at least 8 characters long":""}submit(){this.token?this.authService.resetPassword({token:this.token,password:this.password.value}).subscribe(()=>{this.snackBar.open("Password Update Successfully!","Dismiss",{duration:2e3}),this.redirectToLoginPage()},n=>{this.snackBar.open(n.error.message||"Failed to update password!","Dismiss",{duration:2e3}),this.redirectToLoginPage()}):(this.snackBar.open("Token not found","Dismiss",{duration:2e3}),this.redirectToLoginPage())}redirectToLoginPage(){setTimeout(()=>{this.router.navigate(["/login/login"])},2e3)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(f.e),e.Y36(d.F0),e.Y36(d.gz),e.Y36(g.ux))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-reset-password"]],decls:34,vars:12,consts:[[1,"row"],[1,"col-lg-8","col-md-6"],["mat-card-image","","src","./assets/img/fg.jpg","alt","Forgot"],[1,"col-lg-4","col-md-6","col-sm-12","col-xs-12"],[1,"login-box"],[1,"form-container"],[1,"text-center"],["matInput","",3,"type","formControl"],[4,"ngIf"],["mat-icon-button","","matSuffix","",3,"click"],["mat-raised-button","","color","primary",3,"click"],[1,"col"],[1,"d-flex","justify-content-center"],["routerLink","/login/login",1,"link"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.qZA(),e.TgZ(3,"div",3)(4,"mat-card",4)(5,"mat-card-content")(6,"div",5),e._UZ(7,"div",0),e.TgZ(8,"h5",6),e._uU(9,"Reset Your Password"),e.qZA(),e.TgZ(10,"mat-form-field")(11,"mat-label"),e._uU(12,"Enter your password"),e.qZA(),e._UZ(13,"input",7),e.YNc(14,L,2,1,"mat-error",8),e.TgZ(15,"button",9),e.NdJ("click",function(){return n.hidePassword=!n.hidePassword}),e.TgZ(16,"mat-icon"),e._uU(17),e.qZA()()(),e.TgZ(18,"mat-form-field")(19,"mat-label"),e._uU(20,"Confirm password"),e.qZA(),e._UZ(21,"input",7),e.YNc(22,F,2,1,"mat-error",8),e.TgZ(23,"button",9),e.NdJ("click",function(){return n.hideConfirmPassword=!n.hideConfirmPassword}),e.TgZ(24,"mat-icon"),e._uU(25),e.qZA()()(),e.TgZ(26,"button",10),e.NdJ("click",function(){return n.submit()}),e._uU(27,"Update Password"),e.qZA(),e.TgZ(28,"div",0)(29,"div",11)(30,"div",12)(31,"a",13)(32,"h6"),e._uU(33,"Remember password? Sign In"),e.qZA()()()()()()()()()()),2&t&&(e.xp6(13),e.Q6J("type",n.hidePassword?"password":"text")("formControl",n.password),e.xp6(1),e.Q6J("ngIf",n.password.invalid),e.xp6(1),e.uIk("aria-label","Hide password")("aria-pressed",n.hidePassword),e.xp6(2),e.Oqu(n.hidePassword?"visibility_off":"visibility"),e.xp6(4),e.Q6J("type",n.hideConfirmPassword?"password":"text")("formControl",n.confirmpassword),e.xp6(1),e.Q6J("ngIf",n.confirmpassword.invalid),e.xp6(1),e.uIk("aria-label","Hide password")("aria-pressed",n.hideConfirmPassword),e.xp6(2),e.Oqu(n.hideConfirmPassword?"visibility_off":"visibility"))},dependencies:[h.O5,d.rH,l.a8,l.dn,l.G2,c.KE,c.hX,c.TO,c.R9,v.Nt,a.Fj,a.JJ,a.oH,x.Hw,u.lW,u.RK],styles:["img[_ngcontent-%COMP%]{width:auto;height:80vh;margin-top:15vh}.login-box[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:25vh}.form-container[_ngcontent-%COMP%]{width:100%;max-width:400px;display:flex;flex-direction:column;gap:16px}h5.text-center[_ngcontent-%COMP%]{color:#3f51b5;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:500;line-height:1.2;letter-spacing:.02em;margin-top:0}a[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:.8rem}.link[_ngcontent-%COMP%]{color:#3f51b5;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:500;line-height:1.2;letter-spacing:.02em;margin-top:0;text-decoration:none}@media (max-width: 767px){img[_ngcontent-%COMP%]{display:none}}"]}),i})()},{path:"mail",component:(()=>{class i{constructor(t,n,o,s,_){this.authService=t,this.route=n,this.encrptService=o,this.router=s,this.snackBar=_,this.counter=10,this.showResendLink=!1,this.linkClicked=!1}ngOnInit(){this.route.queryParams.subscribe(t=>{this.personalEmail=this.encrptService.decryptData(t.personalEmail)}),this.startCounter()}resendResetPasswordEmail(){const t={personalEmail:this.personalEmail};this.linkClicked||(this.linkClicked=!0,this.authService.resendForgot(t).subscribe(n=>{this.snackBar.open("Resend Successful!","Dismiss",{duration:2e3})},n=>{this.snackBar.open("Token not found","Dismiss",{duration:2e3})}),this.resetCounter())}startCounter(){this.interval=setInterval(()=>{this.counter--,this.counter<=0&&(clearInterval(this.interval),this.showResendLink=!0)},1e3)}resetCounter(){clearInterval(this.interval),this.showResendLink=!1,this.counter=10,this.linkClicked=!1,this.startCounter()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(f.e),e.Y36(d.gz),e.Y36(y.z),e.Y36(d.F0),e.Y36(g.ux))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-mail-send"]],decls:15,vars:3,consts:[[1,"mail"],[1,"container"],[1,"row"],[1,"mail-card"],["src","../../../../../assets/img/mail.gif","alt","Animation GIF",1,"mail-img"],[4,"ngIf"],["mat-raised-button","",3,"disabled","click",4,"ngIf"],["mat-raised-button","",3,"disabled","click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-card",3)(4,"mat-card-content"),e._UZ(5,"img",4),e.TgZ(6,"h2"),e._uU(7,"Password Reset Email Sent"),e.qZA(),e.TgZ(8,"p"),e._uU(9,"A password reset email has been sent to "),e.TgZ(10,"strong"),e._uU(11),e.qZA(),e._uU(12,". Please check your email to reset your password."),e.qZA(),e.YNc(13,H,2,0,"p",5),e.YNc(14,B,2,1,"button",6),e.qZA()()()()()),2&t&&(e.xp6(11),e.Oqu(n.personalEmail),e.xp6(2),e.Q6J("ngIf",n.showResendLink),e.xp6(1),e.Q6J("ngIf",n.showResendLink))},dependencies:[h.O5,l.a8,l.dn,u.lW],styles:[".mail[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;background-size:cover;background-position:center}.container[_ngcontent-%COMP%]{width:100%;max-width:600px}.row[_ngcontent-%COMP%]{display:flex;justify-content:center}.mail-card[_ngcontent-%COMP%]{width:50%;height:auto;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#ffffffe6;border-radius:8px;padding:24px;text-align:center;box-shadow:0 4px 6px #0000001a;animation:_ngcontent-%COMP%_fadeIn .5s ease-in-out}@media (max-width: 768px){.mail-card[_ngcontent-%COMP%]{width:90%}}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translate(-50%,-55%)}to{opacity:1;transform:translate(-50%,-50%)}}h2[_ngcontent-%COMP%]{font-size:24px;margin-bottom:16px;color:#3f51b5}p[_ngcontent-%COMP%]{font-size:18px}.mail-img[_ngcontent-%COMP%]{height:100px;width:auto}"]}),i})()},{path:"regVerify",component:(()=>{class i{constructor(t,n,o,s,_){this.authService=t,this.route=n,this.encrptService=o,this.router=s,this.snackBar=_,this.counter=10,this.showResendLink=!1,this.linkClicked=!1}ngOnInit(){this.route.queryParams.subscribe(t=>{this.personalEmail=this.encrptService.decryptData(t.personalEmail)}),this.startCounter()}resendVerificationEmail(){this.linkClicked||(this.authService.resendVerificationEmail({personalEmail:this.personalEmail}).subscribe(n=>{this.snackBar.open("Resend Successfully!","Dismiss",{duration:2e3})},n=>{this.snackBar.open("Token not found","Dismiss",{duration:2e3})}),this.linkClicked=!0,this.router.navigate(["/login"]))}startCounter(){const t=setInterval(()=>{this.counter--,this.counter<=0&&(clearInterval(t),this.showResendLink=!0)},1e3)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(f.e),e.Y36(d.gz),e.Y36(y.z),e.Y36(d.F0),e.Y36(g.ux))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-reg-verify"]],decls:15,vars:3,consts:[[1,"mail"],[1,"container"],[1,"row"],[1,"mail-card"],["src","../../../../../assets/img/mail.gif","alt","Animation GIF",1,"mail-img"],[4,"ngIf"],["mat-raised-button","",3,"disabled","click",4,"ngIf"],["mat-raised-button","",3,"disabled","click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-card",3)(4,"mat-card-content"),e._UZ(5,"img",4),e.TgZ(6,"h2"),e._uU(7,"Thanks for Choosing us!"),e.qZA(),e.TgZ(8,"p"),e._uU(9,"An email has been sent to "),e.TgZ(10,"strong"),e._uU(11),e.qZA(),e._uU(12,". Please check your email and click the verification link to complete your account registration."),e.qZA(),e.YNc(13,J,2,0,"p",5),e.YNc(14,j,2,1,"button",6),e.qZA()()()()()),2&t&&(e.xp6(11),e.Oqu(n.personalEmail),e.xp6(2),e.Q6J("ngIf",n.showResendLink),e.xp6(1),e.Q6J("ngIf",n.showResendLink))},dependencies:[h.O5,l.a8,l.dn,u.lW],styles:[".mail[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;background-size:cover;background-position:center}.container[_ngcontent-%COMP%]{width:100%;max-width:600px}.row[_ngcontent-%COMP%]{display:flex;justify-content:center}.mail-card[_ngcontent-%COMP%]{width:50%;height:auto;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#ffffffe6;border-radius:8px;padding:24px;text-align:center;box-shadow:0 4px 6px #0000001a;animation:_ngcontent-%COMP%_fadeIn .5s ease-in-out}@media (max-width: 768px){.mail-card[_ngcontent-%COMP%]{width:90%}}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translate(-50%,-55%)}to{opacity:1;transform:translate(-50%,-50%)}}h2[_ngcontent-%COMP%]{font-size:24px;margin-bottom:16px;color:#3f51b5}p[_ngcontent-%COMP%]{font-size:18px}.mail-img[_ngcontent-%COMP%]{height:100px;width:auto}"]}),i})()},{path:"verify-user",component:(()=>{class i{constructor(t,n,o,s){this.authService=t,this.router=n,this.route=o,this.snackBar=s}ngOnInit(){this.token=this.route.snapshot.queryParams.token,this.verifyUser()}verifyUser(){this.token?this.authService.VerifyUser({token:this.token}).subscribe(()=>{this.snackBar.open("Verify User Successfully!","Dismiss",{duration:2e3}),this.redirectToLoginPage()},n=>{this.snackBar.open(n.error.message||"Failed to verify user!","Dismiss",{duration:2e3}),this.redirectToLoginPage()}):(this.snackBar.open("Token not found","Dismiss",{duration:2e3}),this.redirectToLoginPage())}redirectToLoginPage(){setTimeout(()=>{this.router.navigate(["/login/login"])},2e3)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(f.e),e.Y36(d.F0),e.Y36(d.gz),e.Y36(g.ux))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-verify-user"]],decls:10,vars:0,consts:[[1,"mail"],[1,"container"],[1,"row"],[1,"mail-card"],["src","../../../../../assets/img/verified.gif","alt","Animation GIF",1,"mail-img"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"mat-card",3)(4,"mat-card-content"),e._UZ(5,"img",4),e.TgZ(6,"h2"),e._uU(7,"Thanks For Choosing Us!"),e.qZA(),e.TgZ(8,"p"),e._uU(9,"We appreciate your trust and look forward to serving you. To ensure the security of your account, we kindly request a few minutes of your time for the verification process. If you have any questions or need assistance, please don't hesitate to contact our support team. Enjoy your experience!"),e.qZA()()()()()())},dependencies:[l.a8,l.dn],styles:[".mail[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh;background-size:cover;background-position:center}.container[_ngcontent-%COMP%]{width:100%;max-width:600px}.row[_ngcontent-%COMP%]{display:flex;justify-content:center}.mail-card[_ngcontent-%COMP%]{width:50%;height:auto;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);background-color:#ffffffe6;border-radius:8px;padding:24px;text-align:center;box-shadow:0 4px 6px #0000001a;animation:_ngcontent-%COMP%_fadeIn .5s ease-in-out}@media (max-width: 768px){.mail-card[_ngcontent-%COMP%]{width:90%}}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translate(-50%,-55%)}to{opacity:1;transform:translate(-50%,-50%)}}h2[_ngcontent-%COMP%]{font-size:24px;margin-bottom:16px;color:#3f51b5}p[_ngcontent-%COMP%]{font-size:18px}.mail-img[_ngcontent-%COMP%]{height:100px;width:auto}"]}),i})()},{path:"resend-verify",component:(()=>{class i{constructor(){this.email=new a.NI("",[a.kI.required,a.kI.email])}getErrorMessage(){return this.email.hasError("required")?"Email is required":this.email.hasError("email")?"Not a valid email":""}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-send-verify"]],decls:23,vars:2,consts:[[1,"row"],[1,"col-lg-8","col-md-6"],["mat-card-image","","src","./assets/img/fg.jpg","alt","Forgot"],[1,"col-lg-4","col-md-6","col-sm-12","col-xs-12"],[1,"login-box"],[1,"form-container"],[1,"text-center"],["matInput","","placeholder","pat@example.com","required","",3,"formControl"],[4,"ngIf"],["mat-raised-button","","color","primary"],[1,"col"],[1,"d-flex","justify-content-center"],["routerLink","/login/login",1,"link"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"img",2),e.qZA(),e.TgZ(3,"div",3)(4,"mat-card",4)(5,"mat-card-content")(6,"div",5),e._UZ(7,"div",0),e.TgZ(8,"h5",6),e._uU(9,"Resend Verification!"),e.qZA(),e.TgZ(10,"mat-form-field")(11,"mat-label"),e._uU(12,"Username and Email"),e.qZA(),e._UZ(13,"input",7),e.YNc(14,G,2,1,"mat-error",8),e.qZA(),e.TgZ(15,"button",9),e._uU(16,"Submit"),e.qZA(),e.TgZ(17,"div",0)(18,"div",10)(19,"div",11)(20,"a",12)(21,"h6"),e._uU(22,"Verified? Sign In"),e.qZA()()()()()()()()()()),2&t&&(e.xp6(13),e.Q6J("formControl",n.email),e.xp6(1),e.Q6J("ngIf",n.email.invalid))},dependencies:[h.O5,d.rH,l.a8,l.dn,l.G2,c.KE,c.hX,c.TO,v.Nt,a.Fj,a.JJ,a.Q7,a.oH,u.lW],styles:["img[_ngcontent-%COMP%]{width:auto;height:80vh;margin-top:15vh}.login-box[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;margin-top:30vh}.form-container[_ngcontent-%COMP%]{width:100%;max-width:400px;display:flex;flex-direction:column;gap:16px}h5.text-center[_ngcontent-%COMP%]{color:#3f51b5;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:500;line-height:1.2;letter-spacing:.02em;margin-top:0}a[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{font-size:.8rem}.link[_ngcontent-%COMP%]{color:#3f51b5;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:500;line-height:1.2;letter-spacing:.02em;margin-top:0;text-decoration:none}@media (max-width: 767px){img[_ngcontent-%COMP%]{display:none}}"]}),i})()},{path:"",redirectTo:"login",pathMatch:"full"}];let X=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.Bz.forChild(W),d.Bz]}),i})();var K=p(4385),$=p(4080),ee=p(445);let te=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[ee.vT]}),i})();var S=p(3238),ie=p(7579);p(7340);let C=(()=>{class i{constructor(){this.changes=new ie.x,this.optionalLabel="Optional",this.completedLabel="Completed",this.editableLabel="Editable"}}return i.\u0275fac=function(t){return new(t||i)},i.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})();const ue={provide:C,deps:[[new e.FiY,new e.tp0,C]],useFactory:function me(i){return i||new C}};let ge=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[ue,S.rD],imports:[S.BQ,h.ez,$.eL,te,x.Ps,S.si,S.BQ]}),i})();var _e=p(529);let ve=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({providers:[f.e],imports:[h.ez,X,l.QW,c.lN,v.c,a.u5,a.UX,x.Ps,u.ot,K.LD,ge,_e.JF,g.ZX]}),i})()}}]);