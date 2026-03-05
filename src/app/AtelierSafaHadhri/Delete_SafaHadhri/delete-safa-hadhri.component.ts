import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AtelierSafaHadhriService } from '../../services/atelierSafaHadhri.service';

@Component({
  selector: 'app-delete-safa-hadhri',
  templateUrl: './delete-safa-hadhri.component.html',
  styleUrl: './delete-safa-hadhri.component.css'
})
export class DeleteSafaHadhriComponent implements OnInit {

  id!: string;
  nom: string = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private atelierService: AtelierSafaHadhriService,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.atelierService.readOneAtelier(this.id).subscribe((data) => {
      this.nom = data.atelier.nom;
    });
  }

  confirmDelete() {
    this.atelierService.deleteAtelier(this.id).subscribe(() => {
      this.router.navigateByUrl('/atelierSafaHadhri/list');
    });
  }

  cancel() {
    this.router.navigateByUrl('/atelierSafaHadhri/list');
  }
}
