import { Component, OnInit } from '@angular/core';
 import { FormsModule } from '@angular/forms';
 import { ActivatedRoute } from '@angular/router';
 import { CommonModule } from '@angular/common';
 import { Iisproductos } from '../../models/is.Model';
 import { Productos } from '../../services/productos';
 
 @Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
 })
 export class Home implements OnInit {
  isAdmin = false;
  productos: Iisproductos[] = [];
 
  // Objeto temporal para el formulario (usado para crear y editar)
  productObj: any = {
  photo: null,
  name: '',
  description: '',
  price: ''
  };
 
  // Guardará el índice del producto que estamos editando. Si es 'null', estamos creando uno nuevo.
  editingProductIndex: number | null = null;
 
  constructor(private route: ActivatedRoute, private ProductosService: Productos) { 
  const userType = this.route.snapshot.paramMap.get('userType');
  if (userType === 'admin') {
  this.isAdmin = true;
  }
  }
 
  ngOnInit(): void {
  this.productos = this.ProductosService.obtenerProductos();
  }
 
  onFileSelected(event: any): void {
  if (event.target.files && event.target.files[0]) {
  this.productObj.photo = event.target.files[0]; // Guarda el *archivo* para procesar
  }
  }
 
  /**
  * Ahora decide si crear un nuevo producto o actualizar uno existente.
  */
  onsaveRecord() {
  if (!this.productObj.name || !this.productObj.price) {
  alert("Por favor, completa al menos el nombre y el precio.");
  return;
  }
 
  // Lógica de guardado (se ejecutará después de procesar la imagen si es necesario)
  const finalSaveLogic = (photoBase64: string) => {
 
  // Aseguramos que 'sport' sea un array, incluso si no estaba definido
  const sportArray = this.productObj.sport ? this.productObj.sport : [];
 
  const productData: Iisproductos = {
  name: this.productObj.name,
  description: this.productObj.description,
  price: parseFloat(this.productObj.price),
  photo: photoBase64,
  sport: sportArray 
  };
 
  if (this.editingProductIndex !== null) {
  // --- Estamos EDITANDO ---
  this.ProductosService.actualizarProducto(this.editingProductIndex, productData);
  } else {
  // --- Estamos CREANDO ---
  this.ProductosService.agregarProducto(productData);
  }
 
  // Reseteamos el formulario y el estado de edición
  this.cancelEdit();
  };
 
  // --- Lógica para manejar la imagen ---
  if (this.productObj.photo instanceof File) {
  // Si 'photo' es un Archivo (File), significa que se seleccionó uno nuevo.
  // Lo leemos como Base64.
  const reader = new FileReader();
  reader.onload = () => {
  finalSaveLogic(reader.result as string);
  };
  reader.readAsDataURL(this.productObj.photo);
  } else if (this.editingProductIndex !== null && typeof this.productObj.photo === 'string') {
  // Si estamos editando y 'photo' es un string, significa que el usuario no cambió la imagen.
  // Usamos la cadena Base64 que ya teníamos.
  finalSaveLogic(this.productObj.photo);
  } else if (this.editingProductIndex === null) {
  // Si estamos creando Y no se seleccionó un archivo (no es File)
  alert("Por favor, selecciona una imagen para el producto.");
  }
  }
 
  onDeleteRecord(index: number) {
  if (confirm("¿Estás seguro de que quieres eliminar este producto?")) {
  this.ProductosService.eliminarProducto(index);
  // Si estábamos editando este producto, cancelamos la edición
  if(this.editingProductIndex === index) {
  this.cancelEdit();
  }
  }
  }
 
  /**
  * Carga un producto en el formulario para editarlo.
  */
  onEdit(index: number) {
  const productToEdit = this.productos[index];
  // Creamos una *copia* del objeto para no modificar el original con ngModel
  this.productObj = { ...productToEdit }; 
  this.editingProductIndex = index; // Ponemos el componente en "modo edición"
 
  // Llevamos la vista al formulario
  window.scrollTo(0, 0);
  }
 
  /**
  * Limpia el formulario y sale del "modo edición".
  */
  cancelEdit() {
  this.editingProductIndex = null;
  this.productObj = { photo: null, name: '', description: '', price: '' };
  }
 }