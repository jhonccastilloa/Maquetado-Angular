import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'maquetado';
  dataHistory = [
    {
      name: 'Buy USDT',
      finished: 'In proccess...',
      money: '1024.53',
      cript: 'USDT',
      moneyDiscount: '- 50 EUR',
    },
    {
      name: 'Buy USDT',
      finished: 'Failed',
      money: '1024.53',
      cript: 'USDT',
      moneyDiscount: '- 50 EUR',
    },
    {
      name: 'Buy USDT',
      finished: 'Canceled',
      money: '1024.53',
      cript: 'USDT',
      moneyDiscount: '- 50 EUR',
    },
    {
      name: 'Buy USDT',
      finished: '23 apr at 12:59 A',
      money: '+ 1024.53',
      cript: 'USDT',
      moneyDiscount: '- 50 EUR',
    },
    {
      name: 'Transfer USDT',
      finished: '23 apr at 12:59 AM',
      money: '50',
      cript: 'USDT',
      moneyDiscount: '',
    },
    {
      name: 'Exchanged from USDT to BTC',
      finished: '23 apr at 12:59 AM',
      money: '+ 0.0075',
      cript: 'BTC',
      moneyDiscount: '- 450.01 USDT',
    },
    {
      name: 'Invoice',
      finished: '23 apr at 12:59 AM',
      money: '1024.00',
      cript: 'USDT',
      moneyDiscount: '- 450.01 EUR',
    },
  ];

  getCompletedData = () => {
    return this.dataHistory.filter((el) => !el.finished.includes('proccess'));
  };
  getProccessData = () => {
    return this.dataHistory.filter((el) => el.finished.includes('proccess'));
  };
}
