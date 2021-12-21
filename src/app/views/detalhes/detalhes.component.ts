import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from 'src/app/models/noticia';
import { DetalhesService } from 'src/app/services/detalhes.service';
import { NoticiaService } from 'src/app/services/noticia.service';
// import { NoticiaService } from 'src/app/services/noticia.service';


@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.css']
})
export class DetalhesComponent implements OnInit {

  param: any = "";
  resultadoArrayJson = [] as Noticia[]
  resultadoCapa: any = "";
  resultadoPreco: any = "";
  resultadoNome: any = "";
  resultadoDesc: any = "";
  idUrl: any =""

  constructor(private detalheService: DetalhesService,
    private _route: ActivatedRoute, private noticiaService: NoticiaService) { }

  ngOnInit(): void {
    this.idUrl = this.param = this._route.snapshot.queryParamMap.get('id');
    this.idUrl = this.idUrl-1;

    this.noticiaService.getNoticias().subscribe( (noticiasRecebidas: Noticia[]) => {
      this.resultadoArrayJson = noticiasRecebidas;
      console.log(this.resultadoArrayJson[this.idUrl].titulo)

      this.resultadoCapa = this.resultadoArrayJson[this.idUrl].capa;
      this.resultadoPreco = this.resultadoArrayJson[this.idUrl].descricao;
      this.resultadoNome = this.resultadoArrayJson[this.idUrl].titulo;
      this.resultadoDesc = this.resultadoArrayJson[this.idUrl].desc;
      console.log(this.resultadoCapa)
    } )
  }

  // onClick(game: number){
  //   this._router.navigate(['/lancamento', gameId],{
  //     queryParams: {'nome': 101}
  //   })
  // }
 
}