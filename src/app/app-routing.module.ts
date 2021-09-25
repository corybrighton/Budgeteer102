import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BalanceBudgetComponent } from './balance-budget/balance-budget.component';
import { BanksComponent } from './banks/banks.component';
import { BudgetsComponent } from './budgets/budgets.component';
import { DebtsComponent } from './debts/debts.component';
import { SettingsComponent } from './settings/settings.component';
import { SpendingComponent } from './spending/spending.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { WorthComponent } from './worth/worth.component';


const routes: Routes = [
  { path: '', component: BudgetsComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'banks', component: BanksComponent },
  { path: 'balancebudget', component: BalanceBudgetComponent },
  { path: 'worth', component: WorthComponent },
  { path: 'spending', component: SpendingComponent },
  { path: 'debts', component: DebtsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
