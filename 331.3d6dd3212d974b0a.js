"use strict";(self.webpackChunklc_fe=self.webpackChunklc_fe||[]).push([[331],{7331:(Ft,N,a)=>{a.r(N),a.d(N,{AdminModule:()=>St});var p=a(6814),Q=a(9316),v=a(7582),t=a(5879),V=a(9862);let C=(()=>{class n{constructor(e){this.http=e}getAllEquipment(){return this.http.get("equipment")}getUnavailablePeriodsById(e){return this.http.get(`/equipment/unavailability_periods/${e}`)}archiveEquipment(e){return this.http.post(`/equipment/achive/${e}/`,{equipmentId:e})}blockEquipment(e,i){return this.http.post(`/equipment/${e}/blocking`,{end_date:i.endDate,start_date:i.startDate})}getEquipmentStatuses(){return this.http.get("/equipment/status_names")}getEquipmentCategories(){return this.http.get("/equipment/categories")}getEquipmentUnavailabilityPeriods(e){return this.http.get(`/equipment/unavailability_periods/${e}`)}getAllUsers(){return this.http.get("v1/users")}static#t=this.\u0275fac=function(i){return new(i||n)(t.LFG(V.eN))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac})}return n})();var h=a(7700),f=function(n){return n.ArchiveTitle="\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f",n.BlockTitle="\u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f",n.ArchiveReason="\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",n.ArchiveApplyButtonText="\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u0442\u044c",n.BlockReason="\u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430",n.BlockApplyButtonText="\u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c",n.BlockCancelButtonText="\u0420\u0430\u0437\u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c",n}(f||{}),M=a(554),D=a(2296),O=function(n){return n.Name="\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",n.NameSubstring="\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435",n.InventoryNumber="\u0418\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440",n}(O||{});let W=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["lc-fake-input"]],inputs:{label:"label",text:"text"},decls:5,vars:2,consts:[[1,"label"],[1,"text"],[1,"separator"]],template:function(i,u){1&i&&(t.TgZ(0,"span",0),t._uU(1),t.qZA(),t.TgZ(2,"span",1),t._uU(3),t.qZA(),t._UZ(4,"div",2)),2&i&&(t.xp6(1),t.Oqu(u.label),t.xp6(2),t.Oqu(u.text))},styles:["[_nghost-%COMP%]{display:flex;flex-direction:column}[_nghost-%COMP%]   span[_ngcontent-%COMP%]{display:inline-block;margin-left:16px}[_nghost-%COMP%]   .label[_ngcontent-%COMP%]{font-size:12px;font-weight:400;line-height:16px;color:#5f5f5f}[_nghost-%COMP%]   .text[_ngcontent-%COMP%]{font-size:16px;color:#000}[_nghost-%COMP%]   .separator[_ngcontent-%COMP%]{border-bottom:1px solid #656565;margin-top:10px}"],changeDetection:0})}return n})();function X(n,o){if(1&n&&t._UZ(0,"lc-fake-input",1),2&n){const e=t.oxw();t.Q6J("label",e.LabelEnum.Name)("text",e.equipment.name)}}function H(n,o){if(1&n&&t._UZ(0,"lc-fake-input",1),2&n){const e=t.oxw();t.Q6J("label",e.LabelEnum.NameSubstring)("text",e.equipment.title)}}function K(n,o){if(1&n&&t._UZ(0,"lc-fake-input",1),2&n){const e=t.oxw();t.Q6J("label",e.LabelEnum.InventoryNumber)("text",e.equipment.inventoryNumber)}}let U=(()=>{class n{constructor(){this.LabelEnum=O}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["lc-equipment-info"]],inputs:{equipment:"equipment"},decls:3,vars:3,consts:[[3,"label","text",4,"ngIf"],[3,"label","text"]],template:function(i,u){1&i&&(t.YNc(0,X,1,2,"lc-fake-input",0),t.YNc(1,H,1,2,"lc-fake-input",0),t.YNc(2,K,1,2,"lc-fake-input",0)),2&i&&(t.Q6J("ngIf",u.equipment&&u.equipment.name),t.xp6(1),t.Q6J("ngIf",u.equipment&&u.equipment.title),t.xp6(1),t.Q6J("ngIf",u.equipment&&u.equipment.inventoryNumber))},dependencies:[p.O5,W],styles:["lc-fake-input[_ngcontent-%COMP%]{margin-bottom:24px}lc-fake-input[_ngcontent-%COMP%]:last-child{margin-bottom:0}"],changeDetection:0})}return n})(),tt=(()=>{class n{constructor(e){this.equipment=e,this.ModalEnum=f,this.inventoryNumber=String(this.equipment.inventoryNumber)}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(h.WI))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["lc-archive-equipment-modal"]],decls:12,vars:4,consts:[["headerTitle","\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f"],["body",""],[1,"content"],[3,"equipment"],["footer",""],[1,"buttons"],["mat-button","",1,"cancel",3,"mat-dialog-close"],["mat-raised-button","","color","primary",3,"mat-dialog-close"]],template:function(i,u){1&i&&(t.TgZ(0,"lc-modal-layout",0),t.ynx(1,1),t.TgZ(2,"div",2)(3,"p"),t._uU(4," \u0421\u0442\u0430\u0442\u0443\u0441 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0438\u0437\u043c\u0435\u043d\u0438\u0442\u044c\u0441\u044f \u043d\u0430 \u201c\u0412 \u0430\u0440\u0445\u0438\u0432\u0435\u201d \u0438 \u0441\u043a\u0440\u043e\u0435\u0442\u0441\u044f \u0438\u0437 \u043e\u0431\u0449\u0435\u0433\u043e \u0441\u043f\u0438\u0441\u043a\u0430 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f. \u041f\u0440\u043e\u0432\u0435\u0440\u044c\u0442\u0435 \u0434\u0430\u043d\u043d\u044b\u0435. "),t.qZA(),t._UZ(5,"lc-equipment-info",3),t.qZA(),t.BQk(),t.ynx(6,4),t.TgZ(7,"div",5)(8,"button",6),t._uU(9," \u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c "),t.qZA(),t.TgZ(10,"button",7),t._uU(11),t.qZA()(),t.BQk(),t.qZA()),2&i&&(t.xp6(5),t.Q6J("equipment",u.equipment),t.xp6(3),t.Q6J("mat-dialog-close",!1),t.xp6(2),t.Q6J("mat-dialog-close",!0),t.xp6(1),t.hij(" ",u.ModalEnum.ArchiveApplyButtonText," "))},dependencies:[M.m,D.lW,h.ZT,U],styles:[".content[_ngcontent-%COMP%]{font-style:normal;font-weight:400;font-size:14px;line-height:24px;letter-spacing:.1px;color:#000}.content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-bottom:24px}.buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.buttons[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]{margin-right:24px;font-style:normal;font-weight:500;color:#00677f}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:56px;border-radius:10px;font-style:normal;font-weight:400;line-height:20px;padding:16px;text-transform:uppercase}"],changeDetection:0})}return n})();var I=a(5619),g=a(7398),J=a(9397),m=a(4664),E=a(2181),Y=a(2096),r=a(6223),et=a(4347),d=a(388),nt=a(9118),it=a(4315),ot=a(5659),x=a(8034),A=a(4170);let w=class Z{constructor(o,e,i,u,s){this.dialogData=o,this.dialogRef=e,this.fb=i,this.validationService=u,this.dateRangeService=s,this.formName="block_equipment_modal",this.unavailablePeriods=[],this.ModalEnum=f,this.LabelEnum=O,this.minDate=null,this.form=this.fb.group({startDate:[null,r.kI.required],endDate:[null,r.kI.required]})}ngOnInit(){this.equipment=this.dialogData.equipment,this.unavailablePeriods=this.dialogData.unavailablePeriods,this.minDate=new Date}blockEquipment(){this.validationService.emitSubmit(this.formName),this.form.valid?this.dialogRef.close(this.form.getRawValue()):this.form.markAllAsTouched()}openDatePicker(){this.dateRangeService.openDateRangeModal(this.dateRangeConfig).pipe((0,d.t)(this)).subscribe(o=>{o&&this.setFormValue({startDate:new Date(o.start_date),endDate:new Date(o.end_date)})})}setFormValue(o){this.form.setValue(o)}get dateRangeConfig(){return{headerText:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u0435\u0440\u0438\u043e\u0434 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438",buttonText:"\u0432\u044b\u0431\u0440\u0430\u0442\u044c",maxRentalPeriod:14,unavailableDates:this.unavailablePeriods,purpose:et.z.block}}static#t=this.\u0275fac=function(e){return new(e||Z)(t.Y36(h.WI),t.Y36(h.so),t.Y36(r.QS),t.Y36(nt.R),t.Y36(it.s))};static#e=this.\u0275cmp=t.Xpm({type:Z,selectors:[["lc-block-equipment-modal"]],decls:18,vars:9,consts:[[3,"headerTitle"],["body",""],[3,"equipment"],[3,"formGroup"],[3,"min"],["matStartDate","","formControlName","startDate","placeholder","\u041d\u0430\u0447\u0430\u043b\u043e",3,"lcValidationErrors"],["matEndDate","","formControlName","endDate","placeholder","\u041a\u043e\u043d\u0435\u0446",3,"lcValidationErrors"],["matIconSuffix","",3,"click"],["footer",""],[1,"buttons-wrapper"],[1,"buttons"],["mat-button","",1,"cancel",3,"mat-dialog-close"],["mat-raised-button","","color","primary",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"lc-modal-layout",0),t.ynx(1,1),t._UZ(2,"lc-equipment-info",2),t.TgZ(3,"form",3)(4,"mat-form-field")(5,"mat-label"),t._uU(6,"\u041f\u0435\u0440\u0438\u043e\u0434 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0438"),t.qZA(),t.TgZ(7,"mat-date-range-input",4),t._UZ(8,"input",5)(9,"input",6),t.qZA(),t.TgZ(10,"mat-datepicker-toggle",7),t.NdJ("click",function(){return i.openDatePicker()}),t.qZA()()(),t.BQk(),t.ynx(11,8),t.TgZ(12,"div",9)(13,"div",10)(14,"button",11),t._uU(15),t.qZA(),t.TgZ(16,"button",12),t.NdJ("click",function(){return i.blockEquipment()}),t._uU(17),t.qZA()()(),t.BQk(),t.qZA()),2&e&&(t.Q6J("headerTitle",i.ModalEnum.BlockTitle),t.xp6(2),t.Q6J("equipment",i.equipment),t.xp6(1),t.Q6J("formGroup",i.form),t.xp6(4),t.Q6J("min",i.minDate),t.xp6(1),t.Q6J("lcValidationErrors",i.formName),t.xp6(1),t.Q6J("lcValidationErrors",i.formName),t.xp6(5),t.Q6J("mat-dialog-close",!1),t.xp6(1),t.hij(" ",i.ModalEnum.BlockCancelButtonText," "),t.xp6(2),t.hij(" ",i.ModalEnum.BlockApplyButtonText," "))},dependencies:[M.m,ot.D,D.lW,x.nW,x.wx,x.zY,x.By,h.ZT,A.KE,A.hX,A.R9,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,U],styles:["[_nghost-%COMP%]{display:block}form[_ngcontent-%COMP%]{margin-top:24px}form[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:100%}form[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%]{max-width:200px}.buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.buttons[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]{font-style:normal;font-weight:500;color:#00677f}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{font-style:normal;font-weight:400;margin-right:24px;line-height:20px;text-transform:uppercase;height:56px;border-radius:10px}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:last-child{margin-right:0}"],changeDetection:0})};w=(0,v.gn)([d.c],w);var b=a(3612),$=a(617);function ut(n,o){1&n&&(t.ynx(0),t._uU(1," \u0412 \u044d\u0442\u0438 \u0434\u0430\u0442\u044b \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0437\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043e. \u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430 \u0441\u0431\u0440\u043e\u0441\u0438\u0442 \u0434\u0430\u043d\u043d\u043e\u0435 \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435. "),t.BQk())}function at(n,o){1&n&&(t.ynx(0),t._uU(1," \u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435 \u0441\u0431\u0440\u043e\u0441\u0438\u0442 \u0432\u0441\u0435 \u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u0430\u043d\u043d\u043e\u0433\u043e \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f. "),t.BQk())}let st=(()=>{class n{constructor(e){this.action=e,this.actions=b.v,this.header="",this.actionText=""}ngOnInit(){switch(this.action){case this.actions.Block:this.header=f.BlockTitle,this.actionText=f.BlockApplyButtonText;break;case this.actions.Archivate:this.header=f.ArchiveTitle,this.actionText=f.ArchiveApplyButtonText}}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(h.WI))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["lc-order-notification-modal"]],decls:17,vars:6,consts:[[3,"headerTitle"],["body",""],[1,"content"],[4,"ngIf"],["fontSet","material-icons-outlined"],["footer",""],[1,"buttons"],["mat-button","",1,"cancel",3,"mat-dialog-close"],["mat-raised-button","","color","primary",3,"mat-dialog-close"]],template:function(i,u){1&i&&(t.TgZ(0,"lc-modal-layout",0),t.ynx(1,1),t.TgZ(2,"div",2)(3,"p"),t.YNc(4,ut,2,0,"ng-container",3),t.YNc(5,at,2,0,"ng-container",3),t.qZA(),t.TgZ(6,"p"),t._uU(7," \u0414\u043b\u044f \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430 \u0441\u043f\u0438\u0441\u043a\u0430 \u0437\u0430\u044f\u0432\u043e\u043a \u043d\u0430 \u0434\u0430\u043d\u043d\u043e\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u0435, \u0432\u043e\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0439\u0442\u0435\u0441\u044c \u043a\u043d\u043e\u043f\u043a\u043e\u0439 "),t.TgZ(8,"mat-icon",4),t._uU(9,"list_alt"),t.qZA(),t._uU(10," \u0432 \u0442\u0430\u0431\u043b\u0438\u0446\u0435 \u043e\u0431\u043e\u0440\u0443\u0434\u043e\u0432\u0430\u043d\u0438\u044f. "),t.qZA()(),t.BQk(),t.ynx(11,5),t.TgZ(12,"div",6)(13,"button",7),t._uU(14," \u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c "),t.qZA(),t.TgZ(15,"button",8),t._uU(16),t.qZA()(),t.BQk(),t.qZA()),2&i&&(t.Q6J("headerTitle",u.header),t.xp6(4),t.Q6J("ngIf",u.action===u.actions.Block),t.xp6(1),t.Q6J("ngIf",u.action===u.actions.Archivate),t.xp6(8),t.Q6J("mat-dialog-close",!1),t.xp6(2),t.Q6J("mat-dialog-close",!0),t.xp6(1),t.hij(" ",u.actionText," "))},dependencies:[p.O5,M.m,D.lW,h.ZT,$.Hw],styles:["p[_ngcontent-%COMP%]{margin-bottom:0;color:#000000de;font-size:14px;font-weight:400;line-height:22px;letter-spacing:.1px;word-wrap:break-word}mat-icon[_ngcontent-%COMP%]{position:relative;top:8px}.buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.buttons[_ngcontent-%COMP%]   .cancel[_ngcontent-%COMP%]{margin-right:24px;font-style:normal;font-weight:500;color:#00677f}.buttons[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:56px;border-radius:10px;font-style:normal;font-weight:400;line-height:20px;padding:16px;text-transform:uppercase}"],changeDetection:0})}return n})();const ct={available:null,booked:null,"in use":null,"not available":null,archived:null};var lt=a(7626);let rt=(()=>{class n{createDictionary(e,i){e.forEach(u=>i[u.id]=u.translation||u.name)}getDictionaryValue(e,i){return e[i]||void 0}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),T=class q{get equipmentData$(){return this.equipmentDataSubj$.asObservable()}constructor(o,e,i,u){this.dialog=o,this.api=e,this.notificationService=i,this.dictionaryService=u,this.equipmentDataSubj$=new I.X([]),this.categoryDictionary={},this.statusDictionary={},this.statusIdsDictionary={...ct},this.commonModalConfig={maxWidth:472,minWidth:472,autoFocus:!1}}editEquipment(o){switch(o.action){case b.v.Block:this.blockEquipment(o);break;case b.v.Edit:console.log(o.action);break;case b.v.Archivate:this.archivateEquipment(o)}}fetchEquipments(){return this.api.getAllEquipment().pipe((0,g.U)(o=>this.createRows(o.items)),(0,J.b)(o=>this.equipmentDataSubj$.next(o)))}createRows(o){return o.map(e=>{const i=this.dictionaryService.getDictionaryValue(this.categoryDictionary,e.category),u=this.dictionaryService.getDictionaryValue(this.statusDictionary,e.status);return i&&(e.categoryName=i),u&&(e.statusName=u),e.status===this.statusIdsDictionary.archived&&(e.disableActions=!0),e})}blockEquipment(o){const e=o.row;let i,u;this.api.getUnavailablePeriodsById(e.id).pipe((0,g.U)(s=>(i=s.items?s.items:[],s.items)),(0,m.w)(s=>this.openBlockEquipmentModal(e,s)),(0,E.h)(Boolean),(0,g.U)(s=>(u=s,this.isPeriodsIntersect(s,i))),(0,m.w)(s=>s?this.openOrderNotificationModal(o.action):(0,Y.of)(!0)),(0,E.h)(Boolean),(0,m.w)(()=>this.api.blockEquipment(e.id,u)),(0,d.t)(this)).subscribe(s=>{this.notificationService.openSuccess(`${e.title} \u0431\u044b\u043b\u043e \u0437\u0430 \u0431\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e!`)})}isPeriodsIntersect(o,e){for(const i of e)if(this.isDateInPeriod(o.startDate,i)||this.isDateInPeriod(o.endDate,i))return!0;return!1}isDateInPeriod(o,e){const i=new Date(e.start_date),u=new Date(e.end_date);return o.getTime(),o>=i&&o<=u}archivateEquipment(o){const e=o.row;this.openArchiveEquipmentModal(e).pipe((0,E.h)(Boolean),(0,m.w)(()=>this.api.getEquipmentUnavailabilityPeriods(e.id)),(0,m.w)(i=>i.items&&i.items.length?this.openOrderNotificationModal(o.action):(0,Y.of)(!0)),(0,E.h)(Boolean),(0,m.w)(()=>this.api.archiveEquipment(e.id)),(0,m.w)(()=>this.fetchEquipments()),(0,d.t)(this)).subscribe(()=>{this.notificationService.openSuccess(`${e.title} \u0431\u044b\u043b\u043e \u0437\u0430 \u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e!`)})}openArchiveConfirmation(o){}openBlockConfirmation(o){}openOrderNotificationModal(o){return this.dialog.open(st,{...this.commonModalConfig,data:o}).afterClosed()}openArchiveEquipmentModal(o){return this.dialog.open(tt,{...this.commonModalConfig,data:o}).afterClosed()}openBlockEquipmentModal(o,e){return this.dialog.open(w,{...this.commonModalConfig,data:{equipment:o,unavailablePeriods:e||[]}}).afterClosed()}createCategoryDictionary(o){this.dictionaryService.createDictionary(o,this.categoryDictionary)}createStatusDictionary(o){this.dictionaryService.createDictionary(o,this.statusDictionary)}createEquipmentStatusIds(o){o.forEach(e=>{this.statusIdsDictionary[e.name]=e.id})}static#t=this.\u0275fac=function(e){return new(e||q)(t.LFG(h.uw),t.LFG(C),t.LFG(lt.T),t.LFG(rt))};static#e=this.\u0275prov=t.Yz7({token:q,factory:q.\u0275fac})};T=(0,v.gn)([d.c],T);let R=(()=>{class n{constructor(e){this.api=e,this.usersSubject$=new I.X([])}get users$(){return this.usersSubject$.asObservable()}fetchUsers(){return this.api.getAllUsers().pipe((0,J.b)(e=>this.usersSubject$.next(e.items)))}static#t=this.\u0275fac=function(i){return new(i||n)(t.LFG(C))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac})}return n})();var P=a(5403),_=a(6150),c=a(6784);const mt=[{header:"\u0418\u043d\u0432\u0435\u043d\u0442\u0430\u0440\u043d\u044b\u0439 \u043d\u043e\u043c\u0435\u0440",columnDef:"inventoryNumber",style:{"width.px":150}},{header:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",columnDef:"name",style:null},{header:"\u041d\u0430\u0438\u043c\u0435\u043d\u043e\u0432\u0430\u043d\u0438\u0435",columnDef:"title",style:null},{header:"\u041a\u0430\u0442\u0435\u0433\u043e\u0440\u0438\u044f",columnDef:"categoryName",style:{"width.px":150}},{header:"\u0421\u0442\u0430\u0442\u0443\u0441",columnDef:"statusName",style:{"width.px":150}},{header:"",columnDef:c.vk.Block,action:c.vk.Block,tooltip:"\u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u043a\u0430",style:{"width.px":32}},{header:"",columnDef:c.vk.Edit,action:c.vk.Edit,tooltip:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",style:{"width.px":32}},{header:"",columnDef:c.vk.Archivate,action:c.vk.Archivate,tooltip:"\u0410\u0440\u0445\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435",style:{"width.px":32}},{header:"",columnDef:c.vk.Orders,action:c.vk.Orders,essentialAction:!0,tooltip:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0437\u0430\u044f\u0432\u043a\u0430\u043c",style:{"width.px":32}}];var B=a(3566),j=a(1476),l=a(9538),pt=a(2596);let ht=(()=>{class n{transform(e,i){return!e.essentialAction&&!!i.disableActions}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275pipe=t.Yjl({name:"tableDisableAction",type:n,pure:!0})}return n})();function dt(n,o){if(1&n&&(t.TgZ(0,"th",10),t._uU(1),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.Oqu(e.header)}}function ft(n,o){1&n&&(t.ynx(0),t.YNc(1,dt,2,1,"th",9),t.BQk())}function gt(n,o){if(1&n&&(t.TgZ(0,"th",12),t._uU(1),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.Oqu(e.header)}}function vt(n,o){1&n&&(t.ynx(0),t.YNc(1,gt,2,1,"th",11),t.BQk())}function yt(n,o){if(1&n&&(t.ynx(0),t._uU(1),t.BQk()),2&n){const e=t.oxw().$implicit,i=t.oxw().$implicit;t.xp6(1),t.hij(" ",e[i.columnDef]," ")}}function Ct(n,o){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"button",15),t.NdJ("click",function(){t.CHM(e);const u=t.oxw().$implicit,s=t.oxw().$implicit,Zt=t.oxw();return t.KtG(Zt.editRow({row:u,action:s.action}))}),t.ALo(2,"tableDisableAction"),t.TgZ(3,"mat-icon",16),t._uU(4),t.qZA()(),t.BQk()}if(2&n){const e=t.oxw().$implicit,i=t.oxw().$implicit;t.xp6(1),t.Q6J("disabled",t.xi3(2,2,i,e)),t.xp6(3),t.Oqu(i.action)}}function Dt(n,o){if(1&n&&(t.TgZ(0,"td",13)(1,"span",14),t.YNc(2,yt,2,1,"ng-container",7),t.YNc(3,Ct,5,5,"ng-container",7),t.qZA()()),2&n){const e=t.oxw().$implicit;t.Q6J("ngStyle",e.style),t.xp6(1),t.Q6J("matTooltip",e.tooltip?e.tooltip:""),t.xp6(1),t.Q6J("ngIf",!e.action),t.xp6(1),t.Q6J("ngIf",e.action)}}function Et(n,o){if(1&n&&(t.ynx(0,6),t.YNc(1,ft,2,0,"ng-container",7),t.YNc(2,vt,2,0,"ng-container",7),t.YNc(3,Dt,4,4,"td",8),t.BQk()),2&n){const e=o.$implicit;t.Q6J("matColumnDef",e.columnDef),t.xp6(1),t.Q6J("ngIf",e.action),t.xp6(1),t.Q6J("ngIf",!e.action)}}function xt(n,o){1&n&&t._UZ(0,"tr",17)}function bt(n,o){1&n&&t._UZ(0,"tr",18)}let z=(()=>{class n{constructor(){this.columns=[],this.data=[],this.limit=10,this.action=new t.vpe,this.total=0}ngOnChanges(e){e.data&&(this.total=this.data.length,this.dataSource=this.getMatTableData(this.data))}get displayedColumns(){return this.columns.map(e=>e.columnDef)}editRow(e){this.action.emit(e)}getMatTableData(e){const i=new l.by(e);return this.sort&&this.dataSource&&(i.sort=this.sort),this.paginator&&(i.paginator=this.paginator),i}static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["lc-table"]],viewQuery:function(i,u){if(1&i&&(t.Gf(j.NW,5),t.Gf(B.YE,5)),2&i){let s;t.iGM(s=t.CRH())&&(u.paginator=s.first),t.iGM(s=t.CRH())&&(u.sort=s.first)}},inputs:{columns:"columns",data:"data",limit:"limit"},outputs:{action:"action"},features:[t.TTD],decls:6,vars:6,consts:[["mat-table","","matSort","",3,"dataSource"],[3,"matColumnDef",4,"ngFor","ngForOf"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["hidePageSize","",1,"paginator",3,"length","pageSize"],["paginator",""],[3,"matColumnDef"],[4,"ngIf"],["mat-cell","",3,"ngStyle",4,"matCellDef"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-header-cell",""],["mat-header-cell","","mat-sort-header","",4,"matHeaderCellDef"],["mat-header-cell","","mat-sort-header",""],["mat-cell","",3,"ngStyle"],[3,"matTooltip"],["mat-icon-button","",3,"disabled","click"],["fontSet","material-icons-outlined"],["mat-header-row",""],["mat-row",""]],template:function(i,u){1&i&&(t.TgZ(0,"table",0),t.YNc(1,Et,4,3,"ng-container",1),t.YNc(2,xt,1,0,"tr",2),t.YNc(3,bt,1,0,"tr",3),t.qZA(),t._UZ(4,"mat-paginator",4,5)),2&i&&(t.Q6J("dataSource",u.dataSource),t.xp6(1),t.Q6J("ngForOf",u.columns),t.xp6(1),t.Q6J("matHeaderRowDef",u.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",u.displayedColumns),t.xp6(1),t.Q6J("length",u.total)("pageSize",u.limit))},dependencies:[p.sg,p.O5,p.PC,D.RK,$.Hw,j.NW,l.BZ,l.fO,l.as,l.w1,l.Dz,l.nj,l.ge,l.ev,l.XQ,l.Gk,pt.gM,B.YE,B.nU,ht],styles:["[_nghost-%COMP%]{display:block}[_nghost-%COMP%]   table[_ngcontent-%COMP%]{width:100%}[_nghost-%COMP%]   .mat-header-cell[_ngcontent-%COMP%], [_nghost-%COMP%]   .mat-cell[_ngcontent-%COMP%]{padding:0 8px}[_nghost-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]:first-child, [_nghost-%COMP%]   .mat-cell[_ngcontent-%COMP%]:first-child{padding-left:16px}[_nghost-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]:last-child, [_nghost-%COMP%]   .mat-cell[_ngcontent-%COMP%]:last-child{padding-right:16px}[_nghost-%COMP%]   .mat-cell[_ngcontent-%COMP%]{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}"],changeDetection:0})}return n})();const Tt=function(){return[]};let y=class F{constructor(o){this.controller=o,this.columns=mt,this.data$=this.controller.equipmentData$}ngOnInit(){this.controller.fetchEquipments().subscribe(),this.equipmentCategories.pipe((0,d.t)(this)).subscribe(o=>this.controller.createCategoryDictionary(o)),this.equipmentStatuses.pipe((0,d.t)(this)).subscribe(o=>{this.controller.createStatusDictionary(o),this.controller.createEquipmentStatusIds(o)})}editEquipment(o){this.controller.editEquipment(o)}static#t=this.\u0275fac=function(e){return new(e||F)(t.Y36(T))};static#e=this.\u0275cmp=t.Xpm({type:F,selectors:[["lc-equipments"]],features:[t._Bn([T])],decls:2,vars:5,consts:[[3,"columns","data","action"]],template:function(e,i){1&e&&(t.TgZ(0,"lc-table",0),t.NdJ("action",function(s){return i.editEquipment(s)}),t.ALo(1,"async"),t.qZA()),2&e&&t.Q6J("columns",i.columns)("data",t.lcZ(1,2,i.data$)||t.DdM(4,Tt))},dependencies:[z,p.Ov],styles:["div[_ngcontent-%COMP%]{margin:16px}.wrap[_ngcontent-%COMP%]{width:300px}"],changeDetection:0})};(0,v.gn)([(0,P.Ph)(_.in.equipmentCategories)],y.prototype,"equipmentCategories",void 0),(0,v.gn)([(0,P.Ph)(_.in.equipmentStatuses)],y.prototype,"equipmentStatuses",void 0),y=(0,v.gn)([d.c],y);var k=a(4614),_t=a(1607);const qt={available:"\u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e",booked:"\u0437\u0430\u0431\u0440\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e","in use":"\u0438\u0441\u043f\u043e\u043b\u044c\u0437\u0443\u0435\u0442\u0441\u044f","not available":"\u043d\u0435 \u0434\u043e\u0441\u0442\u0443\u043f\u043d\u043e",archived:"\u0430\u0440\u0445\u0438\u0432\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u043e"};let S=(()=>{class n{constructor(e,i){this.api=e,this.store=i}getEquipmentStatuses(){return this.api.getEquipmentStatuses().pipe((0,g.U)(e=>this.fillInStatusesTranslations(e)),(0,m.w)(e=>this.store.dispatch(new _.xs(e))),(0,g.U)(e=>e.application_data?.equipmentStatuses))}fillInStatusesTranslations(e){return e.map(i=>{const u=qt[i.name];return u&&(i.translation=u),i})}getEquipmentCategories(){return this.api.getEquipmentCategories().pipe((0,m.w)(e=>this.store.dispatch(new _.FI(e.items))),(0,g.U)(e=>e.application_data?.equipmentCategories))}static#t=this.\u0275fac=function(i){return new(i||n)(t.LFG(C),t.LFG(P.yh))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac})}return n})(),G=(()=>{class n{constructor(e){this.equipmentResolverService=e}resolve(){return this.equipmentResolverService.getEquipmentStatuses()}static#t=this.\u0275fac=function(i){return new(i||n)(t.LFG(S))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})(),L=(()=>{class n{constructor(e){this.equipmentResolverService=e}resolve(){return this.equipmentResolverService.getEquipmentCategories()}static#t=this.\u0275fac=function(i){return new(i||n)(t.LFG(S))};static#e=this.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"})}return n})();const Mt=[{header:"\u042d\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430\u044f \u043f\u043e\u0447\u0442\u0430",columnDef:"email",style:{"minWidth.px":200}},{header:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",columnDef:"phone_umber",style:{"minWidth.px":150}},{header:"\u0424\u0430\u043c\u0438\u043b\u0438\u044f",columnDef:"surname",style:{"minWidth.px":200}},{header:"\u0418\u043c\u044f",columnDef:"name",style:{"minWidth.px":200}},{header:"\u0421\u0442\u0430\u0442\u0443\u0441",columnDef:"status",style:{"width.px":100}},{header:"",columnDef:c.Vw.Profile,action:c.Vw.Profile,tooltip:"\u041f\u0440\u043e\u0444\u0438\u043b\u044c",style:{"width.px":32}},{header:"",columnDef:c.Vw.Block,action:c.Vw.Block,tooltip:"\u0411\u043b\u043e\u043a\u0438\u0440\u043e\u0432\u0430\u0442\u044c",style:{"width.px":32}},{header:"",columnDef:c.Vw.Delete,action:c.Vw.Delete,tooltip:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",style:{"width.px":32}}],Ot=function(){return[]},wt=[{path:"",redirectTo:k.$.Equipments,pathMatch:"full"},{path:k.$.Equipments,resolve:{equipmentsStatuses:G,equipmentCategories:L},pathMatch:"full",component:y},{path:k.$.Users,pathMatch:"full",component:(()=>{class n{constructor(e){this.controller=e,this.columns=Mt,this.users$=this.controller.users$}ngOnInit(){this.controller.fetchUsers().subscribe()}static#t=this.\u0275fac=function(i){return new(i||n)(t.Y36(R))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["lc-users"]],features:[t._Bn([R])],decls:2,vars:5,consts:[[3,"columns","data"]],template:function(i,u){1&i&&(t._UZ(0,"lc-table",0),t.ALo(1,"async")),2&i&&t.Q6J("columns",u.columns)("data",t.lcZ(1,2,u.users$)||t.DdM(4,Ot))},dependencies:[z,p.Ov],changeDetection:0})}return n})()}];let Pt=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({providers:[_t.u],imports:[Q.Bz.forChild(wt),Q.Bz]})}return n})();var Bt=a(325),kt=a(2615);let St=(()=>{class n{static#t=this.\u0275fac=function(i){return new(i||n)};static#e=this.\u0275mod=t.oAB({type:n});static#n=this.\u0275inj=t.cJS({providers:[C,S,G,L],imports:[p.ez,Pt,Bt.m,r.UX,kt.x]})}return n})()}}]);