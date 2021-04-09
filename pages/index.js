import Head from 'next/head'
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
            <a class="nav-link active" data-toggle="tab" href="#home">BREVE INTRODUCCION DE LOS CÓDIGOS LINEALES</a>
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
            <h3>DEFINICIÓN</h3>
            <p> 
            Debido al coste de almacenar todas las palabras de un código cualquiera C, los códigos de bloque son 
            computacionalmente costosos y exigen una gran cantidad de memoria (habría que almacenar todas las palabras 
            del código). Esto llevó a buscar códigos con una estructura algebraica añadida. En este caso todas las 
            palabras de los códigos lineales son combinación lineal de otras palabras de C.

            </p>
          </div>

          <div id="menu1" class="container tab-pane fade">
            <h3>DEFINICIÓN</h3>
            <p>CSS

            </p>
          </div>

          <div id="menu2" class="container tab-pane fade">
            <h3>DEFINICIÓN</h3>
            <p>JavaScript

            </p>
          </div>

          <div id="menu3" class="container tab-pane fade">
            
            <p>JavaScript

            </p>
          </div>
          <div id="menu4" class="container tab-pane fade">
            
            <p>JavaScript

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
