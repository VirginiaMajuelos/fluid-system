# Estructura base storie

import { Button } from './Button';

export default {
title: 'Atoms/Button',  
 component: Button,  
 tags: ["autodocs"],
decorators: [ ... ],  
 parameters: { ... }, // Parámetros adicionales
argTypes: {
backgroundColor: { control: 'color' }, // Control para cambiar el color en la interfaz de Storybook
},
args: { onClick: () => console.log('Button clicked') }, // Args por defecto para la historia
};

## Explicación

- title: Definir el título para la organización en el árbol de Storybook
- component: Especificar el componente
- decorators: Permite modificar el entorno de la historia o aplicar estilos adicionales sin cambiar el código del componente. Son útiles para aplicar wrappers globales o para modificar cómo se presenta un componente en Storybook.
- parameters: Parametros para presentar la historia, por ejemplo layout centrado
- args: Se pueden usar para cambiar dinámicamente propiedades, espacios, estilos, entradas, etc. Permite que Storybook y sus complementos editen componentes en vivo. se usa para establecer los valores predeterminados de los props (argumentos) que se le pasan al componente en una historia específica. Esto significa que puedes predefinir cómo se verá o se comportará el componente cuando se cargue la historia por primera vez.

- argTypes: Configura cómo se muestran y controlan los argumentos (props), es decir, se utiliza para configurar los tipos de argumento (props) y cómo Storybook debe manejar y representar esos argumentos.

\*\* Diferencias args y argTypes:

Args:

- Define los valores iniciales (props) que se pasan al componente en la historia.
- Puede ser modificado en tiempo real usando los controles de la interfaz de Storybook.
- Son específicos para cada historia.

ArgTypes:

- Define cómo se muestran y controlan esos props (argumentos) en la interfaz de Storybook.
- Permite especificar controles, tipos de datos, acciones, o hacer que ciertos props no se muestren como control.
- Define cómo interactuar con los argumentos (por ejemplo, como control de color o selectores).
