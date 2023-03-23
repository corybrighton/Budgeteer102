import { Component } from '@angular/core';

interface headerNames {
  icon: string,
  name: string,
  link: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Budgeteer';
  drawerOpened = false;

  linkNames: headerNames[] = [
    {
      icon: "savings",
      name: "Budgets",
      link: ""
    },
    {
      icon: "receipt_long",
      name: "Transactions",
      link: "transactions"
    },
    {
      icon: "account_balance",
      name: "Banks",
      link: "banks"
    },
    {
      icon: "rule",
      name: "Balance Budget",
      link: "balancebudget"
    },
    // {
    //   icon: "trending_up",
    //   name: "Worth",
    //   link: "worth"
    // },
    {
      icon: "trending_up",
      name: "Worth and Debts",
      link: "worthAndDebts"
    },
    // {
    //   icon: "trending_down",
    //   name: "Debts",
    //   link: "debts"
    // },
    {
      icon: "shopping_basket",
      name: "Spending",
      link: "spending"
    },
    {
      icon: "settings",
      name: "Settings",
      link: "settings"
    }
  ]

  openMenu() {
    this.drawerOpened = !this.drawerOpened;
  }

  closeDrawer() {
    this.drawerOpened = false;
  }
}
