import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
// 'implements OnInit' es como firmar un contrato. Le dice a Angular:
// "Prometo que esta clase tendrá una función especial llamada ngOnInit".
export class Home implements OnInit {
   // Propiedades de la clase Home.
  isAdmin = false;
  
  productObj: any = {
    photo: null, // Ahora guardaremos el archivo temporalmente aquí
    name: '',
    description: '',
    price: ''
  };
  productList: any = [];

  // === ¿QUÉ ES EL CONSTRUCTOR? ===
  // El constructor es una función especial que se ejecuta AUTOMÁTICAMENTE
  // en el preciso instante en que el componente es CREADO (antes de que se vea en pantalla).
  // Es el lugar perfecto para preparar las herramientas que necesitaremos.
  constructor(private route: ActivatedRoute) {
    // Aquí estamos pidiendo una herramienta llamada 'ActivatedRoute'.
    // Angular la "inyecta" (nos la da) para que podamos usarla.
    // La usamos para leer la URL y ver si el usuario es 'admin'.
    const userType = this.route.snapshot.paramMap.get('userType');
    if (userType === 'admin') {
      this.isAdmin = true;
    }
  }

  // === ¿QUÉ ES ngOnInit? ===
  // Esta es otra función especial (un "ciclo de vida").
  // Se ejecuta AUTOMÁTICAMENTE después del constructor, una vez que
  // el componente ya está listo para mostrarse.
  // Es el lugar ideal para cargar datos iniciales, como llamar a una API o, en nuestro caso, leer el localStorage.
  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    const savedProducts = localStorage.getItem('product');
    if (savedProducts) {
      this.productList = JSON.parse(savedProducts);
    }
  }

  /**
   * Esta función ahora solo guarda el archivo seleccionado en el objeto temporal.
   * Ya no procesa la imagen.
   */
  onFileSelected(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.productObj.photo = event.target.files[0];
    }
  }

  /**
   * Esta función ahora se encarga de leer el archivo, convertirlo y LUEGO guardar todo.
   */
  onsaveRecord() {
    // Verificamos si se ha seleccionado un archivo.
    if (!this.productObj.photo) {
      alert("Por favor, selecciona una imagen para el producto.");
      return; // Detenemos la función si no hay imagen.
    }

    const reader = new FileReader();
    
    // Le decimos al lector qué hacer cuando termine de leer el archivo.
    reader.onload = () => {
      // 1. Creamos un nuevo objeto para el producto.
      const newProduct = {
        name: this.productObj.name,
        description: this.productObj.description,
        price: this.productObj.price,
        // 2. Asignamos la imagen ya convertida en Base64.
        photo: reader.result as string
      };

      // 3. Añadimos el nuevo producto a nuestra lista.
      this.productList.push(newProduct);

      // 4. Guardamos la lista actualizada en localStorage.
      localStorage.setItem('product', JSON.stringify(this.productList));
      
      // 5. Limpiamos el formulario para el siguiente producto.
      this.productObj = { photo: null, name: '', description: '', price: '' };
      // También necesitamos limpiar el valor del input de archivo en el HTML
      // (aunque esto es más complejo, este reseteo es suficiente para la lógica).
    };

    // Iniciamos la lectura del archivo que guardamos temporalmente.
    reader.readAsDataURL(this.productObj.photo);
  } 

  onDeleteRecord(index: number) {
    if (confirm("¿Estás seguro de que quieres eliminar este producto?")) {
      this.productList.splice(index, 1);
      localStorage.setItem('product', JSON.stringify(this.productList));
    }
  }
}