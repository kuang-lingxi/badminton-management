import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-detail',
  templateUrl: './match-detail.component.html',
  styleUrls: ['./match-detail.component.scss']
})
export class MatchDetailComponent implements OnInit {

  peopleOption = {
      tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
      },
      legend: {
          orient: 'vertical',
          left: 10,
          data: ['A+', 'A', 'B+', 'B', 'C+', 'C', 'D']
      },
      series: [
          {
              name: '人员等级',
              type: 'pie',
              radius: ['50%', '70%'],
              avoidLabelOverlap: false,
              label: {
                  normal: {
                      show: false,
                      position: 'center'
                  },
                  emphasis: {
                      show: true,
                      textStyle: {
                          fontSize: '30',
                          fontWeight: 'bold'
                      }
                  }
              },
              labelLine: {
                  normal: {
                      show: false
                  }
              },
              data: [
                  {value: 1, name: 'A+'},
                  {value: 10, name: 'A'},
                  {value: 30, name: 'B+'},
                  {value: 20, name: 'B'},
                  {value: 10, name: 'C+'},
                  {value: 2, name: 'C'},
                  {value: 1, name: 'D'}
              ]
          }
      ]
  };

  constructor() { }

  ngOnInit() {
  }

}
