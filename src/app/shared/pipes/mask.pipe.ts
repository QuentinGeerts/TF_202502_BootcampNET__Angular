import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask',
  standalone: false
})
export class MaskPipe implements PipeTransform {

  transform (value: string, visibleChars: number = 4, maskChar: string = "*", maskDirection: "start" | "end" = "end"): string | null {

    if (!value || visibleChars < 0 || visibleChars > value.length) return null;

    const maskLength = value.length - visibleChars;
    const mask = maskChar.repeat(maskLength);

    if (maskDirection == "start") {
      return mask + value.slice(-visibleChars);
    }
    else {
      return value.slice(0, visibleChars) + mask;
    }

  }

}
