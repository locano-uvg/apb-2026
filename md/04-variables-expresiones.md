# Variables y Expresiones

Semestre 01, 2026



### Agenda

1. Introducción
2. Objetivos
3. Datos y tipos de datos
4. Variables y asignación
5. Reglas para nombrar variables
6. Operadores y expresiones
7. Ingreso de datos y comentarios
8. Ejercicios



### Introducción

Las variables y expresiones son bloques fundamentales de cualquier programa.
Permiten almacenar información y transformarla para resolver problemas.



### Objetivos

- Comprender qué es un dato y qué es una variable.
- Identificar los tipos de datos más usados en Python.
- Aplicar reglas correctas de nombrado de variables.
- Construir expresiones usando operadores aritméticos, relacionales y lógicos.



### Datos

Un dato es una unidad básica de información que un programa puede manipular.


Ejemplos:

- `42` (entero)
- `3.14` (flotante)
- `"Hola Mundo"` (cadena)
- `True` (booleano)


> Cifra, letra o palabra que la computadora usa como entrada para trabajar en un programa.


### Tipos de datos

Python asigna el tipo automáticamente según el valor (tipado dinámico).


#### Principales

- `int`: números enteros, por ejemplo `42`.
- `float`: números con decimales, por ejemplo `3.14`.
- `str`: texto, por ejemplo `"Hola"`.
- `bool`: valores lógicos, `True` o `False`.


#### Verificar y convertir tipos

```python
edad = 25
print(type(edad))

numero = 3.14
entero = int(numero)
print(entero)  # 3
```



### Variables

Una variable es un nombre que hace referencia a un valor guardado en memoria.
Es una "cajita" donde almacenamos información para usarla más adelante.

```python
mensaje_inicial = "Hola Mundo!"
```

Aquí `mensaje_inicial` guarda el texto `"Hola Mundo!"`.



### Asignación

La asignación crea una variable o actualiza su valor.

Sintaxis: `variable = valor`

```python
edad = 25
edad = 26
```


#### Reglas para nombrar variables

1. Deben iniciar con una letra o guion bajo (`_`).
2. Pueden contener letras, números y guiones bajos.
3. Son sensibles a mayúsculas y minúsculas (`contador` y `Contador` son distintos).
4. No pueden usar palabras reservadas de Python.
5. No deben llevar espacios ni símbolos especiales.


Ejemplo inválido:

```python
50marimbas = "ensamble"
```

Ejemplo válido:

```python
nombre_completo = "Ana Perez"
```



### Ejercicio : variables válidas


Indica si cada nombre es válido o inválido en Python:

| Variable         | Valido o invalido |
| ---------------- | ----------------- |
| `_nombre`        |                   |
| `Nombre`         |                   |
| `La edad`        |                   |
| `Tunombre`       |                   |
| `Tu,direccion`   |                   |
| `5apellido`      |                   |
| `@perro`         |                   |
| `Peso_persona`   |                   |
| `genero_persona` |                   |



### Operadores


#### Aritméticos

| Operador | Descripción                 | Ejemplo  |
| -------- | --------------------------- | -------- |
| `+`      | Suma o concatenación        | `x + y`  |
| `-`      | Resta                       | `x - y`  |
| `*`      | Multiplicación o repetición | `x * y`  |
| `/`      | División                    | `x / y`  |
| `//`     | División entera             | `x // y` |
| `%`      | Módulo (residuo)            | `x % y`  |
| `**`     | Potencia                    | `x ** y` |


#### Relacionales

| Operador | Descripción       | Ejemplo  |
| -------- | ----------------- | -------- |
| `==`     | Igual a           | `x == y` |
| `!=`     | Diferente de      | `x != y` |
| `>`      | Mayor que         | `x > y`  |
| `<`      | Menor que         | `x < y`  |
| `>=`     | Mayor o igual que | `x >= y` |
| `<=`     | Menor o igual que | `x <= y` |


#### Lógicos

| Operador | Descripción                       | Ejemplo               |
| -------- | --------------------------------- | --------------------- |
| `and`    | Verdadero si ambos son `True`     | `(x > 0) and (y > 0)` |
| `or`     | Verdadero si al menos uno es true | `(x > 0) or (y > 0)`  |
| `not`    | Invierte el valor lógico          | `not (x > 0)`         |



### Expresiones

Una expresión combina datos, variables y operadores para producir un resultado.

```python
x = 10
y = (2 * x) + (x / 5)
print(y)
```

Resultado: `24.0`


#### Orden de operaciones

1. Paréntesis `()`
2. Exponentes `**`
3. Multiplicación y división `* / // %`
4. Suma y resta `+ -`
5. Evaluación de izquierda a derecha
6. Asignación `=`

```python
resultado = (5 + 3) * 2 ** 2 / 4
print(resultado)  # 8.0
```


#### Operaciones con cadenas

Concatenación:

```python
nombre = "Ana"
saludo = "Hola, " + nombre
print(saludo)
```

Repetición:

```python
print("Hola " * 3)
```



### Ingreso de datos

Usamos `input()` para leer datos del usuario:

```python
nombre = input("Cual es tu nombre? ")
print("Hola,", nombre)
```



### Comentarios

- Ayudan a documentar el codigo.
- Empiezan con `#`.
- Python ignora los comentarios al ejecutar.

```python
# Este programa calcula el area de un triangulo
base = 5
altura = 10
area = (base * altura) / 2
print(area)
```



### Ejercicio final (pseudocódigo)

```text
Algoritmo Registro

Variables:
	Entero dpi
	Cadena nombre

Inicio
	Escribir("Bienvenido, ingrese su nombre")
	Leer(nombre)
	Escribir("Ingrese su DPI")
	Leer(dpi)
	Escribir("Hola " + nombre + ", su DPI es: " + dpi)
Fin
```
