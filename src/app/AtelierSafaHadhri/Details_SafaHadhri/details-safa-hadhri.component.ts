import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AtelierSafaHadhri } from '../../models/atelierSafaHadhri';
import { AtelierSafaHadhriService } from '../../services/atelierSafaHadhri.service';

@Component({
  selector: 'app-details-safa-hadhri',
  templateUrl: './details-safa-hadhri.component.html',
  styleUrl: './details-safa-hadhri.component.css'
})
export class DetailsSafaHadhriComponent implements OnInit {

  atelier!: AtelierSafaHadhri | any;
  id!: string;

  constructor(
    private activatedRoute: ActivatedRoute,
    private atelierService: AtelierSafaHadhriService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.atelierService.readOneAtelier(this.id).subscribe((data) => {
      this.atelier = data.atelier;
    });
  }

  returnToList() {
    this.router.navigateByUrl('/atelierSafaHadhri/list');
  }
}
