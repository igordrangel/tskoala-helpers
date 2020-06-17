import b64toBlob from 'b64-to-blob';

export class ObjectHelper {
  
  public static push(dados: object = {}, object: object): object {
    $.each(object, (key, value) => {
      dados[key] = value;
    });
    
    return dados;
  }
  
  public static convertToString(arr: object[], paramsName: string[], delimiter: string = ',', delimiterParam: string = '-'): string {
    let stringResult = '';
    arr.forEach(obj => {
      let name = '';
      paramsName.forEach(paramName => {
        if (!name && obj[paramName]) {
          name = obj[paramName];
        } else if (name && obj[paramName]) {
          name += ` ${delimiterParam} ` + obj[paramName];
        }
      });
      
      if (!stringResult) {
        stringResult = name;
      } else {
        stringResult += `${delimiter}` + name;
      }
    });
    
    return `${stringResult}`;
  }
  
  public static downloadBase64File(file: {
    filename: string;
    type: string;
    base64File: string;
  }) {
    const link = document.createElement('a');
    link.setAttribute('href', URL.createObjectURL(this.getBlobFile(file.base64File, file.type)));
    link.setAttribute('download', file.filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  public static viewPdf(file: {
    filename: string;
    type: string;
    base64File: string;
  }) {
    const link = document.createElement('a');
    link.setAttribute('href', URL.createObjectURL(this.getBlobFile(file.base64File, 'application/pdf')));
    link.setAttribute('target', '_blank');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  private static getBlobFile(base64File: string, type: string): Blob {
    return b64toBlob(base64File, type);
  }
}
