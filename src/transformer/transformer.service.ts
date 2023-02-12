import { Injectable } from '@nestjs/common';

@Injectable()
export class TransformerService {
  
  errorMessage = {
    "statusCode": 400,
    "error": "Bad Request",
    "message": "input must be a valid JSON object"
  };

  transformInput(input) {
    try {
      if (typeof input === 'object') {
        // matches the word 'dog' only if theres no preceding or trailing words or digits
        const regex = /(?<![\w\d])dog(?![\w\d])/gi;
        return JSON.parse(JSON.stringify(input).replace(regex, 'cat'));
      }
      return this.errorMessage;
    }
    catch ({message}) {
      return {
        "statusCode": 400,
        "error": "Bad Request",
        message
      }
    }
  }
}
