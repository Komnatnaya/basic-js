const { NotImplementedError } = require('../lib');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(x = true) {
    this.x = x;
  }
  encrypt(message, key) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = '';

    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    let arrMessage = message.toUpperCase().split('');
    let arrKey = key.toUpperCase().split('');
    let arrNumber = [];
    for(let i = 0, j = -1; i < arrMessage.length; i++) {
      if(letters.includes(arrMessage[i])) {
        j++;
        if(j >= key.length) { 
          j = j % key.length; 
        }
        arrNumber.push(letters[(letters.indexOf(arrMessage[i]) + letters.indexOf(arrKey[j])) % 26]);
      } else {
        arrNumber.push(arrMessage[i]);
      }
    }

    if(this.x) {
      result = arrNumber.join('');
    } else {
      result = arrNumber.reverse().join('');;
    }

    return result
  }
  decrypt(encryptedMessage, key) {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = '';

    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    let arrEncryptedMessage = encryptedMessage.toUpperCase().split('');
    let arrKey = key.toUpperCase().split('');
    let arrNumber = [];
    for(let i = 0, j = -1; i < arrEncryptedMessage.length; i++) {
      if(letters.includes(arrEncryptedMessage[i])) {
        j++;
        if(j >= key.length) { 
          j = j % key.length; 
        }
        let numberLetter = letters.indexOf(arrEncryptedMessage[i]) - letters.indexOf(arrKey[j]);
        if (numberLetter < 0) {
          arrNumber.push(letters[numberLetter + 26]);
        } else {
          arrNumber.push(letters[numberLetter]);
        }
        
      } else {
        arrNumber.push(arrEncryptedMessage[i]);
      }
    }

    if(this.x) {
      result = arrNumber.join('');
    } else {
      result = arrNumber.reverse().join('');;
    }

    return result
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
