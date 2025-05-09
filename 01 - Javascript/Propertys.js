Object.defineProperty();

//exemplo 
Object.defineProperty(this, 'nome', {
    writable: false,
    enumerable: true,
    configurable: true,
    value: 'Jhoni'
});

/** 
@param {boolean} configurable quando isto é definido como false,

 - O tipo desta propriedade não pode ser alterado entre propriedade de dados e propriedade de acessor.
 - A propriedade não pode ser apagada.
 - Outros atributos do seu descritor não podem ser alterados (entretanto, se for um descritor de dados com writable: true, o valuepode ser alterado, e writablepode ser alterado para false).
 - O padrão é false.

*/

/**
  @param {boolean} writable quando isto é definido como true ,

  - O valor associado à propriedade pode ser alterado com um operador de atribuição.
  - O padrão é false.
  
*/

/**
  @param {boolean} enumerable quando isto é definido como true,

  - A propriedade pode ser exibida durante a enumeração das propriedades no objeto correspondente.
  - O padrão é false.
 */

  /**
    @param {} value,

    - O valor associado à propriedade. Pode ser qualquer valor JavaScript válido (número, objeto, função, etc.).
    - O padrão é undefined.
   */