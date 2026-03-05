import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AtelierSafaHadhriService } from '../../services/atelierSafaHadhri.service';
import { AtelierSafaHadhri } from '../../models/atelierSafaHadhri';

@Component({
  selector: 'app-update-safa-hadhri',
  templateUrl: './update-safa-hadhri.component.html',
  styleUrl: './update-safa-hadhri.component.css'
})
export class UpdateSafaHadhriComponent implements OnInit {

  atelier!: AtelierSafaHadhri;
  atelierForm!: FormGroup;
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
      this.atelierForm = new FormGroup({
        nom: new FormControl(this.atelier.nom, [Validators.required, Validators.minLength(5)]),
        emailFormateur: new FormControl(this.atelier.emailFormateur, [Validators.required, Validators.email]),
        nbrParticipant: new FormControl(this.atelier.nbrParticipant, [Validators.required, Validators.min(16)]),
        statut: new FormControl(this.atelier.statut)
      });
    });
  }

  get nom() { return this.atelierForm.get('nom'); }
  get emailFormateur() { return this.atelierForm.get('emailFormateur'); }
  get nbrParticipant() { return this.atelierForm.get('nbrParticipant'); }

  onSubmit() {
    if (this.atelierForm.invalid) {
      this.atelierForm.markAllAsTouched();
      return;
    }
    this.atelierService.updateAtelier(this.id, this.atelierForm.value).subscribe(() => {
      this.router.navigateByUrl('/atelierSafaHadhri/list');
    });
  }
}
