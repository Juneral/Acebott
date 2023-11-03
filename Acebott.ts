namespace Acebott{

    export enum LED{
        //% block="ON"
        ON = 1,
        //% block="OFF"
        OFF = 0
    }

    //% blockId=setled block="LED at %pin| set %status"   group="LED"
    //% weight=70
    //% subcategory="Display"
    export function setled(pin: DigitalPin, status: LED): void {
        pins.digitalWritePin(pin, status)
    }
}
