import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { MaterialModule } from './shared/modules/material/material.module';
import { BudgetCatComponent } from './budget-cat/budget-cat.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BanksComponent } from './banks/banks.component';
import { BalanceBudgetComponent } from './balance-budget/balance-budget.component';
import { WorthComponent } from './worth/worth.component';
import { SpendingComponent } from './spending/spending.component';
import { DebtsComponent } from './debts/debts.component';
import { SettingsComponent } from './settings/settings.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { WorthAndDebtsComponent } from './worth-and-debts/worth-and-debts.component';


@NgModule({
  declarations: [
    AppComponent,
    BudgetsComponent,
    BudgetCatComponent,
    BanksComponent,
    BalanceBudgetComponent,
    WorthComponent,
    SpendingComponent,
    DebtsComponent,
    TransactionsComponent,
    SettingsComponent,
    WorthAndDebtsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgChartsModule,
    NoopAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  exports: [
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
