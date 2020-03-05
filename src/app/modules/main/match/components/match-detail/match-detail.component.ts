import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatchService } from '../../service/match.service';

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

	matchInfo: any = null;
	
	type: any = [];

  constructor(
      private router: ActivatedRoute,
      private matchService: MatchService
  ) {
   }

  ngOnInit() {
    const id = parseInt(this.router.snapshot.paramMap.get("id"));
    this.matchService.getMatchById(id).subscribe(response => {
        if(response.code === 0) {
            this.matchInfo = response.message.detail;
        }
		})
		this.matchService.getType().subscribe(response => {
			if(response.code === 0) {
				this.type = response.message.result;
			}
		})
  }

  limit(type) {
    switch(type) {
        case 0: return '全员开放';
        case 1: return '限制可参与人员';
        case 2: return '限制不可参与人员';
        default: return '未知';
    }
  }

  limitGroup() {
		if(this.matchInfo) {
			const limitPeople = this.matchInfo.limitPeople.split("-");
			let text = [];
			limitPeople.forEach(item => {
				text.push(this.getTypeText(parseInt(item)));
			})
			return text.join("/");
		}else {
			return "无"
		}
	}
	
	getTypeText(type) {
		for(let i = 0, len = this.type.length; i < len; i++) {
			const item = this.type[i];
			if(type === item.type) {
				return item.text;
			}
		}
	}

	percentFormat(percent: number) {
		return percent.toFixed(2);
	}

}
