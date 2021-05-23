import { NgModule } from "@angular/core";
import { AlertModule } from "ngx-bootstrap/alert";
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';

@NgModule({
    imports: [
        AlertModule.forRoot(),
        ButtonsModule.forRoot(),
        BsDatepickerModule.forRoot(),
        ModalModule.forRoot(),
        AccordionModule.forRoot(),
    ],
    exports: [
        AlertModule,
        ButtonsModule,
        BsDatepickerModule,
        ModalModule,
        AccordionModule,
    ]
})
export class BootstrapModule { }