import { CharCodes } from 'src/core/enums';
import PDFObject from 'src/core/objects/PDFObject';

class PDFNull extends PDFObject {
  clone(): PDFNull {
    return this;
  }

  toString(): string {
    return 'null';
  }

  sizeInBytes(): number {
    return 4;
  }

  copyBytesInto(buffer: Uint8Array, offset: number) {
    buffer[offset++] = CharCodes.n;
    buffer[offset++] = CharCodes.u;
    buffer[offset++] = CharCodes.l;
    buffer[offset++] = CharCodes.l;
  }
}

export default new PDFNull();
