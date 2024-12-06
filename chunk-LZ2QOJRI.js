import{Eb as u,Hb as p,Ic as S,Ja as c,Jc as d,Na as f,Nb as h,Pa as m,Pb as l,_b as v,g as s,q as o,t as n,w as e,za as a}from"./chunk-LUI5EWE7.js";var g=(()=>{class t{constructor(i){this.http=i}confirmMail(i){return this.http.get(`/registration_confirm/${i}`)}resendConfirmationLetter(i){let r={data:{login:i}};return this.http.post("/registration_confirm/",r)}static{this.\u0275fac=function(r){return new(r||t)(e(a))}}static{this.\u0275prov=n({token:t,factory:t.\u0275fac})}}return t})();var $=(()=>{class t{constructor(i,r,j,I,k,b,M,P,U,C){this.store=i,this.api=r,this.activatedRoute=j,this.notificationService=I,this.personalInfoService=k,this.infoService=b,this.router=M,this.blockUiService=P,this.mainPageHeaderService=U,this.authService=C}get user(){let i=this.store.snapshot().auth;return i?i.user:void 0}get userMail(){return this.user?this.user.email:void 0}get userLogin(){return this.user?this.user.login:void 0}get emailconfirmationToken(){return this.activatedRoute.snapshot.params.token}confirmMail(i){return this.api.confirmMail(i)}resendConfirmationLetter(){return this.userLogin?this.api.resendConfirmationLetter(this.userLogin):s(null)}resendMailSuccess(){this.notificationService.openSuccess(u.EmailConfirmationMailResent)}openPersonalInfoModal(i){return this.personalInfoService.openPersonalInfoModal(i).pipe(o(()=>this.notificationService.openSuccess("\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u044C\u043D\u044B\u0435 \u0434\u0430\u043D\u043D\u044B\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B")))}changeEmail(i){return this.personalInfoService.changeEmail(i).pipe(o(()=>this.notificationService.openInfo("\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u0430\u0434\u0440\u0435\u0441 \u044D\u043B. \u043F\u043E\u0447\u0442\u044B, \u043F\u0435\u0440\u0435\u0439\u0434\u044F \u043F\u043E \u0441\u0441\u044B\u043B\u043A\u0435 \u0432 \u043F\u0438\u0441\u044C\u043C\u0435.")))}deleteUserProfile(){return this.personalInfoService.deleteUserProfile().pipe(o(()=>this.notificationService.openSuccess("\u041F\u0440\u043E\u0444\u0438\u043B\u044C \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0443\u0434\u0430\u043B\u0451\u043D")))}navigateToApplication(){this.router.navigate(["/"])}openEmailConfirmedModal(){return this.infoService.openInfoModal({headerText:"\u041F\u043E\u0447\u0442\u0430 \u043F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0430",infoMessage:"\u0412\u044B \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u043B\u0438\u0441\u044C",buttonOkText:"\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C"})}bockUi(){this.blockUiService.block()}unblockUi(){this.blockUiService.unBlock()}setPageTitle(){this.mainPageHeaderService.setPageTitle("\u041F\u0440\u043E\u0444\u0438\u043B\u044C")}logout(){this.authService.logoutFromUI()}static{this.\u0275fac=function(r){return new(r||t)(e(c),e(g),e(f),e(l),e(h),e(S),e(m),e(v),e(d),e(p))}}static{this.\u0275prov=n({token:t,factory:t.\u0275fac})}}return t})();export{g as a,$ as b};