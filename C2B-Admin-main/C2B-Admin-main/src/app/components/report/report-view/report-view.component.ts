import { Component } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent {
  reportsAproved: any[] = [];
  reportsRejected: any[] = [];
  reportsAnalysis: any[] = [];
  p: number = 1;
  itemsPerPage: number = 10;

  constructor(private reportService: ReportService) {
    console.log('ReportComponent constructor');
    this.loadReports();
  
  }

  loadReports() {
    /*this.reportService.getReports().subscribe(data => {
      this.reports = data;
    });*/
    this.reportsAproved = [
      { name: 'C2B Andamento' },
      { name: 'X Space Eng' },
      { name: 'Cloud Nave Program' },
      { name: 'C2B Andamento' },
      { name: 'X Space Eng' },
      { name: 'Cloud Nave Program' },
    ];

    this.reportsRejected = [  
      { name: 'C2B Eng' },
      { name: 'X Space Andamento' },
      { name: 'Cloud Nave Program' },
      { name: 'C2B Andamento' },
      { name: 'X Space Eng' },
      { name: 'Cloud Nave Program' },
    ];

    this.reportsAnalysis = [  
      { name: 'C2B Andamento' },
      { name: 'X Space Eng' },
      { name: 'C2B Andamento' },
      { name: 'X Space Eng' },
      { name: 'C2B Andamento' },
      { name: 'X Space Eng' },
    ];
  }
}
