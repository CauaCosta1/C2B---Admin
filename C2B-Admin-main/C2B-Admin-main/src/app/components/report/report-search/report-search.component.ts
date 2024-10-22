import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../../services/report.service';

@Component({
  selector: 'app-report-search',
  templateUrl: './report-search.component.html',
  styleUrls: ['./report-search.component.css'],
})
export class ReportSearchComponent implements OnInit {
  reports: any[] = [];
  selectedSearchOption: string = 'data';
  searchQuery: string = '';

  constructor(private reportService: ReportService) {
    console.log('ReportComponent constructor');
    //this.loadReports();
    this.reports = [
      { name: 'C2B Andamento', date: '11-02-2023' },
      { name: 'X Space Eng', date: '16-05-2023' },
      { name: 'Cloud Nave Program', date: '04-11-23' },
      { name: 'C2B Eng', date: '15-02-2023' },
      { name: 'X Space Andamento', date: '16-05-2023' },
      { name: 'Cloud Nave Program', date: '18-09-2023' },
      { name: 'C2B Andamento', date: '21-12-2023' },
      { name: 'X Space Eng', date: '16-11-2023' },
      { name: 'C2B Andamento', date: '21-12-2023' },
      { name: 'X Space Eng', date: '16-11-2023' },
    ];
  }

  loadReports() {
    /*this.reportService.getReports().subscribe(data => {
      this.reports = data;
    });*/
    this.reports = [
      { name: 'C2B Andamento', date: '11-02-2023' },
      { name: 'X Space Eng', date: '16-05-2023' },
      { name: 'Cloud Nave Program', date: '04-11-23' },
      { name: 'C2B Eng', date: '15-02-2023' },
      { name: 'X Space Andamento', date: '16-05-2023' },
      { name: 'Cloud Nave Program', date: '18-09-2023' },
      { name: 'C2B Andamento', date: '21-12-2023' },
      { name: 'X Space Eng', date: '16-11-2023' },
      { name: 'C2B Andamento', date: '21-12-2023' },
      { name: 'X Space Eng', date: '16-11-2023' },
    ];
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.reportService.uploadReport(file).subscribe(() => {
        // Reload the reports after upload
        this.loadReports();
      });
    }
  }

  downloadReport(report: any) {
    // Adicione aqui a lógica para baixar o relatório
    console.log('Baixando relatório:', report);
  }

  searchReports(query: string) {
    this.reportService.searchReports(query).subscribe(data => {
      this.reports = data;
    });
  }

  ngOnInit() {
    console.log('ReportComponent ngOnInit');
    this.loadReports();
  }
}