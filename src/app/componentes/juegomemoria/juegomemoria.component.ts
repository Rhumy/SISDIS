import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-juegomemoria',
  templateUrl: './juegomemoria.component.html',
  styleUrls: ['./juegomemoria.component.css']
})
export class JuegomemoriaComponent implements OnInit {

  contador: number;
  cantidadPaises: number = 10;
  respuesta: string;
  diccionarioPaises = ['AFGANISTÁN', 'ALBANIA', 'ALEMANIA', 'ALGERIA', 'ANDORRA', 'ANGOLA', 'ANGUILA', 'ANTÁRTIDA', 'ANTIGUA Y BARBUDA', 'ANTILLAS NEERLANDESAS', 'ARABIA SAUDITA', 'ARGENTINA', 'ARMENIA', 'ARUBA', 'AUSTRALIA', 'AUSTRIA', 'AZERBAYÁN', 'BÉLGICA', 'BAHAMAS', 'BAHREIN', 'BANGLADESH', 'BARBADOS', 'BELICE', 'BENÍN', 'BHUTÁN', 'BIELORRUSIA', 'BIRMANIA', 'BOLIVIA', 'BOSNIA Y HERZEGOVINA', 'BOTSUANA', 'BRASIL', 'BRUNÉI', 'BULGARIA', 'BURKINA FASO', 'BURUNDI', 'CABO VERDE', 'CAMBOYA', 'CAMERÚN', 'CANADÁ', 'CHAD', 'CHILE', 'CHINA', 'CHIPRE', 'CIUDAD DEL VATICANO', 'COLOMBIA', 'COMORAS', 'CONGO', 'CONGO', 'COREA DEL NORTE', 'COREA DEL SUR', 'COSTA DE MARFIL', 'COSTA RICA', 'CROACIA', 'CUBA', 'DINAMARCA', 'DOMINICA', 'ECUADOR', 'EGIPTO', 'EL SALVADOR', 'EMIRATOS ÁRABES UNIDOS', 'ERITREA', 'ESLOVAQUIA', 'ESLOVENIA', 'ESPAÑA', 'ESTADOS UNIDOS DE AMÉRICA', 'ESTONIA', 'ETIOPÍA', 'FILIPINAS', 'FINLANDIA', 'FIYI', 'FRANCIA', 'GABÓN', 'GAMBIA', 'GEORGIA', 'GHANA', 'GIBRALTAR', 'GRANADA', 'GRECIA', 'GROENLANDIA', 'GUADALUPE', 'GUAM', 'GUATEMALA', 'GUAYANA FRANCESA', 'GUERNSEY', 'GUINEA', 'GUINEA ECUATORIAL', 'GUINEA-BISSAU', 'GUYANA', 'HAITÍ', 'HONDURAS', 'HONG KONG', 'HUNGRÍA', 'INDIA', 'INDONESIA', 'IRÁN', 'IRAK', 'IRLANDA', 'ISLA BOUVET', 'ISLA DE MAN', 'ISLA DE NAVIDAD', 'ISLA NORFOLK', 'ISLANDIA', 'ISLAS BERMUDAS', 'ISLAS CAIMÁN', 'ISLAS COCOS (KEELING)', 'ISLAS COOK', 'ISLAS DE ÅLAND', 'ISLAS FEROE', 'ISLAS GEORGIAS DEL SUR Y SANDWICH DEL SUR', 'ISLAS HEARD Y MCDONALD', 'ISLAS MALDIVAS', 'ISLAS MALVINAS', 'ISLAS MARIANAS DEL NORTE', 'ISLAS MARSHALL', 'ISLAS PITCAIRN', 'ISLAS SALOMÓN', 'ISLAS TURCAS Y CAICOS', 'ISLAS ULTRAMARINAS MENORES DE ESTADOS UNIDOS', 'ISLAS VÍRGENES BRITÁNICAS', 'ISLAS VÍRGENES DE LOS ESTADOS UNIDOS', 'ISRAEL', 'ITALIA', 'JAMAICA', 'JAPÓN', 'JERSEY', 'JORDANIA', 'KAZAJISTÁN', 'KENIA', 'KIRGIZSTÁN', 'KIRIBATI', 'KUWAIT', 'LÍBANO', 'LAOS', 'LESOTO', 'LETONIA', 'LIBERIA', 'LIBIA', 'LIECHTENSTEIN', 'LITUANIA', 'LUXEMBURGO', 'MÉXICO', 'MÓNACO', 'MACAO', 'MACEDÔNIA', 'MADAGASCAR', 'MALASIA', 'MALAWI', 'MALI', 'MALTA', 'MARRUECOS', 'MARTINICA', 'MAURICIO', 'MAURITANIA', 'MAYOTTE', 'MICRONESIA', 'MOLDAVIA', 'MONGOLIA', 'MONTENEGRO', 'MONTSERRAT', 'MOZAMBIQUE', 'NAMIBIA', 'NAURU', 'NEPAL', 'NICARAGUA', 'NIGER', 'NIGERIA', 'NIUE', 'NORUEGA', 'NUEVA CALEDONIA', 'NUEVA ZELANDA', 'OMÁN', 'PAÍSES BAJOS', 'PAKISTÁN', 'PALAU', 'PALESTINA', 'PANAMÁ', 'PAPÚA NUEVA GUINEA', 'PARAGUAY', 'PERÚ', 'POLINESIA FRANCESA', 'POLONIA', 'PORTUGAL', 'PUERTO RICO', 'QATAR', 'REINO UNIDO', 'REPÚBLICA CENTROAFRICANA', 'REPÚBLICA CHECA', 'REPÚBLICA DOMINICANA', 'REUNIÓN', 'RUANDA', 'RUMANÍA', 'RUSIA', 'SAHARA OCCIDENTAL', 'SAMOA', 'SAMOA AMERICANA', 'SAN BARTOLOMÉ', 'SAN CRISTÓBAL Y NIEVES', 'SAN MARINO', 'SAN MARTÍN (FRANCIA)', 'SAN PEDRO Y MIQUELÓN', 'SAN VICENTE Y LAS GRANADINAS', 'SANTA ELENA', 'SANTA LUCÍA', 'SANTO TOMÉ Y PRÍNCIPE', 'SENEGAL', 'SERBIA', 'SEYCHELLES', 'SIERRA LEONA', 'SINGAPUR', 'SIRIA', 'SOMALIA', 'SRI LANKA', 'SUDÁFRICA', 'SUDÁN', 'SUECIA', 'SUIZA', 'SURINÁM', 'SVALBARD Y JAN MAYEN', 'SWAZILANDIA', 'TADJIKISTÁN', 'TAILANDIA', 'TAIWÁN', 'TANZANIA', 'TERRITORIO BRITÁNICO DEL OCÉANO ÍNDICO', 'TERRITORIOS AUSTRALES Y ANTÁRTICAS FRANCESES', 'TIMOR ORIENTAL', 'TOGO', 'TOKELAU', 'TONGA', 'TRINIDAD Y TOBAGO', 'TUNEZ', 'TURKMENISTÁN', 'TURQUÍA', 'TUVALU', 'UCRANIA', 'UGANDA', 'URUGUAY', 'UZBEKISTÁN', 'VANUATU', 'VENEZUELA', 'VIETNAM', 'WALLIS Y FUTUNA', 'YEMEN', 'YIBUTI', 'ZAMBIA', 'ZIMBABUE' ];
  paises = [];
  cantidadPalabras: number;
  posicionRandom: number;
  cantidadOpciones: number = 6;
  opciones: string[] = [];

  puntaje: number = 0;
  constructor() { }

  ngOnInit() {
    this.iniciarTodo();
  }

  iniciarTodo(){
    this.inicializarPaises();
    this.cantidadPalabras = this.paises.length;
    this.posicionRandom =this. obtenerNumeroRandom();
    this.generarArrayOpcionesAleatoriasNoExiste();
    this.inicio();

    console.log('Respuesta: '+this.paises[this.posicionRandom]);
    
  }
  inicio() {
    $('#imagen').hide();
    $('#radios').hide();
    $('#mostradorPalabras').hide();
    $('#count_num').hide();
    $('#titulo3').show();
    $('#botonIniciaTest').show();
  }

  empezarTest() {
    $('#botonIniciaTest').hide();
    $('#titulo3').hide();
    $("#count_num").show();
    var countLocal: number = 3; 
    var intervalLocal = setInterval(() => {
      if (countLocal == 0) {
        clearInterval(intervalLocal);
        // endCountdown()
        $('#count_num').hide();
        $('#imagen').show();
        $('#mostradorPalabras').show();
        $('#botonIniciaTest').hide();
        // mostrarPalabras2()
        var contadorPalabrasLocal = 0;
        var temporizadorPalabrasLocal = setInterval(() => {
          //mostrarPalabras()
          if (contadorPalabrasLocal === 10) {

            clearInterval(temporizadorPalabrasLocal);
            $('#mostradorPalabras').hide();
            $('#radios').show();
          } else {
            if(contadorPalabrasLocal != this.posicionRandom)
              $('#palabras').val(this.paises[contadorPalabrasLocal]);
            contadorPalabrasLocal++;
          }
        }, 500);
      } else {
        
        this.contador = countLocal;
        countLocal--;
      }
    }, 1000);
    $('#count_num').show();
  }
  inicializarPaises(){
    const tamDiccionario = this.diccionarioPaises.length;
    while(this.paises.length<this.cantidadPaises){
    var random = Math.floor(Math.random() * tamDiccionario);
      if(this.paises.find((valor) => {return valor == this.diccionarioPaises[random];}) == undefined){ //Si no existe el elemento en el array
        //if(this.posicionRandom != random){  // Validacion de opcion diferente a la respuesta
        this.paises.push(this.diccionarioPaises[random]);
        //}
      }
    }
  }
  generarArrayOpcionesAleatoriasNoExiste(){
    const posicionOpciones: number[] = [];
    posicionOpciones.push(this.posicionRandom);
    while(posicionOpciones.length < this.cantidadOpciones){
      const random = this.obtenerNumeroRandom();
      if(posicionOpciones.find((valor) => {return valor == random;}) == undefined){ //Si no existe el elemento en el array
        //if(this.posicionRandom != random){  // Validacion de opcion diferente a la respuesta
        posicionOpciones.push(random);
        //}
      }
    }
    posicionOpciones.sort();
    posicionOpciones.forEach((posicion) => {
      this.opciones.push(this.paises[posicion]);
    });
  }
  obtenerNumeroRandom(){
    return Math.floor(Math.random()*this.cantidadPalabras);
  }
  guardarRespuesta(){
    if(this.respuesta == this.paises[this.posicionRandom]){
      Swal.fire('Ganó','Correcto :\')','success');
      this.puntaje++;
      this.paises = [];
      this.opciones=[];
      this.iniciarTodo();
      // Enviar a la nube
    }
    else{
      Swal.fire('Perdió','Incorrecto :\'(','error');
      
    }
  }
}
