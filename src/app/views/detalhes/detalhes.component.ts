import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Noticia } from 'src/app/models/noticia';
import { CartService } from 'src/app/services/cart.service';
import { DetalhesService } from 'src/app/services/detalhes.service';
import { NoticiaService } from 'src/app/services/noticia.service';


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
  idUrl: any ="";

  item: any = ""

  constructor(private detalheService: DetalhesService, private _route: ActivatedRoute, private noticiaService: NoticiaService, private cart: CartService) { }

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
    } )
  }

  consultaCep(valor: any, form: any){
   this.detalheService.buscar(valor).subscribe((dados)=> this.populaForm(dados, form));
  }

  populaForm(dados:any, form:any){
    form.setValue({
      cep: dados.cep,
      logradouro: dados.logradouro,
      cidade: dados.localidade,
      bairro: dados.bairro,
      uf: dados.uf
    })
  }

  addCart(){
    this.idUrl = this._route.snapshot.queryParamMap.get('id');

    this.cart.itemAdicionado.push(this.resultadoArrayJson[this.idUrl-1])
    console.log(this.cart.itemAdicionado)
  }
  


 
}
