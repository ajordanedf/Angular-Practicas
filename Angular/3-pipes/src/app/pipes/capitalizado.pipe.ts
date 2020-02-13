//ng-pipe
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'capitalizado'})
export class CapitalizadoPipe implements PipeTransform {
    transform(value: string, arg ): string {
        
        value= value.toLowerCase();
        //Dividimos el nombre por los espacios
        let nombres= value.split(" ");
        for(let i in nombres){
            nombres[i]= nombres[i][0].toUpperCase() + nombres[i].substr(1);
        }
        return nombres.join(" ");
    }
}