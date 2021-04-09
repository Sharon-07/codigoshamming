import Head from 'next/head'
import { useDebugValue, useImperativeHandle } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
      </Head>
      <main className={styles.main}>
      <h1 className={styles.title}>
          Códigos de <a href="https://hammingolay.vercel.app/">Hamming</a>
        </h1>

        <p className={styles.description}>
        La leyenda dice que Richard Hamming estaba tan frustrado de que la computadora se parara cada vez que detectaba 
        un error, que se ensimismó en una pila de tarjetas perforadas, pensó en una forma en la que la computadora fuera 
        capaz no sólo de detectar el error sino también de corregirlo automáticamente y volvió con su hoy en día famoso 
        código de Hamming.

        </p>

        <div className={styles.container}>
          <ul class="nav nav-tabs" role="tablist">
          <li class="nav-item">
            <a class="nav-link active" data-toggle="tab" href="#home">BREVE INTRODUCCIÓN DE LOS CÓDIGOS LINEALES</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu1">CÓDIGOS BINARIOS DE HAMMING</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu2"> CÓDIGOS DE HAMMING Q-ARIOS</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu3"> CODIFICACIÓN</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="tab" href="#menu4">DECODIFICACIÓN</a>
          </li>
        </ul>

        <div class="tab-content">
          <div id="home" class="container tab-pane active">
            <h3>Definición</h3>
            <p> 
            Debido al coste de almacenar todas las palabras de un código cualquiera C, los códigos de bloque son 
            computacionalmente costosos y exigen una gran cantidad de memoria (habría que almacenar todas las palabras 
            del código). Esto llevó a buscar códigos con una estructura algebraica añadida. En este caso todas las 
            palabras de los códigos lineales son combinación lineal de otras palabras de C.
            </p>
            <p>
            Sea F<sub>q</sub><sup>n</sup> un cuerpo finito con q elementos. Un código lineal de longitud n sobre F<sub>q</sub>
            es un subespacio vectorial de F<sub>q</sub><sup>n</sup>.

            </p>
            <p>
            Todo código lineal C de longitud n, es también un código en bloque de longitud n. Además, como espacio vectorial, 
            C posee una dimensión, k, luego su cardinal es siempre una potencia de q, q<sup>k</sup>. Estos números,n,k y la distancia 
            mínima d, son llamados parámetros fundamentales de C. Para abreviar, de un código cuyos parámetros sean n,k y d, 
            se 
            dice que es de tipo [n,k] o [n,k,d]. La redundancia de un código [n,k] es r=n-k.
            </p>

            <h3>Distancia de Hamming</h3>
            <p>
            Sean x,y &#8712; F<sub>q</sub><sup>n</sup>, x=(x<sub>1</sub>,x<sub>2</sub>,...,x<sub>n</sub>), 
            y=(y<sub>1</sub>,y<sub>2</sub>,...,y<sub>n</sub>). 
            Se llama distancia de Hamming entre x e y a la cantidad d(x,y)=#&#x2774;i|1&#8804;i&#8804;n,
            x<sub>i</sub>&#8800;y<sub>i</sub>&#x2775;. 
            La aplicación así definida es efectivamente una distancia en F<sub>q</sub><sup>n</sup>, es decir, verifica las 
            propiedades siguientes:
            </p>
            <p>
              <ol><li>
              d es no negativa y d(x,y)=0 si y solo si x=y.
              </li>
              <li>
              d(x,y)=d(y,x).
              </li>
              <li>
              d(x,z)&#8804;d(x,y)+d(y,z).
              </li>
            </ol>
            </p>
            <p>
            A partir de la distancia de Hamming se puede definir la distancia mínima de un código.
            </p>

            <h3>Distancia Mínima de un Código</h3>
            <p>
            Definimos la distancia mínima de un código C, con |C|&#8805;2 como:
            </p>
            <p>
            d=d(C)=min&#x2774;(x,y)|x,y&#8712;C,x&#8800;y&#x2775;.
            </p>
            <h3>
              Peso de una palabra Código
            </h3>
            <p>
            El peso mínimo de un código C se define como w(C)=min&#x2774;w(c)|c&#8712;C,c&#8800;0&#x2775;.
            </p>
            <p>
            Es decir, el peso de una palabra código es 
            el número de elementos distintos de cero (representado como w(c)).
            </p>
            <h3>Teorema</h3>
            <p>
            La distancia mínima de un código lineal C es el peso mínimo de cada palabra-código diferente de cero.
            </p>
            <p>
              DEMOSTRACIÓN: Sea d la distancia mínima de un código lineal C, i.e.,
              d= min&#x2774;d(u,v):u,v &#8712; C,u&#8800;v&#x2775;= min&#x2774;wt(u-v):u,v &#8712; C,u&#8800;v&#x2775;, 
              como u,v &#8712; C y u&#8800;v
              entonces w&#8788; uv &#8712; C y w&#8800;0, 
              de ahí que,min&#x2774;wt(u-v):u,v &#8712; C,u&#8800;v&#x2775;= min&#x2774;wt(w):w &#8712; C,
              w&#8800;0&#x2775;, por lo tanto, d=min&#x2774;wt(w):w &#8712; C,w&#8800;0&#x2775;. &#x25fc;
            </p>
            <h3>Polinomios de peso de Códigos Lineales</h3>
            <p>
            En matemáticas es usual reunir una cantidad de datos que se refieren a la misma entidad enun solo objeto. 
            Siguiendo esta filosofía se define el polinomio de pesos (o enumerador de pesos, o espectro) de C, como
            </p>
            <p>
            W(X)= &sum;<sub>i=0</sub><sup>n</sup> a<sub>i</sub>X<sub>i</sub>= &sum;<sub>c&#8712;C</sub> X<sup>w(C)</sup>
            </p>
            <p>
            El polinomio de pesos es fundamental para el estudio de la probabilidad de error en la descodificación. 
            Sin embargo, su cálculo mediante el cómputo directo de los pesos de todas las palabras de un código puede 
            ser muy laborioso; piénsese por ejemplo en el caso de n grande y k próximo a n. En estos casos n-k es 
            pequeño y es mucho más sencillo calcular el polinomio de pesos del código dual.
            </p>

            <h3> Matriz Generatriz</h3>
            <h4>Definición</h4>
            <p>
            Llamaremos matriz generatriz de un código lineal C a la matriz de una aplicación lineal inyectiva
            f: F<sub>q</sub><sup>k</sup>&#8594;C &#8834; F<sub>q</sub><sup>n</sup>, es decir, una matrizkˆncuyas filas son 
            la base de C.
            </p>
            <p>
            Sea ahora C un [n,k]-código sobre F con matriz generadora G. Sabemos que si las primeras k columnas de G 
            forman un conjunto de información (o sea, son linealmente independientes) entonces existe una matriz de 
            operaciones elementales exclusivamente por filas, digamos E, tal que EG= [I<sub>k</sub>|A]. 
            Es obvio que EG también es matriz generadora de C. Esta forma tiene nombre propio.
            </p>
            <h4>Definición</h4>
            <p>
            Sea C un [n,k]-código sobre F con matriz generadora G. Decimos que G está en forma típica (estándar) si 
            G= [I<sub>k</sub>|A] para alguna matriz adecuada A.
            </p>
            <h4>Teorema</h4>
            <p>
            Si G= [I<sub>k</sub>|A]<sub>kxn</sub> es la matriz generadora en forma típica de un [n,k]-código lineal 
            entonces 
            H= [-A<sup>t</sup>|I<sub>n-k</sub>] es una matriz de control de C.
            </p>

            <h3>Matriz de Control</h3>
            <p>
            Un subespacio vectorial F<sub>q</sub><sup>n</sup> además de poder escribirse como un sistema de generadores, 
            puede también expresarse mediante unas ecuaciones implícitas.

            </p>
            <h4>Definición</h4>
            <p>
              Diremos que una matriz H es una Matriz de control del código C si para todo vector x &#8712; 
              F<sub>q</sub><sup>n</sup> 
              se verifica que x &#8712; C si y sólo si Hx<sup>t</sup>=0. Si C está definido sobre F<sub>q</sub> y es de tipo 
              [n,k], entonces también H está definida sobre F<sub>q</sub>, es de tamaño (n-k)&#x2715;n y rango n-k.
            </p>
            <h4>Nota</h4>
            <p>
            Si G es una matriz generatriz de C dada en forma estándar, G=(I<sub>k</sub>,G<sup>^</sup>) siendo la primera 
            parte de G la matriz identidad I<sub>k</sub> y la segunda la matriz G<sup>^</sup>, entonces es fácil ver que la 
            matriz H= (-G<sup>t</sup><sup>^</sup>,I<sub>n-k</sub>) tiene tamaño (n-k)&#x2715;n, rango n-k y verifica 
            GH<sup>t</sup>=0, luego es una matriz de control para C. Diremos que una matriz de control está en forma estándar si es de la 
            forma (B,I<sub>n-k</sub>).
            </p>
            <h3>Detección y Corrección de Errores</h3>
            <p>
            La cantidad de errores que un código lineal puede corregir aplicando la técnica de decodificación por 
            síndrome depende únicamente del número de dígitos de redundancia, y es independiente del conjunto de palabras
             del código. Resulta muy sencillo constatarlo.
            </p>
            <p>
            TEOREMA.Un código lineal binario C [n,k] es capaz de corregir 2<sup>n-k</sup> vectores de error.
            </p>
            <p>
            DEMOSTRACIÓN: La matriz típica permite corregir los 2<sup>n-k</sup> patrones de error que aparecen en su primera columna, 
            incluido el vector cero, y estima incorrectamente todos los demás vectores de error. &#x25fc;
            </p>


          </div>

          <div id="menu1" class="container tab-pane fade">
            <h3>Definición</h3>
            <p>
            Sea r un entero positivo r&#8805;2. Llamaremos código de Hamming binario de redundancia r, H<sub>2</sub>(r), 
            al código cuya matriz de control tiene por columnas a los vectores no nulos de F<sub>2</sub><sup>r</sup>.
            </p>
            <p>
            El código de Hamming H<sub>2</sub>(r) tendrá pues una longitud de n= #F<sub>2</sub><sup>r</sup>-1= 
            2<sup>r</sup>-1 y una dimensión k= n-r= 2<sup>r</sup>-r-1. Su redundancia será r.
            </p>
            <h3>Ejemplo</h3>
            <p>
            H<sub>2</sub>(2) es un código con parámetros [3,1] y con matriz de control
            </p>
            <p>
            <img src="https://scontent.ftgu1-2.fna.fbcdn.net/v/t1.6435-9/170866593_5325986557475136_8186343361143095438_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=0debeb&_nc_ohc=nxiB0f-MaYcAX96204D&_nc_ht=scontent.ftgu1-2.fna&oh=06787069a6b5c2d85923db17eb42c5f6&oe=60965206" alt="M1" width={150} height={150} />

            </p>
            <p>
            Su matriz generatriz es G(1   1   1)
            </p>
            <p>
            H<sub>2</sub>(3) es un código con parámetros [7,4,3] y con matriz de control
            </p>
            <p>
            <img src="https://scontent.ftgu1-1.fna.fbcdn.net/v/t1.6435-9/171483861_5325986720808453_8636512392239495142_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=0debeb&_nc_ohc=ivK21bUCPIEAX_nRwd_&_nc_ht=scontent.ftgu1-1.fna&oh=177deaee3076efb065c5f160c4134377&oe=609583DB" alt="M1" width={300} height={200} />

            </p>
            <p>
            Si tomamos H en forma standard , es decir:
            </p>
            <p>
            <img src="https://scontent.ftgu1-1.fna.fbcdn.net/v/t1.6435-9/171969783_5325986634141795_574150240147779206_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=0debeb&_nc_ohc=M2ZmJHDshpcAX8Ze0bh&_nc_ht=scontent.ftgu1-1.fna&oh=c55001050f12a561d31a3ea905e49101&oe=6096CD41" alt="M1" width={300} height={200} />

            </p>
            <p>
            entonces una matriz generadora de H<sub>2</sub>(3) es:
            </p>
            <p>
            <img src="https://scontent.ftgu1-1.fna.fbcdn.net/v/t1.6435-9/170939108_5325986824141776_6798349495198744199_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=0debeb&_nc_ohc=uWeectn7NS4AX_Ww9C6&_nc_ht=scontent.ftgu1-1.fna&oh=2d25b0dd2139364b61a0173ed10fb6e4&oe=60966A18" alt="M1" width={300} height={200} />
            </p>
            <p>
            <a href="https://matricesh.vercel.app/">Matrices H en Latex</a>
              
            </p>
            <h3>Proposición</h3>
            <p>
            El código H<sub>2</sub>(r) para r&#8805;2 tiene las siguientes propiedades:
            </p>
            <p>
              <ol>
                <li> Es un [2<sup>r</sup>-1,2<sup>r</sup>-1-r]-código.</li>
                <li>Su distancia mínima es 3, así es un código 1-corrector.</li>
                <li>Es perfecto.</li>
              </ol>
            </p>
            


          </div>

          <div id="menu2" class="container tab-pane fade">
            <h3>Definición</h3>
            <p>
            Se define el código de Hamming q-ario de longitud n como el código lineal con matriz de control H. 
            Como sucede en el caso binario los códigos de Hamming q-arios están unívocamente definidos salvo equivalencia.

            </p>
            <h3>Proposición</h3>
            <p>
            Los códigos de Hamming q-arios son códigos 1-correctores perfectos.
            </p>
            <p>
            DEMOSTRACIÓN: De nuevo por la propia definición del código, es claro que es un (n,M,3)-código con 
            n=(q<sup>r</sup>-1&#8725;(q-1)) y M=q<sup>n-r</sup>.
            </p>
            <p>
            Además se tiene: q<sup>n-r</sup>(1+n(q-1))= q<sup>n-r</sup>(1+q<sup>r</sup>-1)= 
            q<sup>n</sup>= |GF(q)<sup>n</sup>|. luego alcanzan la cota de Hamming.
            </p>
            



          </div>

          <div id="menu3" class="container tab-pane fade">
            <h3>Codificando con un código lineal</h3>
            <p>
            Sea C un [n,k]-código sobre F, cuerpo de q elementos, y G matriz generadora de C. Dicho código tiene 
            q<sup>k</sup> palabras y 
            así puede emplearse para comunicar hasta q<sup>k</sup> mensajes distintos. Dichos mensajes son las 
            q<sup>k</sup>k-tuplas de F<sup>k</sup>y 
            codificar x<sub>1</sub>,x<sub>2</sub>,...,x<sub>k</sub> será simplemente:
            </p>
            <p>
            x<sub>1</sub>,x<sub>2</sub>,...,x<sub>k</sub>G= x<sub>1</sub>G<sub>1</sub> + x<sub>2</sub>G<sub>2</sub> +
            ... + x<sub>k</sub>G<sub>k</sub> donde G<sub>i</sub> es la i-ésima fila de G, por tanto el resultado está en 
            el código. En el caso de que se use una forma standard, es decir, G= [I<sub>k</sub>|A], se tiene:
            </p>
            <p>
            x<sub>1</sub>,x<sub>2</sub>,...,x<sub>k</sub>G= x<sub>1</sub>(10...0a<sub>11</sub>...a<sub>1</sub><sub>n-k</sub>)= 
            + x<sub>2</sub>(01...0a<sub>21</sub>...a<sub>2</sub><sub>n-k</sub>) + ... + x<sub>k</sub>(00...1a<sub>k</sub><sub>1</sub>
            ...a<sub>k</sub><sub>n-k</sub>)= (x<sub>1</sub>, x<sub>2</sub>,..., x<sub>k</sub>,
            a<sub>11</sub>x<sub>1</sub> + a<sub>21</sub>x<sub>2</sub> + ... + a<sub>k</sub><sub>1</sub>x<sub>k</sub>
            ,...,a<sub>1</sub><sub>n-k</sub>x<sub>1</sub> + ... + a<sub>k</sub><sub>n-k</sub>x<sub>k</sub>), es decir el 
            mensaje original aparece en los primeros k símbolos de la palabra código.
            </p>



          </div>
          <div id="menu4" class="container tab-pane fade">
            <h3>Decodificación por Síndrome</h3>
            <p>
            Debido a la estructura de los códigos lineales es posible realizar la decodificación por mínima distancia de 
            manera más simple.
            </p>
            <p>
            Sea C un [n,k,d]-código lineal. Transmitida una palabra código x&#8714;C a través del canal, sea y la palabra 
            recibida. Si y=x+e, el vector e= (e<sub>1</sub>,...,e<sub>n</sub>) representa los errores cometidos y 
            claramente w(e)= #&#x2774;errores cometidos&#x2775;= d(x,y).
            </p>
            <p>
            La cuestión es cómo decodificar y, es decir, cómo asociar a y una palabra código que tenga el mayor parecido 
            posible con x.
            </p>
            <h3>Definición</h3>
            <p>
            Sea C un código lineal con matriz de control H y sea y&#8714;F<sub>q</sub><sup>n</sup>. Se llama síndrome de 
            y al vector s(y)= Hy<sup>t</sup> &#8714; F<sub>q</sub><sup>n-k</sup>.
            </p>
            <p>
            Por definición de la matriz de control, x&#8714;C si y solo si s(x)= 0. Además por ser el síndrome una 
            aplicación lineal s(y)= s(x+e)= s(x) + s(e)= s(e), es decir, recibida una palabra y se conoce el síndrome del 
            error cometido.
            </p>
            <h3>Proposición</h3>
            <p>
            El síndrome del vector recibido y es una combinación lineal de las columnas de H correspondientes a las 
            posiciones en las que se ha cometido un error.
            </p>
            <h3>Ejemplo</h3>
            <p>
            Sea C un código que corrige al menos un error y durante la transmisión solo se ha cometido un único error,
            w(e)= 1, es decir e= (0,...,0,e<sub>i</sub>,0,...,0). Por ser d&#8805;3, cualesquiera dos columnas de H son 
            linealmente independientes.
            </p>
            <p>
            Así, el síndrome del vector recibido, y, será múltiplo de una y solo una columna de H. Esa posición es 
            precisamente la posición donde se ha cometido el error, s(y)= e<sub>i</sub>h<sub>i</sub>, de donde se puede 
            deducir el error cometido y el mensaje enviado x=y-e.
            </p>
            <p>
            Decodificar por mínima distancia quiere decir que recibido y, se decodificará por y-e &#8714; C si 
            d(y, y-e) &#x276e; d(y,y-e<sup>´</sup>) para cualquier otra palabra código y-e<sup>´</sup> &#8714; C. 
            Equivalentemente, el error e es el elemento de F<sub>q</sub><sup>n</sup> de menor peso entre los que 
            satisfacen s(e)= s(y).
            </p>
            <h3>Algoritmo: Decodificación por síndrome.</h3>
            <p>
            Recibida la palabra y &#8714; F<sub>q</sub><sup>n</sup>:
            </p>
            <p>
            <ol><li> Sea b= s(y)= Hy<sup>t</sup> su síndrome.</li>
            <li>Si b no tiene error patrón, no es posible decodificar de forma única.</li>
            <li>Si β<sub>b</sub> es el error patrón, se decodifica y por y-β<sub>b</sub>.</li>
            </ol>
            </p>
            <p>
            El algoritmo anterior corrige t errores. El cálculo de los errores patrón asociados a posibles síndromes, 
            se hace habitualmente de una vez para todas y se almacena en una tabla. De hecho, a partir de la 
            identificación s<sup>-1</sup>(b)= β<sub>b</sub> + C, esta tabla se puede ir construyendo tomando e, con 
            w(e) &#8804; t como error patrón de la clase s<sup>-1</sup>(s(e)).
            </p>
            <h3>Descodificando con un código de Hamming binario</h3>
            <p>
            Si se transmite c y se recibe w, como w= c + e<sub>i</sub> para algún i, al calcular el sindrome de w 
            tendremos H<sub>w</sub>= H<sub>e</sub><sub>i</sub> que es la i-ésima columna de H, lo que significará que el 
            error está en la i-ésima componente. Así bastará efectuar w<sub>e</sub><sub>i</sub>.
            </p>
            <h3>Descodificando con un código de Hamming q-ario</h3>
            <p>
            Si se recibe la palabra w, w= c + 0...0b0...0 donde b aparece en la i-ésima componente y c pertenece al código. 
            Entonces: H<sub>w</sub>=H<sup>i</sup>b
            </p>
            <p>
            es decir es la i-ésima columna de H multiplicada por b. Si dicho síndrome no es cero, hay error.La palabra 
            enviada se obtiene restando b a la i-ésima componente de w.
            </p>
            <h3>Ejemplo</h3>
            <p> 
            Suponer q= 3,r= 2, luego n= (q<sup>r</sup>-1)&#8725;(q-1)= 4. Considerar:
            </p>
            <p>
            <img src="https://scontent.ftgu1-1.fna.fbcdn.net/v/t1.6435-9/171803376_5327726340634491_3086896405941376249_n.jpg?_nc_cat=100&ccb=1-3&_nc_sid=0debeb&_nc_ohc=h5P-pNV96MAAX-gfe6K&_nc_ht=scontent.ftgu1-1.fna&oh=c188df079f0537dcbbd626c74b5e0f60&oe=60970D9C" alt="M2" width={200} height={200} />

            </p>
            <p>
            Si se recibe 1212, entonces:
            </p>
            <p>
            <img src="https://scontent.ftgu1-1.fna.fbcdn.net/v/t1.6435-9/171261072_5327726430634482_5053733804920066150_n.jpg?_nc_cat=110&ccb=1-3&_nc_sid=0debeb&_nc_ohc=hfB4rD1tgPYAX_OqKgH&_nc_ht=scontent.ftgu1-1.fna&oh=62cf985b22139b941e338158803da9d9&oe=60971288" alt="M2" width={400} height={200} />

            </p>
            <p>
            así la palabra enviada es 1012.
            </p>







          </div>

        </div>
        </div>
        <div className={styles.container}>
        

        </div>
      </main>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
